import { ResearchNote } from '../types';

export const researchNotes: ResearchNote[] = [
  {
    id: 'note-welcome',
    slug: 'welcome-to-my-research-notes',
    title: 'Welcome to My Research Notes',
    date: '2026-09-01',
    readingTime: '2 min read',
    tags: ['General'],
    excerpt:
      'A brief introduction to this space where I will share research insights, paper reviews, and technical notes.',
    content:
      'Welcome to my research notes. This is a space where I will share insights from my research journey, including paper reviews, technical explanations, experiment notes, and thoughts on AI research.\n\nThe goal is to create a record of ideas worth revisiting \u2014 and perhaps useful to others navigating similar questions in computer vision, multimodal learning, and medical AI.',
    featured: true,
  },
];
