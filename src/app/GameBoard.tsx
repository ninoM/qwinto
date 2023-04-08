"use client";

import { FaultButton } from "~/components/FaultButton";
import { Group } from "./Group";
import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "~/components/AlertDialog";

const initialState = {
  group1: ["", "", "", undefined, "", "", "", "", "", ""],
  group2: ["", "", "", "", "", undefined, "", "", "", ""],
  group3: ["", "", "", "", undefined, "", "", "", "", ""],
};

type ACTION_TYPE =
  | {
      type: "set";
      payload: {
        groupName: keyof typeof initialState;
        index: number;
        value: string;
      };
    }
  | { type: "reset" };

const reducer = (state: typeof initialState, action: ACTION_TYPE) => {
  switch (action.type) {
    case "set":
      let clonedGroup = [...state[action.payload.groupName]];
      clonedGroup[action.payload.index] = action.payload.value;
      return { ...state, [action.payload.groupName]: clonedGroup };
    case "reset":
      return initialState;

    default:
      return state;
  }
};

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  special?: boolean;
  empty?: boolean;
};

const Input = ({ special, empty, ...rest }: InputProps) => {
  if (empty) return <div className="h-8 w-8" />;
  return (
    <div
      style={{
        clipPath: special
          ? "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)"
          : undefined,
      }}
      className={`overflow-hidden text-black ring-1 ring-slate-400 ${
        special ? "" : "rounded-full"
      }`}
    >
      <input
        type="text"
        pattern="[0-9]*"
        className={`h-8 w-8 text-center ${special ? "bg-teal-100" : ""}`}
        {...rest}
      />
    </div>
  );
};

const calculateScore = (
  boardState: typeof initialState,
  faults: Array<boolean>
) => {
  const calculatedBoard = Object.keys(boardState).map((groupName) => {
    let filteredGroup = boardState[
      groupName as keyof typeof initialState
    ].filter((x) => x);
    if (filteredGroup.length === 9) {
      return parseInt(filteredGroup.at(-1) as string);
    } else {
      return filteredGroup.length;
    }
  });

  return (
    calculatedBoard.reduce((acc, curr) => curr + acc, 0) -
    faults.filter((x) => x).length * 5
  );
};

export const GameBoard = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const [faults, setFaults] = React.useState([false, false, false, false]);

  const handleInputChange = (
    value: string,
    {
      groupName,
      index,
    }: { groupName: keyof typeof initialState; index: number }
  ) => {
    dispatch({ type: "set", payload: { groupName, index, value: value } });
  };

  return (
    <>
      <div className="flex flex-row items-start justify-center gap-x-2 p-2 landscape:flex-col-reverse landscape:items-center landscape:justify-stretch landscape:gap-y-2">
        <Group className="bg-violet-600">
          {state.group3.map((value, index) => (
            <Input
              key={index}
              empty={value === undefined}
              special={index === 2 || index === 9}
              value={value}
              onChange={(e) => {
                handleInputChange(e.target.value, {
                  groupName: "group3",
                  index,
                });
              }}
            />
          ))}
        </Group>
        <Group className="mt-[42px] bg-yellow-500 landscape:ml-[82px] landscape:mt-auto">
          {state.group2.map((value, index) => (
            <Input
              key={index}
              empty={value === undefined}
              special={index === 8}
              value={value}
              onChange={(e) => {
                handleInputChange(e.target.value, {
                  groupName: "group2",
                  index,
                });
              }}
            />
          ))}
        </Group>
        <Group className="mt-[84px] bg-orange-500 landscape:ml-[164px] landscape:mt-auto">
          {state.group1.map((value, index) => (
            <Input
              key={index}
              empty={value === undefined}
              special={index === 1 || index === 5}
              value={value}
              onChange={(e) => {
                handleInputChange(e.target.value, {
                  groupName: "group1",
                  index,
                });
              }}
            />
          ))}
        </Group>
      </div>
      <div className="flex flex-col items-center self-center">
        <p>FAULTS</p>
        <div className="flex gap-x-2">
          {faults.map((activated, index) => (
            <FaultButton
              key={index}
              activated={activated}
              onClick={(fault) => {
                setFaults((currFaults) => {
                  let clonedFaults = [...currFaults];
                  clonedFaults[index] = fault;
                  return clonedFaults;
                });
              }}
            />
          ))}
        </div>
      </div>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <button
            className="self-center rounded-sm border border-slate-400 bg-green-900 p-1 hover:bg-green-800"
            // onClick={handleCalculateClick}
          >
            Calculate Score
          </button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>SCORE</AlertDialogTitle>
            <AlertDialogDescription>{`You got ${calculateScore(
              state,
              faults
            )}`}</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => {
                dispatch({ type: "reset" });
                setFaults([false, false, false, false]);
              }}
            >
              Restart
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};
