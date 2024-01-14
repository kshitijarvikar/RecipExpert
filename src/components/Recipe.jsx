import React, { useEffect, useState } from 'react'
import { RiseLoader } from 'react-spinners'
import SearchBar from './SearchBar';
import RecipeCard from './RecipeCard';
import { BiSearchAlt2 } from 'react-icons/bi'
import { fetchRecipe } from '../api';

const Recipe = () => {
   const [loading, setLoading] = useState(false);
   const [query, setQuery] = useState('');
   const [limit, setLimit] = useState(20);
   const [recipes, setRecipies] = useState([]);


   const handleChange = (e) => {
        setQuery(e.target.value) 
        {/* when entered data store it in query */}
   }

    const fetchRecipes = async() => {
        try{
            const data = await fetchRecipe({query, limit})
            setRecipies(data)
            setLoading(false)
        } catch(error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    const showMore = () => {
        setLimit(cur => cur + 10) 
        {/*  functionality of Show more button */}
        fetchRecipes() 
        {/* fetching again extra recipies */}
    }
    
    const handleSearch = async (e) => {
        e.preventDefault()
        fetchRecipes()  
        {/* When clicked search, fetch recipies */}
    }

    useEffect(() => {
        setLoading(true)
        fetchRecipes()
    }, [])  
    {/* by deafault fetch recipies */}

   if (loading) { 
    {/* if data is not fetched show loader */}
    return (
        <div className="flex justify-center py-20">
            <RiseLoader
                color="#36d7b7"
                width={200}
            />
        </div>
    )
   } else {
    return (
        <div className='w-full'>
            <div className="flex items-center justify-center pt-10 pb-5 px-0 md:px-10 mx-1 w-full">
                <form className='w-full lg:w-2/4' onSubmit={handleSearch}>
                    <SearchBar 
                        placeholder="eg. Banana, Potato, Cheese"
                        handleInputChange={handleChange}
                        rightIcon={
                            <BiSearchAlt2 className='text-white'/>
                        }
                    />
                </form>
            </div>
            {
                recipes?.length > 0 ? ( 
                    // {/* if data is fetched show recipe cards from recipes state else show tect */}
                    <>
                        <div className='w-full flex flex-wrap items-center justify-center gap-10 px-0 lg:px-10 py-10'>
                            {recipes?.map((item, index) => (
                                <RecipeCard  recipe={item} key={index} />
                            ))}
                        </div>
                        <div className='flex justify-center items-center' onClick={showMore}>
                            <button className='bg-green-800 text-white px-3 py-1 rounded-full text-lg mb-8'>
                                Show More
                            </button>
                        </div>
                    </>
                ) : <div className='text-gray-800 w-full items-center justify-center py-10'>
                        <p className='text-center text-white'>No Recipes Found, Please Enter Some Text</p>
                    </div>
            }
        </div>
    )
   }
  
}

export default Recipe
