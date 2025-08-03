export interface Project {
  slug: string;
  image: string;
  imageAlt: string;
  title: string;
  description: string;
  delay: number;
  fullWidth: boolean;
  link: string;
  tags: string[];
  // Champs supplémentaires pour la page détaillée
  longDescription?: string;
  technologies?: string[];
  features?: string[];
  challenges?: string[];
  learnings?: string[];
  demoLink?: string;
  githubLink?: string;
  team?: string[];
  duration?: string;
  role?: string;
  color?: string;
} 