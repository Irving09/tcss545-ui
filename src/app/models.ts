export interface Entity {
  id: number;
  name: string;
}

export interface Size extends Entity {
  oz: number;
}

export interface Price {
  id: number;
  price: number;
  size: Size;
}

export interface Offering extends Entity {
  description: string;
  tags: Entity[];
  ingredients: Entity[];
  prices: Price[];
}

export interface OfferingType extends Entity {
  description: string;
}

export interface Location extends Entity {
  address: string;
  phone: string;
}

export interface Menu {
  id: number;
  name: string;
  offerings: OfferingType[];
}
