import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import Drawer from '../Drawer/Drawer';
import '../Style.css'
import './Cource.css'
import { useEffect, useState } from 'react';
const Diem = () => {
    const Navigate = useNavigate();
    const location = useLocation();

    return (
        <div className="container-cont">
            <Drawer />
            <div className="cont">
                <h1 className='d-flex justify-content-center align-items-center'>Tên</h1>
                <div className='d-flex justify-content-center align-items-center'>
                    <hr style={{ width: "95%" }} />
                </div>
                <div className='d-flex justify-content-center align-items-center cont-monhoc'>
                    <div className='view-Diem'>
                        <h4>câu hỏi</h4>
                        <h7>nội dung câu hỏi</h7>
                    </div>
                </div>
                <div className='d-flex justify-content-center align-items-center cont-monhoc'>
                    <div className='view-Diem'>
                        <h6>id - họ tên sinh viên</h6>
                        <p>nội dung bài làm</p>
                        <div style={{ display: 'flex', width: "290px", justifyContent: 'space-between', height: "50px", alignItems: "center" }}>
                            <h6>Điểm:</h6>
                            <input type='number' style={{ width: "80px", height: "40px" }} />
                            <button class="btn btn-primary">Cập nhật Điểm</button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
};

export default Diem