import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import MyArtCraftDetails from "./MyArtCraftDetails";


const MyArtCraftList = () => {
    const {user} = useContext(AuthContext);
    const [items, setItems] = useState([]);
    const [control, setControl] = useState(false);

    useEffect( ()=>{
        fetch(`https://etsy-art-server.vercel.app/myArtCraft/${user?.email}`)
        .then(res=> res.json())
        .then(data=> {
            console.log(data);
            setItems(data);
        })
    }, [user, control])
    return (
        <div className="mt-10">
            <h2 className="text-4xl font-bold text-orange-500 text-center">My Art & Craft Items</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-5">
                {
                    items.map(item=> <MyArtCraftDetails 
                        key={item._id} 
                        item={item} 
                        control={control} 
                        setControl={setControl} 
                    ></MyArtCraftDetails>)
                }
            </div>
        </div>
    );
};

export default MyArtCraftList;