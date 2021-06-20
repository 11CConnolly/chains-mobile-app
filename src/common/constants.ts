import { IChain } from "../components/chains/Chain";

export const InitialChains: IChain[] = [
  {
    title: "Morning",
    index: 0,
    habits: [
      {
        text: "Shower",
        index: 0,
        isComplete: true,
        tryMarkHabit: undefined,
      },
      {
        text: "Make bed",
        index: 1,
        isComplete: true,
        tryMarkHabit: undefined,
      },
      {
        text: "Meditate",
        index: 2,
        isComplete: true,
        tryMarkHabit: undefined,
      },
    ],
    isComplete: false,
  },
  {
    title: "Evening Routine",
    index: 1,
    habits: [
      {
        text: "Journal",
        index: 0,
        isComplete: false,
        tryMarkHabit: undefined,
      },
      {
        text: "Read 20 minutes",
        index: 1,
        isComplete: false,
        tryMarkHabit: undefined,
      },
    ],
    isComplete: false,
  },
  {
    title: "Exercise",
    index: 2,
    habits: [
      {
        text: "Dynamic Stretch",
        index: 0,
        isComplete: false,
        tryMarkHabit: undefined,
      },
      {
        text: "Run",
        index: 1,
        isComplete: false,
        tryMarkHabit: undefined,
      },
      {
        text: "Mid body",
        index: 2,
        isComplete: false,
        tryMarkHabit: undefined,
      },
      {
        text: "Static stretch",
        index: 3,
        isComplete: false,
        tryMarkHabit: undefined,
      },
    ],
    isComplete: false,
  },
];
