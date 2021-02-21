import React, { useState } from "react";

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onTittleClicked = (index) => {
    console.log("Title Clicked", index);
    setActiveIndex(index);
  };

  const renderedItems = items.map((item, i) => {
    const active = i === activeIndex ? "active" : "";
    return (
      <React.Fragment key={item.title}>
        <div onClick={() => onTittleClicked(i)} className={`title ${active}`}>
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });
  return <div className="ui styled accordion">{renderedItems}</div>;
};

export default Accordion;
