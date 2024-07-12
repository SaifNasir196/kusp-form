import React from 'react';
import { Button } from './ui/button';
import CustomInput from './CustomInput';
import { useFieldArray } from 'react-hook-form';
import { Input } from './ui/input';
import { Label } from './ui/label';

const JobDetails = ({ control, index, onRemove }) => {
    const maxPictures = 6;
    const { fields: pictureFields, append: pictureAppend, remove: pictureRemove } = useFieldArray({
        control,
        name: `jobs.${index}.pictures`,
    });

    return (
        <div className="flex flex-col mb-8">
            <CustomInput control={control} name={`jobs.${index}.role`} label="Role" placeholder="Enter your Role" />
            <CustomInput control={control} name={`jobs.${index}.roleDescription`} label="Role Description" placeholder="Enter the role description" />
            <CustomInput control={control} name={`jobs.${index}.review`} label="Review" placeholder="Enter the review" />
            <CustomInput control={control} name={`jobs.${index}.reviewRole`} label="Review Role" placeholder="Enter your Review Role" />
            <CustomInput control={control} name={`jobs.${index}.reviewerCompanyName`} label="Reviewer Company Name" placeholder="Enter your Reviewer Company Name" />

            <div className="flex flex-wrap">
                {pictureFields.map((field, pictureIndex) => (
                    <div key={field.id} className="w-1/2 py-2 flex items-end">
                        <div className="w-full">
                            <Label htmlFor={`jobs.${index}.pictures.${pictureIndex}.file`}>Picture {pictureIndex + 1}</Label>
                            <Input id={`jobs.${index}.pictures.${pictureIndex}.file`} name={`jobs.${index}.pictures.${pictureIndex}.file`} type="file" />
                        </div>
                        <Button variant="secondary" type="button" onClick={() => pictureRemove(pictureIndex)} className="ml-1 mr-3">
                            X
                        </Button>
                    </div>
                ))}
            </div>

            {pictureFields.length < maxPictures && (
                <Button variant="outline" onClick={() => pictureAppend({ value: '' })} className="w-1/5">
                    Add picture
                </Button>
            )}


            <Button variant="secondary" type="button" onClick={onRemove} className="mt-4 mb-4">
                Remove Job
            </Button>

            <hr className="my-4 border-t border-gray-200" />
        </div>
    );
};

export default JobDetails;
