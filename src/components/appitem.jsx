import styles from "./appitem.module.css";
import styles2 from "./appInput.module.css";
import { ItemsContext } from "../store/todoStore";
import { useContext } from "react";
function AppItem ({appname,appdate}){
  const items = useContext(ItemsContext);

    return (
        <div className="container ">
          <div className= {`${styles["kg-row"]} row`}>
            <div className="col-4">{appname}</div>
            <div className="col-4">{appdate}</div>
            <div className="col-2">
              <button type="button" className={`${styles2["kg-button"]} btn btn-danger`} onClick={()=> items.deleteItem(appname)}>
                Delete
              </button>
            </div>
          </div>
        </div>
      );
}
export default AppItem;

