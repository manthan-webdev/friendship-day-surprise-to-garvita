export interface TimelineItem {
  id: string;
  year: '2023' | '2024' | '2024–2025' | '2025–2026' | '2026';
  tag: string;
  title: string;
  description: string;
  location?: string;
  badgeColor?: string;
  commentLabel: string;
}

export interface MemoryPhoto {
  id: string;
  photoLabel: string; // "Photo 1", "Photo 2", etc.
  title: string;
  subtitle: string;
  date: string;
  imageUrl: string;
  aspectRatio?: 'square' | 'portrait' | 'wide';
}

export interface ReasonCard {
  number: string; // "1st", "2nd", "3rd", "4th", "6th", "7th", "8th", "10th"
  label: string;
  title: string;
  description: string;
  iconName: string;
  commentLabel: string;
}

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
  sublabel: string;
  icon: string;
}
