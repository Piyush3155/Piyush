import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink } from 'lucide-react';
import Link from 'next/link';

const projects = [
  {
    title: 'Restaurant Management System',
    description: 'A full-stack web app to streamline restaurant operations, featuring QR-based ordering, live order tracking, role-based access, and sales analytics.',
    tags: ['Next.js', 'TypeScript', 'Prisma', 'MySQL', 'Tailwind CSS', 'Recharts'],
    live: 'https://biteandco.vercel.app',
    github: 'https://github.com/piyush3155/rms',
  },
  {
    title: 'TAXI BOOKING APPLICATION DESIGN',
    description: 'Designed a visually appealing and user-friendly taxi booking app prototype with 10+ interactive screens to enhance user engagement.',
    tags: ['Figma', 'UI/UX Design', 'Prototyping'],
    live: null,
    github: null,
  },
  {
    title: 'E-COMMERCE WEBSITE',
    description: 'A foundational e-commerce site with core features like user registration, login, and product listings, built with fundamental web technologies.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    live: null,
    github: null,
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">Project Showcase</h2>
          <p className="mt-4 text-lg text-muted-foreground">A glimpse into the applications I've built and designed.</p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.title} className="flex flex-col bg-card/50 backdrop-blur-sm border-border/50 transition-all hover:border-accent hover:shadow-lg hover:shadow-accent/10 hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="font-headline text-xl">{project.title}</CardTitle>
                <CardDescription className="mt-2">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-primary/50 text-primary-foreground">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-end gap-2">
                {project.github && (
                  <Link href={project.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
                    <Github className="h-6 w-6" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                )}
                {project.live && (
                  <Link href={project.live} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
                    <ExternalLink className="h-6 w-6" />
                    <span className="sr-only">Live Demo</span>
                  </Link>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
