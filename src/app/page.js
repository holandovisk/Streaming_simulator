import CardFilme from '@/components/CadFilme'
import Title from '@/components/Title'
import Image from 'next/image'

async function carregarFilmes(){
  const url = "https://api.pokemontcg.io/v2/cards/"
  const resposta = await fetch(url)
  const json = await resposta.json()
  return json.data
}
export default async function Home() {

  const filmes = await carregarFilmes() 

  

  
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
    <section className='flex flex-wrap'>
     {filmes.map(filme => <CardFilme filme={filme}/>)}
    </section>
    
     
    <Title> lançamento</Title>   
  
    <Title>favorios</Title>
    </>
  )
}