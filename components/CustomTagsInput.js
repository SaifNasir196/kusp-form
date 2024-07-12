"use client"
import React, { useState } from 'react';
import { Controller } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { FormLabel } from './ui/form';


const CustomTagsInput = ({ control, name, label, placeholder }) => {
    const [tags, setTags] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleInputKeyDown = (event, onChange) => {
        if (event.key === 'Enter') {
            const newTag = inputValue.trim();
            if (newTag !== '' && !tags.includes(newTag)) {
                const updatedTags = [...tags, newTag];
                setTags(updatedTags);
                onChange(updatedTags); // Update the form state
            }
            setInputValue('');
            event.preventDefault(); // Prevent form submission
        }
    };

    const handleDelete = (index, onChange) => {
        const updatedTags = tags.filter((_, i) => i !== index);
        setTags(updatedTags);
        onChange(updatedTags); // Update the form state
    };

    return (
        <Controller
            control={control}
            name={name}
            render={({ field: { onChange, onBlur, value, ref } }) => (
                <div className="space-y-4 mb-8">
                    <FormLabel className='form-label'>
                        {label}
                    </FormLabel>
                    <Input
                        value={inputValue}
                        onChange={handleInputChange}
                        onKeyDown={(event) => handleInputKeyDown(event, onChange)}
                        placeholder="Enter tags and press Enter"
                        onBlur={onBlur}
                        ref={ref}
                        className="w-full p-2 border rounded"
                    />
                    <div className="flex flex-wrap gap-2">
                        {tags.map((tag, index) => (
                            <Badge key={index} variant="secondary" className="flex items-center space-x-1 px-3 py-1 bg-gray-200 rounded-2xl">
                                <span className='flex-1 text-[0.9rem] font-medium'>{tag}</span>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    className="-mr-1"
                                    onClick={() => handleDelete(index, onChange)}
                                >
                                    x
                                </Button>
                            </Badge>
                        ))}
                    </div>
                </div>
            )}
        />
    );
}

export default CustomTagsInput;
