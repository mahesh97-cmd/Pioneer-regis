import React from 'react'

const Button = ({ name, bgColor, textColor, border }) => {
    return (
        <div
        style={{ backgroundColor:bgColor,
                color: textColor,
                borderColor: border
        }}
        className = "py-2 md:px-10 px-3 rounded-full xl:text-sm md:text-xm text-xs border-2 text-center" > { name }

        </div >
    )
}

export default Button