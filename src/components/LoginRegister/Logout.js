import { useContext, useEffect } from "react";
import { UserContext } from "../../Navigation";
import { useNavigate } from "react-router-dom";

const Logout = () => {
    const [user, dispatch] = useContext(UserContext);
    const navigate = useNavigate();// dùng để chuyển trang

    useEffect(() => {
        dispatch({ "type": "logout" });
        navigate("/login");
    })

    return (
        <>
        </>
    )
};

export default Logout