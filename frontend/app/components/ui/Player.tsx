import { User } from "lucide-react";

type PlayerPosition = 1 | 2 | 3 | 4;
type playerStatus = "me" | "otherPlayer";

interface PlayerProps {
  position: PlayerPosition;
  status: playerStatus;
  color: string;
  isDealer: boolean;
  name: string;
}

export const Player = ({
  position,
  status,
  color,
  isDealer,
  name,
}: PlayerProps) => {
  const positionClasses: Record<PlayerPosition, string> = {
    1: "absolute bottom-25 left-1/2 -translate-x-1/2",
    2: "absolute left-25 top-1/2 -translate-y-1/2",
    3: "absolute right-25 top-1/2 -translate-y-1/2",
    4: "absolute top-25 left-1/2 -translate-x-1/2",
  };

  const colors: any = {
    red: "bg-red-400",
    green: "bg-green-400",
    blue: "bg-blue-400",
    yellow: "bg-yellow-400",
  };
  console.log(isDealer);

  return (
    <div
      className={`absolute ${status === "me" ? "bottom-25 left-1/8" : positionClasses[position]}`}
    >
      {isDealer && (
        <span className="absolute right-3 font-bold text-white rounded-full w-fit px-1.5 bg-red-500">
          D
        </span>
      )}
      <div
        className={`border border-green-400 w-fit p-8 ${colors[color]}  rounded-full`}
      >
        <User className="w-12 h-12 text-white" />
      </div>
      <h3 className="text-white text-center">{name}</h3>
    </div>
  );
};
