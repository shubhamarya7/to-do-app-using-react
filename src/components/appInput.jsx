import styles from "./appInput.module.css";
import styles2 from "./appitem.module.css";
import { useState } from "react";
import { ItemsContext } from "../store/todoStore";
import { useContext } from "react";


function AppInput () {
  const [x, setX] = useState(""); /**to catch the entered value and use it to update list */
  const [y, setY] = useState("");

  const items = useContext(ItemsContext);

  let handleTask = (e) =>{
    setX(e.target.value)
  }

  let handleDate = (e) =>{
    setY(e.target.value)  
  }

  let handleOnAdd = ()=>{
    items.addNewItem(x,y);/** used context and fetched addnewitem value given in appjsx */
    setX(""); /**to empty the input once value added  */
    setY("");
  }
 
    return (<div className="container ">
    <div className={`${styles2["kg-row"]} row`}>
      <div className="col-4"><input type="text"  placeholder="Enter Task" value={x} onChange={handleTask} /></div>
      <div className="col-4"><input type="date" value={y} onChange={handleDate} /></div>
      <div className="col-2"><button type="button" className={`${styles["kg-button"]} btn btn-success`} onClick={handleOnAdd}>Add</button></div>
    </div>
  </div>)
}
export default AppInput;