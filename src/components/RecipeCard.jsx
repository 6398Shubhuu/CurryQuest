import React from 'react'
import { Link } from 'react-router-dom'

const RecipeCard = ({ recipe }) => {
    const { image, label, cuisineType, dietLabel, mealType, uri } = recipe?.recipe

    const id = uri?.split("#")[1]

    return (
        <Link to={`/recipes/${id}`} className='w-full md:w-[220px]'>
            <div className='bg-_gradient shadow w-full rounded-lg'>
                <img src={image} alt={label} className='rounded-lg h-[200px] md:h-[150px] w-full' />

                <div className='p-3'>
                    <p className='text-white font-semibold'>{label}</p>

                    <div className='mt-2'>
                        <span className='px-2 py-1 text-[12px] capitalize bg-[#1e6a5156] shadow-xl rounded-full mr-3 text-blue-100'>
                            {cuisineType}
                        </span>
                        <span className='px-2 py-1 text-[12px] capitalize bg-[#1e6a5156] shadow-xl rounded-full text-blue-100'>
                            {mealType}
                        </span>
                        <span className='px-2 py-1 text-[12px] capitalize bg-[#1e6a5156] shadow-xl rounded-full text-blue-100'>
                            {dietLabel}
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default RecipeCard