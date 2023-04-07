import { FaultButton } from "../components/FaultButton";

const Input = ({ special, empty }: { special?: true; empty?: true }) => {
  if (empty) return <div className="h-8 w-8" />;
  return (
    <div className="overflow-hidden rounded-full text-black ring-1 ring-slate-400">
      <input
        type="text"
        pattern="[0-9]*"
        className={`h-8 w-8 text-center ${special ? "bg-yellow-200" : ""}`}
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
      className={`flex w-12 flex-col place-content-center place-items-center gap-y-2 rounded border border-slate-600 p-2  md:w-auto md:flex-row md:gap-x-2 ${className}`}
    >
      {children}
    </div>
  );
};

export default function Home() {
  return (
    <main className="flex flex-col p-2">
      <div className="flex flex-row items-start justify-center gap-x-2 p-2 md:flex-col-reverse md:items-center md:justify-stretch md:gap-y-2">
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
        <Group className="mt-[42px] bg-yellow-500 md:ml-[82px] md:mt-auto">
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
        <Group className="mt-[84px] bg-orange-500 md:ml-[164px] md:mt-auto">
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
      <div className="flex flex-col items-center self-center">
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
