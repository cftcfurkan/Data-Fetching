import { useEffect,useState } from "react";
import './UserList.css';


function Users() {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((data) => setUsers(data))
        .finally(() => setIsLoading(false));
    }, [])
    return <div className="user-list-container">
    {
        isLoading && <div className="loading-text">Loading...</div>
    }
        <div className="user-grid">
            {
                users.map(user => (
                    <div
                        key={user.id}
                        className="user-card"
                    >
                        <h3 className="user-name">{user.name}</h3>
                        <p className="user-info">Username: {user.username}</p>
                        <p className="user-info">Email: {user.email}</p>
                    </div>
                ))
            }
        </div>
    </div>

}
export default Users;