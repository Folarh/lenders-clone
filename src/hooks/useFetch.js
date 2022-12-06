import {useState, useEffect} from 'react'



export  function useFetch(url) {
    const [data, setData]= useState([])
    const [loading, setLoading]= useState(false)
    const [error, setError]= useState(null)
  
  
    
      useEffect(()=>{
        const fetchdata = async ()=>{
          setLoading(true)
          try{
            const res= await fetch (url);
            if(!res.ok){
              throw new Error(res.statusText)
          }
            const json= await res.json();
            setLoading(false)
            setData(json)
            console.log(json)
          }catch(err){
            setLoading(false)
            setError("Could not fetch data")
         

          
          }
          
            
        }

        fetchdata();
        },[url])
        return {data,error,loading};
}
  

 

