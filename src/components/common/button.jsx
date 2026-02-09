import React from 'react'

function Button(props) {
    return (
        <button className={`bg-[#2C49FE]   px-7 py-2.75 rounded-[23px] font-Poppins  leading-[150%] tracking-[0%] text-nowrap cursor-pointer ${props.className} `}>
            {props.text}
        </button>
    )
}

export default Button