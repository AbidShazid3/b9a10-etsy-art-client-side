import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import PropTypes from 'prop-types';
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext);

    if(loading){
        return (
            <div className='flex justify-center mt-5'>
                <span className="loading loading-spinner text-info"></span>
                <span className="loading loading-spinner text-success"></span>
                <span className="loading loading-spinner text-warning"></span>
                <span className="loading loading-spinner loading-lg text-error"></span>
            </div>
        );
    }

    if(user){
        return children;
    }

    return <Navigate to="/logIn"></Navigate>
};

PrivateRoutes.propTypes = {
    children: PropTypes.node,
}

export default PrivateRoutes;