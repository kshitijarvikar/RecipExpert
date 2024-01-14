import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchRecipe, getRecipe } from '../api'
import { RiseLoader } from 'react-spinners'
import { BsPatchCheck } from "react-icons/bs"
import Header from '../components/Header'
import RecipeCard from '../components/RecipeCard'

const RecipeDetail = () => {
  const [Recipe, setRecipe] = useState(null)
  const [loading, setLoading] = useState(false)
  const [recomd, setRecomd] = useState([])

  const {id} = useParams()

  const getDetail = async (id) => { 
    {/* grad detail recipe */}
    try {
      setLoading(true)
      const data = await getRecipe(id)
      setRecipe(data)

      const recomand = await fetchRecipe({query: Recipe?.label, limit: 3}) 
      {/* getting recipes for recomandation */}
      setRecomd(recomand)

      setLoading(false)
    } catch(error) {
      console.log(error)
      setLoading(false)
    }
  }

  useEffect(() => {
    getDetail(id)
  }, [id])

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
   } 

   return (
    <div className="w-full">
      <Header title={Recipe?.label} image={Recipe?.image}/>
      <div className="w-full px-4 lg:px-20 pt-5">
        <div className="flex gap-10 items-center justify-center px-4">
          <div className="flex flex-col justify-center">
            <span className="text-white border text-center border-white py-1 px-2 rounded-full mb-2">{Recipe?.calories.toFixed(2)}</span>
            <p className="text-neutral-100">CALORIES</p>
          </div>
          <div className="flex flex-col justify-center">
            <span className="text-white text-center border border-white py-1 px-2 rounded-full mb-2">{Recipe?.totalTime} mins</span>
            <p className="text-neutral-100">TOTAL TIME</p>
          </div>
          <div className="flex flex-col justify-center">
            <span className="text-white border text-center border-white py-1 px-2 rounded-full mb-2">{Recipe?.yield}</span>
            <p className="text-neutral-100">SERVINGS</p>
          </div>
        </div>
        <div className="flex justify-center items center">
          <a href={Recipe?.url} target='_blank' className='text-white text-center bg-green-800 py-1 px-3 border-2 border-green-800 rounded-full mt-5 text-xl hover:bg-black hover:border-white'>Go To Detailed Recipe</a>
        </div>

        <div className="w-full flex flex-col md:flex-row gap-8 py-20 px-4 md:px-10">
          {/* LEFT */}
          <div className="w-full md:w-2/4 md:border-r px-10 md:px-5 border-slate-800 pr-1">
            <div className="flex flex-col gap-5">
              <p className="text-green-800 text-xl md:text-2xl">
                Ingredients
              </p>
              {
                Recipe?.ingredientLines?.map((ingredient, index) => {
                  return (
                    <p className="text-neutral-100 flex" key={index} >
                      { ingredient }
                    </p>
                  )
                })
              }      
            </div>

            <div className='flex flex-col gap-3 mt-20'>
              <p className='text-green-700 text-2xl underline'>Health Labels</p>

              <div className='flex flex-wrap gap-4'>
                {
                  Recipe?.healthLabels.map((item, index) => (
                    <p className='text-white flex gap-2 bg-[#fff5f518] px-4 py-1 rounded-full ' key={index}>
                      <BsPatchCheck color='green' /> {item}
                    </p>
                  ))
                }

              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className='w-full md:w-2/4 2xl:pl-10 mt-20 md:mt-0'>
            {
              recomd?.length > 0 ? (
                <>
                  <p className='text-white text-2xl'>Also Try This</p>

                  <div className='flex flex-wrap gap-6 px-1 pt-3'>
                    {
                      recomd?.map((item, index) => (
                        <RecipeCard recipe={item} key={index} />
                      ))
                    }
                  </div>
                </>
              ) : <p>hello</p>
            }
          </div>

        </div>
      </div>
    </div>

   )
}

export default RecipeDetail
