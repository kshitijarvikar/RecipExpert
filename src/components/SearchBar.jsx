import React from 'react'

const SearchBar = ({
    type,
    placeholder,
    required = false,
    value,
    name,
    handleInputChange,
    rightIcon,
}) => {
  return (
    <div>
      <div className="relative">
        <input type={type || "text"} 
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleInputChange}
        required={required}
        className={
            `bg-black border border-gray-800 text-gray-300 text-md rounded-full focus:ring-1 focus:ring-slate-800 w-full p-2.5 outline-none px-5 placeholder:text-sm shadow-xl`
        }
        />
        {rightIcon && (
            <div className='absolute inset-y-0 right-1 top-1/3 flex-1 items-center pr-4 cursor-pointer text-xl'>
                {rightIcon}
            </div>
        )}
      </div>
    </div>
  )
}

export default SearchBar
