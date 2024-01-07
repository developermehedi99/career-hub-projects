import { useEffect, useState } from 'react';
import SectionTitle from '../TitleSection/Title';
import Jobs from '../Jobs/Jobs';

const FeatureJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [jobLength, setJobLength] = useState(4);
    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])
    return (
        <div className='mx-auto'>
            <SectionTitle
                heading={'Featured Jobs'}
                subheading={'Explore thousands of job opportunities with all the information you need. Its your future'}
            ></SectionTitle>
            <div className='grid md:grid-cols-2 gap-6 my-12'>
                {
                    jobs.slice(0, jobLength).map(job => <Jobs
                        key={job.id}
                        job={job}
                    ></Jobs>)
                }
            </div>
            <div className={jobLength === jobs.length && 'hidden'}>
                <button
                    onClick={() => setJobLength(jobs.length)}
                    className='btn btn-secondary'>See All Jobs</button>
            </div>
        </div>
    );
};

export default FeatureJobs;