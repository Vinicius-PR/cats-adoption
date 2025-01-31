import Image from "next/image";
import { DataCats } from '../database/cats'

export default function Home() {
  return (
    <div className="border">
      <h1 className="text-4xl font-bold text-center">Cats for <span className="text-purple-800">adoption</span></h1>

      <h2 className="text-2xl text-center">Check out out cats below</h2>

      <main>
        {
          DataCats.map((cat) => {
            return (
              <div key={cat.id}>
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
              </div>
            )
          })
        }
      </main>
    </div>
  );
}
