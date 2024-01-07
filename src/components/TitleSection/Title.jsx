
const SectionTitle = ({ heading, subheading }) => {
   
    return (
        <div className="text-center mx-auto w-4/12">
            <h2 className="text-[48px] mb-4 py-2 font-extrabold">{heading}</h2>
            <p className=" mb-2">{subheading}</p>
        </div>
    );
};

export default SectionTitle;