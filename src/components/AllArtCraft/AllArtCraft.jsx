import { Link, useLoaderData } from "react-router-dom";


const AllArtCraft = () => {
    const allLoadedArtCraft = useLoaderData();
    console.log(allLoadedArtCraft);
    return (
        <div>
            <div className="text-center mt-20">
                <h2 className="text-4xl font-bold text-orange-500">All Art & Craft Items Section </h2>
                <p className="mt-5">Discover the essence of creativity and craftsmanship in our Art & Craft Item section. Delve into a world where imagination meets skill, and each creation tells a unique story. From intricate paintings to handmade sculptures, our collection showcases the finest works of talented artisans and craftsmen.</p>
            </div>
            <div className="overflow-x-auto mt-10">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Subcategory Name</th>
                            <th>Status</th>
                            <th>Price($)</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allLoadedArtCraft.map((art, idx) => <tr key={art._id} className="bg-base-200">
                                <th>{idx + 1}</th>
                                <td>{art.itemName}</td>
                                <td>{art.subcategory_Name}</td>
                                <td>{art.status}</td>
                                <td>${art.price}</td>
                                <td>
                                    <Link to={`/artCraftDetails/${art._id}`} className="btn btn-sm">View Details</Link>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllArtCraft;