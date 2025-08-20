'use client';

import React from 'react';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiPhp,
  SiNodedotjs,
  SiNestjs,
  SiExpress,
  SiPrisma,
  SiMysql,
  SiGit,
  SiGithub,
  SiVercel,
  SiPostman,
} from 'react-icons/si';
import { VscVscode } from "react-icons/vsc";
import { IconCloud } from '../ui/interactive-icon-cloud';
const skills = [
  { name: 'HTML', icon: <SiHtml5 /> },
  { name: 'CSS', icon: <SiCss3 /> },
  { name: 'JavaScript', icon: <SiJavascript /> },
  { name: 'React.js', icon: <SiReact /> },
  { name: 'Next.js', icon: <SiNextdotjs /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
  { name: 'Bootstrap', icon: <SiBootstrap /> },
  { name: 'PHP', icon: <SiPhp /> },
  { name: 'Node.js', icon: <SiNodedotjs /> },
  { name: 'NestJS', icon: <SiNestjs /> },
  { name: 'Express.js', icon: <SiExpress /> },
  { name: 'Prisma ORM', icon: <SiPrisma /> },
  { name: 'MySQL', icon: <SiMysql /> },
  { name: 'Git', icon: <SiGit /> },
  { name: 'GitHub', icon: <SiGithub /> },
  { name: 'Vercel', icon: <SiVercel /> },
  { name: 'Postman', icon: <SiPostman /> },
  { name: 'VS Code', icon: <VscVscode /> },
];


const slugs = [
  "typescript",
  "javascript",
  "react",
  "html5",
  "css3",
  "express",
  "prisma",
  "vercel",
  "git",
  "github",
  "gitlab",
  "visualstudiocode",
  "figma",
  "postman",
  "tailwindcss",
  "nestjs",
  "python",
  "php",
  "bootstrap"
]

const SkillsListContent = () => (
  <>
    {skills.map((skill, index) => (
      <li
        key={index}
        className="flex items-center justify-center flex-shrink-0 mx-8 text-accent text-5xl"
        title={skill.name}
      >
        {skill.icon}
      </li>
    ))}
  </>
);

export function SkillsSection() {
  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            Technical Universe
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A constellation of my skills and technologies.
          </p>
        </div>
        <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
          <ul className="flex items-center justify-center animate-scroll">
            <SkillsListContent />
            <SkillsListContent />
          </ul>
          
      </div>
      {/* <IconCloud iconSlugs={slugs} /> */}
        </div>
    </section>
  );
}
