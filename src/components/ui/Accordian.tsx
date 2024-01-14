import React, { useState, ReactNode } from "react";

// AccordionItem component
type AccordionItemProps = {
  title: string;
  children: ReactNode;
};

const AccordionItem: React.FC<AccordionItemProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleAccordion = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="mb-4">
      <div
        onClick={handleAccordion}
        className="cursor-cell bg-blue-500/70 text-white p-2 rounded"
      >
        <strong className="text-red-600 ">{title}</strong>
      </div>
      {isOpen && <div className="bg-gray-200/90 p-3 rounded">{children}</div>}
    </div>
  );
};

// Accordion component
type AccordionProps = {
  children: ReactNode;
};
const Accordion: React.FC<AccordionProps> = ({ children }) => {
  return <div >{children}</div>;
};

export {Accordion,  AccordionItem };
