"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { Globe } from "lucide-react";

const LangMenu = () => {
  return (
    <div>
      <NavigationMenu className="">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="hover:bg-yellow-400">
              <Globe size={28} />
            </NavigationMenuTrigger>
            <NavigationMenuContent className="bg-black md:w-[200px] p-6 text-white">
              <ul className="flex flex-col gap-y-4">
                <li className="cursor-pointer">English</li>
                <li className="cursor-pointer">Polish</li>
                <li className="cursor-pointer">German</li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default LangMenu;
