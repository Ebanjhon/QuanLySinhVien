import Drawer from "../Drawer/Drawer";
import '../Style.css'
import './Home.css'
import { IoSearch } from "react-icons/io5";
import { IoIosSettings } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../Navigation";
const Home = () => {
    const navigate = useNavigate();
    const [days, setDays] = useState([]);
    const [month, setMonth] = useState();
    const [year, setYear] = useState();
    const [day, setDay] = useState();

    const [user, dispatch] = useContext(UserContext);

    const test = () => {
        console.log(user)
    }

    useEffect(() => {
        // console.log(user);
    }, [])

    // hàm tạo mảng ngày
    useEffect(() => {

        // hàm lấy ngày tháng hiện tại
        var d = new Date();
        setDay(d.getDate());
        setMonth(d.getMonth() + 1);
        // setMonth();
        setYear(d.getFullYear());
        // console.log(day, month, year);
        // hàm lấy thứ index ngày 1 của tháng 
        var dayofweek = new Date(year, month - 1, 1).getDay();
        var cacThu = [6, 0, 1, 2, 3, 4, 5];
        var index = cacThu[dayofweek];
        var ngays = [];
        // gán ngày rổng
        for (var i = 0; i < index; i++) {
            ngays.push("");
        }
        // gán các ngày
        for (var i = 1; i <= laySoLuongNgay(); i++) {
            ngays.push(i);
        }
        //gàn cách ngày còn thiếu
        for (var i = 1; ngays.length < 35; i++) {
            ngays.push("");
        }
        setDays(ngays);
        // console.log(days);

    }, [month]);

    // hàm lấy số lượng ngày của tháng
    function laySoLuongNgay() {
        return new Date(year, month, 0).getDate();
    }


    const courseDetail = (courseId) => {// data là id của cource
        navigate('/course', { state: { courseId } });
    }

    // tạo lịch
    function Days() {
        return (
            <>
                {days.reduce((rows, item, index) => {
                    if (index % 7 === 0) rows.push([]);
                    const tdStyle = item === day ? { backgroundColor: '#00daff' } : {}; // Kiểm tra nếu item bằng giá trị của day thì gán style
                    rows[rows.length - 1].push(<td key={index} style={tdStyle}>{item}</td>);
                    return rows;
                }, []).map((row, index) => <tr key={index}>{row}</tr>)}
            </>
        );
    }

    return (
        <div className="container-cont">
            <Drawer />
            <div className="cont">
                {/* // tìm kiếm môn học */}
                <div className="head d-flex  align-items-center">
                    {/* <h2>Xin chào {user.username}</h2> */}
                    <form class="card card-sm">
                        <div class="row">
                            <div class="col">
                                <input class="form-control form-control-lg form-control-borderless" style={{ width: "500px" }} type="search" placeholder="Tìm kiếm khóa học..." />
                            </div>
                            <div class="col-auto">
                                <button class="btn btn-lg btn-info" type="submit"><IoSearch /> Tìm</button>
                            </div>
                        </div>
                    </form>
                    <div>
                        <button className="btn btn-secondary" onClick={test}>Cài đặt <IoIosSettings /></button>
                    </div>
                </div>
                {/* hiện thị môn học và lịch */}
                <div className="course-calender">
                    <div className="mid">
                        <h2 className="text-center">Các khóa học</h2>
                        <div class="couses">

                            <div class="couse btn" onClick={() => courseDetail(1)}>
                                <img src="https://i.pinimg.com/564x/56/65/37/566537bb231263dd1f26f6267ed722b7.jpg" className="img-course" />
                                <div className="info-couse">
                                    <h2>Tên môn học</h2>
                                    <h4>Tên lớp học</h4>
                                    <h6>Tên Giáo viên: TS Eban Jhon</h6>
                                    <p>Lớp có 02 học sinh</p>
                                </div>
                                {/* <div className="info-aler">
                                    thông báo
                                </div> */}
                            </div>

                            <div class="couse btn" onClick={() => courseDetail(2)}>
                                <img src="https://i.pinimg.com/564x/56/65/37/566537bb231263dd1f26f6267ed722b7.jpg" className="img-course" />
                                <div className="info-couse">
                                    <h2>Tên môn học</h2>
                                    <h4>Tên lớp học</h4>
                                    <h6>Tên Giáo viên: TS Eban Jhon</h6>
                                    <p>Lớp có 02 học sinh</p>
                                </div>
                                {/* <div className="info-aler">
                                    thông báo
                                </div> */}
                            </div>

                        </div>
                    </div>
                    <div className="right-side d-flex justify-content-center ">
                        <div style={{}}>
                            <h4 style={{ width: "300px", backgroundColor: "white", textAlign: "center", padding: "13px", borderRadius: "10px", marginTop: "5px" }}>Thông báo</h4>
                            <div style={{ width: "300px", height: "280px", backgroundColor: "white", textAlign: "center", borderRadius: "10px" }}>
                                Không có thông báo nào!
                            </div>
                            {/* lịch */}
                            <div style={{ width: "300px", backgroundColor: "white", borderRadius: "10px", marginTop: "5px", height: "216px" }}>
                                <table className="table text-center">
                                    <thead>
                                        <tr>
                                            <th>ha</th>
                                            <th>ba</th>
                                            <th>bn</th>
                                            <th>nm</th>
                                            <th>su</th>
                                            <th>by</th>
                                            <th>cn</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <Days />
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Home