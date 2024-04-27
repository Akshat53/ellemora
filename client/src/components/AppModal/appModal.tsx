import AppModalProps from "../../interface/appModal.interface";
import { Drawer } from "antd";

const AppModal: React.FC<AppModalProps> = ({
  onClose,
  open,
  children,
  title,
  placement = "bottom",
}) => {
  return (
    <>
      <Drawer
        title={title}
        onClose={onClose}
        open={open}
        placement={placement}
        height="auto"
       
      >
        {children}
      </Drawer>
      {/* <div className={`${styles.appModalBackdrop}`} onClick={onClose} />
      <div className={`${styles.appModal}`}>
        <div className={`${styles.appModalOptions}`}>{children}</div>
      </div> */}
    </>
  );
};

export default AppModal;
