// types/index.ts
export interface Service {
    id: number;
    name: string;
  }
  
  export interface Project {
    id: number;
    title: string;
    slug: string;
    previewImageURL: string;
    services: Service[];
  }
  