import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";


const Servies = () => {
    const [servies, setServies] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/cars')
            .then(res => res.json())
            .then(data => setServies(data))
    }, [])
    return (
        <div>
            <div className="text-center mt-8">
                <h2 className="text-3xl font-bold">Our Service Area</h2>
                <p className="mt-4">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which dont look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    servies.map(service =><ServiceCard
                    key={service._id}
                    service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Servies;