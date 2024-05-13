import { omeletteImg, omeletteIngredients, omeletteInstructions, omelettePreparationTime } from './constants'

function App() {
  return (
    <>
      <main className='md:bg-Eggshell md:flex md:justify-center md:items-center md:min-h-screen '>

        <div className='md:w-[700px] md:bg-White md:mt-32 md:mb-32 md:p-8 md:rounded-xl lg:shadow-sm'>
          <img src={omeletteImg} alt='omelette' className='w-full h-full md:rounded-lg' />

          <div className='text-Wenge-Brown max-md:p-8 md:pt-6'>
            <h1 className='text-black font-Young-Serif text-4xl mb-4'>Simple Omelette Recipe</h1>
            <p className='font-Outfit mb-4 text-base'>An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked
              to perfection, optionally filled with your choice of cheese, vegetables, or meats.
            </p>

            <div className='bg-Rose-White rounded-lg p-6 font-Outfit mb-6'>
              <h4 className='text-Dark-Raspberry font-bold mb-2'>Preparation time</h4>
              {omelettePreparationTime.map((item, index) => {
                const parts = item.split(':');
                return (
                  <div className='flex items-center gap-4 mb-2' key={index}>
                    <span className='font-bold text-Dark-Raspberry'>&#x2022;</span>
                    <div>
                      <span className="font-bold">{parts[0]}:</span> {parts[1]}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className='border-b-2 border-Light-Grey pb-4'>
              <h2 className='text-Nutmeg font-Young-Serif mb-2'>Ingredients</h2>
              {omeletteIngredients.map((item, index) => {
                return (
                  <div className='flex items-center gap-4 mb-2 pl-2 font-Outfit' key={index}>
                    <span className="text-Nutmeg font-bold">&#8226;</span>
                    <span className="ml-2">{item}</span>
                  </div>
                );
              })}
            </div>

            <div className=' border-b-2 border-Light-Grey pb-4'>
              <h2 className='text-Nutmeg font-Young-Serif mt-6 mb-4'>Instructions</h2>
              {omeletteInstructions.map((item, index) => {
                const parts = item.split(":")
                return (
                  <div className='flex items-start gap-4 mb-2 font-Outfit pl-2 ' key={index}>
                    <span className='text-Nutmeg font-bold'>{index + 1}.</span>
                    <div>
                      <span className='font-bold'>{parts[0]}:</span> <span> {parts[1]}</span>
                    </div>
                  </div>
                );
              })}

            </div>

            <div>
              <h2 className='text-Nutmeg font-Young-Serif mb-4 mt-6'>Nutrition</h2>
              <p className='font-Outfit mb-4 text-base'>The table below shows nutritional values per serving without the additional fillings.</p>
              <table className='w-full'>
                <tbody className='font-Outfit'>
                  <tr>
                    <td className="table-border">Calories</td>
                    <td className="table-border-value">277kcal</td>
                  </tr>
                  <tr>
                    <td className="table-border">Carbs</td>
                    <td className="table-border-value">0g</td>
                  </tr>
                  <tr>
                    <td className="table-border">Protein</td>
                    <td className="table-border-value">20g</td>
                  </tr>
                  <tr>
                    <td className="table-border">Fat</td>
                    <td className="table-border-value">22g</td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>
        </div>

      </main>
    </>
  )
}

export default App
