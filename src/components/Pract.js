import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export  function Pract(url) {

    const [user, setUser]= useState(null)
    const [loading, setLoading]= useState(false)
    const [error, setError]= useState(null)

    useEffect(()=>{
        const fetchData= async ()=>{
            setLoading(true)
            try{
                const res = await fetch (url)
                if(!res.ok){
                    throw new Error(res.statusText)
                }
                const data = await res.json()
                setLoading(false)
                setUser(data)
               
            }catch(err){
                setLoading(false)
                setError("couldnt fetch data")
            }
            

        }
        fetchData()
    },[url])

    return{user, loading, error}
}

