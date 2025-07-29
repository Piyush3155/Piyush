import { ProjectCard } from '@/components/project-card';

const projects = [
  {
    title: 'Restaurant Management System',
    description:
      'A full-stack web app to streamline restaurant operations, featuring QR-based ordering, live order tracking, role-based access, and sales analytics.',
    tags: ['Next.js', 'TypeScript', 'Prisma', 'MySQL', 'Tailwind CSS', 'Recharts'],
    live: 'https://biteandco.vercel.app',
    github: 'https://github.com/piyush3155/rms',
    images: [
      { src: 'https://placehold.co/600x400.png', alt: 'Restaurant Management System Screenshot 1', hint: 'dashboard analytics' },
      { src: 'https://placehold.co/600x400.png', alt: 'Restaurant Management System Screenshot 2', hint: 'order tracking' },
      { src: 'https://placehold.co/600x400.png', alt: 'Restaurant Management System Screenshot 3', hint: 'menu management' },
    ],
  },
  {
    title: 'TAXI BOOKING APPLICATION DESIGN',
    description:
      'Designed a visually appealing and user-friendly taxi booking app prototype with 10+ interactive screens to enhance user engagement.',
    tags: ['Figma', 'UI/UX Design', 'Prototyping'],
    live: null,
    github: null,
    images: [
        { src: 'https://placehold.co/600x400.png', alt: 'Taxi App Screenshot 1', hint: 'mobile booking' },
        { src: 'https://placehold.co/600x400.png', alt: 'Taxi App Screenshot 2', hint: 'map interface' },
        { src: 'https://placehold.co/600x400.png', alt: 'Taxi App Screenshot 3', hint: 'user profile' },
    ],
  },
  {
    title: 'E-COMMERCE WEBSITE',
    description:
      'A foundational e-commerce site with core features like user registration, login, and product listings, built with fundamental web technologies.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    live: null,
    github: null,
    images: [
        { src: 'https://placehold.co/600x400.png', alt: 'E-commerce Screenshot 1', hint: 'product page' },
        { src: 'https://placehold.co/600x400.png', alt: 'E-commerce Screenshot 2', hint: 'shopping cart' },
        { src: 'https://placehold.co/600x400.png', alt: 'E-commerce Screenshot 3', hint: 'checkout form' },
    ],
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            Project Showcase
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A glimpse into the applications I've built and designed.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
