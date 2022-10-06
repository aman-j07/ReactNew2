import {React,useState,useEffect} from 'react'

const Task1 = () => {
        const [users,setUsers]=useState([])
      useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res=>res.json())
        .then(data=>setUsers(data))
        .catch(setUsers([]))
      },[])
      if(users.length>1){
        return (
          <>
            <table>
              <tbody>
              <tr><th>ID</th><th>Name</th><th>Username</th><th>Email</th><th>Address</th><th>Phone</th><th>Website</th><th>Company</th></tr>
            {users.map(item=>{
              const address = Object.entries(item.address);
              const company = Object.entries(item.company);
              return <tr key={item.id}><td>{item.id}</td><td>{item.name}</td><td>{item.username}</td><td>{item.email}</td><td>{address.map((item,i)=>{return <p key={i}>{item[0]}-{JSON.stringify(item[1])}</p>})}</td><td>{item.phone}</td><td>{item.website}</td><td>{company.map((item,i)=>{return <p key={i}>{item[0]}-{item[1]}</p>})}</td></tr>
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

export default Task1