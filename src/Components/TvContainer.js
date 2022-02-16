import React, {useState} from 'react'
import tv from '../images/tv_icon.png'
import { connect } from 'react-redux'
import {buyTv} from '../redux/tv/actionTv'

function TvContainer(props) {
    console.log(props)

    const [totalTv, setTotalTv] = useState(1)
    console.log(totalTv)


    return(
        <div className = "container">
            <img className = "img-responsive" src={tv} alt="television"/>
            <p>Disponibilité:
                <span id = "count">{props.tv} </span>
            </p>
            <div>
                <button onClick = {()=>props.buyTv(totalTv)}>Acheter</button>
                <input type="text" value={totalTv} onChange={e => setTotalTv(e.target.value)}/> 
            </div> 
        </div>
    )
}

const mapStateToProps = state => {
    return {
        tv: state.television.tv
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyTv: totalTv => dispatch(buyTv(totalTv)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TvContainer)