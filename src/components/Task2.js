import {React,useState,useEffect} from 'react'

const Task2 = () => {
        const [users,setUsers]=useState([])
      useEffect(()=>{
        fetch("https://api.github.com/users")
        .then(res=>res.json())
        .then(data=>setUsers(data))
        .catch(setUsers([]))
      },[])
      if(users.length>1){
        return (
          <>
            <h2>React Users Data</h2>
            <table>
              <tbody>
              <tr><th>login</th><th>id</th><th>node_id</th><th>avatar_url</th><th>gravatar_id</th><th>url</th><th>html_url</th><th>followers_url</th><th>following_url</th><th>gists_url</th><th>starred_url</th><th>subscriptions_url</th><th>organizations_url</th><th>repos_url</th><th>events_url</th><th>received_events_url</th><th>type</th><th>site_admin</th></tr>
            {users.map(item=>{
              const values = Object.values(item);
              return <tr key={item.id}>{values.map(item1=>{
                return <td>{item1}</td>
              })}</tr>
            })}
            </tbody>
            </table>
          </>
        );
          }
          else{
            return <h1>ERROR fetching the API</h1>
          }
      
}

export default Task2