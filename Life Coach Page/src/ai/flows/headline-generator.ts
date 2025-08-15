'use server';
/**
 * @fileOverview Headline generator AI agent.
 *
 * - generateHeadline - A function that generates headline variations based on industry.
 * - HeadlineGeneratorInput - The input type for the generateHeadline function.
 * - HeadlineGeneratorOutput - The return type for the generateHeadline function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const HeadlineGeneratorInputSchema = z.object({
  industry: z.string().describe('The industry to target the headline for.'),
  valueProposition: z.string().describe('The main value proposition of the life coach for enterprise businesses.'),
});
export type HeadlineGeneratorInput = z.infer<typeof HeadlineGeneratorInputSchema>;

const HeadlineGeneratorOutputSchema = z.object({
  headline: z.string().describe('A compelling headline variation for the landing page.'),
});
export type HeadlineGeneratorOutput = z.infer<typeof HeadlineGeneratorOutputSchema>;

export async function generateHeadline(input: HeadlineGeneratorInput): Promise<HeadlineGeneratorOutput> {
  return generateHeadlineFlow(input);
}

const prompt = ai.definePrompt({
  name: 'headlineGeneratorPrompt',
  input: {schema: HeadlineGeneratorInputSchema},
  output: {schema: HeadlineGeneratorOutputSchema},
  prompt: `You are an expert copywriter specializing in creating compelling headlines for landing pages.

You will generate a headline variation that targets the specified industry and highlights the value proposition of the life coach for enterprise businesses.

Industry: {{{industry}}}
Value Proposition: {{{valueProposition}}}

Headline:`,  config: {
    safetySettings: [
      {
        category: 'HARM_CATEGORY_HATE_SPEECH',
        threshold: 'BLOCK_ONLY_HIGH',
      },
      {
        category: 'HARM_CATEGORY_DANGEROUS_CONTENT',
        threshold: 'BLOCK_NONE',
      },
      {
        category: 'HARM_CATEGORY_HARASSMENT',
        threshold: 'BLOCK_MEDIUM_AND_ABOVE',
      },
      {
        category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT',
        threshold: 'BLOCK_LOW_AND_ABOVE',
      },
    ],
  },
});

const generateHeadlineFlow = ai.defineFlow(
  {
    name: 'generateHeadlineFlow',
    inputSchema: HeadlineGeneratorInputSchema,
    outputSchema: HeadlineGeneratorOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
