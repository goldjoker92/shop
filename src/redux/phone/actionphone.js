// en deuxieme on define la fonction de creaation action en relation //////avec le fichier type 

import { BUY_PHONE } from'./Type'

// on rajoute totalPhone en argt

export const buyPhones = totalPhone  => {
    return {
        type: BUY_PHONE,
        payload : totalPhone
    }
}



