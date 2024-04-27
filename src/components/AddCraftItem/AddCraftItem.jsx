import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";


const AddCraftItem = () => {
    const {user} = useContext(AuthContext);
    console.log(user);

    const handleAddCraftItem = e => {
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
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const artDetails = { itemName, subcategory_Name, description, price, rating, customization, processing_time, status, name, email, photo }
        console.log(artDetails);

        fetch("http://localhost:5000/craft", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(artDetails),
        })
        .then(res=> res.json())
        .then(data=> {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Added New Craft Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
            form.reset();
        })
    }

    return (
        <div>
            <div className="text-center mt-10">
                <h1 className="text-5xl font-bold">Add Your Craft Item</h1>
            </div>
            <div className="bg-pink-200 mt-10">
                <form onSubmit={handleAddCraftItem} className="card-body grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Item Name</span>
                        </label>
                        <input type="text" name="itemName" placeholder="Item Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Subcategory Name</span>
                        </label>
                        <input type="text" name="subcategory_Name" placeholder="Subcategory_Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <input type="text" name="description" placeholder="short description" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" name="price" placeholder="Price" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <select name="rating" defaultValue="" className="select select-bordered">
                            <option disabled value="">Rating</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Customization</span>
                        </label>
                        <select name="customization" defaultValue="" className="select select-bordered">
                            <option disabled value="">Customization</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Processing Time</span>
                        </label>
                        <input type="text" name="processing_time" placeholder="Processing Time" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Stock Status</span>
                        </label>
                        <select name="status" defaultValue="" className="select select-bordered">
                            <option disabled value="">Status</option>
                            <option value="In Stock">In Stock</option>
                            <option value="Made To Order">Made To Order</option>
                        </select>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" defaultValue={user?.displayName} placeholder="Enter Your Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" name="email" defaultValue={user?.email} placeholder="Enter Your Email" className="input input-bordered" />
                    </div>
                    <div className="form-control col-span-full">
                        <label className="label">
                            <span className="label-text">Image</span>
                        </label>
                        <input type="text" name="photo" placeholder="Enter Image URL" className="input input-bordered" />
                    </div>
                    <div className="mt-6 col-span-full">
                        <button className="btn btn-active btn-accent text-xl w-full">Add Craft Item</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddCraftItem;