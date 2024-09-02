"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calculator } from "lucide-react";
import { Zap } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Factory } from "lucide-react";
import { House } from "lucide-react";
import { usePathname } from "next/navigation";

export const CategoryFilterTabs = () => {
  const pathname = usePathname();
  const service = pathname.split('/').pop()
  return (
    <Tabs
      onValueChange={(e) => console.log(e)}
      defaultValue="residential"
      className="w-full flex flex-col items-center"
    >
      {JSON.stringify(service)}
      <TabsList className="h-[60px] w-full bg-[#1E293B] rounded-none p-0">
        <div className="w-full h-full max-w-[928px] grid  grid-cols-5 ">
          <TabsTrigger
            value="residential"
            className=" px-4 py-3 text-white font-medium data-[state=active]:bg-[#1045AD] data-[state=active]:text-white"
          >
            <House className="h-[20px] w-[20px] mr-2 " /> Residential
          </TabsTrigger>
          <TabsTrigger
            value="industrial"
            className=" px-4 py-3 text-white font-medium data-[state=active]:bg-[#1045AD] data-[state=active]:text-white"
          >
            <Factory className="h-[20px] w-[20px] mr-2" /> Industrial
          </TabsTrigger>
          <TabsTrigger
            value="commercial"
            className=" px-4 py-3 text-white font-medium data-[state=active]:bg-[#1045AD] data-[state=active]:text-white"
          >
            <Calculator className="h-[20px] w-[20px] mr-2" /> Commercial
          </TabsTrigger>
          <TabsTrigger
            value="solar-panels"
            className=" px-4 py-3 text-white font-medium data-[state=active]:bg-[#1045AD] data-[state=active]:text-white"
          >
            <Zap className="h-[20px] w-[20px] mr-2" /> Solar panels
          </TabsTrigger>
          <TabsTrigger
            value="solar-bateries"
            className=" px-4 py-3 text-white font-medium data-[state=active]:bg-[#1045AD] data-[state=active]:text-white"
          >
            <BatteryCharging className="h-[20px] w-[20px] mr-2" />
            Solar batteries
          </TabsTrigger>
        </div>
      </TabsList>
      <TabsContent value="residential" className="bg-white">
        <Card>
          <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>
              Make changes to your account here. Click save when you're done.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">Name</Label>
              <Input id="name" defaultValue="Pedro Duarte" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Username</Label>
              <Input id="username" defaultValue="@peduarte" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save changes</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="commercial">
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>
              Change your password here. After saving, you'll be logged out.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current">Current password</Label>
              <Input id="current" type="password" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">New password</Label>
              <Input id="new" type="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save password</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
};
