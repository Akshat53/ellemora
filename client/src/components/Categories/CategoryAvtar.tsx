import React from "react";
import { Avatar, Space } from "antd";
import "./categories.css";

interface CategoryAvatarProps {
  data: {
    icon: string;
    label: string;
  };
}

const CategoryAvatar: React.FC<CategoryAvatarProps> = (props) => {
  const { data } = props;
  return (
    <Space direction="vertical" size={16} className="mt-2 mx-2">
      <Avatar
        size={64}
        icon={<img src={data.icon} className="object-fit-cover" />}
        className="d-flex align-item-center justify-item-center"
      />
      <p className="text-center p-0 m-0">{data.label}</p>
    </Space>
  );
};

export default CategoryAvatar;
