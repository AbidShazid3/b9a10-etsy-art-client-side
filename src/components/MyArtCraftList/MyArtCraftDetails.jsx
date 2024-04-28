import PropTypes from "prop-types";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyArtCraftDetails = ({ item, setControl, control }) => {
    const { _id, itemName, price, rating, customization, status, photo } = item;
    
    const handleDelete = _id =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                console.log("deleted");
                fetch(`http://localhost:5000/myArtCraft/${_id}`, {
                    method: "DELETE",
                })
                .then(res=> res.json())
                .then(data=> {
                    console.log(data);
                    if(data.deletedCount > 0){
                        Swal.fire({
                            title: "Deleted!",
                            text: "Item has been deleted.",
                            icon: "success"
                          });
                          setControl(!control);
                    }
                })
            }
          });
    }

    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl">
                <figure><img src={photo} alt="" className="w-full md:h-72 lg:96" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{itemName}</h2>
                    <div className='flex items-center gap-2'>
                        <h2 className='text-lg font-medium'>Price:</h2>
                        <p>${price}</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <h3 className="text-lg font-medium">Rating:</h3>
                        <p className="text-lg medium flex gap-1">{rating} <FaStar className="text-red-500 text-lg" /></p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <h2 className='text-lg font-medium'>Customization:</h2>
                        <p>{customization}</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <h3 className="text-lg font-medium">Status:</h3>
                        <p>{status}</p>
                    </div>
                    <div className="">
                        <Link to={`/updateCraftItem/${_id}`} className="btn btn-accent mr-3">Update</Link>
                        <button onClick={ ()=> handleDelete(_id)} className="btn btn-accent">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

MyArtCraftDetails.propTypes={
    item: PropTypes.object,
    setControl: PropTypes.func,
    control: PropTypes.bool
}

export default MyArtCraftDetails;