import { Link, useRouteError } from "react-router-dom";
import image from "../../assets/images/404.gif"

const ErrorPage = () => {
    const error = useRouteError();

    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="text-center text-xl space-y-1">
                <img src={image} alt="" className="w-1/2 h-1/2 m-auto" />
                <p>Sorry, an unexpected error has occurred.</p>
                <p className="text-red-600">{error.data}</p>
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>
                <Link to="/" className="text-green-500 font-bold">Back To Home</Link>
            </div>
        </div>
    );
};

export default ErrorPage;