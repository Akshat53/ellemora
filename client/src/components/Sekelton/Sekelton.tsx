import { Skeleton } from "antd";
import React, { useState } from "react";

const AppSekelton: React.FC = () => {
  const [active, setActive] = useState(true);

  return (
    <Skeleton.Image
      active={active}
      className="w-100"
      style={{
        aspectRatio: "2/3",
        objectFit: "cover",
        height: "auto",
        width: "100%",
      }}
    />
  );
};

export default AppSekelton;
