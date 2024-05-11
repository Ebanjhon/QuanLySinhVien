import Drawer from "../Drawer/Drawer";
import React, { useState } from "react";
import 'quill/dist/quill.snow.css'
import ReactQuill from 'react-quill'
import { Link } from "react-router-dom";
const Essay = () => {
    const [content, setContent] = useState('');
    var modules = {
        toolbar: [
            [{ size: ["small", false, "large", "huge"] }],
            ["bold", "italic", "underline", "strike", "blockquote"],
            [{ list: "ordered" }, { list: "bullet" }],
            ["link", "image"],
            [
                { list: "ordered" },
                { list: "bullet" },
                { indent: "-1" },
                { indent: "+1" },
                { align: [] }
            ],
            [{ "color": ["#000000", "#e60000", "#ff9900", "#ffff00", "#008a00", "#0066cc", "#9933ff", "#ffffff", "#facccc", "#ffebcc", "#ffffcc", "#cce8cc", "#cce0f5", "#ebd6ff", "#bbbbbb", "#f06666", "#ffc266", "#ffff66", "#66b966", "#66a3e0", "#c285ff", "#888888", "#a10000", "#b26b00", "#b2b200", "#006100", "#0047b2", "#6b24b2", "#444444", "#5c0000", "#663d00", "#666600", "#003700", "#002966", "#3d1466", 'custom-color'] }],
        ]
    };

    var formats = [
        "header", "height", "bold", "italic",
        "underline", "strike", "blockquote",
        "list", "color", "bullet", "indent",
        "link", "image", "align", "size",
    ];

    const handleContentChange = (newContent) => {
        setContent(newContent);
    };
    const saveContent = () => {
        console.log(content);
    };
    return (
        <div className="container-cont">
            <Drawer />
            <div className="cont">
                <h1 className="d-flex justify-content-center align-items-center">Bài tập tự luận</h1>
                <hr />
                <div className="" style={{ padding: "10px" }}>
                    <h4>Câu1: nội dung câu hỏi</h4>
                    <h4>Câu2: nội dung câu hỏi</h4>

                    nhập câu trả lời tại đây
                    <div style={{ width: "100%", display: "flex", justifyContent: "left" }}>
                        <div style={{ width: "100%" }}>
                            <div style={{ display: "grid" }}>
                                <ReactQuill
                                    theme="snow"
                                    modules={modules}
                                    formats={formats}
                                    placeholder="write your content ...."
                                    onChange={handleContentChange}
                                    style={{ height: "220px" }}
                                >
                                </ReactQuill>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ marginTop: "50px", display: "flex", justifyContent: "flex-end", paddingRight: "10px" }} >
                    <Link to={"/course"}>
                        <button class="btn btn-danger" style={{ margin: "4px", width: "100px" }}>hủy</button>
                    </Link>
                    <button onClick={saveContent} class="btn btn-secondary" style={{ margin: "4px", width: "100px" }}>lưu bài</button>
                </div>

                {/* cách hiện thị */}
                {/* <div style={{
                    lineHeight: "5px"
                }}>
                    <div dangerouslySetInnerHTML={{ __html: content }} />
                </div> */}
                {/* /// */}

            </div>
        </div>
    );
};

export default Essay