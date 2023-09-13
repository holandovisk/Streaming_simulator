"use client"
import { BookmarkIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

export default function CardFilme({filme}){
    const[favorito,setFavorito] = useState(false)
    var id = filme.id.replace('-', '/')
    const url_imagem = `https://images.pokemontcg.io/${id}.png`
    function favoritar(){
     setFavorito(true)
     
    }
    return(
        <div id="card" className="flex flex-col w-40 justify-center items-center m-2">
        { favorito ?
        <div className="flex"> 
       <BookmarkIcon onClick={()=> setFavorito(false)} className="h-6 w-6 text-rose-600 cursor-pointer" />
         adquirido
        </div> 
        :
        <div className="flex"> 
        <BookmarkIcon onClick={favoritar} className="h-6 w-6 text-blue-500 cursor-pointer" />
            nao adquirido
        </div>
        }
        
        <img className="rounded"src={url_imagem} alt="" />
        <span className="font-bold text-center line-clamp-1">
            {filme.name}</span>
            
        <div>
          Artista: <span>{filme.artist} 
          <br></br>
           Raridade: {filme.rarity} </span>
        </div>
        <a href="#" className="bg-pink-600 py-2 w-full rounded text-center">detalhes</a>
     </div>    
    )
}