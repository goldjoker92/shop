import { BUY_TV } from "./Type";

//au niveau du reducer on aussi besoin de la valeur de type car on doit utiliser un 
// un switch pour voir si on est dans ce cas

//la on declare notre état initiale par rapport au tv 

const initialStateTv = {

    tv: 10      
}

const tvReducer = (state = initialStateTv , action) => {
    switch(action.type) {
        case BUY_TV:
            return {//le state devient le initialStateTv
                    //action = type 
                ...state,
                tv: state.tv - action.payload
            }

    default: return state
        
    }
}

export default tvReducer;

// comme on a plusieurs reducer tv et phone je vais maintenant 
// dans le store importer la methode combineReducer