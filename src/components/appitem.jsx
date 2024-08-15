import styles from "./appitem.module.css";
import styles2 from "./appInput.module.css";
function AppItem ({appname,appdate,onDelete}){
    return (
        <div className="container ">
          <div className= {`${styles["kg-row"]} row`}>
            <div className="col-4">{appname}</div>
            <div className="col-4">{appdate}</div>
            <div className="col-2">
              <button type="button" className={`${styles2["kg-button"]} btn btn-danger`} onClick={()=> onDelete(appname)}>
                Delete
              </button>
            </div>
          </div>
        </div>
      );
}
export default AppItem;

