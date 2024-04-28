import { useLoaderData } from "react-router-dom";

const ArtCraftDetails = () => {
    const artCraftDetails = useLoaderData();
    const { itemName, subcategory_Name, description, price, rating, customization, processing_time, status, photo } = artCraftDetails
    console.log(artCraftDetails);
    return (
        <div className="mt-10">
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure className="flex-1"><img src={photo} alt="Album" className="rounded-xl" /></figure>
                <div className="card-body flex-1">
                    <h2 className="text-4xl font-bold">{itemName}</h2>
                    <div className='md:flex lg:flex items-center gap-2'>
                        <h3 className="text-2xl font-bold">Subcategory Name :</h3>
                        <p className="text-xl">{subcategory_Name}</p>
                    </div>
                    <div className='md:flex lg:flex items-center gap-2'>
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
                </div>
            </div>
        </div>
    );
};

export default ArtCraftDetails;