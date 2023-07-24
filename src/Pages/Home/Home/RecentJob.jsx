import useRecentJob from "../../Hooks/useRecentJob";
import RecentJobCard from "./RecentJobCard";

const RecentJob = () => {
    const [job]=useRecentJob();
    console.log(job);
    return (
        <div className="bg-slate-100">
         <div className='py-8'>
                <span className="">Recently jobs added</span>
                <h2 className=" text-3xl font-serif py-3"><span>Recent</span> Jobs</h2>
            </div>  
            <div className="grid grid-cols-1 justify-center items-center gap-3 py-6 px-1 ">
                {
                    job.map(item=> <RecentJobCard key={item._id} item={item}></RecentJobCard>)
                }
            </div> 
        </div>
    );
};

export default RecentJob;
