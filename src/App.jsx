import AppInput from "./components/appInput";
import ItemsContainer from "./components/ItemsContainer";
import AppName from "./components/appName";
import NoTask from "./components/NoTask";
import "./App.css";
import { useState } from "react";

function App() {
  const [itemData, setItemData] = useState([]);/**to use add and delete btn we need state */
  let handleNewItem = (x,y) => { /**logic for add btn */
    const newItem = { name: x, date: y };
    setItemData([...itemData, newItem]);
  }
  let handleDelete = (itemname) =>{ /**logic for delete btn */
    setItemData(itemData.filter(item => item.name !== itemname)) /**filter will drop the falsy value and make a new array
    we should not change the original array always make a new array  */
  }
  return (
    <center className="todo_container">
      <AppName ></AppName>
      <AppInput newItem={handleNewItem}></AppInput>
      {itemData.length === 0 && <NoTask></NoTask>} {/* Conditional rendering */}
      <ItemsContainer items={itemData} onDelete={handleDelete} ></ItemsContainer>
    </center>
  );
}

export default App;
