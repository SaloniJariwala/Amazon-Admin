import { Navigate } from "react-router-dom";
import { IRouteContainerProps } from "../Types/Route";

const PrivateRoute: React.FC<IRouteContainerProps> = ({ Component }) => {
    const token = localStorage.getItem('token');
    if (token) {
        return Component
    } else {
        return <Navigate to="/sign-in" />
    }
};

export default PrivateRoute;