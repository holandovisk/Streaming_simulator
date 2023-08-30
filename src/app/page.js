import CardFilme from '@/components/CadFilme'
import Title from '@/components/Title'
import Image from 'next/image'

export default function Home() {
  const filmes = [{
    titulo: 'Clash of Clans',
    nota:'9.2',
    poster: "https://apkloca.com/uploads/2022/8/clash-of-clans-thumbnail.jpg"
  },
  {
    titulo: 'Brawl Stars',
    nota: "10",
    poster: "https://play-lh.googleusercontent.com/EiElcSrd6-o-19roiswSx0AZPzsq6qF3hUGHsSWDl5UVtj7G23DHkneM8ucwqyOmEg"
  }

  ]
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