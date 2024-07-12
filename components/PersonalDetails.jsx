import React from 'react';
import CustomInput from './CustomInput';
import { CustomDatePicker } from './CustomDatePicker';
import CustomSelect from './CustomSelect';



const PersonalDetails = ({ control }) => {

  return (
    <>
    <div className="">

      <h1 className='font-semibold text-2xl mb-3'> Personal Details</h1>

      <div className='flex gap-8'>
        <CustomInput control={control} name='firstName' label='First Name' placeholder='Enter your First Name' />
        <CustomInput control={control} name='lastName' label='Last Name' placeholder='Enter your Last Name' />
      </div>

      <div className='flex gap-8'>
        <CustomInput control={control} name='ethnicity' label='Ethnicity' placeholder='Enter your Ethnicity' />
        <CustomDatePicker control={control} name='dob' label='Date of Birth' />
      </div>

      <div className='flex gap-8'>
        <CustomInput control={control} name='pronouns' label='Pronouns' placeholder='Enter your Pronouns' />
        {/* <CustomInput control={control} name='gender' label='Gender' placeholder='Enter your Gender' /> */}
        <CustomSelect control={control} name='gender' label='Gender' placeholder='Enter your Gender' items={["Male", "Female"]}/>
      </div>
    </div>

    <div className="">
      <h1 className="font-semibold text-2xl mb-3">Contact Details</h1>
      <p className="text-gray-600 mb-2">These details will be displayed on your profile and visible to potential employers</p>

      <div className="flex gap-8">
        <CustomInput control={control} name='email' label='Email' placeholder='Enter your Email'/>
        <CustomInput control={control} name='phone' label='Phone Number' placeholder='Enter your Phone Number'/>
      </div>
      
      <CustomInput control={control} name='location' label='Location' placeholder='Enter your location'/>
      
      <CustomInput control={control} name='website' label='Website' placeholder='Enter your website link'/>

      <div className="flex gap-8">
        <CustomInput control={control} name='youtube' label='Youtube' placeholder='Youtube link'/>
        <CustomInput control={control} name='instagram' label='Instagram' placeholder='Instagram link'/>
        <CustomInput control={control} name='linkedIn' label='LinkedIn' placeholder='LinkedIn link'/>
      </div>


    </div>
      
      
    </>
  );
};

export default PersonalDetails;