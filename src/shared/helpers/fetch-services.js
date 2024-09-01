"use server";
import { config } from "@/config";

export const fetchServices = async () => {
  const reqOptions = {
    headers: {
      Authorization: `Bearer ${process.env.API_TOKEN}`,
    },
  };

  try {
    const response = await fetch(`${config.api}/api/services?populate=*`, reqOptions);
    const data = await response.json();
    return data?.data;
  } catch (error) {
    console.error("Error fetching services:", error);
    return [];
  }
};
