"use client";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { PhoneCall } from "lucide-react";
import { Label } from "../ui/label";

const ContactUsForm = ({ iscall }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-2 mb-[25px]">
        {/*  <Input
          id="name"
          placeholder="Name"
          className="bg-white"
          {...register("name", { required: true })}
        />
        {errors.name && <span className="text-red-500">Name is required</span>} */}
        <div className="space-y-[6px]">
          <Label className="text-sm text-[#0F172A] font-medium" htmlFor="email">
            Email
          </Label>
          <Input
            id="email"
            placeholder="pietro.schirano@gmail.com"
            type="email"
            className="bg-white"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="text-red-500">Email is required</span>
          )}
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
            placeholder="+98564555"
            type="tel"
            className="bg-white"
            {...register("Contact", { required: true })}
          />
          {errors.Contact && (
            <span className="text-red-500">Contact number is required</span>
          )}
        </div>
        <div className="space-y-[6px]">
          <Label
            className="text-sm text-[#0F172A] font-medium"
            htmlFor="message"
          >
            Message
          </Label>
          <Textarea
            placeholder="Type"
            className="bg-white min-h-[67px]"
            {...register("message", { required: true })}
          />
          {errors.message && (
            <span className="text-red-500">Message is required</span>
          )}
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
          className={`bg-[#1045AD] ${
            !iscall && "hidden"
          }   hover:bg-slate-500" type="submit`}
        >
          <PhoneCall className="h-[20px] w-[20px] mr-[10px]" /> Call us
        </Button>
      </div>
    </form>
  );
};

export default ContactUsForm;
