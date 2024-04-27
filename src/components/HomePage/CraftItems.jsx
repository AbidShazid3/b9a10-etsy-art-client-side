import PropTypes from "prop-types";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const CraftItems = ({ craft }) => {
    const {_id, itemName, subcategory_Name, price, rating, status, photo } = craft;
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure className="p-5">
                    <img src={photo} alt="" className="rounded-xl w-full h-56 object-center" />
                </figure>
                <div className="p-5">
                    <h2 className="text-2xl font-semibold">{itemName}</h2>
                    <div className="md:flex lg:flex items-center gap-2 mt-3">
                        <p className="text-lg font-bold">Subcategory_Name:</p>
                        <p className="flex gap-2">{subcategory_Name}</p>
                    </div>
                    <div className="flex gap-2 mt-2">
                        <p className="font-bold">Price:</p>
                        <p className="flex gap-2">${price}</p>
                    </div>
                    <div className="flex gap-2 mt-2">
                        <p className="font-bold">Rating:</p>
                        <p className="flex gap-1">{rating} <FaStar className="text-red-500 text-lg" /></p>
                    </div>
                    <div className="flex gap-2 mt-2">
                        <p className="font-bold">Status:</p>
                        <p className="flex gap-2">{status}</p>
                    </div>
                    <div className="mt-4">
                        <Link to={`/craftCardDetails/${_id}`}><button className="btn btn-accent text-lg w-full">View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

CraftItems.propTypes = {
    craft: PropTypes.object,
}

export default CraftItems;