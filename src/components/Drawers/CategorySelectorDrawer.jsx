import React from "react";
import { Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Button } from "@chakra-ui/react";
import { Categories } from './../../data/categories';

function CategorySelectorDrawer({ isOpen, onClose, finalFocusRef, handleCategoryClick }) {
  return (
    <Drawer isOpen={isOpen} onClose={onClose} finalFocusRef={finalFocusRef} size={'sm'}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader borderBottomWidth={1}>Select a category</DrawerHeader>
        <DrawerBody >
          {Categories.map((category) =>
            category.childrens ? (
              <Accordion allowToggle key={category.id}>
                <AccordionItem>
                  <h2>
                    <AccordionButton w={"100%"} justifyContent={"start"}>
                      <div className="flex items-center gap-2 font-semibold">
                        <a style={{ color: `${category.color}` }} className="text-xl pr-2 ">
                          {category.icon}
                        </a>
                        {category.name}
                      </div>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel>
                    {category.childrens.map((child) => (
                      <Button
                        bg={"white"}
                        padding={"10px 20px"}
                        justifyContent={"start"}
                        w={"100%"}
                        onClick={() => handleCategoryClick(category, child)}
                        leftIcon={
                          <a style={{ color: `${category.color}` }} className="text-xl pr-2">
                            {child.icon}
                          </a>
                        }
                        key={child.id}
                      >
                        {child.name}
                      </Button>
                    ))}
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            ) : (
              <Button
                w={"100%"}
                justifyContent={"start"}
                bg={"white"}
                onClick={() => handleCategoryClick(category)}
                leftIcon={
                  <a style={{ color: `${category.color}` }} className="text-xl pr-2">
                    {category.icon}
                  </a>
                }
                key={category.id}
              >
                {category.name}
              </Button>
            )
          )}
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}

export default CategorySelectorDrawer;
