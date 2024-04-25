import { useState } from 'react';
import Drawer from '../Drawer/Drawer';
import '../Style.css'
import './Scores.css'
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
const Scores = () => {

    const generatePDF = () => {
        const input = document.getElementById('bangpdf');
        html2canvas(input)
            .then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF('landscape', 'mm', 'a4');

                // Lấy kích thước của trang PDF
                const pdfWidth = pdf.internal.pageSize.getWidth();
                const pdfHeight = pdf.internal.pageSize.getHeight();

                // Lấy kích thước của hình ảnh
                const imgWidth = canvas.width;
                const imgHeight = canvas.height;

                // Tính toán tỷ lệ để đảm bảo rằng hình ảnh không bị méo
                const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);

                // Tính toán kích thước mới của hình ảnh dựa trên tỷ lệ
                const newImgWidth = imgWidth * ratio;
                const newImgHeight = imgHeight * ratio;

                // Tính toán vị trí để đặt hình ảnh vào trung tâm của trang PDF
                const x = (pdfWidth - newImgWidth) / 2;
                const y = (pdfHeight - newImgHeight) / 2;

                // Thêm hình ảnh vào PDF với kích thước và vị trí mới
                pdf.addImage(imgData, 'PNG', x, y, newImgWidth, newImgHeight);

                // Lưu tệp PDF
                pdf.save('bangdiem.pdf');
            });
    };

    return (
        <div className="container-cont">
            <Drawer />
            <div className="cont" >
                <div className='head-score'>
                    <h2>Bảng điểm</h2>
                    <div>
                        <select name="semester" class="form-select">
                            <option value="semester1">Học kỳ 1</option>
                            <option value="semester2">Học kỳ 2</option>
                            <option value="summer">Học kỳ 3</option>
                        </select>
                    </div>
                </div>

                {/* danh sách bảng điểm môn học */}
                <div className="list-mon-diem d-flex justify-content-center align-items-center" id='bangpdf'>
                    <hr className='hr-border' style={{ width: "80%" }} />
                    <div>
                        <h3>Sinh Viên: Êban - 1234567890</h3>
                    </div>
                    <div className='form-table-diems'>
                        <h2>Tên môn học</h2>
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
                </div>
                <div className='d-flex justify-content-center align-items-center'>
                    <button className='btn btn-danger' onClick={generatePDF}>Xuất bảng điểm</button>
                </div>
            </div>
        </div>
    )
};

export default Scores