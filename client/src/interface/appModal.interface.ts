import { ReactNode } from "react";

interface AppModalProps {
  children: ReactNode;
  onClose: () => void;
  open: boolean;
  title?: string;
}
export default AppModalProps;
