export default function Spinner() {
  return (
    <div data-testid="spinner" className="flex justify-center items-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-800"></div>
    </div>
  );
}
