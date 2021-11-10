import React from 'react'

const button = ({color = "coral"}) => {
  return (
    <div>
      <button style={{backgroundColor : color}} className="button">Este es mi boton personalizado</button>
    </div>
  )
}

export default button
