import React from 'react'
import CustomInput from './CustomInput'
import { Textarea } from "@/components/ui/textarea"
import CustomSelect from './CustomSelect'
import CustomTextArea from './CustomTextArea'
import CustomFileInput from './CustomFileInput'
import { Switch } from "@/components/ui/switch"
import CustomSwitch from './CustomSwitch'
import CustomTagsInput from './CustomTagsInput'



const SkillsAspirations = ({ control }) => {
  return (
    <>
      <div className="">
        <h1 className='font-semibold text-2xl mb-3'> Professional Details</h1>

        <div className="flex flex-col">
          <CustomInput control={control} name='primaryRole' label='Primary Role' placeholder='Enter primary role'/>
          <CustomTextArea control={control} name='about' label='About' description='Please share information about what will be required from this role'/>

        </div>
            
        <CustomFileInput control={control} name="CV" label="CV" placeholder="Upload CV" />

        <CustomSwitch control={control} name="workAvailability" label="Available for Work" description="Check if you are available for work"/>
      </div>

      <hr className="my-4 border-t border-gray-200" />

      <div className="">
        <h1 className='font-semibold text-2xl mb-3'> Skills</h1>
        <p className="text-gray-600 mb-2">These tags will be used to best match you with jobs and opportunity featured on The Gateway</p>

        <CustomTagsInput control={control} name="Skills" label="Skills"/>

        <CustomTagsInput control={control} name="App" label="Aspirations"/>

      </div>

    </>
  )
}

export default SkillsAspirations