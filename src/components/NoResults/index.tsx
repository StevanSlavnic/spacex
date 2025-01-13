export default function NoResults() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-gray-700">
          No Results Found
        </h2>
        <p className="text-gray-500">
          Try adjusting your search or filter to find what you're looking for.
        </p>
      </div>
    </div>
  );
}
