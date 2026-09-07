import { Publication } from '../types';

export const publications: Publication[] = [
  {
    id: 'pub-cervical-maturation',
    title:
      'Automated Cervical Vertebral Maturation Staging from a Continuous Perspective',
    authors: ['Gagneet Singh', 'Author Two', 'Author Three'],
    venue: 'IEEE ICCCNT 2025',
    venueType: 'Conference',
    year: 2025,
    status: 'Accepted',
    abstract:
      'An automated approach for assessing cervical vertebral maturation stages using deep learning and ordinal learning, enabling continuous-stage prediction from lateral cephalometric radiographs.',
    tags: ['Medical Image Analysis', 'Deep Learning', 'Ordinal Regression'],
    featured: true,
    highlightAuthor: 'Gagneet Singh',
    paperUrl: '#',
    codeUrl: '#',
  },
  {
    id: 'pub-vlm-robustness',
    title:
      'On the Robustness and Interpretability of Vision-Language Models',
    authors: ['Gagneet Singh', 'Author Four', 'Author Five'],
    venue: 'NeurIPS 2025 Workshop',
    venueType: 'Workshop',
    year: 2025,
    status: 'Oral Presentation',
    abstract:
      'An investigation into the failure modes, robustness, and internal mechanisms of vision-language models, with a focus on noise robustness and mechanistic interpretability.',
    tags: ['Vision-Language Models', 'Interpretability', 'Robustness'],
    featured: true,
    highlightAuthor: 'Gagneet Singh',
    paperUrl: '#',
  },
];

export const publicationsByYear = publications.reduce(
  (acc, pub) => {
    const year = pub.year;
    if (!acc[year]) acc[year] = [];
    acc[year].push(pub);
    return acc;
  },
  {} as Record<number, Publication[]>
);
