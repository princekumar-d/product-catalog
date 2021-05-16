/// <reference types="next" />
/// <reference types="next/types/global" />


declare module '*.module.css';
declare module '*.graphql' {
  import { DocumentNode } from 'graphql';
  const Schema: DocumentNode;

  export = Schema;
}
enum OfferType {
  SLOTTED,
  BONUS,
  REDUCED,
  PRIORITY_ACCESS
}

type Offer = {
  id: string!
  title: string!
  type: OfferType!
}

type Price = {
  currency_code: string!
  current_price: number!
  original_price: number
}

type Product = {
  id: string!
  image_key: string!
  name: string!
  offer_ids: [string!]
  price: Price!
  information: [ProductInformation]
}

type ProductInformation = {
  section_text: string
  section_title: string
}

type User = {
  id: string!
  available_badges: string!
  offers: [Offer!]
}

type Badge = {
  name: string!
  badgeTypes: [string!]
}

