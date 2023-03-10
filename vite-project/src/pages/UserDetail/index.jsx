import React,{useState,useEffect} from 'react';
import {useParams} from 'react-router-dom';

function UserDetail() {
    const {user_id} = useParams();
    const [user,setUser] = useState(null);
    useEffect(() => {
        axios(`https://jsonplaceholder.typicode.com/users/${user_id}`).then((res) => {
            setUser(res.data);
        })
    },[])
  return (
    <div>
        <h2>User Detail</h2>
        {user && <pre>{JSON.stringify(user,null,2)}</pre>}
    </div>

  )
}

export default UserDetail