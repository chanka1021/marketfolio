import React, { useState } from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { BsChevronDoubleRight } from "react-icons/bs";
import UserInfos from "./UserInfos";
import UserPW from "./UserPW";

function Settings() {
  const indexes = [
    {
      index: "infos",
      title: "Edit your information",
      component: <UserInfos />,
    },
    {
      index: "pw",
      title: "Change Your password",
      component: <UserPW />,
    },
    {
      index: "notif",
      title: "Notification Settings",
      component: <p>Notification Settings</p>,
    },
  ];

  const defaultTabIndex = indexes.findIndex(tab => tab.index === 'infos');
  const [selectedTab, setSelectedTab] = useState(defaultTabIndex);

  const handleTabChange = (index) => {
    setSelectedTab(index);
  };

  return (
    <div className="w-full">
      <Tabs orientation="vertical" index={selectedTab} onChange={handleTabChange}>
        <TabList height={"fit-content"}>
          {indexes.map((tab, index) => (
            <Tab key={tab.index}>
              <div className="flex items-center">
                {tab.title}
                <BsChevronDoubleRight className="ml-2 text-black" />
              </div>
            </Tab>
          ))}
        </TabList>
        <TabPanels>
          {indexes.map((tab) => (
            <TabPanel>
              {tab.component}
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </div>
  );
}

export default Settings;
