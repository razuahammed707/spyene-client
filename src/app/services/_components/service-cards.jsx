"use client";
import React, { useState } from "react";
import ServiceCard from "./service-card";
import CardsPagination from "./cards-pagination";

const ITEMS_PER_PAGE = 10;

const ServiceCards = ({ services }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(services.length / ITEMS_PER_PAGE);

  const getPaginatedServices = () => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE;
    return services.slice(start, end);
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
        {getPaginatedServices().map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
      <CardsPagination
        totalPages={totalPages}
        goToPreviousPage={goToPreviousPage}
        goToNextPage={goToNextPage}
        goToPage={goToPage}
        currentPage={currentPage}
      />
    </>
  );
};

export default ServiceCards;
