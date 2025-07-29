'use server';

/**
 * @fileOverview AI-powered tool that analyzes portfolio content and suggests optimal layout and content flow.
 *
 * - optimizePortfolioLayout - A function that handles the portfolio layout optimization process.
 * - OptimizePortfolioLayoutInput - The input type for the optimizePortfolioLayout function.
 * - OptimizePortfolioLayoutOutput - The return type for the optimizePortfolioLayout function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'zod';

const OptimizePortfolioLayoutInputSchema = z.object({
  skills: z.array(z.string()).describe('List of skills.'),
  experience: z.string().describe('Description of work experience.'),
  projects: z.array(z.string()).describe('List of project descriptions.'),
  education: z.string().describe('Description of education background.'),
  softSkills: z.array(z.string()).describe('List of soft skills.'),
});
export type OptimizePortfolioLayoutInput = z.infer<
  typeof OptimizePortfolioLayoutInputSchema
>;

const OptimizePortfolioLayoutOutputSchema = z.object({
  sectionsOrder: z
    .array(z.string())
    .describe('Suggested order of portfolio sections.'),
  contentSuggestions: z
    .record(z.string(), z.string())
    .describe('Suggestions for content in each section.'),
});
export type OptimizePortfolioLayoutOutput = z.infer<
  typeof OptimizePortfolioLayoutOutputSchema
>;

export async function optimizePortfolioLayout(
  input: OptimizePortfolioLayoutInput
): Promise<OptimizePortfolioLayoutOutput> {
  return optimizePortfolioLayoutFlow(input);
}

const prompt = ai.definePrompt({
  name: 'optimizePortfolioLayoutPrompt',
  input: {schema: OptimizePortfolioLayoutInputSchema},
  output: {schema: OptimizePortfolioLayoutOutputSchema},
  prompt: `You are an expert portfolio optimizer. Given the following information about a user's skills, experience, projects, education, and soft skills, suggest an optimal layout and content flow for their portfolio to maximize impact.  Return the suggested order of the portfolio sections, and suggestions for the content in each section.

Skills: {{#each skills}}{{{this}}}{{#unless @last}}, {{/unless}}{{/each}}
Experience: {{experience}}
Projects: {{#each projects}}{{{this}}}{{#unless @last}}, {{/unless}}{{/each}}
Education: {{education}}
Soft Skills: {{#each softSkills}}{{{this}}}{{#unless @last}}, {{/unless}}{{/each}}`,
});

const optimizePortfolioLayoutFlow = ai.defineFlow(
  {
    name: 'optimizePortfolioLayoutFlow',
    inputSchema: OptimizePortfolioLayoutInputSchema,
    outputSchema: OptimizePortfolioLayoutOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
