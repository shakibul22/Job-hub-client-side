import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Banner = () => {
    return (
        <div className="hero min-h-screen bg-indigo-50 opacity-50 ... " style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/young-successful-businesswoman-looking-tablet-standing-near-business-centre_176420-5676.jpg?w=1380&t=st=1690229833~exp=1690230433~hmac=98aada8e479d8d5ac7a670e32c50012664a317c465355ac9770179ab52a0fc71)' }}>
            <div className="hero-content  relative">
                <div className="flex flex-col justify-start items-start pr-9">
                    <h1 className="text-xl font-bold text-indigo-700">We have 850,000 great job offers you deserve!</h1>
                    <p className="py-6 text-3xl font-bold text-orange-700">Your Dream <br />
                        Job is Waiting!</p>

                    <Tabs className='bg-white'>
                        <TabList>
                            <Tab>Find a Job</Tab>
                            <Tab>Find a Candidate</Tab>
                        </TabList>

                        <TabPanel className='bg-white '>

                            <div className='bg-white flex flex-row gap-2 py-1 pb-2 px-3'>  

                                <input type="text" className="bg-white text-black border rounded p-1 w-1/3 " placeholder="Job Name" />
                             <select className="select select-bordered select-sm p-1 bg-white w-1/3">
                           
                                <option >Full Time</option>
                                <option >Part Time</option>
                                <option >Freelance</option>
                                <option >Internship</option>
                                <option >Temporary</option>
                            </select>
                               

                                    <input type="text" className="bg-white text-black border rounded p-1 w-1/3" placeholder="Location" />
                                
                                <input type="submit" value="Search" className=" btn btn-sm bg-blue-500 text-white" /></div>

                        </TabPanel>
                        <TabPanel className='bg-white '>

                            <div className='bg-white flex flex-row gap-2 py-1 pb-2 px-3'>  

                                <input type="text" className="bg-white text-black border rounded p-1 w-1/3 " placeholder="Job Name" />
                             <select className="select select-bordered select-sm p-1 bg-white w-1/3">
                               
                                <option >Full Time</option>
                                <option >Part Time</option>
                                <option >Freelance</option>
                                <option >Internship</option>
                                <option >Temporary</option>
                            </select>
                               

                                    <input type="text" className="bg-white text-black border rounded p-1 w-1/3" placeholder="Location" />
                                
                                <input type="submit" value="Search" className=" btn btn-sm bg-blue-500 text-white" /></div>

                        </TabPanel>
                       
                    </Tabs>


                </div>
            </div>
        </div>
    );
};

export default Banner;