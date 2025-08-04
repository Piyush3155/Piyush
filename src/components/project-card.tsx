'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink } from 'lucide-react';

interface ProjectImage {
    src: string;
    alt: string;
    hint: string;
}

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  live: string | null;
  github: string | null;
  images: ProjectImage[];
}

export function ProjectCard({
  title,
  description,
  tags,
  live,
  github,
  images,
}: ProjectCardProps) {
    const [api, setApi] = React.useState<CarouselApi>();
    const [current, setCurrent] = React.useState(0);
    const cardRef = React.useRef<HTMLDivElement>(null);
  
    React.useEffect(() => {
      if (!api) {
        return;
      }
  
      setCurrent(api.selectedScrollSnap() + 1);
  
      api.on('select', () => {
        setCurrent(api.selectedScrollSnap() + 1);
      });
    }, [api]);
  
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const { left, top, width, height } = cardRef.current.getBoundingClientRect();
        const x = e.clientX - left;
        const y = e.clientY - top;
        const rotateX = (y / height - 0.5) * -20;
        const rotateY = (x / width - 0.5) * 20;
        cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
    };
    
    const handleMouseLeave = () => {
        if (!cardRef.current) return;
        cardRef.current.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    };

  return (
    <div 
        ref={cardRef}
        className="flex flex-col h-full preserve-3d transition-transform duration-300 ease-out"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
    >
        <Card className="flex flex-col flex-grow bg-card/50 backdrop-blur-sm border-border/50">
            <CardHeader>
                <CardTitle className="font-headline text-xl">{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col">
                <div className="relative w-full max-w-lg mx-auto mb-4 mt-auto">
                    <Carousel setApi={setApi} className="w-full" opts={{ loop: true }}>
                        <CarouselContent className="-ml-4">
                        {images.map((image, index) => (
                            <CarouselItem key={index} className="pl-4">
                                <div className="p-1">
                                    <Card className="overflow-hidden shadow-lg border-accent/20 bg-transparent">
                                        <CardContent className="p-0">
                                            <Image
                                            src={image.src}
                                            alt={image.alt}
                                            data-ai-hint={image.hint}
                                            width={600}
                                            height={400}
                                            className="aspect-[3/2] w-full object-contain cover transition-transform duration-300 ease-in-out hover:scale-105 p-2 border border-accent/20 rounded-lg"
                                            />
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                        </CarouselContent>
                        <CarouselPrevious className="left-[-1rem] sm:left-0 text-accent" />
                        <CarouselNext className="right-[-1rem] sm:right-0 text-accent" />
                    </Carousel>
                    <div className="text-center text-sm text-muted-foreground mt-2">
                        Image {current} of {images.length}
                    </div>
                </div>

                <div className="flex flex-wrap gap-2 mt-4">
                    {tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-primary/50 text-primary-foreground">
                        {tag}
                    </Badge>
                    ))}
                </div>
            </CardContent>
            <CardFooter className="flex justify-end gap-2">
            {github && (
                <Link href={github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
                </Link>
            )}
            {live && (
                <Link href={live} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
                <ExternalLink className="h-6 w-6" />
                <span className="sr-only">Live Demo</span>
                </Link>
            )}
            </CardFooter>
        </Card>
    </div>
  );
}
