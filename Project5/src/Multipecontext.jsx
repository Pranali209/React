import { useContext, useState } from "react";
import { CurrentUser, DarkTheme } from "./DarkTheme";
import Heading from "./Heading";


function Multiplecontext() {
    const [theme, setTheme] = useState('light')
    const [user, setUser] = useState({login:''})
    return (
        <DarkTheme.Provider value={theme}>
            <CurrentUser.Provider value={{ user, setUser }}>
                <WelcomePanel />
                <label>
                    <input type="checkbox" checked={theme === 'black'} onChange={(e) => setTheme(e.target.checked ? 'black' : 'white')} />
                    Use DarkMode
                </label>
            </CurrentUser.Provider>
        </DarkTheme.Provider>

    );
}


function WelcomePanel({ children }) {
    const { user } = useContext(CurrentUser);
 
    return (
        <Panel title="Welcome to site ">
             {user.loginId ? <GreetingForm /> : <LoginForm />}

        </Panel>

    )
}
function Panel({ title, children }) {
    const theme = useContext(DarkTheme);
    return (
        <section style={{ backgroundColor: theme, width: "700px", height: "300px", border: "1px solid blue", padding: "10px" }} >
            <Heading>{title}</Heading>
            {children}
        </section>
    )
}
function GreetingForm(params) {
    const { user } = useContext(CurrentUser)
    
    return (
        <>
            <h2>You have SuccessFully Logged in {user.loginId}</h2>
        </>

    )
}

function LoginForm(params) {
    const{user, setUser} = useContext(CurrentUser)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    function handleClick(params) {
     setUser({ loginId: `${email} ${password}`})
     
    }
    return (
        <form>
            <h2>Email Id <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} /></h2><br />
            <h2>Password<input type="password" value={password} onChange={(e) => setPassword(e.target.value)} /></h2><br />
            <Button email={email} password={password} onclick={handleClick} />
        </form>
    )
}
function Button({email , onclick }) {
    
   
    return (
        <button disabled={email === null ? true : false} onClick={onclick}>Log In</button>
    )
}
export default Multiplecontext;