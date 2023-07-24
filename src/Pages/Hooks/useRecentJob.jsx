import  { useEffect, useState } from 'react';

const useRecentJob = () => {
    const [job,setJob]=useState([])
    const [loading,setLoading]=useState(true);
    useEffect(()=>{
        fetch('https://job-hub-server-shakibul22.vercel.app/recentJob').then(res=>res.json()).then(data=>{
        setJob(data) ;
        setLoading(false)})
    },[])
    return [job,loading]
    
};

export default useRecentJob;