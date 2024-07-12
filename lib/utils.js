import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { formSchema, personalDetailsSchema, skillsAspirationsSchema, portfolioSchema } from "./data"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}


export const getSchema = (step = -1) => {
  switch (step) {
    case 0:
        return personalDetailsSchema;
    case 1:
        return skillsAspirationsSchema;
    case 2:
        return skillsAspirationsSchema;
    default:
        return formSchema;
  }
}