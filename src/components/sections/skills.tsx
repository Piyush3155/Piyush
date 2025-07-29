import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, GitMerge, Figma, Database, BrainCircuit, Users, BookOpen } from 'lucide-react';
import React from 'react';

const skillsData = {
  languages: {
    title: 'Languages',
    icon: <Code className="h-6 w-6" />,
    items: ['Python', 'JavaScript', 'C', 'HTML/CSS'],
  },
  frameworks: {
    title: 'Frameworks & Technologies',
    icon: <GitMerge className="h-6 w-6" />,
    items: ['React.js', 'TailwindCSS', 'Git/GitHub', 'Next.js'],
  },
  design: {
    title: 'Design',
    icon: <Figma className="h-6 w-6" />,
    items: ['Figma'],
  },
  databases: {
    title: 'Databases',
    icon: <Database className="h-6 w-6" />,
    items: ['MySQL'],
  },
  coursework: {
    title: 'Coursework',
    icon: <BookOpen className="h-6 w-6" />,
    items: ['Data Structure and algorithms', 'OOPS concept'],
  },
  softSkills: {
    title: 'Soft Skills',
    icon: <Users className="h-6 w-6" />,
    items: ['Team Collaboration', 'Analytical Thinking', 'Problem-Solving'],
  },
};

export function SkillsSection() {
  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">Technical Universe</h2>
          <p className="mt-4 text-lg text-muted-foreground">A constellation of my skills and technologies.</p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {Object.values(skillsData).map((category) => (
            <Card key={category.title} className="bg-card/50 backdrop-blur-sm border-border/50 transition-all hover:border-accent hover:shadow-lg hover:shadow-accent/10">
              <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-4">
                <span className="text-accent">{category.icon}</span>
                <CardTitle className="font-headline text-xl">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-sm bg-primary/50 text-primary-foreground hover:bg-primary/80">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
