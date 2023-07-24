import React from 'react';
import { FaRegHeart } from 'react-icons/fa';

const RecentJobCard = ({ item }) => {
    const { jobTitle, employmentType ,location,company} = item;
    return (
        <div className="w-96 md:w-[700px] md:ml-[185px] shadow px-2 py-3  md:px-[100px] bordered flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className=" ">
                <div className='flex gap-3'><h2 className=" text-black md:text-xl">{jobTitle}</h2>
                <p className='bg-blue-600 text-white text-sm rounded-lg p-[5px]'>{employmentType}</p></div>
                <div className='flex gap-2'>
                    <p  className='text-sm'>{company}</p>
                    <p  className='text-sm'>{location}</p>
                </div>
            </div>
                <div className="flex justify-between items-center gap-2">
                    <button className="btn btn-outline btn-sm bg-blue-600 text-white">apply</button>
                    <FaRegHeart className='text-red-500 '></FaRegHeart>
                </div>
        </div>
    );
};

export default RecentJobCard;