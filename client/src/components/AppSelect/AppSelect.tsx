import React from "react";
import { Select } from "antd";

interface Option {
  label: string;
  value: string;
}

interface AppSelectProps {
  options: Option[];
  placeholder: string;
  onSearch: (value: string) => void;
  onChange: (value: string) => void;
  label : string
}

const filterOption = (
  input: string,
  option?: { label: string; value: string }
) => (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

const AppSelect: React.FC<AppSelectProps> = ({
  options,
  placeholder,
  onSearch,
  onChange,
  label,
}) => (
  <div>
    <label>{label} : &nbsp;</label>
    <Select
      showSearch
      placeholder={placeholder}
      optionFilterProp="children"
      onChange={onChange}
      onSearch={onSearch}
      filterOption={filterOption}
      style={{ width: 200 }}
      options={options}
    />
  </div>
);

export default AppSelect;
