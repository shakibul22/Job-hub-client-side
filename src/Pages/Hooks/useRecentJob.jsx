import  { useEffect, useState } from 'react';

const useRecentJob = () => {
    const [job,setJob]=useState([])
    const [loading,setLoading]=useState(true);
    useEffect(()=>{
        fetch('http://localhost:5000/recentJob').then(res=>res.json()).then(data=>{
        setJob(data) ;
        setLoading(false)})
    },[])
    return [job,loading]
    
};

export default useRecentJob;