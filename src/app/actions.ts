'use server';

import { 
  optimizePortfolioLayout as optimizePortfolioLayoutFlow,
  type OptimizePortfolioLayoutInput,
} from '@/ai/flows/optimize-portfolio-layout';

export type { OptimizePortfolioLayoutOutput } from '@/ai/flows/optimize-portfolio-layout';

// Hardcoded data based on the user prompt
const portfolioData: OptimizePortfolioLayoutInput = {
  skills: [
    'Python',
    'JavaScript',
    'C',
    'HTML/CSS',
    'React.js',
    'TailwindCSS',
    'Git/GitHub',
    'Figma',
    'Next.js',
    'Data Structure and algorithms',
    'OOPS concept',
    'MySQL',
  ],
  experience: `Web Developer Intern at Playtech (Feb 2025 - Present). Contributed to real-world projects like Electronic Medical Records, Restaurant Management System, and Auto Sales Dashboard. Built full-stack web apps with features like role-based access, analytics dashboards, and real-time data handling. Tech used: Next.js, TypeScript, MySQL, Prisma, Tailwind CSS, PHP.`,
  projects: [
    'TAXI BOOKING APPLICATION DESIGN: Designed a user-friendly taxi booking application using Figma. Created a visually appealing and interactive interface. Designed a taxi booking app prototype with 10+ interactive screens, improving user engagement.',
    'E-COMMERCE WEBSITE: Developed a functional e-commerce website using HTML, CSS, and JavaScript. Implemented features like user registration, login, and product listing.',
    'Restaurant Management System (Full-Stack Web App): Developed a web-based system to streamline restaurant operations using Next.js, TypeScript, Prisma, MySQL, Tailwind CSS, Recharts. Integrated QR-based table ordering, live order tracking, and smart billing. Implemented role-based access for Admin, Kitchen Staff, and Customers. Visualized sales analytics using Recharts for performance insights.',
  ],
  education: `KLS Gogte of Commerce, Bachelor of Computer Applications, Expected - 2025, CGPA: 7.67`,
  softSkills: ['Team Collaboration', 'Analytical Thinking', 'Problem-Solving'],
};

export async function optimizePortfolioLayout() {
  try {
    const result = await optimizePortfolioLayoutFlow(portfolioData);
    return result;
  } catch (error) {
    console.error('Error optimizing portfolio layout:', error);
    throw new Error('Failed to get optimization from AI');
  }
}
