export interface IUser {
    id: number;
    name: string;
    email: string;
  }
  
  export interface IPost {
    id: number;
    title: string;
    content: string;
    author: IUser | null;
    created_at: Date | null;
    reactions: Reaction[];
  }

  export interface Message {
    id: number | null;
    sender: IUser | null;
    receiver: IUser | null;
    content: string;
    createdAt: Date | null;
  }

  export interface Conversation {
    id: number | null;
    user: IUser | null
    messages: Message[];
  }
  
  
  export type ApiResponse<T> = {
    success: boolean;
    message?: string;
    data?: T;
  }
  
  export enum UserRole {
    ADMIN = 'admin',
    MODERATOR = 'moderator',
    USER = 'user',
  }

  export interface Reaction {
    id: number;
    name: string;
    emoji: string;
    count: number;
  }
  
  