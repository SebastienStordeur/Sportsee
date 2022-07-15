import React from 'react'
import AverageSessions from './graphs/AverageSessions'
import Performances from './Performances'

const Graphs = ({data}) => {

  console.log(data)
  return (
    <article className="graph">
      <Performances data={data}/>
    </article>
  )
}

export default Graphs