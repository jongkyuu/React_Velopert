import React from "react";

function Hello({color, fontSize, name, isSpecial}) {
    return (
        <div style={{
            color : color, 
            fontSize : fontSize
        }}>
            {/* {isSpecial ? <b>*</b> : null} */}
            {isSpecial && <b>*</b>}
            Hello {name}
        </div>
    )
}

Hello.defaultProps = {
    name : 'Nobody'
}

export default Hello;