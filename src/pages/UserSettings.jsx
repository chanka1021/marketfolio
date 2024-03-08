import React from "react";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserLinks } from "../data/userLinks";
import Settings from "../components/User settings/Settings";
import MyListings from "../components/Listings/MyListings";

function UserSettings() {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (index) => {
    setSelectedTab(index);
    navigate(UserLinks[index].link);
  };

  return (
    <div className="w-full xl:px-60 md:px-20 items-center text-lg gap-2 justify-between py-4">
      <Tabs index={selectedTab} onChange={handleTabChange}>
        <TabList>
          {UserLinks.map((link, index) => (
            <Tab key={index}>
              <a className=" text-xl pr-2">{link.icon}</a> {link.name}
            </Tab>
          ))}
        </TabList>
        <TabPanels>
          <TabPanel >
            <MyListings />
          </TabPanel>
          <TabPanel >
            <div>2</div>
          </TabPanel>
          <TabPanel >
            <Settings />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}

export default UserSettings;
