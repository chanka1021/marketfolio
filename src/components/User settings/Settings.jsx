import React, { useState } from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { BsChevronDoubleRight } from "react-icons/bs";
import UserInfos from "./UserInfos";

function Settings() {
    const navigate = useNavigate();
    const [selectedTab, setSelectedTab] = useState(0);
    
const handleTabChange = (index) => {
    setSelectedTab(index);
    navigate(`/account/settings/${index}`);
}
  return (

    <div className="w-full ">
        <Tabs orientation="vertical">
          <TabList height={'fit-content'} >
            <Tab index={1}>
              <div className="flex items-center  "> Edit your information <BsChevronDoubleRight className="ml-2 text-black" /></div>
            </Tab >
            <Tab index={2}>
              <div className="flex items-center "> Change Your password <BsChevronDoubleRight className="ml-2 text-black" /></div>
            </Tab >
            <Tab index={3}>
              <div className="flex items-center "> Paramètres de notification <BsChevronDoubleRight className="ml-2 text-black" /></div>
            </Tab >
          </TabList>
            <TabPanels>
                <TabPanel >
                <UserInfos/>
                </TabPanel>
                <TabPanel>
                <p>Two</p>
                </TabPanel>
                <TabPanel>
                <p>Three</p>
                </TabPanel>
            </TabPanels>
        </Tabs>
    </div>
  );
}

export default Settings;
