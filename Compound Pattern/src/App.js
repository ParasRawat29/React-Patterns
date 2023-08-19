import { useState } from "react";
import "./styles.css";
import Tab from "./Tab";

export default function App() {
  const [currentTabIndex, setCurrentTabIndex] = useState(1);

  const handleChange = (index) => {
    console.log(index);
    setCurrentTabIndex(index);
  };

  return (
    <div className="App">
      <Tab currentTab={currentTabIndex} onChange={handleChange}>
        <Tab.HeaderContainer>
          <Tab.Item label="Tab 1" index={1} />
          <Tab.Item label="Tab 2" index={2} />
          <Tab.Item label="Tab 3" index={3} />
        </Tab.HeaderContainer>
        <Tab.ContentContainer>
          <Tab.ContentItem index={1}>
            <h1>Tab Content 1</h1>
          </Tab.ContentItem>
          <Tab.ContentItem index={2}>
            <h1>Tab Content 2</h1>
          </Tab.ContentItem>
          <Tab.ContentItem index={3}>
            <h1>Tab Content 3</h1>
          </Tab.ContentItem>
        </Tab.ContentContainer>
      </Tab>
    </div>
  );
}
