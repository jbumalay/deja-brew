import { photos } from "./photos";

export type Drink = {
  number: string;
  name: string;
  category: string;
  ingredients: string;
  description: string;
  price: string;
  image: string;
  alt: string;
};

export const menu: Drink[] = [
  {
    number: "01",
    name: "The Plot Twist",
    category: "The Unexpected",
    ingredients: "Espresso, tonic water, citrus.",
    description:
      "Bright, sparkling, slightly bitter, and impossible to mistake for your usual coffee.",
    price: "$5.50",
    image: photos.tonic,
    alt: "Iced coffee in a clear glass on a wooden table",
  },
  {
    number: "02",
    name: "The Familiar",
    category: "The Comfort",
    ingredients: "Double espresso, fresh milk.",
    description:
      "Smooth, mellow, and the kind of drink you could return to every day.",
    price: "$4.50",
    image: photos.familiar,
    alt: "Milky coffee in a ceramic cup beside a café window",
  },
  {
    number: "03",
    name: "The Long Way Home",
    category: "The Slowdown",
    ingredients: "Double espresso, velvety milk.",
    description:
      "A rich, comforting flat white for mornings that deserve a little more time.",
    price: "$4.00",
    image: photos.flatWhite,
    alt: "Flat white in a simple white ceramic cup",
  },
];
