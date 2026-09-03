"use client";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { PhoneCall } from "lucide-react";
import { Label } from "../ui/label";
import toast from "react-hot-toast";

const ContactUsForm = ({ iscall }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      // TODO: Replace 'YOUR_FORMSPREE_ID' with your actual Formspree endpoint ID (e.g., 'mqazowry')
      const response = await fetch("https://formspree.io/f/YOUR_FORMSPREE_ID", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("Thank you for your message. We will get back to you soon!");
        reset();
      } else {
        const result = await response.json();
        toast.error(result.error || "Oops! There was a problem submitting your form");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error occurred while submitting the form!");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-2 mb-[25px]">
        <div className="space-y-[6px]">
          <Label className="text-sm text-[#0F172A] font-medium" htmlFor="email">
            Email
          </Label>
          <Input
            id="email"
            placeholder="Your Email"
            type="email"
            className="bg-white"
            {...register("email", { required: true })}
          />
        </div>

        <div className="space-y-[6px]">
          <Label
            className="text-sm text-[#0F172A] font-medium"
            htmlFor="contact"
          >
            Contact
          </Label>
          <Input
            id="contact"
            placeholder="Your Contact"
            type="tel"
            className="bg-white"
            {...register("contact", { required: true })}
          />
        </div>

        <div className="space-y-[6px]">
          <Label
            className="text-sm text-[#0F172A] font-medium"
            htmlFor="message"
          >
            Message
          </Label>
          <Textarea
            placeholder="Leave Message..."
            className="bg-white min-h-[67px]"
            {...register("message", { required: true })}
          />
        </div>
      </div>
      <div className="flex space-x-2">
        <Button
          className="bg-[#1045AD] w-full hover:bg-slate-500"
          type="submit"
        >
          Submit
        </Button>
        <Button
          className={`bg-[#1045AD] ${!iscall && "hidden"} hover:bg-slate-500`}
          type="button"
        >
          <PhoneCall className="h-[20px] w-[20px] mr-[10px]" /> Call us
        </Button>
      </div>
    </form>
  );
};

export default ContactUsForm;
