import Drawer from "../Drawer/Drawer";
import '../Style.css'
import './DKmon.css'
const DKmon = () => {

    return (
        <div className="container-cont">
            <Drawer />
            <div className="cont">
                <div className="d-flex justify-content-center align-items-center">
                    <h2>Đăng ký môn</h2>
                </div>
                <div className='d-flex justify-content-center align-items-center'>
                    <hr style={{ width: "95%" }} />
                </div>
                <div className="row" style={{ padding: '10px', height: "90px" }}>
                    <div className="col-md-7 list-mon-hoc col-dk-mon">
                        <form class="d-flex">
                            <input class="form-control me-2" type="search" placeholder="Tìm môn học" style={{ borderRadius: "0px" }} />
                            <button class="btn btn-success" type="submit" style={{ borderRadius: "0px", width: '90px' }}>Tìm</button>
                        </form>
                        <div style={{ paddingTop: "10px" }} className="view-list">
                            <table class="table table-striped" style={{ textAlign: "center" }}>
                                <thead>
                                    <tr>
                                        <th scope="col">Tên môn học</th>
                                        <th scope="col">Số tín chỉ</th>
                                        <th scope="col">Tên giáo viên</th>
                                        <th scope="col"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Môn học 1</td>
                                        <td>3</td>
                                        <td>Giáo viên A</td>
                                        <td><button type="button" class="btn btn-primary">Đăng ký</button></td>
                                    </tr>
                                    <tr>
                                        <td>Môn học 2</td>
                                        <td>4</td>
                                        <td>Giáo viên B</td>
                                        <td><button type="button" class="btn btn-primary">Đăng ký</button></td>
                                    </tr>




                                    <tr>
                                        <td>Môn học 2</td>
                                        <td>4</td>
                                        <td>Giáo viên B</td>
                                        <td><button type="button" class="btn btn-primary">Đăng ký</button></td>
                                    </tr>

                                    <tr>
                                        <td>Môn học 2</td>
                                        <td>4</td>
                                        <td>Giáo viên B</td>
                                        <td><button type="button" class="btn btn-primary">Đăng ký</button></td>
                                    </tr>

                                    <tr>
                                        <td>Môn học 2</td>
                                        <td>4</td>
                                        <td>Giáo viên B</td>
                                        <td><button type="button" class="btn btn-primary">Đăng ký</button></td>
                                    </tr>

                                    <tr>
                                        <td>Môn học 2</td>
                                        <td>4</td>
                                        <td>Giáo viên B</td>
                                        <td><button type="button" class="btn btn-primary">Đăng ký</button></td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>
                    </div>

                    <div className="col-md-3 list-da-dk col-dk-mon">
                        <h4 className="text-center">Danh sách đã đăng ký</h4>
                        <table class="table table-striped" style={{ textAlign: "center" }}>
                            <thead>
                                <tr>
                                    <th scope="col">Tên môn học</th>
                                    <th scope="col">Hủy</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Môn học 1</td>
                                    <td><button type="button" class="btn btn-danger">hủy đăng ký</button></td>
                                </tr>
                                <tr>
                                    <td>Môn học 1</td>
                                    <td><button type="button" class="btn btn-danger">hủy đăng ký</button></td>
                                </tr>
                                <tr>
                                    <td>Môn học 1</td>
                                    <td><button type="button" class="btn btn-danger">hủy đăng ký</button></td>
                                </tr>
                                <tr>
                                    <td>Môn học 1</td>
                                    <td><button type="button" class="btn btn-danger">hủy đăng ký</button></td>
                                </tr>
                                <tr>
                                    <td>Môn học 1</td>
                                    <td><button type="button" class="btn btn-danger">hủy đăng ký</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default DKmon