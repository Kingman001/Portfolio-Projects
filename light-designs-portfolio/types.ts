
export interface Project {
  id: number;
  title: string;
  category: 'Web' | 'Design' | 'Training';
  description: string;
  image: string;
  link: string;
  tags: string[];
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  color: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
