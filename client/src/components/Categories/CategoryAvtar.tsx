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
      <div className="custom-avatar">
        <Avatar
          size={64}
          src={data.icon}
          className="d-flex align-item-center justify-item-center custom-avatar-img"
        />
      </div>
      <p className="text-center p-0 m-0">{data.label}</p>
    </Space>
  );
};

export default CategoryAvatar;
