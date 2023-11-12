import { v4 as uuidv4 } from "uuid";

export const currencyList = [
  {
    id: uuidv4(),
    title: "Гривня",
    currencyTitle: "Грн.",
    rate: 1,
  },
  {
    id: uuidv4(),
    title: "Долар",
    currencyTitle: "USD.",
    rate: 1 / 38,
  },
  {
    id: uuidv4(),
    title: "Євро",
    currencyTitle: "EUR.",
    rate: 1 / 42,
  },
  {
    id: uuidv4(),
    title: "Злотий",
    currencyTitle: "PLN",
    rate: 1 / 8,
  },
  {
    id: uuidv4(),
    title: "Шекель",
    currencyTitle: "ILS.",
    rate: 1 / 9.5,
  },
];
