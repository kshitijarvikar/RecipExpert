import React from 'react'
import { Link } from 'react-router-dom'

const RecipeCard = ({recipe}) => {
  const {image, label, cuisineType, dietLable, mealType, uri, url } = recipe?.recipe
  const id = uri?.split("#")[1] 
  // console.log(id)
  return (
    <Link to={`/recipies/${id}`} className='w-[280px] md:w-[220px]'>   {/* when clicked on card send to details link */}
      <div className='bg-_gradient shadow w-full rounded-lg ml-5'>
        <img src={image} label={label} className='w-full h-[200px] md:h-[150px] rounded-lg' />
        <div className="p-4">
          <p className="text-white">
            {label}
          </p>
          <div className='mt-2'>
            <span className='px-2 py-1 text-[12px] capitalize bg-[#0c452243] shadow-xl rounded-full mr-3 text-green-500'>
                {cuisineType}
            </span>
            <span className='px-2 py-1 text-[12px] capitalize bg-[#0c452243] shadow-xl rounded-full text-green-500'>
                {mealType}
            </span>
          </div>
        </div>
      </div>
    </Link> 
  )
}

export default RecipeCard
