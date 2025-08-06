# Piyush Gurav - Portfolio

A modern, responsive portfolio website showcasing my journey as a Full-Stack Developer. Built with cutting-edge technologies and featuring a clean, professional design with interactive elements.

**🌐 Live Website**: [piyushgurav.me](https://piyushgurav.me)

## Features

- **Responsive Design**: Optimized for all devices, from mobile to desktop
- **Interactive Contact Form**: Functional email integration with automated responses
- **Animated Sections**: Smooth scroll animations and hover effects
- **Project Showcase**: Interactive project cards with image carousels
- **Skills Animation**: Infinite scrolling tech stack display
- **Theme Support**: Light and dark mode toggle
- **3D Card Effects**: Interactive project cards with 3D transformations
- **Custom Domain**: Hosted on custom domain via Namecheap

## Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [ShadCN UI](https://ui.shadcn.com/)
- **Email**: [Nodemailer](https://nodemailer.com/) with Gmail SMTP
- **Form Handling**: [React Hook Form](https://react-hook-form.com/) with Zod validation
- **Icons**: [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)
- **Hosting**: [Vercel](https://vercel.com/)
- **Domain**: [Namecheap](https://namecheap.com/)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/piyush3155/piyush-portfolio.git
   cd piyush-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Create environment variables:
   ```bash
   # Create .env file in the root directory
   GMAIL_USER=your-email@gmail.com
   GMAIL_PASS=your-app-password
   ```

4. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Email Configuration

To enable the contact form functionality:

1. Enable 2-Step Verification in your Google Account
2. Generate an App Password for Gmail
3. Add your credentials to the `.env` file
4. The contact form will send emails to your specified address and auto-reply to users

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── actions.ts         # Server actions for email
│   └── globals.css        # Global styles
├── components/
│   ├── sections/          # Page sections
│   ├── ui/               # ShadCN UI components
│   └── ...               # Other components
└── ...
```

## Deployment

This portfolio is deployed on Vercel with a custom domain from Namecheap:

1. **Vercel Deployment**: Push your code to GitHub and connect to Vercel
2. **Custom Domain Setup**: 
   - Purchase domain from Namecheap (piyushgurav.me)
   - Configure DNS settings in Namecheap to point to Vercel
   - Add custom domain in Vercel dashboard
3. **Environment Variables**: Add email credentials in Vercel dashboard
4. **Automatic Deployments**: Every push to main branch triggers deployment

### Domain Configuration
- **Domain Provider**: Namecheap
- **DNS Management**: Configured to point to Vercel's servers
- **SSL Certificate**: Automatically managed by Vercel

## Contact

- **Website**: [piyushgurav.me](https://piyushgurav.me)
- **Email**: piyushgurav176@gmail.com
- **LinkedIn**: [Piyush Gurav](https://www.linkedin.com/in/piyush-gurav-674409262/)
- **GitHub**: [piyush3155](https://github.com/piyush3155)
- **Instagram**: [@09_piyush_02](https://instagram.com/09_piyush_02)

## License

This project is open source and available under the [MIT License](LICENSE).
