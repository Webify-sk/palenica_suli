
export interface Service {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

export interface Review {
  id: number;
  author: string;
  rating: number;
  text: string;
  date: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}
