import React from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";

const items = [
  {
    title: "React",
    content: "React is a frontend Javascript framework",
  },
  {
    title: "Vue",
    content: "React is a frontend Javascript framework",
  },
  {
    title: "Angular",
    content: "React is a frontend Javascript framework",
  },
];
export default () => {
  return (
    <div>
      <Search />
    </div>
  );
};
