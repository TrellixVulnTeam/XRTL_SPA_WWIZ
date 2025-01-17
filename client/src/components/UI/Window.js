import Draggable from "react-draggable"
import styles from "./Window.module.css"
import { CgCloseO } from "react-icons/cg"
import { IoReloadOutline, IoInformationCircleOutline } from "react-icons/io5"

const Window = (props) => {
  return (
    <Draggable handle=".draggableHandler">
      <div
        className={styles.window}
        style={{ top: props.top + "px", left: props.left + "px" }}
      >
        <div className={styles.windowHeader}>
          <span
            className="draggableHandler" //FIXME draggable doesnt seem to work with inline JSX classes. 
            style={{
              display: 'block',
              width: "calc(100% - 50px)",
              cursor: "move",
              float: "left"
            }}
          >
            {props.header}
          </span>
          <span onClick={props.onReset} > <IoReloadOutline size={20} />        </span>
          <span onClick={props.onClose}><CgCloseO size={20} /></span>
        </div>
        <div
          className={styles.windowContent}
          style={{
            height: props.height,
            width: props.width,
            background: "url(" + props.background + ")",
          }}
        >
          {props.children}
        </div>
        {props.footer !== undefined && (
          <div className={styles.windowFooter}>
            <span onClick={props.onInfo}> <IoInformationCircleOutline size={25} /></span>
            <label>{props.footer}</label>
          </div>
        )}
        <div className={styles.windowInfo}>

        </div>
      </div>
    </Draggable>
  )
}
export default Window
