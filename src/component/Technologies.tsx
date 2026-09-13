import React, { use, useState } from 'react';
import type { Itechnologies } from './type/technologiesType';
import { toast } from 'react-toastify';

interface technologiesProps {
  technologiesPromise: Promise<Itechnologies[]>;
}

const badgeColor: Record<string, string> = {
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

  const [selectedStack, setSelectedStack] = useState<Itechnologies[]>([]);

  const handleAddToStack = (item: Itechnologies) => {
    const isExist = selectedStack.find((tech) => tech.id === item.id);

    if (!isExist) {
      setSelectedStack([...selectedStack, item]);
      toast.success(`${item.name} added to your stack!`);
    } else {
      toast.warning(`${item.name} is already in your stack!`);
    }
  };

  const handleRemoveFromStack = (item: Itechnologies) => {
    const updatedStack = selectedStack.filter((tech) => tech.id !== item.id);
    setSelectedStack(updatedStack);
    toast.error(`${item.name} removed from your stack.`);
  };

  const handleRemoveAll = () => {
    setSelectedStack([]);
    toast.info('All technologies removed from stack.');
  };

  return (
    <section className="container mx-auto px-4 py-6">
      <div className="mb-8 text-center sm:text-left">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          Explore the{' '}
          <span className="bg-linear-to-r from-[#E12885] to-[#C832D0] bg-clip-text text-transparent">
            Technologies
          </span>
        </h1>
        <p className="text-gray-600 mt-2 text-sm sm:text-base">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="order-2 lg:order-1 lg:col-span-8 xl:col-span-9 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
          {techno.map((items) => {
            const isAdded = selectedStack.some((tech) => tech.id === items.id);
            return (
              <div
                key={items.id}
                className={`card w-full bg-base-100 shadow-sm rounded-2xl flex flex-col justify-between transition-all ${
                  isAdded ? 'border-2 border-emerald-500' : 'border border-gray-100'
                }`}
              >
                <div>
                  <figure className="flex justify-between items-start p-4">
                    <img className="h-12 w-12 object-contain" src={items.icon} alt={items.name} />

                    {items.badge ? (
                      <span
                        className={`px-2.5 py-1 text-xs font-semibold rounded-md border ${
                          badgeColor[items.badge] || 'bg-gray-100 text-gray-600 border-gray-200'
                        }`}
                      >
                        {items.badge}
                      </span>
                    ) : (
                      <div></div>
                    )}
                  </figure>
                  <div className="card-body p-4 pt-0">
                    <h2 className="card-title text-lg">{items.name}</h2>
                    <p className="text-sm text-gray-500 min-h-10">{items.description}</p>
                    <div className="flex items-center justify-between text-xs mt-3">
                      <p className="font-semibold text-gray-600">{items.category}</p>
                      <p className="font-semibold text-gray-500">{items.difficulty}</p>
                      <div className="flex items-center gap-1 font-bold text-gray-800">
                        <span className="mask mask-star-2 bg-amber-400 w-3.5 h-3.5 inline-block"></span>
                        <span>{items.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 pt-0">
                  <button
                    onClick={() => handleAddToStack(items)}
                    disabled={isAdded}
                    className={`btn w-full rounded-xl ${
                      isAdded ? 'btn-disabled bg-gray-200 text-gray-500' : 'btn-neutral'
                    }`}
                  >
                    {isAdded ? '✓ Added to Stack' : 'Add to Stack'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="order-1 lg:order-2 lg:col-span-4 xl:col-span-3">
          <div className="card bg-base-100 border border-gray-200 shadow-sm w-full sticky top-5 p-5 rounded-2xl">
            <div className="card-body p-0">
              <h2 className="card-title text-xl sm:text-2xl font-bold text-gray-800">Your Stack</h2>

              <p className="font-semibold text-gray-500 my-1 text-xs sm:text-sm">
                {selectedStack.length === 0
                  ? 'No technologies selected yet.'
                  : `${selectedStack.length} Technology Selected`}
              </p>

              {selectedStack.length === 0 ? (
                <div className="border-2 border-dashed border-gray-200 rounded-xl p-6 sm:p-8 mt-3 text-center">
                  <p className="text-gray-400 font-medium text-sm">Your stack is empty.</p>
                </div>
              ) : (
                <div className="flex flex-col gap-3 mt-3 max-h-[60vh] overflow-y-auto pr-1">
                  {selectedStack.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between border border-gray-200 p-3 rounded-xl bg-white shadow-xs"
                    >
                      <div className="flex items-center gap-3">
                        <img className="w-7 h-7 object-contain" src={item.icon} alt={item.name} />
                        <div>
                          <h4 className="font-bold text-sm text-gray-800">{item.name}</h4>
                          <p className="text-[11px] text-gray-500">{item.category}</p>
                        </div>
                      </div>

                      <button
                        onClick={() => handleRemoveFromStack(item)}
                        className="btn btn-ghost btn-xs btn-circle text-gray-400 hover:text-error"
                      >
                        ✕
                      </button>
                    </div>
                  ))}

                  <button
                    onClick={handleRemoveAll}
                    className="btn btn-outline btn-error w-full mt-2 rounded-xl"
                  >
                    Remove All
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;