import {React,useState} from 'react'


const Task3 = () => {
    let [user,setUser]=useState([]);
    let [username,setUsername]=useState("")

    const clickHandler=(e)=>{
        var gitHubUrl = `https://api.github.com/users/${username}`;
        fetch(gitHubUrl)
        .then(res=>res.json())
        .then(data=>{setUser(Object.entries(data));console.log(Object.entries(data))})
        .catch(console.log("ERROR"))
    }

      if(user.length>2){
        return (
          <>
          <div id="divInp"><label>Enter GitHub Username</label>
          <input value={username} onChange={(e) => setUsername(e.target.value)}/>
          <button onClick={clickHandler}>Search</button></div>
          <img src={user[3][1]}/>
            <table>
              <tbody>
            {user.map((item,i)=>{
                return <tr key={i}><th>{item[0]}</th><td>{item[1]}</td></tr>
            })}
            </tbody>
            </table>
          </>
        );
          }
          else if(user.length===2){
            return<><div id="divInp"><label>Enter GitHub Username</label>
            <input value={username} onChange={(e) => setUsername(e.target.value)}/>
            <button onClick={clickHandler}>Search</button></div>
            <div>User Not Found</div></>
          }
          else{
                return<><div id="divInp"><label>Enter GitHub Username</label>
                <input value={username} onChange={(e) => setUsername(e.target.value)}/>
                <button onClick={clickHandler}>Search</button></div>
                </>
          }
      
}

export default Task3