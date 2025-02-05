import Link from 'next/link';
import { DataCats, DataLocation } from '../database/cats'

export default function Home() {
  return (
    <div className="border">
      <h1 className="text-4xl font-bold text-center mb-10">Cats for <span className="text-purple-800">adoption</span></h1>

      <h2 className="text-2xl text-center mb-10">Check out out cats below</h2>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-items-center mb-10'>
        {
          DataCats.map((cat) => {
            const locationData = DataLocation.find((location) => location.id === cat.location)
            let location = ''
            if (locationData) {
              console.log(location)
              location = locationData.name
            }

            return (
              <div className='min-w-64 border p-4' key={cat.id}>
                <h2>{cat.name}</h2>
                <p>Age: {cat.age}</p>
                <p>Race: {cat.race}</p>
                <p>Available: 
                  <span 
                    className={ cat.available ? 'text-green-700' : 'text-red-700' }>
                      { cat.available ? 'Yes' : 'No' }
                  </span>
                </p>
                <p>Description: { cat.description }</p>
                <p>Location: {location}</p>
                <button type='button' className='bg-purple-400 p-3 rounded-2xl'><Link href={`http://localhost:3000/cats/${cat.id}`}>Click here</Link></button>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}
