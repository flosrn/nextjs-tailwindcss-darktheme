import React, { useState } from "react";
import Nav from "../components/nav";
import SwitchButton from "../components/switch-button";

export default function IndexPage() {
  const [switchValue, setSwitchValue] = useState(false);

  const toggleDarkMode = (switchValue) => {
    const theme = switchValue ? "dark" : "light";
    const currentTheme = document.querySelector("html").classList.value;
    document.querySelector("html").classList.replace(currentTheme, theme);
  };

  const handleSwitch = () => {
    toggleDarkMode(!switchValue);
    setSwitchValue(!switchValue);
  };

  return (
    <div>
      <Nav />
      <div className="py-20 dark:bg-gray-900">
        <h1 className="text-5xl text-center text-gray-700 dark:text-gray-100">
          Next.js + Tailwind CSS 2.0
        </h1>
        <div className="flex justify-center flex-col items-center">
          <SwitchButton
            switchValue={switchValue}
            switchHandler={handleSwitch}
          />
          <div className="text-center dark:text-gray-100">
            Toogle dark theme
          </div>
        </div>
      </div>
    </div>
  );
}
