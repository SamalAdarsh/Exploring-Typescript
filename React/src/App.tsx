import "./App.css";
import { Card } from "./components/Card";
import { CoffeeCard } from "./components/CoffeeCard";
import { CoffeeList } from "./components/CoffeeList";
import { Counter } from "./components/Counter";
import { OrderForm } from "./components/OrderForm";
import type { Coffee } from "./types";

const menu: Coffee[] = [
  { id: 1, name: "Latte", price: 5 },
  { id: 2, name: "Expresso", price: 15 },
  { id: 3, name: "Cappucino", price: 20 },
];

function App() {
  return (
    <>
      <div>
        <h1>Hi</h1>
        <CoffeeCard name="Coffee" price={30} />
        <CoffeeCard name="Milk" price={20} />
      </div>
      <div>
        <Counter />
      </div>
      <div>
        <CoffeeList items={menu}/>
      </div>
      <div>
        <OrderForm
        onSubmit={(order)=>{
          console.log("Placed:" , order.name,order.cups)
        }}
        />
      </div>

      <div>
        <Card
        title="Typescript"
        footer= {<button>Order</button>}
        />
      </div>
    </>
  );
}

export default App;
