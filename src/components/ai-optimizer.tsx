'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { optimizePortfolioLayout, type OptimizePortfolioLayoutOutput } from '@/app/actions';
import { Rocket, Sparkles } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useToast } from '@/hooks/use-toast';

export function AiOptimizer() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<OptimizePortfolioLayoutOutput | null>(null);
  const { toast } = useToast();

  const handleOptimize = async () => {
    setIsOpen(true);
    setIsLoading(true);
    setResult(null);

    try {
      const response = await optimizePortfolioLayout();
      setResult(response);
    } catch (e) {
      console.error(e);
      toast({
        variant: "destructive",
        title: "Optimization Failed",
        description: "There was an error while optimizing the layout. Please try again later.",
      });
      setIsOpen(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Button onClick={handleOptimize} className="bg-accent hover:bg-accent/90 text-accent-foreground group shadow-lg shadow-accent/20 transition-all hover:shadow-accent/40 hover:scale-105">
        <Sparkles className="mr-2 h-4 w-4 transition-transform group-hover:scale-125 group-hover:rotate-12" />
        Optimize with AI
      </Button>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[625px] bg-background/90 backdrop-blur-sm">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 font-headline text-2xl">
              <Rocket className="h-6 w-6 text-accent" />
              AI Portfolio Optimization
            </DialogTitle>
            <DialogDescription>
              Our AI has analyzed your profile to suggest an optimal layout and content flow.
            </DialogDescription>
          </DialogHeader>
          <ScrollArea className="max-h-[60vh] pr-4 -mr-2">
            {isLoading && (
              <div className="flex flex-col items-center justify-center p-8 space-y-4">
                <Rocket className="h-12 w-12 animate-pulse text-accent" />
                <p className="mt-4 text-muted-foreground">Launching analysis sequence...</p>
              </div>
            )}
            {result && (
              <div className="grid gap-6 py-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2 font-headline">Suggested Section Order</h3>
                  <ol className="list-decimal list-inside space-y-2 rounded-md border p-4 bg-card/50">
                    {result.sectionsOrder.map((section, index) => (
                      <li key={index} className="font-medium text-primary-foreground">{section}</li>
                    ))}
                  </ol>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 font-headline">Content Suggestions</h3>
                  <div className="space-y-4">
                    {Object.entries(result.contentSuggestions).map(([section, suggestion]) => (
                      <div key={section} className="rounded-md border p-4 bg-card/50">
                        <h4 className="font-semibold text-accent mb-1">{section}</h4>
                        <p className="text-sm text-muted-foreground">{suggestion}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </ScrollArea>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsOpen(false)}>
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
