import React from 'react'

const Header = (props) => {
    return (
        <div className='Header'>
            <p> {props.number > 0 ? '😁' : '😢'} </p>
        </div>
    )
}

export default Header
