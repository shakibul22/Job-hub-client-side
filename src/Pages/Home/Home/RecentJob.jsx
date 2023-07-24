import React, { useState } from "react";
import useRecentJob from "../../Hooks/useRecentJob";
import RecentJobCard from "./RecentJobCard";

const RecentJob = () => {
  const [job] = useRecentJob();
  const [visibleJobs, setVisibleJobs] = useState(6); // Display 6 jobs initially

  const handleSeeAll = () => {
    setVisibleJobs(job.length); // Set the number of visible jobs to the total number of jobs
  };

  return (
    <div className="bg-slate-100">
      <div className="py-8">
        <span className="">Recently jobs added</span>
        <h2 className="text-3xl font-serif py-3">
          <span>Recent</span> Jobs
        </h2>
      </div>
      <div className="grid grid-cols-1 justify-center items-center  gap-3 py-6 px-1">
        {job.slice(0, visibleJobs).map((item) => (
          <RecentJobCard key={item._id} item={item} />
        ))}
      </div>
      {visibleJobs < job.length && (
        <div className="py-4 ">
          <button
            onClick={handleSeeAll}
            className="btn btn-sm btn-outline bg-orange-400 text-white text-center p-2"
          >
            See All
          </button>
        </div>
      )}
    </div>
  );
};

export default RecentJob;

