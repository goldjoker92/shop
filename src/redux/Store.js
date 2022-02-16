import { createStore, combineReducers } from'redux'
import phoneReducer from './phone/ReducerPhone'
import tvReducer from './tv/ReducerTv'

const rootReducer = combineReducers({

phone : phoneReducer,
television : tvReducer,

})

const store = createStore(rootReducer)

//avant c'etait const store = createStore(phoneReducer)
//mais comme maintenant il y a plusieurs article on a creer un rootReducer

export default store;

// a resent que cei est fait dans le 
//phonecontainer pour pour avoir afficher les tv 

