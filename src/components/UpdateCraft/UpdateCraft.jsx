import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCraft = () => {
    const updateItem = useLoaderData();
    const { _id, itemName, subcategory_Name, description, price, rating, customization, processing_time, status, photo } = updateItem;

    const handleUpdateItem = e => {
        e.preventDefault();
        const form = e.target;
        const itemName = form.itemName.value;
        const subcategory_Name = form.subcategory_Name.value;
        const description = form.description.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const customization = form.customization.value;
        const processing_time = form.processing_time.value;
        const status = form.status.value;
        const photo = form.photo.value;
        const updateDetails = { itemName, subcategory_Name, description, price, rating, customization, processing_time, status, photo }
        console.log(updateDetails);

        fetch(`http://localhost:5000/craft/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updateDetails),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Updated Craft Item Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }

    return (
        <div>
            <h2 className="text-4xl font-bold text-orange-500 text-center mt-10">Update Art & Craft Item</h2>
            <div className="bg-pink-200 mt-10">
                <form onSubmit={handleUpdateItem} className="card-body grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Item Name</span>
                        </label>
                        <input type="text" name="itemName" defaultValue={itemName} placeholder="Item Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Subcategory Name</span>
                        </label>
                        <input type="text" name="subcategory_Name" defaultValue={subcategory_Name} placeholder="Subcategory_Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <input type="text" name="description" defaultValue={description} placeholder="short description" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" name="price" defaultValue={price} placeholder="Price" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <input type="text" name="rating" defaultValue={rating} placeholder="Rating" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Customization</span>
                        </label>
                        <select name="customization" defaultValue={customization} className="select select-bordered">
                            <option disabled value="">Customization</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Processing Time</span>
                        </label>
                        <input type="text" name="processing_time" defaultValue={processing_time} placeholder="Processing Time" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Stock Status</span>
                        </label>
                        <select name="status" defaultValue={status} className="select select-bordered">
                            <option disabled value="">Status</option>
                            <option value="In Stock">In Stock</option>
                            <option value="Made To Order">Made To Order</option>
                        </select>
                    </div>
                    <div className="form-control col-span-full">
                        <label className="label">
                            <span className="label-text">Image</span>
                        </label>
                        <input type="text" name="photo" defaultValue={photo} placeholder="Enter Image URL" className="input input-bordered" />
                    </div>
                    <div className="mt-6 col-span-full">
                        <button className="btn btn-active btn-accent text-xl w-full">Update Craft Item</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateCraft;