import { ResearchInterest } from '../types';

export const researchInterests: ResearchInterest[] = [
  {
    id: 'computer-vision',
    title: 'Computer Vision',
    description:
      'Developing deep learning systems that can understand, analyze, and interpret visual information across diverse domains.',
    icon: 'eye',
  },
  {
    id: 'medical-image-analysis',
    title: 'Medical Image Analysis',
    description:
      'Applying AI to medical imaging problems including segmentation, classification, diagnosis, and clinical decision support.',
    icon: 'activity',
  },
  {
    id: 'vision-language-models',
    title: 'Vision-Language Models',
    description:
      'Investigating multimodal models that bridge visual and linguistic understanding for richer AI capabilities.',
    icon: 'languages',
  },
  {
    id: 'multimodal-ai',
    title: 'Multimodal AI',
    description:
      'Building systems capable of learning from multiple modalities such as images, text, and structured data.',
    icon: 'layers',
  },
  {
    id: 'large-language-models',
    title: 'Large Language Models',
    description:
      'Exploring language models, instruction tuning, retrieval, and the foundations of language understanding.',
    icon: 'brain',
  },
  {
    id: 'machine-learning',
    title: 'Machine Learning',
    description:
      'Developing robust and generalizable machine learning systems with strong theoretical grounding.',
    icon: 'cpu',
  },
];

export const currentFocus = [
  'Computer Vision',
  'Medical AI',
  'Multimodal Learning',
];

export const researchFocusDetailed = [
  'Vision-Language Models',
  'Medical Image Analysis',
  'Representation Learning',
  'Large Language Models',
];
