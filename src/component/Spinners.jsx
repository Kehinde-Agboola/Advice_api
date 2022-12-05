import React from 'react'
import {BounceLoader, BarLoader, BeatLoader} from 'react-spinners'

const Spinners = () => {
    return(
    <div className="loader__spinner">
    <BounceLoader size={400} color='green' />
    </div>
    )
}
export default Spinners;