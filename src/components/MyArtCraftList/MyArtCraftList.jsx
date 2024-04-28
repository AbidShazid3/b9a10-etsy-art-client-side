import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const MyArtCraftList = () => {
    const {user} = useContext(AuthContext);
    const [items, setItems] = useState([]);
    useEffect( ()=>{
        fetch(`http://localhost:5000/myArtCraft/${user?.email}`)
        .then(res=> res.json())
        .then(data=> {
            console.log(data);
            setItems(data);
        })
    }, [user])
    return (
        <div>
            <h2>{items.length}</h2>
        </div>
    );
};

export default MyArtCraftList;