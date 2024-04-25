import './Quiz.css';

const Quiz = () => {

    return (
        <div className='container-quiz'>

            <div className='nav-timer'>
                <div>
                    <h3>thời gian còn:</h3>
                    <h1 style={{ fontSize: '50px' }}>00:00</h1>
                    <button className='btn btn-green' style={{ width: '180px', height: '50px', fontSize: "22px" }}>làm xong</button>
                </div>
            </div>

            {/* danh sach cau trac nghiem */}
            <div className='quiz-item'>
                <div className='item-quiz'>
                    <h3>Câu: 1</h3>
                    <h4>nội dung câu hỏi</h4>
                    <div className='quesions'>
                        <input type='radio' name='1' />
                        <span>nội dung câu hỏi</span>
                    </div>

                    <div className='quesions'>
                        <input type='radio' name='1' />
                        <span>nội dung câu hỏi</span>
                    </div>

                    <div className='quesions'>
                        <input type='radio' name='1' />
                        <span>nội dung câu hỏi</span>
                    </div>

                    <div className='quesions'>
                        <input type='radio' name='1' />
                        <span>nội dung câu hỏi</span>
                    </div>
                </div>

                <div className='item-quiz'>
                    <h3>Câu: 1</h3>
                    <h4>nội dung câu hỏi</h4>
                    <div className='quesions'>
                        <input type='radio' name='2' />
                        <span>nội dung câu hỏi</span>
                    </div>

                    <div className='quesions'>
                        <input type='radio' name='2' />
                        <span>nội dung câu hỏi</span>
                    </div>

                    <div className='quesions'>
                        <input type='radio' name='2' />
                        <span>nội dung câu hỏi</span>
                    </div>

                    <div className='quesions'>
                        <input type='radio' name='2' />
                        <span>nội dung câu hỏi</span>
                    </div>
                </div>
            </div>
        </div >
    )
};

export default Quiz