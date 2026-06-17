import type { Coffee } from "../types";
import { CoffeeCard } from "./CoffeeCard";

interface CoffeeListProps {
  items: Coffee[];
}

export function CoffeeList({ items }: CoffeeListProps) {
  return (
    <div>
      {items.map((coffee) => (
        <CoffeeCard
          key={coffee.id}
          name={coffee.name}
          price={coffee.price}
          isSpecial={coffee.price > 10}
        />
      ))}
    </div>
  );
}
