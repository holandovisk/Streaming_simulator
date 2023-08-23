import Title from '@/components/Title'
import Image from 'next/image'

export default function Home() {
  return (
    <>
    <nav className="flex p-4 bg-slate-900">

      <ul className="Flex gap-20">
        <li>
          <a href = "#">
      <h1>Fiap App</h1>

          </a>
        </li>
        <li>
          <a href = "#">
            Jogos
          </a>
        </li>
      </ul>
    </nav>

    <Title> em alta</Title> 

     <div id="card" className="flex flex-col w-40 justify-center items-center m-2">
        <img className="rounded"src="https://place-hold.it/150x220/666" alt="" />
        <span className="font-bold text-center line-clamp-1">Clash of Clans</span>
        <div>
          <span>6.0</span>
        </div>
        <a href="#" className="bg-pink-600 py-2 w-full rounded text-center">detalhes</a>
     </div>  
    <Title> lançamento</Title>   
  

    </>
  )
}