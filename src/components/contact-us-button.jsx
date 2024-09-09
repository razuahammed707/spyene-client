import React from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { Phone } from "lucide-react";

const ContactUsButton = ({ contact = "+61 458 511 460", className }) => {
  return (
    <Button
      asChild
      className={cn(
        ` bg-orange-400
         text-sm font-medium flex items-center`,
        className
      )}
    >
      <a href={`tel:${contact}`}>
        <Phone className="h-[20px] hidden xs:block w-[20px] mr-[10px]" />
        Call us: {contact}
      </a>
    </Button>
  );
};

export default ContactUsButton;
