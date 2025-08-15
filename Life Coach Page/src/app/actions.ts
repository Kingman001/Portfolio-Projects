
'use server';

import { generateHeadline, type HeadlineGeneratorInput } from '@/ai/flows/headline-generator';

export async function getHeadlineAction(input: HeadlineGeneratorInput) {
  try {
    const result = await generateHeadline(input);
    return result;
  } catch (error) {
    console.error('Error generating headline:', error);
    // In a real app, you'd handle this more gracefully
    throw new Error('Failed to generate headline');
  }
}
