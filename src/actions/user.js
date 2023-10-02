"use server"

import { cookies } from 'next/headers'

<<<<<<< HEAD
export async function serverLogin(){ 
    cookies().set("usuario", "Henrique", {
        maxAge: 60 * 60 * 24 * 7 // 7 dias
=======
export async function serverLogin(){
    cookies().set("usuario", "pedro", {
        maxAge: 60*60*24*7 // 7 dias
>>>>>>> 92bfc04ae5cd9c5622eff07fc2b6a11de44a07d0
    })
}

export async function serverLogout(){
    cookies().delete("usuario")
}