import { TimelineItem, MemoryPhoto, ReasonCard, StatItem } from '../types';

// =========================================
// MUSIC CONFIGURATION
// =========================================
// Replace music URL here
export const BACKGROUND_MUSIC_URL = "/assets/music/tenu.mp3"; 
// Replace music URL here: You can replace the link above with any direct .mp3 / .wav audio URL.


// =========================================
// TIMELINE DATA
// =========================================
// I will edit later.
export const TIMELINE_DATA: TimelineItem[] = [
  // Timeline Card 2023
  {
    id: 'timeline-2023',
    year: '2023',
    tag: 'The Beginning',
    title: 'Where We Firt Met',
    description: 'It all started at coaching in 2023. We were just classmates who slowly became friends. Nothing extraordinary at first-just simple, and a friendship that quickly began without us knowing how important it would became.',
    location: 'Our Coaching Days 📚',
    badgeColor: 'from-purple-500 to-indigo-500',
    commentLabel: 'Timeline Card 2023',
  },

  // Timeline Card 2024
  {
    id: 'timeline-2024',
    year: '2024',
    tag: 'Closer Than Before',
    title: 'A Friendship That Grew Stronger',
    description: 'One year later, our friendship had become something truly special. We spent more time together, shared countless laughs, helped each other through little moments, and slowly became the kind of friends who could always count on one another.',
    location: 'Countless Memories Together 💙',
    badgeColor: 'from-pink-500 to-purple-500',
    commentLabel: 'Timeline Card 2024',
  },

  // Timeline Card 2024-2025
  {
    id: 'timeline-2024-2025',
    year: '2024–2025',
    tag: 'Stronger Together',
    title: 'Our Bond Grew Stronger',
    description: 'Our friendship became stronger with every passing day. More laughs, morememories, and countless moments that brought us closer than ever.',
    location: 'Countless Memories 💙',
    badgeColor: 'from-blue-500 to-cyan-500',
    commentLabel: 'Timeline Card 2024-2025',
  },

  // Timeline Card 2025-2026
  {
    id: 'timeline-2025-2026',
    year: '2025–2026',
    tag: 'Best Friends Forever',
    title: 'Always There For Me',
    description: 'By now, we had become best friends. During one of the hardest phases of my life after my breakup, you stood byme, supported me, and stood by me, supported me, and reminded me that I was never alone.',
    location: 'A Friend I Can Always Count On ❤️',
    badgeColor: 'from-fuchsia-500 to-rose-500',
    commentLabel: 'Timeline Card 2025-2026',
  },

  // Timeline Card 2026
  {
    id: 'timeline-2026',
    year: '2026',
    tag: 'Our Best Chapter',
    title: 'Closer Than Ever',
    description: '2026 became our favorite year together. We spent more times, explored new places, laughed endlessly, and created some of our most beautiful memoies together. ',
    location: 'Our Favorite Memories✨',
    badgeColor: 'from-amber-400 to-pink-500',
    commentLabel: 'Timeline Card 2026',
  },
];


// =========================================
// BEST MEMORIES (EXACTLY 6 IMAGE CARDS)
// =========================================
export const MEMORIES_DATA: MemoryPhoto[] = [
  // Photo 1
  {
    id: 'memory-1',
    photoLabel: 'Photo1',
    title: 'Neon Nights & City Lights',
    subtitle: 'Wandering the glowing streets with zero care in the world.',
    date: 'Summer 2023',
    imageUrl: '../../assets/images/photo1.jpeg',
    aspectRatio: 'portrait',
  },

  // Photo 2
  {
    id: 'memory-2',
    photoLabel: 'Photo 2',
    title: 'Spontaneous Road Trips',
    subtitle: 'Windows down, music blasting, and freedom in our hearts.',
    date: 'Autumn 2024',
    imageUrl: '../../assets/images/photo2.jpeg',
    aspectRatio: 'square',
  },

  // Photo 3
  {
    id: 'memory-3',
    photoLabel: 'Photo 3',
    title: 'Sunset Beach Laughs',
    subtitle: 'Watching the golden hour glow turn into starry skies.',
    date: 'Spring 2025',
    imageUrl: '../../assets/images/photo3.jpeg',
    aspectRatio: 'wide',
  },

  // Photo 4
  {
    id: 'memory-4',
    photoLabel: 'Photo 4',
    title: 'Coffee & Deep Conversations',
    subtitle: 'Four hours felt like four minutes when we talked.',
    date: 'Winter 2025',
    imageUrl: '../../assets/images/photo4.jpeg',
    aspectRatio: 'square',
  },

  // Photo 5
  {
    id: 'memory-5',
    photoLabel: 'Photo 5',
    title: 'Concert Energy',
    subtitle: 'Screaming the lyrics to our favorite songs in harmony.',
    date: 'Early 2026',
    imageUrl: '../../assets/images/photo5.jpeg',
    aspectRatio: 'portrait',
  },

  // Photo 6
  {
    id: 'memory-6',
    photoLabel: 'Photo 6',
    title: 'Unplanned Golden Moments',
    subtitle: 'The silly candid photos that ended up being our absolute favorite.',
    date: 'Friendship Day 2026',
    imageUrl: '../../assets/images/photo6.jpeg',
    aspectRatio: 'wide',
  },
];


