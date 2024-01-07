import { FaLocationDot } from "react-icons/fa6";
import { CiDollar } from "react-icons/ci";

const Jobs = ({job}) => {
    const {logo, job_title, company_name,remote_or_onsite, location, job_type,salary} = job;
    return (
        <div className="my-10 mx-auto">
            <img src={logo} alt="" />
            <h1>{job_title}</h1>
            <h2>{company_name}</h2>
            <div className="flex items-center my-2">
                <p className="border-2 mr-2 px-2 py-1">{remote_or_onsite}</p> <p className="border-2 px-2 py-1">{job_type}</p>
            </div>
            <div className="flex items-center ">
                <p className="flex gap-2 items-center"><FaLocationDot></FaLocationDot>{location}</p> <p className="flex gap-2 items-center ml-10"><CiDollar></CiDollar>{salary}</p>
            </div>
            <button className="btn btn-success mt-2">View details</button>
        </div>
    );
};

export default Jobs;