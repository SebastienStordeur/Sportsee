const Greetings = (props) => {
  return (
    <header className="greets-header">
        <h1>Bonjour <span>{props.user.userInfos.firstName}</span></h1>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </header>
  )
}

export default Greetings