// =========================================
// REASONS YOU'RE MY FAVOURITE PERSON
// (ONLY 1st, 2nd, 3rd, 4th, 6th, 7th, 8th, 10th)
// =========================================
export const REASONS_DATA: ReasonCard[] = [
  // Reason 1st Card
  {
    number: '❤️',
    label: 'Positive Vibes',
    title: 'You Always Lift My Mood',
    description: 'No matter how stressful the day is, talking to you always makes it a little better.',
    iconName: 'Sparkles',
    commentLabel: 'Reason 1st Card',
  },

  // Reason 2nd Card
  {
    number: '🩷',
    label: 'Zero Judgment Zone',
    title: 'I Can Be Myself Around You',
    description: 'I never have to pretend or overthink. That`s what makes our friendship so comfortable.',
    iconName: 'ShieldCheck',
    commentLabel: 'Reason 2nd Card',
  },

  // Reason 3rd Card
  {
    number: '💝',
    label: 'Endless Laughs',
    title: 'We Laugh At The Silliest Things',
    description: 'Somehow even the most random moments become funny when we`re together.',
    iconName: 'Eye',
    commentLabel: 'Reason 3rd Card',
  },

  // Reason 4th Card
  {
    number: '💙',
    label: 'Strong Support System',
    title: 'You Were There When It Mattered.',
    description: 'During difficult times, you stood by me like a true friend and helped me stay strong.',
    iconName: 'HeartHandshake',
    commentLabel: 'Reason 4th Card',
  },

  // Reason 6th Card
  {
    number: '🤍',
    label: 'Great Listener',
    title: 'You always Understand Me',
    description: 'You listen without judging and always give honest advice when i need it.',
    iconName: 'MessageSquareHeart',
    commentLabel: 'Reason 6th Card',
  },

  // Reason 7th Card
  {
    number: '💚',
    label: 'Fun Memories',
    title: 'Every Trip Becomes A Story',
    description: 'Whether it`s a short outing or a long drive, every moment becomes a great memory.',
    iconName: 'MapPin',
    commentLabel: 'Reason 7th Card',
  },

  // Reason 8th Card
  {
    number: '💛',
    label: 'Comfort Zone',
    title: 'Good Company Is Enough ',
    description: 'We don’t always need a reason to talk. Just hanging out is enough.',
    iconName: 'Coffee',
    commentLabel: 'Reason 8th Card',
  },

  // Reason 10th Card
  {
    number: '💓',
    label: 'True Friendship',
    title: 'A Friend I`ll Always Value',
    description: 'Thanks for being such a genuine friend and for making life a little brighter.',
    iconName: 'Crown',
    commentLabel: 'Reason 10th Card',
  },
];


// =========================================
// ANIMATED STATISTICS
// =========================================
// Stats section
export const STATS_DATA: StatItem[] = [
  {
    value: 3,
    suffix: '+',
    label: 'Years of Pure Magic',
    sublabel: 'Over 1,095 days of constant support and friendship',
    icon: 'Calendar',
  },
  {
    value: 25,
    suffix: '+',
    label: 'Photos Together',
    sublabel: 'Capturing unforgettable laughs, travels, and core memories',
    icon: 'Camera',
  },
  {
    value: 9999,
    suffix: '+',
    label: 'Shared Laughs',
    sublabel: 'And counting infinitely every single day',
    icon: 'Smile',
  },
];
