import SectionTitle from "../TitleSection/Title";
import { useEffect, useState } from "react";
import { FaCalculator } from "react-icons/fa";

const Category = () => {
    const [categorys, setCategorys] = useState([]);
    useEffect(() => {
        fetch('category.json')
            .then(res => res.json())
            .then(data => setCategorys(data))
    }, [])
    return (
        <div>
            <SectionTitle heading={'Job Category List'}
            subheading={'Explore thousands of job opportunities with all the information you need. Its your future'}
            >
            </SectionTitle>
            <div className="grid md:grid-cols-4 gap-6 my-8">
               {
                categorys.map(category => <div className="mx-auto" key={category.id}>
                    <h1 className="text-5xl mb-5"><FaCalculator></FaCalculator></h1>
                    <h1 className="text-[20px] font-extrabold">{category.category_name}</h1>
                    <p>{category.availability}</p>
                </div>)
               }
            </div>
        </div>
    );
};

export default Category;