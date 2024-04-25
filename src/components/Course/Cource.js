import { Link, useLocation } from 'react-router-dom';
import Drawer from '../Drawer/Drawer';
import '../Style.css'
import './Cource.css'
const Course = () => {
    const location = useLocation();
    const courseId = location.state?.courseId;

    return (
        <div className="container-cont">
            <Drawer />
            <div className="cont">
                {/* hiển thị tên môn học */}
                <div style={{ padding: "10px", display: "flex", alignItems: 'center' }}>
                    <div style={{ width: '40%' }}>
                        <h1 className='limited-text'>Lập trinh cơ sở dữ liệu</h1>
                        <h5>lớp: 123</h5>
                    </div>
                    <h3 style={{ marginLeft: "30px" }}>TS: ÊBan</h3>
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
                        <div style={{ paddingTop: "10px" }}>
                            <h4>Chương 1: lập trình sql trên cơ sở dữ liệu và làm quen c#</h4>
                            <p>kiếm tra trắc nghiệm:</p>
                            <Link to={"/quiz"}>
                                <button className='btn btn-custom'>Thực hiện kiểm tra</button>
                            </Link>
                        </div>

                        <div style={{ paddingTop: "10px" }}>
                            <h4>Chương 1: lập trình sql trên cơ sở dữ liệu và làm quen c#</h4>
                            <p>kiếm tra trắc nghiệm:</p>
                            <button className='btn btn-custom'>Thực hiện kiểm tra</button>
                        </div>

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