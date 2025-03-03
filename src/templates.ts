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
  {
    title: "The Four L's",
    columns: [
      {
        title: "Liked",
        color: "#4CAF50", // Green
      },
      {
        title: "Learned",
        color: "#2196F3", // Blue
      },
      {
        title: "Lacked",
        color: "#FF9800", // Orange
      },
      {
        title: "Longed For",
        color: "#9C27B0", // Purple
      },
    ],
  },
  {
    title: "KALM",
    columns: [
      {
        title: "Keep",
        color: "#4CAF50", // Green
      },
      {
        title: "Add",
        color: "#2196F3", // Blue
      },
      {
        title: "Less",
        color: "#FF5722", // Deep Orange
      },
      {
        title: "More",
        color: "#673AB7", // Deep Purple
      },
    ],
  },
  {
    title: "DAKI",
    columns: [
      {
        title: "Drop",
        color: "#F44336", // Red
      },
      {
        title: "Add",
        color: "#4CAF50", // Green
      },
      {
        title: "Keep",
        color: "#2196F3", // Blue
      },
      {
        title: "Improve",
        color: "#FFC107", // Amber
      },
    ],
  },
];
