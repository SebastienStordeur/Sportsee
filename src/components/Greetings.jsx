import React from 'react'

const Greetings = ({user}) => {
  console.log(user, "greetins")
  return (
    <header className="greets-header">
        <h1>Bonjour <span>{/* {user.userInfos.firstName} */}</span></h1>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </header>
  )
}

export default Greetings