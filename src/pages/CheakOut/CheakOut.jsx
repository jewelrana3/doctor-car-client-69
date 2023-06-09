
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";


const CheakOut = () => {
  const book = useLoaderData();
  const{price,img,title,_id} = book;
  const {user} = useContext(AuthContext)

  const handleLogin=event=>{
    event.preventDefault();
    const form = event.target;
    const name= form.name.value;
    const email = form.email.value;
    const date = form.date.value;
    const amount = form.amount.value;
    const userOrder={
      name,
      
      img,
      email,
      servies:title,
      service_id:_id,
      date,amount,
    }
    console.log(userOrder)
    fetch('https://doctor-car-server-69-70.vercel.app/out',{
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(userOrder)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
    })
  }
 
  return (
   <div>
     <h2 className="text-3xl text-center">Book Now:{title}</h2>
     <form onSubmit={handleLogin}>
     
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="name" defaultValue={user?.name} name='name' className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Date</span>
          </label>
          <input type="date" name='date' placeholder="date" className="input input-bordered" />

        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" name='email' defaultValue={user?.email} className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Amount</span>
          </label>
          <input type="text"  defaultValue={'$'+price} placeholder="amount" name='amount' className="input input-bordered" />

        </div>
      </div>
      <div className="form-control mt-6">
          <button className="btn btn-primary btn-block">Order Now</button>
        </div>
    </form>
   </div>

  );
};

export default CheakOut;