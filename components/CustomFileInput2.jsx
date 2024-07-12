import React from 'react';
import { useController } from 'react-hook-form';

const CustomFileInput2 = ({ name, control, accept, multiple = false }) => {
  const {
    field: { onChange, ref },
    fieldState: { error }
  } = useController({
    name,
    control,
    rules: { required: 'File is required' }
  });

  const handleFileChange = (event) => {
    const files = event.target.files;
    onChange(multiple ? Array.from(files) : files[0]);
  };

  return (
    <div className="w-full mx-auto mt-4">
      <label
        htmlFor={name}
        className="flex flex-col items-center px-4 py-6 bg-white text-gray-500 rounded-md tracking-wide  border  cursor-pointer hover:bg-gray-600 hover:text-white"
      >
        <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
        </svg>
        <span className="mt-2 text-base leading-normal">
          Upload {multiple ? 'files' : 'your CV'}
        </span>
        <input
          id={name}
          type="file"
          className="hidden"
          onChange={handleFileChange}
          accept={accept}
          multiple={multiple}
          ref={ref}
        />
      </label>
      {error && (
        <p className="mt-2 text-red-500 text-xs italic">{error.message}</p>
      )}
    </div>
  );
};

export default CustomFileInput2;