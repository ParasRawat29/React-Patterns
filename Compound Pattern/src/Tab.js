import { createContext, useContext } from "react";

const TabContext = createContext({});

export default function Tab({ currentTab, onChange, children }) {
  return (
    <div>
      <TabContext.Provider value={{ currentTab, onChange }}>
        {children}
      </TabContext.Provider>
    </div>
  );
}

Tab.HeaderContainer = ({ children }) => {
  return <div className="headerContainer">{children}</div>;
};

Tab.Item = ({ label, index }) => {
  const { currentTab, onChange } = useContext(TabContext);
  const handleClick = () => {
    onChange(index);
  };
  return (
    <div
      className={`headerItem ${currentTab === index ? "active" : ""}`}
      onClick={() => handleClick(index)}
    >
      {label}
    </div>
  );
};

Tab.ContentContainer = ({ children }) => {
  return <div className="contentContainer">{children}</div>;
};

Tab.ContentItem = ({ children, index }) => {
  const { currentTab } = useContext(TabContext);
  return currentTab === index ? (
    <div className="contentItem">{children}</div>
  ) : null;
};
