import React from 'react'

const button = ({color = "coral", texto}) => {
  return (
    <div>
      <button style={{backgroundColor : color}} className="button">{texto}</button>
    </div>
  )
}

export default button
