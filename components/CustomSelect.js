
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import React from 'react'
import { cn } from "@/lib/utils"

const CustomSelect = ({control, name, label, placeholder, items}) => {
    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <div className='form-item w-full mb-4 mt-4'>
                    <FormItem>
                        <FormLabel>{label}</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value} >
                            <FormControl>
                                <SelectTrigger >
                                    <SelectValue placeholder={placeholder} />
                                </SelectTrigger>
                            </FormControl>

                            <SelectContent>
                                {items.map((item, index)=> (
                                    <React.Fragment key={index}>
                                        <SelectItem value={item}>{item}</SelectItem>
                                    </React.Fragment>
                                ))}
                            </SelectContent>

                        </Select>

                        <FormMessage />
                    </FormItem>
                </div>
          )}
        />
    )
}

export default CustomSelect