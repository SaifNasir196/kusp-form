"use client"
import React, {useState} from 'react'
import { useForm } from 'react-hook-form';

import { Button } from './ui/button';
import { Form } from "@/components/ui/form"


import Stepper from './Stepper';
import PersonalDetails from './PersonalDetails';
import SkillsAspirations from './SkillsAspirations';
import Portfolio from './Portfolio';
import { zodResolver } from "@hookform/resolvers/zod"


import { steps } from '@/lib/data';
import { cn } from '@/lib/utils';

import { getSchema } from '@/lib/utils';
import { useProfileContext } from '@/context/ProfileContext';
import { useRouter } from 'next/navigation';



const ProfileForm = () => {
    const router = useRouter();
    const { updateFormData } = useProfileContext();
    const [currentStep, setCurrentStep] = useState(0)
    
    const form = useForm({
        resolver: zodResolver(getSchema()),
        defaultValues: {
            firstName: "",
            lastName: "",
        },
    });

    const prev = () => currentStep > 0 && setCurrentStep(step => step - 1);
    
    const next = async () => {
        const isValid = await form.trigger(Object.keys(getSchema(currentStep).shape));
        if (isValid) 
            currentStep < steps.length - 1 && setCurrentStep(step => step + 1);
    };

    const onSubmit = async (values) => {
        const isValid = await form.trigger(Object.keys(getSchema(currentStep).shape));
        console.log(isValid);
        if (isValid) {
            updateFormData(values); // Update context with final form data
            console.log(values);
            router.push('/profile-display')
        }

    };

    return (
        <section className="flex justify-center gap-24 m-16">
            {/* Steps */}
            <nav aria-label='Progress'>
                <Stepper currentStep={currentStep}/>
            </nav>

            {/* Form */}
            <div className='flex flex-col gap-4 w-[42rem]'> 
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        {currentStep === 0 ? (
                            <PersonalDetails control={form.control}/>
                        ) : currentStep === 1 ? (
                            <SkillsAspirations control={form.control}/>
                        ) : (
                            <Portfolio control={form.control}/>
                        )}

                    </form>
                </Form>

                {/* Navigation */}
                <div className='mt-8 pt-5'>
                    <div className={cn("flex justify-between", {"justify-end": currentStep === 0})} >
                        {/* prev */}
                        { currentStep !== 0 && (
                            <Button onClick={prev}> Prev</Button>
                        )}

                        {/* next */}
                        { currentStep === steps.length - 1 ? (
                            <Button onClick={form.handleSubmit(onSubmit)} >Submit</Button>
                        ) : (
                            <Button onClick={next}> Next</Button>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProfileForm;