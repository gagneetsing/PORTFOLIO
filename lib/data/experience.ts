import { ExperienceEntry } from '../types';

export const experience: ExperienceEntry[] = [
  {
    id: 'exp-mbzuai',
    position: 'Research Fellow',
    institution: 'MBZUAI',
    duration: '2025 — Present',
    location: 'Abu Dhabi, UAE',
    summary:
      'Conducting research on vision-language model robustness, interpretability, and medical imaging report generation within the Computer Vision department.',
    projects: [
      'Vision-Language Model Robustness and Interpretability',
      'Medical Imaging and Radiology Report Generation',
    ],
    current: true,
  },
  {
    id: 'exp-iit-ropar',
    position: 'Visiting Researcher',
    institution: 'IIT Ropar',
    duration: '2024 — 2025',
    location: 'Ropar, India',
    summary:
      'Collaborated on deep learning research for medical image analysis, focusing on vertebral maturation staging and ordinal learning approaches.',
    projects: ['Automated Cervical Vertebral Maturation Staging'],
  },
  {
    id: 'exp-iit-jammu',
    position: 'Research Intern',
    institution: 'IIT Jammu',
    duration: '2023 — 2024',
    location: 'Jammu, India',
    summary:
      'Worked on machine learning and computer vision research under faculty guidance, gaining foundational research experience in deep learning methodologies.',
  },
  {
    id: 'exp-panjab-university',
    position: 'Research Student',
    institution: 'Panjab University',
    duration: '2022 — 2025',
    location: 'Chandigarh, India',
    summary:
      'Completed undergraduate research in AI and deep learning, culminating in a thesis on automated cervical vertebral maturation staging.',
    projects: ['Automated Cervical Vertebral Maturation Staging'],
  },
];
