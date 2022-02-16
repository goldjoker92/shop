import { BUY_PHONE } from'./Type'


const initialStatePhones = {

    phones : 5
}

const phoneReducer = (state = initialStatePhones, action) => {
    switch(action.type) {
        case BUY_PHONE :
            return {
                ...state,
                phones: state.phones - action.payload
            }

            default: return state
               
    }

}

export default phoneReducer