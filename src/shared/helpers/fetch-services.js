import { config } from "@/config";
import axios from "axios";

export const fetchServices = async () => {
  const reqOptions = {
    headers: {
      Authorization: `Bearer ${process.env.API_TOKEN}`,
    },
  };

  try {
    const response = await axios.get(`${config.api}/api/services?populate=*`, reqOptions);
    return response?.data?.data;
  } catch (error) {
    console.error("Error fetching services:", error);
    return [];
  }
};
