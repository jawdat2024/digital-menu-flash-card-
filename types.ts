
export interface BeanOption {
  id: string;
  name: string;
  price: number; // Stored as number for calculation
  notes: string;
}

export interface ModifierOption {
  id: string;
  name: string;
  price: number; // Additional cost
  description?: string;
}

export interface ModifierGroup {
  id: string;
  title: string;
  options: ModifierOption[];
  required?: boolean;
}

export interface MenuItem {
  id: string;
  name: string;
  ingredients: string;
  price: string;
  pricePrefix?: string; // e.g., "From"
  image: string;
  isVegetarian?: boolean;
  isGlutenFree?: boolean;
  isSoldOut?: boolean;
  variants?: BeanOption[]; // Legacy: Absolute price variants (e.g. V60)
  customizations?: ModifierGroup[]; // New: Additive modifiers (e.g. Extra Sweet, Milk types)
  disableTemperature?: boolean;
  disableServingStyle?: boolean;
  badge?: string;
  calories?: number;
  
  // New fields for Filter Coffee
  origin?: string;
  farm?: string;
  process?: string;
  elevation?: string;
  tastingNotes?: string;
  tags?: string[];
  branch?: string;
  status?: 'Available' | 'Coming Soon' | 'Sold Out';
}

export interface BeanSelectionItem {
  id: string;
  name: string;
  notes: string;
  price?: number;
  isNew?: boolean;
  isDecaf?: boolean;
}

export interface MenuCategory {
  id: string;
  title: string;
  description?: string;
  headerStyle?: { [key: string]: string | number };
  beanSelection?: BeanSelectionItem[];
  items: MenuItem[];
  subCategories?: MenuCategory[];
}

// NEW: Dictionary type for multi-branch support
export type BranchMenuDirectory = Record<string, MenuCategory[]>;

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}

export interface BranchTheme {
  primary: string;
  secondary: string;
  accent: string;
  font: string;
  bgGradient: string;
}

export interface Branch {
  id: string;
  name: string;
  address: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  theme: 'warm' | 'aquatic' | 'luxury' | 'nautical' | 'urban';
  description: string;
  specialty: string;
  image: string;
  workingHours: string;
}