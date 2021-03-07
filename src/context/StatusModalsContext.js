import React, { createContext, useState } from "react";

export const StatusModalsContext = createContext({});

export const StatusModalsProvider = ({ children }) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isCardModalOpen, setIsCardModalOpen] = useState(false);
  const [idChosenCard, setIdChosenCard] = useState(null);
  const [typeOfEvent, setTypeOfEvent] = useState('');
  return (
    <StatusModalsContext.Provider
      value={{
        isDeleteModalOpen,
        setIsDeleteModalOpen,
        isCardModalOpen,
        setIsCardModalOpen,
        idChosenCard,
        setIdChosenCard,
        typeOfEvent,
        setTypeOfEvent
      }}
    >
      {children}
    </StatusModalsContext.Provider>
  );
};
