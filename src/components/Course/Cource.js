import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import Drawer from '../Drawer/Drawer';
import '../Style.css'
import './Cource.css'
import { useEffect, useState } from 'react';
const Course = () => {
    const Navigate = useNavigate();
    const location = useLocation();
    const courseFromLocationState = location.state?.course;
    // Kiểm tra xem location.state?.course có giá trị không
    if (courseFromLocationState) {
        const courseString = JSON.stringify(courseFromLocationState);
        sessionStorage.setItem('course', courseString);
    }
    // Lấy giá trị từ sessionStorage
    const storedCourseString = sessionStorage.getItem('course');
    // Chuyển đổi chuỗi JSON thành đối tượng
    const storedCourse = storedCourseString ? JSON.parse(storedCourseString) : null;
    // Sử dụng giá trị từ location.state?.course nếu có, nếu không sử dụng giá trị từ sessionStorage
    const Course = courseFromLocationState || storedCourse;
    const [dataBaiTap, setDataBaiTap] = useState(null);
    useEffect(() => {
        const fetchBaiTap = async () => {
            try {
                const response = await fetch(`https://localhost:7111/api/BaiTap/byKhoaHoc/${Course.IdKhoaHoc}`);
                setDataBaiTap(await response.json());
            } catch (error) {
                // console.error('Error fetching data:', error);
            }
        }
        fetchBaiTap();
    }, []);

    const doexam = (baitap) => {
        switch (baitap.IdLoaiBaiTap) {
            case 1:
                Navigate('/quiz', { state: { baitap } });
                break;
            case 2:
                Navigate('/essay', { state: { baitap } });
                break;
            default:
        }
    }

    const typeBT = (idType) => {
        switch (idType) {
            case 1:
                return "Bài tập trắc nghiệm";
            case 2:
                return "Bài tập tự luận";
            default:
                return "không tìm thấy kiểu bài tập";
        }
    };

    const typeDeadline = (idType) => {
        switch (idType) {
            case 1:
                return "Phút";
            case 2:
                return "Ngày";
            default:
                return "không tìm thấy kiểu bài tập";
        }
    };

    return (
        <div className="container-cont">
            <Drawer />
            <div className="cont">
                {/* hiển thị tên môn học */}
                <div style={{ padding: "10px", display: "flex", alignItems: 'center' }}>
                    <div style={{ width: '40%' }}>
                        <h1 className='limited-text'>{Course.TenKhoaHoc} </h1>
                        <h5>mã: {Course.IdKhoaHoc} - {Course.TenMonHoc}</h5>
                    </div>
                    <h3 style={{ marginLeft: "30px" }}>GV: {Course.TenGiangVien}</h3>
                </div>
                <div className='d-flex justify-content-center align-items-center'>
                    <hr style={{ width: "95%" }} />
                </div>
                <div className='d-flex justify-content-center align-items-center cont-monhoc'>
                    {/* hiện thị điểm môn học */}
                    <div className='form-table-diems'>
                        <table className='table table-bordered' style={{ textAlign: 'center' }}>
                            <thead>
                                <tr >
                                    <th>Giữa kỳ</th>
                                    <th>Cuối kỳ</th>
                                    <th>Điểm miệng</th>
                                    <th>Điểm cộng</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>9.0</td>
                                    <td>9.0</td>
                                    <td>9.0</td>
                                    <td>9.0</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    {/* hiển thị các file môn học */}
                    {/* hiển thị các bài tập trắc nghiệm */}
                    <div className='view-baihoc'>

                        {!dataBaiTap ? (
                            <p>Chưa có bài tập!</p>
                        ) : (
                            <>
                                {dataBaiTap.map((bt) => (
                                    <div style={{ paddingTop: "10px" }}>
                                        <h4>{bt.TenBaiTap}</h4>
                                        <p>{typeBT(bt.IdLoaiBaiTap)}</p>
                                        <button className='btn btn-custom' onClick={() => doexam(bt)}>Thực hiện bài làm</button>
                                        <p>thời gian: {bt.ThoiGian} {typeDeadline(bt.IdLoaiBaiTap)}</p>
                                        <hr></hr>
                                    </div>
                                ))}
                            </>
                        )}


                    </div>

                    {/* hiển thị các bài viết diễn đàn */}
                    <div className='view-dien-dan'>
                        diễn đàn
                    </div>
                </div>
            </div>
        </div >
    )
};

export default Course