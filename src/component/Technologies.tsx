import React, { use } from 'react';
import type { Itechnologies } from './type/technologiesType';

interface technologiesProps {
  technologiesPromise: Promise<Itechnologies[]>
}

const badgeColorMap: Record<string, string> = {
  Popular: 'bg-blue-100 text-blue-600 border-blue-200',
  Versatile: 'bg-emerald-100 text-emerald-600 border-emerald-200',
  Fast: 'bg-orange-100 text-orange-600 border-orange-200',
  Standard: 'bg-green-100 text-green-600 border-green-200',
  'Top SQL': 'bg-sky-100 text-sky-600 border-sky-200',
  Flexible: 'bg-purple-100 text-purple-600 border-purple-200',
  Essential: 'bg-indigo-100 text-indigo-600 border-indigo-200',
};

const Technologies = ({ technologiesPromise }: technologiesProps) => {

  const techno = use(technologiesPromise);
  console.log(techno);



  return (
    <section className='container mx-auto' >
      <div className='mb-15'>
        <h1 className='text-4xl font-bold'>Explore the
          <span className="bg-linear-to-r from-[#E12885] to-[#C832D0] bg-clip-text text-transparent">
            Technologies
          </span> </h1>
        <p className=''>Pick one technology per category to build your ideal stack.</p>
      </div>

      <div className='grid grid-cols-12 gap-20'>

        <div className='col-span-9 grid grid-cols-3 gap-5'>

          {
            techno.map((items) => {
              return (
                <div key={items.id} className="card  w-96 shadow-amber-200 border-none">

                  <figure className="flex  justify-between p-4">
                    <img className=" h-15 mt-3" src={items.icon} alt={items.name} />

                    {items.badge ? (
                      <span
                        className={`px-3 py-1 text-xs font-semibold rounded-full border h-fit ${badgeColorMap[items.badge] || 'bg-gray-100 text-gray-600 border-gray-200'
                          }`} >
                        {items.badge}
                      </span>
                    ) : (
                      <div></div>
                    )}
                    
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{items.name}</h2>
                    <p>{items.description}</p>
                    <div className='flex items-center justify-between'>
                      <p className='font-semibold'>{items.category}</p>
                      <p className='font-semibold'>{items.difficulty}</p>
                      <div className="flex items-center gap-1 font-bold text-gray-800">
                        <span className="mask mask-star-2 bg-amber-400 w-4 h-4 inline-block"></span>
                        <span>{items.rating}</span>
                      </div>
                    </div>
                    <div className=" card-actions justify-center py-5">
                      <button className="btn btn-neutral w-full">Add to Stack</button>
                    </div>
                  </div>
                </div>
              )
            })
          }

        </div>



        <div className=' col-span-3'>
          <div className="card bg-primary text-primary-content w-96">
            <div className="card-body">
              <h2 className="card-title text-2xl">Your Stack</h2>
              <p className='font-semibold my-2'>No technologies selected yet.</p>
              <div className="card-actions justify-center border">
                <p className=' text-center font-semibold p-10'>Your stack is empty.</p>
              </div>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
};

export default Technologies;