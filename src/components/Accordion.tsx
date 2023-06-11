/* eslint-disable indent */
import React, { useState } from "react";
import { AcordionData } from "./data/LanguagesType";
import { AccordionItem } from "./AccordionItem";
import "./AccordionItem.css";
export function Accordion({
  items,
}: {
  items: Array<AcordionData>;
}): JSX.Element {
  const [currentIndex, setCurrentIndex] = useState<number>(-1);
  const btnOnClick = (index: number) => {
    setCurrentIndex((currentVal) => (currentVal !== index ? index : -1));
  };
  return (
    <ul className="accordion">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          data={item}
          isOpen={index === currentIndex}
          btnOnClick={() => btnOnClick(index)}
        />
      ))}
    </ul>
  );
}
