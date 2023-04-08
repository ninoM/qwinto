export const Group = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={`flex w-12 flex-col place-content-center place-items-center gap-y-2 rounded border border-slate-600 p-2  landscape:w-auto landscape:flex-row landscape:gap-x-2 ${className}`}
    >
      {children}
    </div>
  );
};
