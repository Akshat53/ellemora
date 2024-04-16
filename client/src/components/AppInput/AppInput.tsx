import React from "react";
import { Form, Input } from "antd";

interface AppInputProps {
  label: string;
  placeholder: string;
  onChange: (value: string) => void;
}

const AppInput: React.FC<AppInputProps> = ({ label, placeholder, onChange }) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <Form.Item label={label}>
      <Input placeholder={placeholder} onChange={handleInputChange} />
    </Form.Item>
  );
};

export default AppInput;
