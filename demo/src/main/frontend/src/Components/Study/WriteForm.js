import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./WriteForm.css";
import { useNavigate } from 'react-router-dom';

function WriteForm() {

  const [study_num, setStudy_num] = useState("undefined");

  const handleSelect = (e) => {
    setStudy_num(e.target.value);
  };

  /*취소 버튼 클릭시 */
  const navigate = useNavigate();
  function write_cancle(){
    navigate(`/`);
  }

  // 지역 value도 한글로 전달
  let [region_option, set_region_option] = useState([
    "전체",
    "서울",
    "수원",
    "인천",
    "대구",
    "부산",
    "울산",
    "광주",
    "전주",
    "대전",
    "세종",
    "제주",
    "춘천",
    "원주",
    "기타",
  ]);

  return (
    <div>
      <div className="WriteForm-1">
        <div id="WriteForm-1txt">스터디 기본정보를 입력 해주세요.</div>
        <div id="WriteForm-1txt-info">
          <div id="WriteForm-1txt-info-select">
            <text id="WriteForm-option">카테고리</text>
            <select id="WriteForm-option_value">
              <option value="language">어학</option>
              <option value="employment">취업</option>
              <option value="gosi">고시/공무원</option>
              <option value="hobby">취미/교양</option>
              <option value="program">프로그래밍</option>
              <option value="etc">타</option>
            </select>
          </div>

          <div id="WriteForm-1txt-info-select">
            <text id="WriteForm-option">모집인원</text>
            <select id="WriteForm-option_value" onChange={handleSelect} value={study_num}>
              <option value="Undefined">인원 미정</option>
              <option value="direct">직접 입력</option>
            </select>
          </div>
          {study_num === "direct" ?
          (<div id="WriteForm-1txt-info-select">
            <input type="text" id="selboxDirect" name="selboxDirect"/>
          </div>):(<div></div>)
          }
        </div>
        <div id="WriteForm-1txt-info">
          <div id="WriteForm-1txt-info-select">
            <text id="WriteForm-option">진행방식</text>
            <select id="WriteForm-option_value">
              <option value="on">온라인</option>
              <option value="off">오프라인</option>
            </select>
          </div>

          <div id="WriteForm-1txt-info-select">
            <text id="WriteForm-option">지역</text>
            <select id="WriteForm-option_value">
              {
              region_option.map(function (a) {
                return(
                  <option value={a}>{a}</option>
                )
              })
              }
            </select>
          </div>
        </div>
      </div>
      <div className="WriteForm-2">
        <div id="WriteForm-1txt">스터디를 소개해주세요.</div>
        <div id="WriteForm-2-info">
          <div>
            <input
              type="text"
              placeholder="제목을 입력해주세요"
              id="WriteForm-2-info-title_input"
            />
          </div>

          <div id="quill">
            <ReactQuill />
          </div>
          <div id="WriteForm-2-info-btns">
            <button id="WriteForm-2-info-btns-cancle" onClick={write_cancle}>취소</button>
            <button id="WriteForm-2-info-btns-save">등록</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WriteForm;
