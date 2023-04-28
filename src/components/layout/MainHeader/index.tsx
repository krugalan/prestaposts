import React, { useState } from "react";
import { ContainerHeader } from "../components";
import { PATH_HOME, PATH_POSTS } from "../../../constants";
import { logoutService } from "../../../modules/auth/services";
import { useDispatch } from "react-redux";
import { MenuItem } from "./MenuItem";

export type MenuItemType = {
  path?: string;
  menuTitle: string;
  action?: () => void;
};

export const MainHeader = () => {
  const dispatch = useDispatch();
  const [activeItem, setActiveItem] = useState(0);
  const menuItems: MenuItemType[] = [
    {
      path: PATH_HOME,
      menuTitle: "HOME",
    },
    {
      path: PATH_POSTS,
      menuTitle: "POSTS",
    },
    {
      menuTitle: "LOGOUT",
      action: () => logoutService(dispatch),
    },
  ];

  return (
    <ContainerHeader>
      {menuItems.map((item, id) => (
        <MenuItem
          key={id}
          id={id}
          path={item.path}
          menuTitle={item.menuTitle}
          action={item.action}
          activeItem={activeItem}
          setActiveItem={setActiveItem}
        />
      ))}
    </ContainerHeader>
  );
};
