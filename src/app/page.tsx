import { FaultButton } from "../components/FaultButton";
import { GameBoard } from "./GameBoard";




export default function Home() {
  return (
    <main className="flex flex-col p-2 gap-y-4">
      <GameBoard />
    </main>
  );
}
