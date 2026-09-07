import { EducationEntry } from '../types';

export const education: EducationEntry[] = [
  {
    id: 'edu-msc',
    degree: 'Master of Science',
    institution: 'University of Bonn',
    duration: 'Winter Semester 2026 — Present',
    location: 'Bonn, Germany',
    details:
      'Research-focused Master\u2019s program in computer science with emphasis on machine learning, computer vision, and artificial intelligence.',
    current: true,
  },
  {
    id: 'edu-bachelors',
    degree: 'Bachelor of Engineering in Information Technology',
    institution: 'UIET, Panjab University',
    duration: '2022 — 2025',
    location: 'Chandigarh, India',
    gpa: '8.72 / 10',
    rank: '19 / 119',
    thesis:
      'Automated Cervical Vertebral Maturation Staging from a Continuous Perspective',
    details:
      'Undergraduate engineering degree with a focus on AI, machine learning, and deep learning research.',
  },
];
