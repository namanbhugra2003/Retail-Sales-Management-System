export default function Pagination({ query, setQuery }) {
  const totalPages = 6;

  return (
    <div className="pagination-numbers">
      {Array.from({ length: totalPages }, (_, i) => {
        const page = i + 1;

        return (
          <span
            key={page}
            className={`page-number ${query.page === page ? "active" : ""}`}
            onClick={() => setQuery({ ...query, page })}
          >
            {page}
          </span>
        );
      })}
    </div>
  );
}
