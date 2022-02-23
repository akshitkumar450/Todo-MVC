import React from "react";

function Tab({ tab, activeTab, selectActive }) {
  return (
    <p
      key={tab}
      className={`${tab === activeTab && "activeTab"} pointer`}
      onClick={() => selectActive(tab)}>
      {tab}
    </p>
  );
}

export default Tab;
