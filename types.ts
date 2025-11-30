
export interface Material {
  title: string;
  author: string;
  description: string;
  downloadUrl: string;
}

export interface SlideContent {
  type: string;
  title: string;
  subtitle?: string;
  logos?: string[];
  info?: string[];
  definition?: string;
  points?: {
    title: string;
    items: string[];
  }[];
  keyIdea?: string;
  iceberg?: {
    visible: string;
    hidden: { title: string; items: string[] }[];
  };
  pillars?: {
    title: string;
    items: string[];
  }[];
  closingPhrase?: string;
  references?: {
    author: string;
    title: string;
    details: string;
    description: string;
    url?: string;
  }[];
  materials?: Material[];
}