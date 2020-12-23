import React, { useState } from "react";
import Translate from "./components/Translate";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";

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

const options = [
  {
    label: "The Color Red",
    value: "red",
  },
  {
    label: "The Color Blue",
    value: "blue",
  },
  {
    label: "The Color Green",
    value: "green",
  },
];

export default () => {
  return (
    <div>
      <Translate />
    </div>
  );
};
