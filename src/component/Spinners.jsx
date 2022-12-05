import React from 'react'
import {BounceLoader, BarLoader, BeatLoader} from 'react-spinners'

const Spinners = () => {
    return(
    <div className="loader__spinner">
    <BounceLoader size={200} color='green' />
    </div>
    )
}
export default Spinners;