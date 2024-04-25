import { Link } from 'react-router-dom';
import './LoginRegister.css';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../Navigation';
const Login = () => {
    const navigate = useNavigate();// dùng để chuyển trang
    const [user, dispatch] = useContext(UserContext);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [show, setShow] = useState(false);

    // var currentUser = {
    //     username: "eban",
    //     firstName: "Jhon", // Thay "firtname" bằng "firstName"
    //     lastName: "eban", // Thay "lastname" bằng "lastName"
    //     role: "STUDENT",
    //     id: 1,
    //     email: "yjhoneban1403@gmail.com",
    //     address: "Cuor Dang B",
    //     avatar: "https://i.pinimg.com/736x/cb/97/b3/cb97b32a1e88722ebe7bc8d4498a0e02.jpg"
    // };


    // ham đăng nhập
    const login = async () => {

        // lay current user
        try {
            const response = await fetch('http://127.0.0.1:8000/users/1');
            if (response.status !== 200) {
                throw new Error("that bai la me thanh cong!");
            }
            const currentUser = await response.json();
            dispatch({ "type": "login", "payload": { currentUser } });

        } catch (error) {
            alert(error);
        }

        // if (username === "jhon" && password === "123") {
        //     // đưa vào reducer
        //     dispatch({ "type": "login", "payload": { currentUser } });
        // } else {
        //     setShow(true);
        // }

        // dispatch({ "type": "login" });
        // navigate('/');
    };

    // hàm nhập dữ liệu
    const changusername = (event) => {
        setUsername(event.target.value);
    };

    const changpassword = (event) => {
        setPassword(event.target.value);
    };

    const handleEnterPress = (event) => {
        if (event.key === 'Enter') {
            // Gọi hàm bạn muốn khi nhấn Enter ở đây
            login();
            // Nếu bạn muốn tránh hành vi mặc định của Enter trong form
            event.preventDefault();
        }
    }

    const showalert = () => {
        setShow(false);

    };

    return (
        <div className='d-flex justify-content-center align-items-center vh-100 bg-img cot'>
            {show && (
                <div class="alert alert-danger" role="alert">
                    Mật khẩu hoặc tên đăng nhập không đúng!
                    <div className='btn btn-close' onClick={showalert}></div>
                </div>
            )}

            <div className='form-login'>
                <div style={{ textAlign: "center" }}>
                    <h1>Login</h1>
                    <p>Please enter your username and password!</p>
                </div>
                <form style={{ width: "100%" }}>
                    <label style={{ marginLeft: "10px" }}>Tên đăng nhập</label>
                    <input className='form-input' type='text' placeholder='Username' onChange={changusername} onKeyDown={handleEnterPress} />
                    <br />
                    <label style={{ marginLeft: "10px" }}>Mật khẩu</label>
                    <input className='form-input' type='password' placeholder='Password' onChange={changpassword} onKeyDown={handleEnterPress} />
                </form>

                <Link to={""} style={{ textDecoration: "none" }}>Forgot password?</Link>
                <button type="button" class="btn btn-primary btn-login" onClick={login}>LOGIN</button>
                <h5>Chưa có tài khoản?<Link to={"/register"}>Đăng ký</Link></h5>
            </div>
        </div>
    )
};

export default Login

