import React, { ReactNode } from "react";

interface MainProps {
  children: ReactNode;
}

const Main: React.FC<MainProps> = (props) => {
  const { children } = props;
  return <div > {children}</div>;
};

export default Main;
