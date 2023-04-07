import { FaultButton } from "../components/FaultButton";

const Input = ({ special, empty }: { special?: true; empty?: true }) => {
  if (empty) return <div className="w-8 h-8" />;
  return (
    <div className="rounded-full text-black ring-1 ring-slate-400 overflow-hidden">
      <input
        type="text"
        pattern="[0-9]*"
        className={`w-8 h-8 text-center ${special ? "bg-yellow-200" : ""}`}
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
    <main className="flex flex-col p-2">
      <div className="flex flex-row items-start justify-center gap-x-2 p-2">
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
        <Group className="mt-[42px] bg-yellow-500">
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
        <Group className="mt-[84px] bg-orange-500">
          <Input />
          <Input special />
          <Input />
          <Input empty />
          <Input />
          <Input special />
          <Input />
          <Input />
          <Input />
          <Input />
        </Group>
      </div>
      <div className="self-center flex items-center flex-col">
        <p>FAULTS</p>
        <div className="flex gap-x-2">
          <FaultButton />
          <FaultButton />
          <FaultButton />
          <FaultButton />
        </div>
      </div>
    </main>
  );
}
