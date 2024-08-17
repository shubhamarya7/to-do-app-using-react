import AppInput from "./components/appInput";
import ItemsContainer from "./components/ItemsContainer";
import AppName from "./components/appName";
import NoTask from "./components/NoTask";
import "./App.css";
import { useState } from "react";
import { ItemsContext } from "./store/todoStore";
function App() {
  const [itemData, setItemData] = useState([]);                /**to use add and delete btn we need state */
  let handleNewItem = (x, y) => {                              /**logic for add btn */
    const newItem = { name: x, date: y };
    setItemData([...itemData, newItem]);
  };
  let handleDelete = (itemname) => {                          /**logic for delete btn */
    setItemData(itemData.filter((item) => item.name !== itemname));            /** filter will drop the falsy value and make a new array we should notchange the original array always make a new array  */
  };
  return (
    <ItemsContext.Provider
      value={{
        todoItems: itemData,
        addNewItem: handleNewItem,
        deleteItem: handleDelete,
      }}
    >
      <center className="todo_container"> 
        <AppName></AppName>
        <AppInput></AppInput>
        <NoTask></NoTask>
        <ItemsContainer></ItemsContainer>
      </center>
    </ItemsContext.Provider>
  );
}

export default App;
