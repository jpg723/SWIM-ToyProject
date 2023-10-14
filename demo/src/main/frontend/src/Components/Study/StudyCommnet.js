import React, {useState, useEffect} from 'react'
import {useParams, useNavigate} from 'react-router-dom';
import './StudyComment.css';
import axios from 'axios';

function StudyCommnet() {

  const [comment_content, setComment_content] = useState();
  const Write_comment = (e) => {
    setComment_content(e.target.value);
  };

  const [comment_count, setComment_count] = useState(0);

  let { id } = useParams();
  const navigate = useNavigate();
  /*댓글 등록 버튼 클릭시*/
  function comment_register(){
    const date = new Date();

    if(comment_content !== ""){
      axios(
        {
          url: '/comment/register',
          method: 'post',
          data: {
            data1: sessionStorage.getItem("id"), 
            data2: date.toLocaleDateString() + date.toLocaleTimeString(), 
            data3: comment_content,
            data4: id
          } , 
          baseURL: 'http://localhost:8080',
        }
      ).then(function (response) {
        //window.location.replace("/study-view/" + id);
        console.log(comment.length);
        setComment_count(comment.length);
      });
    }
  }

  /*댓글 가져오기*/
  const [comment, setComment] = useState([]);
  useEffect(()=>{
    axios.get("/comment/list/" + id).then((response)=>{
        if(response.data){
            setComment(response.data);
        }else{
          console.log(response.data);
        }
    });
  }, []);

  return (
    <div>
      <div id="commnet_header"><span>댓글</span><span id="comment_count">{comment.length}</span></div>
      <div id="comment_write_box">
        <textarea id="comment_write_input" placeholder='댓글을 입력하세요.' 
          onChange={Write_comment} value={comment_content}>
        </textarea>
        <div id="comment_btn_box">
          <button id="comment_cancle">취소</button>
          <button id="comment_register" onClick={comment_register}>등록</button>
        </div>
      </div>
      <div id="comment_main">
        {comment.map(function(a,i){
          return(
            <div class="comment-box">
              <div class="comment-box-header">
                <span class="comment-writer">{comment[i].writer}</span>
                <span class="comment-date">{comment[i].comment_create_date}</span>
              </div>
              <div class="comment-box-content">
                {comment[i].comment_content}
              </div>
            </div>
          )           
        })}
      </div>
    </div>
  )
}

export default StudyCommnet