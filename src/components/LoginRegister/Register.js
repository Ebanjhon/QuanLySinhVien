import { Link } from "react-router-dom";
const Register = () => {


    return (
        <div className='d-flex justify-content-center align-items-center vh-100 bg-img' >
            <div className='form-login'>
                <div style={{ textAlign: "center" }}>
                    <h1>Register</h1>
                    <p>Vui lòng nhập đầy đủ thông tin dưới đây!</p>
                </div>
                <form style={{ width: "100%" }}>
                    <label style={{ marginLeft: "10px" }}>Mật khẩu</label>
                    <input className='form-input' type='password' placeholder='Password' />
                </form>

                <Link to={"/"}><button type="button" class="btn btn-primary btn-login">Register</button></Link>
                <h5>Đã có tài khoản?<Link to={"/login"}>Đăng nhập</Link></h5>
            </div>
        </div>
    )
};

export default Register

