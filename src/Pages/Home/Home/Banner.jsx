import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Banner = () => {
    return (
        <div className="hero min-h-screen bg-indigo-50 opacity-50 ... " style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/smart-confidence-asian-female-startup-entrepreneur-small-business-owner-businesswoman-wear-smart-casual-cloth-smile-hand-use-tablet-woking-inventory-checking-showroom-office-daytime-background_609648-342.jpg?w=1380&t=st=1690143009~exp=1690143609~hmac=67b45d15ca496a6d6d8f9d2faad9d744f541fd5155446499b52c6482f95ba3bc)' }}>
            <div className="hero-content  relative">
                <div className=" pr-9">
                    <h1 className="text-xl font-bold ">We have 850,000 great job offers you deserve!</h1>
                    <p className="py-6 text-3xl font-bold text-white">Your Dream <br />
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
                                <option disabled selected>Category</option>
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
                                <option disabled selected >Category</option>
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