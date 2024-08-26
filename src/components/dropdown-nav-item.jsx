"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ArrowRight } from "lucide-react";
import { Fragment, useState } from "react";
import Link from "next/link";

export function DropdownNavItem(props) {
  const [open, setOpen] = useState(false);

  return (
    <DropdownMenu open={open}>
      <div /* onMouseLeave={handleMouseLeave} */>
        <DropdownMenuTrigger
          onMouseEnter={() => setOpen(true)}
          className="outline-none"
        >
          {props.title}
        </DropdownMenuTrigger>
        <DropdownMenuContent
          onMouseLeave={() => setOpen(false)}
          className={`w-56 mt-3 `}
        >
          {props?.menus?.map((menu) => (
            <Fragment key={menu?.id}>
              <DropdownMenuItem>
                <Link href="#" className="hover:text-red-600">
                  {menu.attributes.Title}
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
            </Fragment>
          ))}
          <DropdownMenuItem>
            <Link href="#" className="hover:text-red-600">
              View All
            </Link>
            <ArrowRight className="ms-2 h-3 w-3" />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </div>
    </DropdownMenu>
  );
}
