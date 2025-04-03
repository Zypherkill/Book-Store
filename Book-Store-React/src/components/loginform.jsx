import users from "../data/users.js";
import react, {useState} from 'react';

function LoginForm({ setactiveUser }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        const foundUser = users.find(user => user.username === username && user.password === password);
        if (foundUser) {
            setactiveUser({ username });
        } else {
            alert("Fel användarnamn eller lösenord!");
        }
    };

    return (
        <div className="log-in">
            <h2>Logga in</h2>
            <input
                type="text"
                placeholder="Användarnamn"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Lösenord"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Logga in</button>
        </div>
    );
}

export default LoginForm