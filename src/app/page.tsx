const Input = ({ special, empty }: { special?: true; empty?: true }) => {
  if (empty) return <div className="w-8 h-8" />;
  return (
    <div className="rounded-full text-black outline outline-1 outline-slate-400 overflow-hidden">
      <input
        type="text"
        pattern="[0-9]*"
        className={`w-8 h-8 text-center ${
          special ? "bg-yellow-200" : ""
        }`}
      />
    </div>
  );
};

const Group = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={`border w-12 border-slate-600 rounded py-2 flex place-items-center place-content-center flex-col gap-y-2 ${className}`}
    >
      {children}
    </div>
  );
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-row items-center justify-center gap-x-2 p-2">
      <Group className="bg-violet-600">
        <Input />
        <Input />
        <Input special />
        <Input />
        <Input empty />
        <Input />
        <Input />
        <Input />
        <Input />
        <Input special />
      </Group> 
       <Group className="mt-[85px] bg-yellow-500">
        <Input />
        <Input />
        <Input />
        <Input />
        <Input />
        <Input empty />
        <Input />
        <Input special />
        <Input />
        <Input />
      </Group>
       <Group className="mt-[170px] bg-orange-500">
        <Input />
        <Input special/>
        <Input />
        <Input empty />
        <Input />
        <Input special />
        <Input />
        <Input />
        <Input />
        <Input />
      </Group>
    </main>
  );
}
