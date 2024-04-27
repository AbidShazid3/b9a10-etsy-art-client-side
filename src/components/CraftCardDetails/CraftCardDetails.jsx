import { Link, useLoaderData } from "react-router-dom";


const CraftCardDetails = () => {
    const craftCardDetails = useLoaderData();
    const { itemName, subcategory_Name, description, price, rating, customization, processing_time, status, photo } = craftCardDetails;

    return (
        <div className="mt-10 mb-20">
            <div className="card bg-base-100 shadow-xl p-10">
                <figure className="">
                    <img src={photo} alt="" className="rounded-xl w-full lg:h-96 " />
                </figure>
                <div className="card-body">
                    <h2 className="text-3xl font-bold">{itemName}</h2>
                    <div className='flex items-center gap-2'>
                        <h3 className="text-2xl font-bold">Subcategory Name :</h3>
                        <p className="text-xl">{subcategory_Name}</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <h3 className="text-lg font-bold">Description:</h3>
                        <p>{description}</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <h3 className="text-lg font-bold">Rating:</h3>
                        <p className="text-lg font-bold">{rating}</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <h3 className="text-lg font-bold">Status:</h3>
                        <p>{status}</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <h2 className='text-lg font-medium'>Customization:</h2>
                        <p>{customization}</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <h2 className='text-lg font-medium'>Processing Time:</h2>
                        <p>{processing_time}</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <h2 className='text-lg font-medium'>Price:</h2>
                        <p>${price}</p>
                    </div>
                    <div className="text-center text-xl font-bold text-green-400 mt-5">
                        <Link to="/">Back To Home</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CraftCardDetails;