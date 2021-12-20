export interface Department {
  id: number;
  name: string;
}

export interface User {
  id: string;
  username: string;
  email: string;
}

export interface FileUp {
  id: number;
  title: string;
  file_save: File;
  department: number;
  user: number;
}

export interface FileDown {
  id: number;
  title: string;
  file_save: string;
  department: Department;
  user?: User;
}
