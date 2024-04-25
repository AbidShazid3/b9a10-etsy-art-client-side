import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";


const MainPage = () => {
    return (
        <div>
            <div className="container mx-auto p-2 md:p-2 lg:px-4">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainPage;