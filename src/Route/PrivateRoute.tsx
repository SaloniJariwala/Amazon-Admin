import { Navigate } from "react-router-dom";
import { IRouteContainerProps } from "../Types/Route";

const PrivateRoute: React.FC<IRouteContainerProps> = ({ Component }) => {
    const token = localStorage.getItem('AmazonToken');
    if (token) {
        return Component
    } else {
        return <Navigate to="/seller/sign-in" />
    }
};

export default PrivateRoute;