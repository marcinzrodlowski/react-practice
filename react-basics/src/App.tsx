import ListGroup from "./components/ListGroup";
import { BsFillCalendarFill } from "react-icons/bs";
import Like from "./components/Like";

function App() {
  // const items = ["New York", "London", "Paris", "Berlin", "Tokyo"];
  return (
    // <div>
    //   <ListGroup
    //     heading="Miami"
    //     items={items}
    //     onSelectItem={() => console.log("sds")}
    //   />
    //   <BsFillCalendarFill color="red" />
    // </div>
    <div>
      <Like onClick={() => console.log("clicked")} />
    </div>
  );
}

export default App;
