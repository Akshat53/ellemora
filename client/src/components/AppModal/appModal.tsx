import AppModalProps from "../../interface/appModal.interface";
import styles from "./appModal.module.css";

const AppModal: React.FC<AppModalProps> = ({ onClose, children }) => {
  return (
    <>
      <div className={`${styles.appModalBackdrop}`} onClick={onClose} />
      <div className={`${styles.appModal}`}>
        <div className={`${styles.appModalOptions}`}>{children}</div>
      </div>
    </>
  );
};

export default AppModal;
