import React from 'react'

const Graphs = (props) => {
  return (
    <article className={`graph ${props.className}`}>
      {props.children}
    </article>
  )
}

export default Graphs