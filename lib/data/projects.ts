import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'proj-cervical-maturation',
    title: 'Automated Cervical Vertebral Maturation Staging',
    area: 'Medical Image Analysis',
    description:
      'Automated assessment of cervical vertebral maturation stages using deep learning and ordinal learning approaches for clinical decision support in orthodontics.',
    institution: 'Panjab University / PGIMER',
    status: 'Completed',
    startDate: '2024',
    endDate: '2025',
    methodology: [
      'Medical image segmentation of vertebral regions',
      'Vertebral ROI extraction and preprocessing',
      'Deep learning classification with ordinal regression',
      'Continuous-stage prediction from discrete labels',
    ],
    contributions: [
      'Proposed a continuous-perspective formulation for maturation staging',
      'Developed an end-to-end pipeline from ROI extraction to stage prediction',
      'Demonstrated improved ordering consistency over standard classification',
    ],
    technologies: ['PyTorch', 'TensorFlow', 'OpenCV', 'NumPy'],
    featured: true,
    paperUrl: '#',
    codeUrl: '#',
  },
  {
    id: 'proj-vlm-robustness',
    title: 'Vision-Language Model Robustness and Interpretability',
    area: 'Vision-Language Models',
    description:
      'Research investigating the failure modes, robustness, and internal mechanisms of vision-language models, including noise robustness and mechanistic interpretability.',
    institution: 'MBZUAI',
    status: 'In Progress',
    startDate: '2025',
    methodology: [
      'Noise robustness evaluation across visual perturbations',
      'Mechanistic interpretability of transformer representations',
      'Steering vector analysis for controllable behavior',
      'Table understanding and structured-data reasoning',
    ],
    contributions: [
      'Identified systematic failure modes under visual noise',
      'Analyzed internal representations via steering vectors',
    ],
    technologies: ['PyTorch', 'Transformers', 'Hugging Face'],
    featured: true,
    paperUrl: '#',
  },
  {
    id: 'proj-radiology-report',
    title: 'Medical Imaging and Radiology Report Generation',
    area: 'Multimodal AI',
    description:
      'Multimodal AI systems leveraging vision-language models for medical imaging and automated radiology report generation.',
    institution: 'MBZUAI',
    status: 'In Progress',
    startDate: '2025',
    methodology: [
      'Multimodal model fine-tuning on medical image-text pairs',
      'Report generation with clinical accuracy constraints',
      'Evaluation against radiologist-authored references',
    ],
    technologies: ['PyTorch', 'Transformers', 'Hugging Face'],
    featured: true,
  },
  {
    id: 'proj-dental-multimodal',
    title: 'Multimodal Dental Image Analysis',
    area: 'Multimodal AI',
    description:
      'Research involving multimodal learning for dental imaging tasks, combining visual and structured data for improved diagnostic support.',
    status: 'Ongoing',
    startDate: '2025',
    methodology: [
      'Multimodal feature fusion from dental imagery',
      'Classification and segmentation of dental structures',
    ],
    technologies: ['PyTorch', 'OpenCV'],
  },
];
