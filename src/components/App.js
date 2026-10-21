import React, { useState } from "react";
import './../styles/App.css';

const Tabs = ({ tabs }) => {
  const [active, setActive] = useState(0);

  return (
    <div>
      <ul>
        {tabs.map((tab, i) => (
          <li
            key={tab.title}
            onClick={() => setActive(i)}
            style={{ cursor: "pointer" }}
          >
            {tab.title}
          </li>
        ))}
      </ul>
      <p>{tabs[active].content}</p>
    </div>
  );
};

const set1 = [
  { title: "Tab 1", content: "Content for Tab 1" },
  { title: "Tab 2", content: "Content for Tab 2" },
  { title: "Tab 3", content: "Content for Tab 3" },
];

const set2 = [
  { title: "Tab A", content: "Content for Tab A" },
  { title: "Tab B", content: "Content for Tab B" },
  { title: "Tab C", content: "Content for Tab C" },
];

const App = () => {
  return (
    <div>
      {/* Do not remove the main div */}
      <Tabs key="set1" tabs={set1} />
      <Tabs key="set2" tabs={set2} />
    </div>
  );
};

export default App;