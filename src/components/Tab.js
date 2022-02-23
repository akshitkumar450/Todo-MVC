import React from "react";

function Tab({ tab, activeTab, setActiveTab }) {
  return (
    <p
      key={tab}
      className={`${tab === activeTab && "activeTab"} pointer`}
      onClick={() => setActiveTab(tab)}>
      {tab}
    </p>
  );
}

export default Tab;
