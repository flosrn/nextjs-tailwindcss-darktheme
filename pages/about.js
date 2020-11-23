import React from "react";
import Nav from "../components/nav";
import SwitchButton from "../components/switch-button";

export default function IndexPage() {
  return (
    <div className="h-screen dark:bg-gray-900">
      <Nav />
      <div className="py-20">
        <h1 className="text-5xl text-center text-gray-700 dark:text-gray-100">
          About page
        </h1>
        <div className="mt-10 flex justify-center flex-col items-center">
          <SwitchButton />
          <div className="text-center dark:text-gray-100">
            Toogle dark theme
          </div>
        </div>
      </div>
    </div>
  );
}
