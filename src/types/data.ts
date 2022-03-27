export interface EventInfo {
  id: string;
  title: string;
  description: string;
  is_open: boolean;
  is_active: boolean;
  places_nb: number;
  admin_id: number;
  category: Categories;
  date: string;
  hours: string;
  created_at: string;
}

export type Categories = "Formation" | "Maraudes" | "Donations" | "Récoltes";
