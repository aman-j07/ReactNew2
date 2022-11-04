import {useEffect } from "react";

const useFetch = (url,partPosts,setPartPosts) => { 
 
  useEffect(() => {
    document.getElementById("divLoading").hidden=false;
    setTimeout(()=>{
      fetch(url)
      .then((res) => res.json())
      .then((data) => {
        partPosts=partPosts.concat(data);
      setPartPosts([...partPosts])
      document.getElementById("divLoading").hidden=true;
    }
      );
    },1000)
    
  }, [url]);

};

export default useFetch;