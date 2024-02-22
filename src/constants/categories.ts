import { ReactNode } from "react";

// Define the type of the icon component
export type CategoryType = {
  title: string;
  description: string;
  icon: string;
};

// Use typeof StarHillsIcon to refer to the type of the icon component
export const CategoriesData: CategoryType[] = [
  { title: "Star Hills", description: "1,894", icon: "/starhillsIcon.png" },
  { title: "Apartment", description: "1,043", icon: "/apartmentIcon.png" },
  { title: "Nearby City", description: "93", icon: "/nearbyCityIcon.png" },
  { title: "Landed House", description: "925", icon: "/landedHouseIcon.png" },
  { title: "Airport", description: "254", icon: "/airportIcon.png" },
  { title: "Awards", description: "2,372", icon: "/awardsIcon.png" },
  { title: "Sunset", description: "1,262", icon: "/sunsetIcon.png" },
  { title: "Others", description: "5,928", icon: "/othersIcon.png" }
];
