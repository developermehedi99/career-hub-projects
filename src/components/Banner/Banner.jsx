import bgImg from '../../assets/P3OLGJ1 copy 1.png'
const Banner = () => {
    return (
        <div className='md:flex items-center justify-between'>
            <div className=" w-[570px]">
                <h1 className="text-7xl font-extrabold text-black">One Step Closer To Your <span className="bg-[#7E90FE ]">Dream Job</span></h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className="btn bg-blue-400">Get Started</button>
            </div>
            <div>
                <img src={bgImg} alt="" />
            </div>
        </div>
    );
};

export default Banner;