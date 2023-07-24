import React from 'react';

const CurrentJob = () => {
    return (
        <div className='bg-white'>
            <div className='py-8'>
                <span className="">Categories work wating for you</span>
                <h2 className=" text-3xl font-serif py-3"><span>Current</span> Job Posts</h2>
            </div>
       
                <div className="container grid grid-cols-1 md:grid-cols-4 justify-center items-center gap-3 pb-5 px-1 ">
                  
                        <div >
                            <ul className="category flex flex-col justify-center items  gap-5">
                                <li><a href="#" className='border rounded px-9 p-1 hover:bg-lime-100 ' >Web Development <span className='text-lime-300 rounded '>1,000</span></a></li>
                                <li><a href="#" className='border rounded px-9 p-1 hover:bg-lime-100 '>Graphic Designer <span className='text-lime-300 rounded ' >1,000</span></a></li>
                                <li><a href="#" className='border rounded px-9 p-1 hover:bg-lime-100 '>Multimedia <span className='text-lime-300 rounded '>2,000</span></a></li>
                                <li><a href="#" className='border rounded px-9 p-1 hover:bg-lime-100 '>Advertising <span className='text-lime-300 rounded '> 900</span></a></li>
                            </ul>
                        </div>
                        <div >
                            <ul className="category flex flex-col justify-center items gap-5">
                                <li><a href="#" className='border rounded px-9 p-1 hover:bg-lime-100 '>Education &amp; Training <span className='text-lime-300 rounded '>3,500</span></a></li>
                                <li><a href="#" className='border rounded px-9 p-1 hover:bg-lime-100 '>English <span className='text-lime-300 rounded '>1,560</span></a></li>
                                <li><a href="#" className='border rounded px-9 p-1 hover:bg-lime-100 '>Social Media <span className='text-lime-300 rounded '>1,000</span></a></li>
                                <li><a href="#" className='border rounded px-9 p-1 hover:bg-lime-100 '>Writing <span className='text-lime-300 rounded '>2,500</span></a></li>
                            </ul>
                        </div>
                        <div >
                            <ul className="category flex flex-col justify-center items gap-5">
                                <li><a href="#" className='border rounded px-9 p-1 hover:bg-lime-100 '>PHP Programming <span className='text-lime-300 rounded '>5,500</span></a></li>
                                <li><a href="#" className='border rounded px-9 p-1 hover:bg-lime-100 '>Project Management <span className='text-lime-300 rounded '>2,000</span></a></li>
                                <li><a href="#" className='border rounded px-9 p-1 hover:bg-lime-100 '>Finance Management <span className='text-lime-300 rounded '> 800</span></a></li>
                                <li><a href="#" className='border rounded px-9 p-1 hover:bg-lime-100 '>Office &amp; Admin <span className='text-lime-300 rounded '>7,000</span></a></li>
                            </ul>
                        </div>
                        <div >
                            <ul className="category flex flex-col justify-center items gap-5">
                                <li><a href="#" className='border rounded px-9 p-1 hover:bg-lime-100 '>Web Designer <span className='text-lime-300 rounded '>8,000</span></a></li>
                                <li><a href="#" className='border rounded px-9 p-1 hover:bg-lime-100 '>Customer Service <span className='text-lime-300 rounded '>4,000</span></a></li>
                                <li><a href="#" className='border rounded px-9 p-1 hover:bg-lime-100 '>Marketing &amp; Sales <span className='text-lime-300 rounded '>3,300</span></a></li>
                                <li><a href="#" className='border rounded px-9 p-1 hover:bg-lime-100 '>Software Development <span className='text-lime-300 rounded '>1,356</span></a></li>
                            </ul>
                        </div>
                    </div>
             
         

        </div>
    );
};

export default CurrentJob;