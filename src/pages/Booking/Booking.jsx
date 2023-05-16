import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import BookingRow from "./BookingRow";
import { useLocation } from "react-router-dom";


const Booking = () => {
    const { user } = useContext(AuthContext);
    const [books, setBooks] = useState([])
    const navigate = useLocation();

    const url = `https://doctor-car-server-69-70.vercel.app/out?email=${user?.email}`

    useEffect(() => {
        fetch(url,{
            method:'GET',
            headers:{
                authorization : `Bearer ${localStorage.getItem('access-token')}`
            }
        })
            .then(res => res.json())
            .then(data =>{ 
                if(!data.error){
                    setBooks(data)
                }else{
                    // logout and the navigate
                    navigate('/')
                }
                
            })
    }, [url,navigate])

    const handleDelete=id=>{
        const prossed = confirm('Are you sure delete confrim')
        if(prossed){
            fetch(`https://doctor-car-server-69-70.vercel.app/out/${id}`,{
                method:'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                const remaing = books.filter(booking => booking._id !== id)
                setBooks(remaing)
                
            })
        }
    }

    const handleConfrim=id=>{
        fetch(`https://doctor-car-server-69-70.vercel.app/out/${id}`,{
            method:'PATCH',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify({status:'confirm'})
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.modifiedCount>0){
                const remaing = books.filter(booking => booking._id !== id)
                const update = books.find(booking=> booking._id === id)
                update.status = 'confirm'
                const newUpdate = [update,...remaing]
                setBooks(newUpdate)
            }
        })
    }
    return (
        <div>
            <h2 className="text-5xl">Your bookings: {books.length}</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Image</th>
                            <th>Service</th>
                            <th>Date</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            books.map(booking => <BookingRow
                                key={booking._id}
                                booking={booking}
                               handleDelete={handleDelete}
                               handleConfrim={handleConfrim}
                            ></BookingRow>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Booking;