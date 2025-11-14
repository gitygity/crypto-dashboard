
'use server'

import { revalidatePath } from "next/cache"

let favorites:string[]=[]
export async function toggleFavorite(id:string) {
    if(favorites.includes(id)){
      favorites=  favorites.filter(favorite=>favorite!=id)
    }else{
        favorites.push(id)
    }
    revalidatePath('/dashboard')
}