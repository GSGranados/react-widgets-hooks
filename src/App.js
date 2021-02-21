import React from "react";
//import Accordion from "./components/Accordion";
import Search from "./components/Search";

/*const items = [
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
*/
const App = () => {
  return (
    <div className="ui container">
      <Search />
    </div>
  );
};

export default App;
