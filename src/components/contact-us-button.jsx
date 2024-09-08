import React from "react";
import { Button } from "./ui/button";
import { PhoneCall } from "lucide-react";
import { cn } from "@/lib/utils";

const ContactUsButton = ({
  contact = "+61 458 511 460",
  color = "#EF4444",
  className,
}) => {
  return (
    <Button
      className={cn(
        `bg-[${color}] text-sm font-medium flex items-center`,
        className
      )}
    >
      <PhoneCall className="h-[20px] hidden xs:block w-[20px] mr-[10px]" />
      Call us: {contact}
    </Button>
  );
};

export default ContactUsButton;
