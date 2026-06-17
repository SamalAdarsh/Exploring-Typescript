interface CoffeeCardProp {
  name: string;
  price: number;
  isSpecial?: boolean;
}

export function CoffeeCard({ name, price, isSpecial = false }: CoffeeCardProp) {
  return (
    <article>
      <h2>
        {name}
        {isSpecial && <span>⭐</span>}
      </h2>
      <p>{price}</p>
    </article>
  );
}
