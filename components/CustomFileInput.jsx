import React from 'react'
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Cloud } from 'lucide-react';
import { Control, FieldPath } from 'react-hook-form';
import { z } from 'zod';


const CustomFileInput = ({control, name, label}) => {
    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <>
                <div className="flex items-center justify-center w-full mt-4">
                    <FormLabel className='form-label flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600'>
                        {label}
                    </FormLabel>
                    {/* <label for="dropzone-file" class=""> */}

                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <FormControl>
                             <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <Cloud className="w-10 h-10 mb-3 text-gray-400" />
                                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                    <span className="font-semibold">{label}</span>
                                </p>
                                <Input
                                    className="input-class hidden"
                                    type="file"
                                    {...field}
                                />
                            </div>
                        </FormControl>
                        <FormMessage className='form-message mt-2' />
                    
                    </div>
                    {/* <input id="dropzone-file" type="file" class="hidden" /> */}
                    {/* </label> */}
                </div>
                </>
            )}
        />
    )
}


export default CustomFileInput