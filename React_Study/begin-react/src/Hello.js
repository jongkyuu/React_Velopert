import React from "react";

function Hello({color, fontSize, name}) {
    return (
        <div style={{color : color, fontSize : fontSize}}>
            Hello {name} 
        </div>
    )
}

Hello.defaultProps = {
    name : 'Nobody'
}

export default Hello;