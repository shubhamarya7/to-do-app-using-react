import { ItemsContext } from "../store/todoStore";
import { useContext } from "react";

function NoTask (){
    const items = useContext(ItemsContext);

    return (items.todoItems.length === 0 && <p>No Tasks </p>)
}
export default NoTask;