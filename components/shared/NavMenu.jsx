"use client";

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";

import Link from "next/link";
import { Globe, Menu } from "lucide-react";

const NavMenu = () => {
  return (
    <div>
      <Menubar className="bg-transparent cursor-pointer hover:bg-yellow-400">
        <MenubarMenu className="bg-transparent focus:bg-transparent cursor-pointer">
          <MenubarTrigger>
            <Menu />
          </MenubarTrigger>
          <MenubarContent className="md:w-[250px] flex flex-col gap-y-3">
            <MenubarItem className="cursor-pointer">Find Locations</MenubarItem>
            <MenubarItem>WU Bank App: New Flow</MenubarItem>

            <MenubarItem>Receiver Details</MenubarItem>

            <MenubarItem>Statistics</MenubarItem>
            <Link href="/real-time">
              <MenubarItem>Real-Time delivery options</MenubarItem>
            </Link>
            <Link href="/real-time">
              <MenubarItem>New Payment Methods</MenubarItem>
            </Link>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  );
};

export default NavMenu;
