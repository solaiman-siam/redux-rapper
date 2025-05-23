

export interface ITask {
    id: string;
    title: string;
    description: string;
    dueDate: string; 
    isComplete: boolean;
    priority: 'Low' | 'Medium' | 'High';
  }

export interface IUser {
  id: string, 
  name: string
}