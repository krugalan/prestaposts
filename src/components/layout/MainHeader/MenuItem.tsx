import React from "react";
import { MenuItemType } from ".";
import { ContainerMenuItem } from "../components";

export const MenuItem = (item: MenuItemType) => {
  const { path, menuTitle, action } = item;

  return <ContainerMenuItem>{menuTitle}</ContainerMenuItem>;
};
