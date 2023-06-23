import { useState } from "react"; // import pozwalający na użycie hooka useState
import styles from "./ListGroup.module.css"; // import pliku ze stylami

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void; // funkcja przyjmująca string i nic nie zwracająca
} // interface z propsami

function ListGroup({ items, heading, onSelectItem }: Props) {
  // komponent funkcyjny przyjmujący propsy
  const [selectedIndex, setSelectedIndex] = useState(-1); // hook useState z domyślną wartością -1

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className={[styles.listGroup, styles.container].join(" ")}>
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index), onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
