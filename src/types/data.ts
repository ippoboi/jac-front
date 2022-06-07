export interface EventInfo {
  adminId: number;
  category: Categories;
  createdAt: string;
  date: string;
  description: string;
  endHour: string;
  id: string;
  isActive: boolean;
  isOpen: boolean;
  placesNb: number;
  startHour: string;
  title: string;
}

export type Categories = "Formation" | "Maraudes" | "Donations" | "Entraide";
