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
      { src: '/rms1.png', alt: 'Restaurant Management System Screenshot 1', hint: 'dashboard analytics' },
      { src: '/rms2.png', alt: 'Restaurant Management System Screenshot 2', hint: 'order tracking' },
      { src: '/rms3.png', alt: 'Restaurant Management System Screenshot 3', hint: 'menu management' },
      { src: '/rms4.png', alt: 'Restaurant Management System Screenshot 3', hint: 'menu management' },

    ],
  },
  /* {
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
  }, */
  {
    title: 'E-COMMERCE WEBSITE',
    description:
      'A foundational e-commerce site with core features like user registration, login, and product listings, built with fundamental web technologies.',
    tags: ['HTML', 'CSS', 'JavaScript'],
   live: 'https://mbagritech.vercel.app/',
    github: 'https://github.com/piyush3155/E-commerce',
    images: [
      { src: '/mb1.png', alt: 'E-commerce Screenshot 1', hint: 'Signin page' },
      { src: '/mb2.png', alt: 'E-commerce Screenshot 2', hint: 'Product listing' },
      { src: '/mb3.png', alt: 'E-commerce Screenshot 3', hint: 'Cart page' },
      { src: '/mb4.png', alt: 'E-commerce Screenshot 4', hint: 'Checkout page' },
      { src: '/m5.png', alt: 'E-commerce Screenshot 4', hint: 'Checkout page' },
      { src: '/m6.png', alt: 'E-commerce Screenshot 4', hint: 'Checkout page' },
      
    ],
  },
  {
    title: 'Real-Time Chat Application',
    description:
      'A responsive chat app with live messaging using WebSockets, featuring user authentication, typing indicators, and chat history persistence.',
    tags: ['Next.js', 'TypeScript', 'Socket.IO', 'Tailwind CSS', 'Node.js'],
    live: null,
    github: 'https://github.com/Piyush3155/chatapplication',
    images: [
      { src: '/chat1.png', alt: 'Chat App Screenshot 1', hint: 'live chat UI' },
      { src: '/chat2.png', alt: 'Chat App Screenshot 2', hint: 'authentication flow' },
      { src: '/chat3.png', alt: 'Chat App Screenshot 3', hint: 'typing indicator' },
      { src: '/chat4.png', alt: 'Chat App Screenshot 4', hint: 'chat history' },
    ],
  },
  {
    title: 'AI-Powered Resume Analyzer',
    description:
      'A smart web tool that evaluates resumes against job descriptions using NLP, keyword extraction, and scoring. Built with Next.js frontend and a Python backend powered by OpenAI and FastAPI.',
    tags: ['Next.js', 'TypeScript', 'Python', 'FastAPI', 'OpenAI API', 'NLP', 'Streamlit'],
    live: null,
    github: 'https://github.com/piyush3155/resume-analyzer',
    images: [
      { src: '/ai1.png', alt: 'Resume Analyzer Screenshot 1', hint: 'input upload interface' },
      { src: '/ai2.png', alt: 'Resume Analyzer Screenshot 2', hint: 'keyword analysis result' },
      { src: '/ai3.png', alt: 'Resume Analyzer Screenshot 3', hint: 'ATS score insight' },
    ],
  }
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-4">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
