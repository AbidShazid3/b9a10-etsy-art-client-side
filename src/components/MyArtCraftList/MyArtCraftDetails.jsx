import PropTypes from "prop-types";
import { FaStar } from "react-icons/fa";

const MyArtCraftDetails = ({ item }) => {
    console.log(item);
    const { itemName, price, rating, customization, status, photo } = item;
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
                        <button className="btn btn-accent mr-3">Update</button>
                        <button className="btn btn-accent">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

MyArtCraftDetails.propTypes={
    item: PropTypes.object,
}

export default MyArtCraftDetails;