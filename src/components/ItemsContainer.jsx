import { useContext } from "react";
import AppItem from "./appitem";
import styles from "./ItemsContainer.module.css";
import { ItemsContext } from "../store/todoStore";

function ItemsContainer({onDelete}) {
  const items = useContext(ItemsContext);

  return (
      <div className= {`${styles["items-container"]}`}>
        {items.todoItems.map((item) => (<AppItem key={item.name} appname={item.name} appdate={item.date} onDelete={onDelete} ></AppItem> ))}
       </div>
  );
}
export default ItemsContainer;
