import React from 'react'
import { useFieldArray } from 'react-hook-form';
import JobDetails from './JobDetails';
import { Button } from './ui/button';


const Portfolio = ({ control }) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'jobs',
  });

  return (
    <>
      <div className="flex flex-col">
        <h1 className="text-2xl font-semibold mb-3">Add previous job details</h1>
          
          {fields.map((field, index) => (
            <JobDetails
              key={field.id}
              control={control}
              index={index}
              onRemove={() => remove(index)}
            />
          ))}

          <Button type="button" onClick={() => append({ value: '' })}>
            Add Job
          </Button>
      </div>
    </>
  )
}

export default Portfolio