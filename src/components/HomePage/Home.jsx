import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import CraftItems from "./CraftItems";
import ClientSatisfy from "./ClientSatisfy";
import image1 from "../../assets/images/monet-1455482.jpg"
import Exhibitions from "./Exhibitions";


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
            <div>
                <h2 className="text-4xl font-bold text-center mt-20 text-orange-500">Art & Craft Categories</h2>

            </div>
            <div className="mt-20">
                <h2 className="text-4xl font-bold text-center text-orange-500">Exhibition, Event & Programs</h2>
                <div className="md:flex lg:flex gap-5 mt-5 p-2 items-center">
                    <div className="flex-1">
                        <h2 className="text-4xl font-bold mt-10">Edouard Manet</h2>
                        <p className="text-xl mt-10">WELCOME TO 2024: AN EXCITING SEASON OF ART THAT REVOLTS AGAINST.</p>
                        <p className="mt-10 mb-5">In 2024 we continue Royal Gallery`s 60-year legacy of mapping the dramatic changes of our world. From our mainstage, we create a space for interrogation, conversation and debate. We invent and reflect the world that surrounds us. This year we rebel against.</p>
                    </div>
                    <div>
                        <img src={image1} alt="" className="flex h-96 rounded-lg" />
                    </div>
                </div>
                <Exhibitions></Exhibitions>
            </div>
            <ClientSatisfy></ClientSatisfy>
        </div>
    );
};

export default Home;