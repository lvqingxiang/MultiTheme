import React from "react";
import { Button, DatePicker } from "antd";

import "./App.less";
import "./law.css";
import "./theme/index.css";

import ThemeChange from "./ThemeChange";

const AppClass = () => {
  return (
    <>
      <div className="app">
        <p>文本</p>
        <button>按钮</button>
      </div>
      <br />
      <div className="antd-app">
        <Button type="link">组件Button</Button>
        <DatePicker />
      </div>
    </>
  );
};

const App = () => {
  const [theme, setTheme] = React.useState("default");
  return (
    <div className={theme}>
      <ThemeChange value={theme} onChange={setTheme} />
      <AppClass />
    </div>
  );
};

export default App;
