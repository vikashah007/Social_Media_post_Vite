function WelcomeMessage({onGetPostsClick}){
    return(<center className="welcomeMsg">
        <h1 >There is no any Post Yet</h1>
        <button type="button" className="btn btn-primary" onClick={onGetPostsClick}>Get Posts From Server</button>

        </center>)

}
export default WelcomeMessage