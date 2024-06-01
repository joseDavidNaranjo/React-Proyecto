import React from 'react'

function Text(props) {
  return (
    <div>
        <div className="in1">
        <p>{props.texto}</p>
        <input className={props.clase} type={props.tipo}></input>
      </div>
    </div>
  )
}

export default Text