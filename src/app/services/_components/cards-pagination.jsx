import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const CardsPagination = ({totalPages, goToPreviousPage, goToNextPage, goToPage, currentPage, }) => {
  return (
    <Pagination>
      <PaginationContent className="flex justify-between w-full">
        <PaginationItem>
          <PaginationPrevious
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
          />
        </PaginationItem>

        <div className="flex">
          {[...Array(totalPages)].map((_, index) => (
            <PaginationItem key={index}>
              <PaginationLink
                isActive={currentPage === index + 1}
                onClick={() => goToPage(index + 1)}
              >
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
          {totalPages > 2 && (
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
          )}
        </div>

        <PaginationItem>
          <PaginationNext
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};
export default CardsPagination;
