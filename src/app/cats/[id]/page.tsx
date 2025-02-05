import { DataCats } from '../../../database/cats'

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const id = (await params).id
  const dataCat = DataCats.find((cat) => cat.id === id)
  return(
    <main>
      <h1 className="text-4xl font-bold text-center mb-10">Cat details</h1>
      <div className='text-center'>
        <h2>name: {dataCat?.name}</h2>
        <ul>
          <li>Age: <strong>{dataCat?.age}</strong> years</li>
          <li>Race: <strong>{dataCat?.race}</strong></li>
          <li>
            Is it available: <span className={ dataCat?.available ? 'text-green-700' : 'text-red-700' }>{ dataCat?.available ? 'Yes' : 'No' }</span>
          </li>
          <li>Description: {dataCat?.description}</li>
        </ul>
      </div>
    </main>
  )
}