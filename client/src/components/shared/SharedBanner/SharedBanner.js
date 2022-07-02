import React from 'react'
import './sharedBanner.scss'


const SharedBanner = (props) => {
    return (
        <div className={`shared-banner ${props.styles}`}
        style={{backgroundImage: `url(${props.bg})`}}
        >
            <h1>{props.title}</h1>
        </div>
    )
}

export default SharedBanner;