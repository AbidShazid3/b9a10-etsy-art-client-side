import image1 from "../../assets/images/catherine-kay-greenup-Hk5SJ2s8xec-unsplash.jpg";
import image2 from "../../assets/images/boston-public-library-zHLh3wIGTzA-unsplash.jpg";
import image3 from "../../assets/images/birmingham-museums-trust-ICMxM7Yyxsg-unsplash.jpg";
import image4 from "../../assets/images/birmingham-museums-trust-9dnNnTrHxmI-unsplash.jpg";
import { MdKeyboardDoubleArrowRight, MdKeyboardDoubleArrowLeft } from "react-icons/md";

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full h-[500px] mt-10">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={image1} className="w-full object-cover rounded-md" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn"><MdKeyboardDoubleArrowLeft /></a>
                        <a href="#slide2" className="btn"><MdKeyboardDoubleArrowRight /></a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={image2} className="w-full object-center rounded-md" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn"><MdKeyboardDoubleArrowLeft /></a>
                        <a href="#slide3" className="btn"><MdKeyboardDoubleArrowRight /></a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={image3} className="w-full object-center rounded-md" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn"><MdKeyboardDoubleArrowLeft /></a>
                        <a href="#slide4" className="btn"><MdKeyboardDoubleArrowRight /></a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={image4} className="w-full object-center rounded-md" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn"><MdKeyboardDoubleArrowLeft /></a>
                        <a href="#slide1" className="btn"><MdKeyboardDoubleArrowRight /></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;