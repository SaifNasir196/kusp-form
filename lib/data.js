import { UserRound, Palette, Briefcase } from 'lucide-react'
import { z } from "zod";

export const steps = [
    { id: "Step 1", name: "Personal Info", icon: <UserRound/> },
    { id: "Step 2", name: "Skills and Aspiration", icon: <Palette/> },
    { id: "Step 3", name: "Porfolio", icon: <Briefcase/> },
]

export const personalDetailsSchema = z.object({
    firstName: z.string().min(1).max(25).default(""),
    lastName: z.string().min(1).max(25).optional().default(""),
    dob: z.date({
        required_error: "A date of birth is required.",
    }),
    gender: z.string({
        required_error: "Please select a gender.",
    }).default(""),
    ethnicity: z.string({
        required_error: "Please select an ethnicity.",
    }).optional().default(""),
    email: z.string().email().default(""),
    phone: z.string().default(""),
    location: z.string().default(""),
    website: z.string().default(""),
    youtube: z.string().default(""),
    instagram: z.string().default(""),
    linkedIn: z.string().default(""),
});

export const skillsAspirationsSchema = z.object({
    primaryRole: z.string().min(3).default(""),
    about: z.string().min(10).max(160).default(""),
    CV: z.any(),
    workAvailability: z.boolean().default(false),
    Skills: z.array(z.string()).default([]),
    App: z.array(z.string()).default([]),
});

const ACCEPTED_IMAGE_TYPES = ["jpeg", "jpg", "png", "webp"];

const ACCEPTED_IMAGE_MIME_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

export const portfolioSchema = z.object({
    jobs: z.array(
        z.object({
            role: z.string().min(1).max(50).default(""),
            roleDescription: z.string().min(1).max(200).default(""),
            review: z.string().min(1).max(200).default(""),
            reviewRole: z.string().min(1).max(50).default(""),
            reviewerCompanyName: z.string().min(1).max(50).default(""),
            pictures: z.array(
                z.object({
                    file: z.string().default(""), // Assuming file is a string representing the file path or URL
                })
            ).default([]),
            pictures: z.any(),
        })
    ).default([]),
});

// Combine schemas for full form submission
export const formSchema = z.object({
    ...personalDetailsSchema.shape,
    ...skillsAspirationsSchema.shape,
    ...portfolioSchema.shape,
});