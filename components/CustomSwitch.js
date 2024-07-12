import React from 'react'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form"
import { Switch } from "@/components/ui/switch"

const CustomSwitch = ({ control, name, label, description}) => {
    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
            <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 mt-4 mb-4">
                <div className="space-y-0.5">
                    <FormLabel className="text-base">
                        {label}
                    </FormLabel>
                    <FormDescription>
                        {description}
                    </FormDescription>
                </div>
                <FormControl>
                <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                />
                </FormControl>
            </FormItem>
            )}
        />
    )
}

export default CustomSwitch