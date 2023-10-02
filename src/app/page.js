import CardFilme from '@/components/CadFilme'
import Title from '@/components/Title'
import Image from 'next/image'

async function carregarFilmes(){
  const url = "http://localhost:8080/cards"
  const resposta = await fetch(url)
  const json = await resposta.json()
  return json
}
export default async function Home() {

  const filmes = await carregarFilmes() 

  

  
  return (
    <>
    <nav className="flex p-4 bg-slate-900">

      <ul className="Flex gap-20">
        <li>
          <a href = "#">
      <h1>Pokemon TCG Cards</h1>

          </a>
        </li>
        <li>
          <a href = "#">
            Cards
          </a>
        </li>
      </ul>
    </nav>

    <Title> em alta</Title> 
    <section className='flex flex-wrap'>
     {filmes.map(filme => <CardFilme filme={filme}/>)}
    </section>
    
     
    <Title> lançamento</Title>   
  
    <Title>favorios</Title>
    </>
  )
}