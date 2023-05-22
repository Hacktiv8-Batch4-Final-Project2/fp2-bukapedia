import React, { useState, createContext } from "react";

export const SidebarContext = createContext();
const SidebarProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <SidebarContext.Provider
      value={{ isSidebarOpen, setIsSidebarOpen, handleCloseSidebar }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarProvider;
