export interface Template {
  title: string;
  columns: Column[];
}

interface Column {
  title: string;
  color: string;
}

export const templates: Template[] = [
  {
    title: "Mad Sad Glad",
    columns: [
      {
        title: "Mad",
        color: "#f44336",
      },
      {
        title: "Sad",
        color: "#e91e63",
      },
      {
        title: "Glad",
        color: "#9c27b0",
      },
    ],
  },
  {
    title: "Start Stop Continue",
    columns: [
      {
        title: "Start",
        color: "#2196f3",
      },
      {
        title: "Stop",
        color: "#ff9800",
      },
      {
        title: "Continue",
        color: "#009688",
      },
    ],
  },
  {
    title: "Sailboat",
    columns: [
      {
        title: "What is the wind pushing our sails that make us go fast",
        color: "#f44336",
      },
      {
        title: "What anchors are holding us back",
        color: "#e91e63",
      },
      {
        title: "What rocks are ahead of us that risk our future",
        color: "#9c27b0",
      },
      {
        title: "What is our ideal island destination",
        color: "#673ab7",
      },
    ],
  },
];
