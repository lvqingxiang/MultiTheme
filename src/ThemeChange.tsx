import React from "react";
import { Radio } from "antd";

const ThemeChange: React.FC<{
  value: string;
  onChange: (value: string) => void;
}> = ({ value, onChange }) => {
  return (
    <Radio.Group
      optionType="button"
      buttonStyle="solid"
      value={value}
      options={[
        { label: "default", value: "default" },
        { label: "light", value: "light" },
        { label: "dark", value: "dark" },
      ]}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default ThemeChange;
