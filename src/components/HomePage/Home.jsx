import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import CraftItems from "./CraftItems";


const Home = () => {
    const crafts = useLoaderData();
    const homeCrafts = crafts.slice(0, 6);

    return (
        <div>
            <Banner></Banner>
            <h2 className="text-5xl font-bold text-center bg mt-20 text-orange-300">Craft Item Collection</h2>
            <p className="mt-4 text-center px-5">In this section, you users can explore a diverse collection of artisanal creations. From captivating landscape paintings to intricate portrait sketches, our catalog offers a variety of artistic expressions to adorn any space.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-8">
                {
                    homeCrafts.map(craft => <CraftItems
                        key={craft._id}
                        craft={craft}
                    ></CraftItems>)
                }
            </div>
        </div>
    );
};

export default Home;