// import React from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import phone from '../images/phone.png'
// import { buyPhones } from '../redux/phone/actionphone'


//  function PhoneContainer() {

//      Avec useSelector on passe juste le state des objets en propriété
//      puis on creer un constante const phones 
//      puis on declare le state dans la div on doit etre afficher 


//    const phones = useSelector(state => state.phones)
//    const dispatch = useDispatch()
    

//     return (
//         <div className = "container">
//             <img className = "img-responsive" src={phone} alt="phone"/> 
//             <p>
//                 Disponibilité :
                
//               {/* phones est la variable const phones ci dessus */} 
//                 <span id="count"> {phones}</span>
//             </p>
//             <button onClick = {() => dispatch(buyPhones())}>Acheter</button>
//         </div>
//     )
// }


// export default PhoneContainer




//Autre Methode Ci-Dessous

import React, {useState} from 'react'
import { connect } from 'react-redux'
import phone from '../images/phone.png'
import { buyPhones } from '../redux/phone/actionphone'


 function PhoneContainer(props) {
//on fait un clg pour verifier si les prop on accès au state du reducer
    console.log(props)

    const [totalPhone, SetTotalPhone] = useState(1)
    console.log(totalPhone)


    return (
        <div className = "container">
            <img className = "img-responsive" src={phone} alt="phone"/> 
            <p>
                Disponibilité :
                
                <span id="count"> {props.phones}</span>
            </p>
            <div className="btnContainer">
                <button onClick={() => props.buyPhones(totalPhone)}>Acheter</button>
                <input type='text'value={totalPhone} onChange={ e  => SetTotalPhone(e.target.value)}/>
            </div>
        </div>
    )
}



const mapStateToProps = (state) => {
    
    return {
        phones:state.phone.phones
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
                                // ce buyPhones est dans notre actionPhone
        buyPhones: totalPhone => dispatch(buyPhones(totalPhone)),
    }

}

// en premier on import connect pour connecter react et redux 
// grace a mapStateToProps on accede au state via les props 
export default connect(mapStateToProps,  mapDispatchToProps)(PhoneContainer)
