import React from 'react'
import Card from '../components/Card'
import { cardData } from '../components/dummy'

const Projects = () => {
  return (
    <div className='bg-slate-200 w-full h-full py-3'>
        <div>
          <h1 className="text-3xl font-bold text-center mt-10">My Projects</h1>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {
            cardData.map((card, index) => (
              <div key={index} className='mt-4'>
              <Card  title={card.title} description={card.description} />
              </div>
            ))
          }
          </div>
         
        </div>
    </div>
  )
}

export default Projects