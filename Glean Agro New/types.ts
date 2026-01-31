
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  price: string;
  image: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
