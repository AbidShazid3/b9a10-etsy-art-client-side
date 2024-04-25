import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";


const MainPage = () => {
    return (
        <div>
            <div className="container mx-auto p-2 md:p-3 lg:px-4">
                <NavBar></NavBar>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainPage;