export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
}

export interface Order {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  serviceType: string;
  messageContent: string;
  status: 'pending' | 'done';
  createdAt: string;
}

export interface AuthResponse {
  token: string;
  user: {
    id: string;
    email: string;
    role: string;
  };
}