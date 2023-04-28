import React from "react";
import { MenuItemType } from ".";
import { ContainerMenuItem } from "../components";
import { useNavigate } from "react-router-dom";

export const MenuItem = (item: MenuItemType) => {
  const { path, menuTitle, action } = item;
  const navigate = useNavigate();

  const handlePress = () => {
    if (path) {
      navigate(path);
    } else if (action) {
      action();
    }
  };
  return (
    <ContainerMenuItem onClick={handlePress}>{menuTitle}</ContainerMenuItem>
  );
};
