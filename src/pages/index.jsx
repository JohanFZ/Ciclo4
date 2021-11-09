import React, {useState} from 'react'

const index = () => {

  const [variable, setvariable] = useState('Hola mundo');

  return (
    <div className="div">
      <p>Hola</p>
    </div>
  )
}

export default index
