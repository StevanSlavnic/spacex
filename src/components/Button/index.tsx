export default function Button({
  children,
  onClick,
  className,
  ...rest
}: {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
  [x: string]: any;
}) {
  return (
    <button className={className} onClick={onClick} {...rest}>
      {children}
    </button>
  );
}
