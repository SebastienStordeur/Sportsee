import React from 'react'
import Performances from './Performances'

const Graphs = ({data}) => {
  return (
    <article className="graph">
      <Performances data={data}/>
    </article>
  )
}

export default Graphs