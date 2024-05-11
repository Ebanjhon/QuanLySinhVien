import { useContext, useState } from 'react';
import Drawer from '../Drawer/Drawer';
import '../Style.css'
import './Profile.css'
import { UserContext } from '../../Navigation';
const Profile = () => {
    const [user, dispatch] = useContext(UserContext);
    const [firstname, setFirstName] = useState(user.userInfo.FirstName);
    const [lastname, setLasttName] = useState(user.userInfo.LastName);
    const [email, setEmail] = useState(user.userInfo.Email);
    const [username, setUserName] = useState(user.userInfo.Username);
    const [avatar, setAvatar] = useState(user.userInfo.Avatar);
    const [address, setAddress] = useState(user.userInfo.Address);
    const [role, setRole] = useState(user.userInfo.Role);
    const [readOnly, setReadOnly] = useState(false);

    // chinh sửa thông tin
    const toggleReadOnly = () => {
        setReadOnly(!readOnly);
    };

    const cancel = () => {
        setReadOnly(false);
        setuser();
    };

    const setuser = () => {
        setFirstName(user.currentUser.firstName);
        setLasttName(user.currentUser.lastName);
        setEmail(user.currentUser.email);
        setUserName(user.currentUser.username);
        setAvatar(user.currentUser.avatar);
        setAddress(user.currentUser.address);
    };

    const update = () => {
        setReadOnly(false);
    };

    const ChangeFN = (e) => {
        if (readOnly) {
            setFirstName(e.target.value)

        }
    };

    const ChangeLN = (e) => {
        if (readOnly) {
            setLasttName(e.target.value)
        }
    };

    const ChangeUN = (e) => {
        if (readOnly) {
            setUserName(e.target.value)
        }
    };

    const ChangeE = (e) => {
        if (readOnly) {
            setEmail(e.target.value)
        }
    };

    const ChangeA = (e) => {
        if (readOnly) {
            setAddress(e.target.value)
        }
    };

    return (
        <div className="container-cont">
            <Drawer />
            <div className="cont">
                <div className='d-flex justify-content-center align-items-center vh-100'>
                    <div className='view-profile d-flex justify-content-center align-items-center'>
                        <div className='img-profile' style={{ display: 'flex', flexDirection: "column" }}>
                            <img src={avatar} />
                            <br />
                            <button className='btn btn-info' onClick={toggleReadOnly}>Edit your profile</button>
                            <br></br>
                            <button className='btn btn-dark'>Đổi mật khẩu</button>
                        </div>
                        <div className='info_form'>
                            <h1>{username}</h1>
                            <p>"{role}"</p>
                            <form>
                                <div style={{ display: "flex" }}>
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">First name</label>
                                        <input type="text" class="form-control" value={firstname} onChange={ChangeFN} />
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label" >Last name</label>
                                        <input type="text" class="form-control" value={lastname} onChange={ChangeLN} />
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Email</label>
                                    <input type="email" class="form-control" value={email} onChange={ChangeE} />
                                </div>

                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Address</label>
                                    <input type="text" class="form-control" value={address} onChange={ChangeA} />
                                </div>
                            </form>
                            { }
                            <div className={readOnly ? "edit" : "unedit"}>
                                <button className='btn btn-danger' onClick={cancel} style={{ width: "200px" }}>Hủy</button>
                                <button className='btn btn-xanh' onClick={update} style={{ width: "200px" }}>cập nhật</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
};

export default Profile