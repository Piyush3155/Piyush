import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, GraduationCap } from 'lucide-react';

const experience = [
  {
    icon: <Briefcase className="h-5 w-5" />,
    role: 'Web Developer',
    company: 'Playtech',
    period: 'August 2025 - Present',
    description: [
      'Continuing to build and maintain full-stack web applications.',
      'Leading development on new features and mentoring junior developers.',
      'Focusing on performance optimization and scalability.'
    ],
  },
  {
    icon: <Briefcase className="h-5 w-5" />,
    role: 'Web Developer Intern',
    company: 'Playtech',
    period: 'Feb 2025 - July 2025',
    description: [
      'Contributed to real-world projects like Electronic Medical Records, Restaurant Management System, and Auto Sales Dashboard.',
      'Built full-stack web apps with features like role-based access, analytics dashboards, and real-time data handling.',
      'Tech used: Next.js, TypeScript, MySQL, Prisma, Tailwind CSS, PHP.',
    ],
  },
];

const education = [
  {
    icon: <GraduationCap className="h-5 w-5" />,
    degree: 'Bachelor of Computer Applications',
    institution: 'KLS Gogte of Commerce',
    period: 'Expected - 2025',
    description: ['CGPA: 7.67'],
  },
];

const TimelineItem = ({ icon, title, subtitle, period, description }: { icon: React.ReactNode, title: string, subtitle: string, period: string, description: string[] }) => (
    <div className="flex">
        <div className="flex flex-col items-center mr-4">
            <div>
                <div className="flex items-center justify-center w-10 h-10 border rounded-full border-accent/50 bg-accent/20 text-accent">
                    {icon}
                </div>
            </div>
            <div className="w-px h-full bg-border/50"></div>
        </div>
        <Card className="bg-transparent border-0 shadow-none -mt-1 w-full pb-8">
            <CardHeader className="p-0">
                <div className="flex justify-between items-start">
                    <div>
                        <CardTitle className="font-semibold text-lg">{title}</CardTitle>
                        <CardDescription className="mt-1">{subtitle}</CardDescription>
                    </div>
                    <span className="text-sm text-muted-foreground whitespace-nowrap">{period}</span>
                </div>
            </CardHeader>
            <CardContent className="p-0 mt-4">
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    {description.map((item, index) => <li key={index}>{item}</li>)}
                </ul>
            </CardContent>
        </Card>
    </div>
);

export function ExperienceSection() {
  return (
    <section id="experience" className="py-16 md:py-24">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">My Journey</h2>
          <p className="mt-4 text-lg text-muted-foreground">Charting my course through professional and academic galaxies.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h3 className="font-headline text-2xl font-bold mb-8 flex items-center gap-3">
                <Briefcase className="h-6 w-6 text-accent"/> Work Experience
            </h3>
            <div className="relative">
                {experience.map((exp, index) => (
                    <TimelineItem 
                        key={index} 
                        icon={exp.icon}
                        title={exp.role} 
                        subtitle={exp.company}
                        period={exp.period}
                        description={exp.description}
                    />
                ))}
            </div>
          </div>
          <div>
            <h3 className="font-headline text-2xl font-bold mb-8 flex items-center gap-3">
                <GraduationCap className="h-6 w-6 text-accent"/> Education
            </h3>
            <div className="relative">
                 {education.map((edu, index) => (
                    <TimelineItem 
                        key={index}
                        icon={edu.icon}
                        title={edu.degree}
                        subtitle={edu.institution}
                        period={edu.period}
                        description={edu.description}
                    />
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
