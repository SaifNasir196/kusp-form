
import React from 'react'
import { cn } from '@/lib/utils'

import { Check } from 'lucide-react'
import { steps } from '@/lib/data'


const Stepper = ({currentStep}) => {
    return (
        <ol class="relative text-gray-500 border-s border-gray-200 dark:border-gray-700 dark:text-gray-400">                  
            {
                steps.map((step, index) => {
                    return (
                        <li className="mb-16 ms-6" key={index}>
                            <span className={cn("absolute flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full -start-5 ring-16 ring-white dark:ring-gray-900 dark:bg-gray-700",
                                {"ring-yellow-100 bg-yellow-100": currentStep > index -1},
                                {"bg-green-200 dark:bg-green-900 text-green-500 dark:text-green-400": currentStep > index},
                                )}>
                                { currentStep > index ? <Check/> :  step.icon} 
                            </span>
                            <h3 class="font-medium leading-tight">{step.name}</h3>
                        </li>
                    )
                })
            }
        </ol>
    )
}

export default Stepper