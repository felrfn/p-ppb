export default function Pagination({
  currentPage,
  totalCount,
  pageSize = 3,
  onPageChange,
}) {
  const totalPages = Math.max(1, Math.ceil(totalCount / pageSize));
  if (totalCount === 0) return null;

  const canPrev = currentPage > 1;
  const canNext = currentPage < totalPages;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav
      className="mt-8 flex items-center justify-center gap-2"
      aria-label="Pagination"
    >
      <button
        onClick={() => canPrev && onPageChange(currentPage - 1)}
        disabled={!canPrev}
        className={`px-3 py-2 rounded-lg border text-sm ${canPrev
            ? "border-gray-300 text-gray-700 hover:bg-gray-50"
            : "border-gray-200 text-gray-300 cursor-not-allowed"
          }`}
      >
        Prev
      </button>

      {pages.map((p) => {
        const isActive = p === currentPage;
        return (
          <button
            key={p}
            onClick={() => onPageChange(p)}
            aria-current={isActive ? "page" : undefined}
            className={`min-w-10 px-3 py-2 rounded-lg text-sm border ${isActive
                ? "bg-indigo-600 text-white border-indigo-600"
                : "border-gray-300 text-gray-700 hover:bg-gray-50"
              }`}
          >
            {p}
          </button>
        );
      })}

      <button
        onClick={() => canNext && onPageChange(currentPage + 1)}
        disabled={!canNext}
        className={`px-3 py-2 rounded-lg border text-sm ${canNext
            ? "border-gray-300 text-gray-700 hover:bg-gray-50"
            : "border-gray-200 text-gray-300 cursor-not-allowed"
          }`}
      >
        Next
      </button>
    </nav>
  );
}
