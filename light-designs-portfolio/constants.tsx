
import { Project, Service, Testimonial } from './types';

export const SERVICES: Service[] = [
  {
    id: 1,
    title: 'Web Development',
    description: 'Crafting high-performance, responsive websites and complex web applications using modern technologies like React, Next.js, and Node.js.',
    icon: 'fa-solid fa-code',
    color: 'bg-blue-500'
  },
  {
    id: 2,
    title: 'Graphic Design',
    description: 'Transforming ideas into stunning visual stories through brand identity, UI/UX design, and marketing collateral.',
    icon: 'fa-solid fa-bezier-curve',
    color: 'bg-purple-500'
  },
  {
    id: 3,
    title: 'Digital Skills Training',
    description: 'Empowering the next generation of tech talent with hands-on training in coding, design, and digital literacy.',
    icon: 'fa-solid fa-user-graduate',
    color: 'bg-orange-500'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Modern E-commerce Platform',
    category: 'Web',
    description: 'A full-featured shopping experience with cart management and secure checkout.',
    image: 'https://picsum.photos/seed/shop/800/600',
    link: 'https://github.com/Kingman001/Portfolio-Projects',
    tags: ['React', 'Tailwind', 'Node.js']
  },
  {
    id: 2,
    title: 'Brand Identity: Zenith',
    category: 'Design',
    description: 'Complete visual rebranding for a fintech startup, including logo, typography, and color palette.',
    image: 'https://picsum.photos/seed/design/800/600',
    link: 'https://github.com/Kingman001/Portfolio-Projects',
    tags: ['Branding', 'Adobe CC', 'UI/UX']
  },
  {
    id: 3,
    title: 'Task Management System',
    category: 'Web',
    description: 'Collaborative productivity tool with real-time updates and team dashboards.',
    image: 'https://picsum.photos/seed/task/800/600',
    link: 'https://github.com/Kingman001/Portfolio-Projects',
    tags: ['Next.js', 'Firebase', 'TypeScript']
  },
  {
    id: 4,
    title: 'Skill-Up Academy Portal',
    category: 'Training',
    description: 'Learning management system for tracking student progress and delivering course content.',
    image: 'https://picsum.photos/seed/edu/800/600',
    link: 'https://github.com/Kingman001/Portfolio-Projects',
    tags: ['LMS', 'Dashboard', 'Digital Skills']
  },
  {
    id: 5,
    title: 'Mobile Finance App UI',
    category: 'Design',
    description: 'High-fidelity prototypes for a personal finance tracking mobile application.',
    image: 'https://picsum.photos/seed/mobile/800/600',
    link: 'https://github.com/Kingman001/Portfolio-Projects',
    tags: ['Figma', 'Mobile', 'UX']
  },
  {
    id: 6,
    title: 'Portfolio Showcase v2',
    category: 'Web',
    description: 'A minimalist portfolio template optimized for fast loading and SEO.',
    image: 'https://picsum.photos/seed/portfolio/800/600',
    link: 'https://github.com/Kingman001/Portfolio-Projects',
    tags: ['HTML', 'CSS', 'JavaScript']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Jenkins',
    role: 'CEO at TechStream',
    content: 'Light Designs took our abstract ideas and turned them into a world-class digital platform. Their attention to detail in design is unmatched.',
    avatar: 'https://i.pravatar.cc/150?u=sarah'
  },
  {
    id: 2,
    name: 'David Okafor',
    role: 'Product Manager',
    content: 'The training my team received from Light Designs was transformative. We went from basics to building complex apps in weeks.',
    avatar: 'https://i.pravatar.cc/150?u=david'
  },
  {
    id: 3,
    name: 'Elena Rodriguez',
    role: 'Founder of Bloom',
    content: 'Working with them on our branding was the best decision we made. Our customers frequently compliment our new visual identity.',
    avatar: 'https://i.pravatar.cc/150?u=elena'
  }
];
