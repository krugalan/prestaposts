import React from "react";
import { MenuItemType } from ".";
import { ContainerMenuItem, ContainerMenuItemActive } from "../components";
import { useNavigate } from "react-router-dom";

type MenuAdditionalProps = {
  id: number;
  activeItem: number;
  setActiveItem: React.Dispatch<React.SetStateAction<number>>;
};
export const MenuItem = ({
  path,
  menuTitle,
  action,
  id,
  activeItem,
  setActiveItem,
}: MenuItemType & MenuAdditionalProps) => {
  const navigate = useNavigate();
  const itemSelected = id === activeItem;

  const handlePress = () => {
    setActiveItem(id);
    if (path) {
      navigate(path);
    } else if (action) {
      action();
    }
  };
  
  return (
    <>
      {itemSelected ? (
        <ContainerMenuItemActive onClick={handlePress}>
          {menuTitle}
        </ContainerMenuItemActive>
      ) : (
        <ContainerMenuItem onClick={handlePress}>{menuTitle}</ContainerMenuItem>
      )}
    </>
  );
};
