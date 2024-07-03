import { useLoaderData } from "react-router-dom";
import "./App.css";
import CoffeeCard from "./components/CoffeeCard";
import { useState } from "react";

function App() {
  const addedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(addedCoffees);
  return (
    <div className="md:m-20">
      <h1 className="text-violet-600 text-6xl mb-16 text-center">
        we have total coffee :{coffees.length}
      </h1>
      <div className="md:grid grid-cols-1 md:grid-cols-2   gap-3">
        {coffees.map((coffee) => (
          <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}></CoffeeCard>
        ))}
      </div>
    </div>
  );
}

export default App;
