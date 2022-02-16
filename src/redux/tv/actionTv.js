import { BUY_TV } from "./Type";

// maintenant je déclare mon objet avec la propriété type ainsi que mon action puis au reducer
// on passe par la propriété type 

export const buyTv = totalTv => {
  return {
        type: BUY_TV,
        payload : totalTv
    } 
}

