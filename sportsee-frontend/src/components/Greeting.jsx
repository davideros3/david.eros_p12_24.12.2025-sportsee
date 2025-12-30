const Greeting = ( { userInfos = { firstName: 'Unknown' } } ) => {
    const {firstName: firstName } = userInfos

    return (
        <div className="greeting">
            <h1>Hi <span>{firstName}</span></h1>
            <p>Congratulations! You reached yesterday’s goal! 👏</p>
        </div>
    )

}

export default Greeting;