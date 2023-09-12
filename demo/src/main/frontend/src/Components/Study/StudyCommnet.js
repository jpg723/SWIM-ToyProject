import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom';
import './StudyComment.css';
import axios from 'axios';

function StudyCommnet() {

  const [comment_content, setComment_content] = useState();
  const Write_comment = (e) => {
    setComment_content(e.target.value);
  };

  let { id } = useParams();
  /*댓글 등록 버튼 클릭시*/
  function comment_register(){
    const date = new Date();

    if(comment_content !== ""){
      axios(
        {
          url: '/comment/register',
          method: 'post',
          data: {
            data1: id, data2: sessionStorage.getItem("id"), data3: date.toLocaleDateString(), data4: comment_content,
          } , 
          baseURL: 'http://localhost:8080',
        }
      ).then(function (response) {
        console.log(response.data1);
      });
    }
  }

  /*댓글 가져오기*/
  const [comment, setComment] = useState("");
  useEffect(()=>{
    axios.get("/comment/list/" + id).then((response)=>{
        if(response.data){
            console.log(response.data);
            setComment(response.data);
        }else{
          console.log(response.data);
        }
    });
  }, []);

  return (
    <div>
      <div id="commnet_header">댓글</div>
      <div id="comment_write_box">
        <textarea id="comment_write_input" placeholder='댓글을 입력하세요.' 
          onChange={Write_comment} value={comment_content}>
        </textarea>
        <div id="comment_btn_box">
          <button id="comment_cancle">취소</button>
          <button id="comment_register" onClick={comment_register}>등록</button>
        </div>
      </div>
    </div>
  )
}

export default StudyCommnet