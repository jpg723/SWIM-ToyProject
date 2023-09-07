import React from 'react'
import './StudyComment.css';

function StudyCommnet() {
  return (
    <div>
      <div id="commnet_header">댓글</div>
      <div id="comment_write_box">
        <textarea id="comment_write_input" placeholder='댓글을 입력하세요.'></textarea>
        <div id="comment_btn_box">
          <button id="comment_cancle">취소</button>
          <button id="comment_register">등록</button>
        </div>
      </div>
    </div>
  )
}

export default StudyCommnet