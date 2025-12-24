import { twMerge } from "tailwind-merge";
import clsx, { type ClassValue } from "clsx";

export const mergeTwClasses = (...classes: ClassValue[]) => {
  return twMerge(clsx(...classes));
};
