"use client"
import { BookmarkIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

export default function CardFilme({filme}){
    const[favorito,setFavorito] = useState(false)
    const url_imagem = `https://images.pokemontcg.io/${id}.png`

    return(
        <div id="card" className="flex flex-col w-40 justify-center items-center m-2">
        { favorito ? 
       <BookmarkIcon onClick={()=> setFavorito(false)} className="h-6 w-6 text-rose-600 cursor-pointer" />
        :
        <BookmarkIcon onClick={() => setFavorito(true)} className="h-6 w-6 text-blue-500 cursor-pointer" />
        }
        
        <img className="rounded"src={url_imagem} alt="" />
        <span className="font-bold text-center line-clamp-1">
            {filme.name}</span>
            
        <div>
          <span>{filme.artist} <br>
            {filme.rarity}</br></span>
        </div>
        <a href="#" className="bg-pink-600 py-2 w-full rounded text-center">detalhes</a>
     </div>    
    )
}