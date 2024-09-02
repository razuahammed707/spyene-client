import * as React from "react";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Fragment } from "react";
import { fetchServices } from "@/shared/helpers/fetch-services";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const items = [
  "Residential",
  "Commercial",
  "Industrial",
  "Solar Panels",
  "Solar Batteries",
];

export const NavMenus = async ({ className }) => {
  const menus = await fetchServices();
  return (
    <NavigationMenu className={cn("", className)}>
      <NavigationMenuList className={className}>
        {items.map((item, i) => (
          <NavigationMenuItem key={i} className="relative">
            <NavigationMenuTrigger className="p-2">
              {item}
            </NavigationMenuTrigger>
            <NavigationMenuContent className="right-0 left-auto">
              {menus?.map((menu) => (
                <Fragment key={menu?.id}>
                  <NavigationMenuLink
                    className={navigationMenuTriggerStyle()}
                    asChild
                  >
                    <Link
                      href={`/services/${menu.attributes.Slug}`}
                      className={cn(" ", className)}
                    >
                      {menu.attributes.Title}
                    </Link>
                  </NavigationMenuLink>
                  <hr />
                </Fragment>
              ))}
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
                asChild
              >
                <Link href="/services">
                  View All <ArrowRight className="ms-2 h-3 w-3" />
                </Link>
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};
