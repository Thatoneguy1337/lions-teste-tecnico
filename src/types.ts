export interface Vehicle {
  id: number;
  slug: string;
  brand: string;
  model: string;
  version: string;
  year: number;
  mileage: number;
  price: string | number;
  transmission: string;
  fuel: string;
  category: string;
  imageUrl: string;
  featured: boolean;
}

export interface AppointmentForm {
  name: string;
  phone: string;
  email: string;
  vehicleId: string;
  visitDate: string;
  visitTime: string;
  message: string;
}
