import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";

const items = [
  {
    title: "What is React?",
    content:
      "React is a Javascript Libary used to create powerful SPA on the go with huge customization capabilities",
  },
  {
    title: "Why use React?",
    content:
      "It gives you the chance to use the latest Modern JS features without worrying of being functional in all browsers, thanks to the Boiler plate that comes with create-react-app",
  },
  {
    title: "How do you use react?",
    content: "You use react by creating components",
  },
];

const options = [
  { label: "The color red", value: "red" },
  { label: "The color green", value: "green" },
  { label: "A shade of blue", value: "blue" },
];

//Setting the pieces of state

const App = () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div className="ui container">
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          onSelectedChange={setSelected}
          selected={selected}
          options={options}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};

export default App;
