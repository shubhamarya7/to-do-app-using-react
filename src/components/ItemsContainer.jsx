import AppItem from "./appitem";
import styles from "./ItemsContainer.module.css";
function ItemsContainer({items, onDelete}) {
  return (
      <div className= {`${styles["items-container"]}`}>
        {items.map((item) => (<AppItem key={item.name} appname={item.name} appdate={item.date} onDelete={onDelete} ></AppItem> ))}
       </div>
  );
}
export default ItemsContainer;
