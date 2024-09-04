export const getServicesByTitle = (title) => {
  const servicesMap = {
    Residential: residentials,
    Industrial: industrials,
    Commercial: commercials,
    "Solar panels": solarpanels,
    "Solar batteries": solarbatteries,
  };

  return servicesMap[title] || [];  
};
