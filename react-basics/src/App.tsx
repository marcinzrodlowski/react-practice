import ListGroup from "./components/ListGroup";
import { BsFillCalendarFill } from "react-icons/bs";
import Like from "./components/Like";
import { useState } from "react";
import produce from "immer";
import Form from "./components/Form";
import Form2 from "./components/Form2";
import Form3 from "./components/Form3-zod";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";
import categories from "./expense-tracker/categories";

function App() {
  // const [bugs, setBugs] = useState([
  //   { id: 1, title: "Bug 1", fixed: false },
  //   { id: 2, title: "Bug 2", fixed: false },
  // ]);
  // const [game, setGame] = useState({
  //   id: 1,
  //   player: {
  //     name: "John",
  //   },
  // });
  // const [pizza, setPizza] = useState({
  //   name: "Spicy Pepperoni",
  //   toppings: ["Mushroom"],
  // });
  // const [cart, setCart] = useState({
  //   discount: 0.1,
  //   items: [
  //     { id: 1, title: "Product 1", quantity: 1 },
  //     { id: 2, title: "Product 2", quantity: 1 },
  //   ],
  // });

  // const handleClick = () => {
  // setBugs(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));
  // setGame({ ...game, player: { ...game.player, name: "Jane" } });
  // setPizza({ ...pizza, toppings: [...pizza.toppings, " Pepperoni"] });
  // setCart({
  //   ...cart,
  //   items: cart.items.map((item) => item.id === 1 ? {...item, quantity: item.quantity + 1} : item),
  // });
  // };

  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState([
    { id: 1, description: "Expense 1", amount: 100, category: "Utilities" },
    { id: 2, description: "Expense 2", amount: 200, category: "Entertainment" },
    { id: 3, description: "Expense 3", amount: 500, category: "Groceries" },
    { id: 4, description: "Expense 4", amount: 300, category: "Groceries" },
  ]);

  const visibileExpenses = selectedCategory
    ? expenses.filter((expense) => expense.category === selectedCategory)
    : expenses;

  return (
    <div>
      <div className="mb-5">
        <ExpenseForm
          onSubmit={(expense) =>
            setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
          }
        />
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>
      <ExpenseList
        expenses={visibileExpenses}
        onDelete={(id) =>
          setExpenses(expenses.filter((expense) => expense.id !== id))
        }
      />
    </div>
  );
}

export default App;
