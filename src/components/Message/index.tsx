export default function Message({
  title,
  message,
}: {
  title: string;
  message: string;
}) {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-gray-700">{title}</h2>
        <p className="text-gray-500">{message}</p>
      </div>
    </div>
  );
}
