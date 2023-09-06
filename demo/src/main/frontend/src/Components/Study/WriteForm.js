import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./WriteForm.css";
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; 

function WriteForm() {

  /*카테고리*/
  const [study_category, setStudy_category] = useState("어학");

  const Select_studyCategory = (e) => {
    setStudy_category(e.target.value);
  }

  /*인원 수*/
  const [studyNum_state, setStudyNum_state] = useState("Undefined");
  const [study_num, setStudy_num] = useState(0);

  const StudyNum_state = (e) => {
    setStudyNum_state(e.target.value);
  };

  const Select_studyNum = (e) => {
    setStudy_num(e.target.value);
  };

  /*온오프라인*/
  const [study_onoff, setStudy_onoff] = useState("온라인");

  const Select_studyOnoff = (e) => {
    setStudy_onoff(e.target.value);
  }

  /*지역*/
  const [study_region, setStudy_region] = useState("전체");

  const Select_studyRegion = (e) => {
    setStudy_region(e.target.value);
  }

  /*제목*/
  const [study_title, setStudy_title] = useState("");

  const Select_studyTitle = (e) => {
    setStudy_title(e.target.value);
  }

  /*내용*/
  const [study_content, setStudy_content] = useState("");

  const Select_studyContent = (value) => {
    setStudy_content(value);
  };

  /*취소 버튼 클릭시*/
  const navigate = useNavigate();
  function write_cancle(){
    navigate('/study-list');
  }

  /*등록 버튼 클릭시*/
  function write_save(){
    const date = new Date();

    if(study_region !== "전체" && study_title !== "" && study_content !== ""){
      axios(
        {
          url: '/study/register',
          method: 'post',
          data: {
            data1: study_title, data2: study_category, data3: study_num, data4: study_onoff,
            data5: study_region, data6: sessionStorage.getItem("id"), data7: study_content,
            data8: date.toLocaleDateString()
          } , 
          baseURL: 'http://localhost:8080',
        }
      ).then(function (response) {
        document.location.href = "/study-list";
      });
    }

    else {
      alert("입력폼 확인");
        

    }
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
            <select id="WriteForm-option_value" onChange={Select_studyCategory} value={study_category}>
              <option value="어학">어학</option>
              <option value="취업">취업</option>
              <option value="고시/공무원">고시/공무원</option>
              <option value="취미/교양">취미/교양</option>
              <option value="프로그래밍">프로그래밍</option>
              <option value="기타">기타</option>
            </select>
          </div>

          <div id="WriteForm-1txt-info-select">
            <text id="WriteForm-option">모집인원</text>
            <select id="WriteForm-option_value" onChange={StudyNum_state} value={studyNum_state}>
              <option value="Undefined">인원 미정</option>
              <option value="direct">직접 입력</option>
            </select>
          </div>
          {studyNum_state === "direct" ?
          (<div id="WriteForm-1txt-info-select" onChange={Select_studyNum} value={study_num}>
            <input type="text" id="selboxDirect" name="selboxDirect"/>
          </div>):(<div></div>)
          }
        </div>
        <div id="WriteForm-1txt-info">
          <div id="WriteForm-1txt-info-select">
            <text id="WriteForm-option">진행방식</text>
            <select id="WriteForm-option_value" onChange={Select_studyOnoff} value={study_onoff}>
              <option value="온라인">온라인</option>
              <option value="오프라인">오프라인</option>
            </select>
          </div>

          {study_region === "전체" ? (<div id="WriteForm-1txt-info-select">
            <text id="WriteForm-option">지역</text>
            <select id="WriteForm-option_value" onChange={Select_studyRegion} value={study_region}>
              {
                region_option.map(function (a) {
                  return(
                    <option value={a}>{a}</option>
                  )
                })
              }
            </select>
          </div>) : <div></div>}
        </div>
      </div>
      <div className="WriteForm-2">
        <div id="WriteForm-1txt">스터디를 소개해주세요.</div>
        <div id="WriteForm-2-info">
          <div onChange={Select_studyTitle} value={study_title}>
            <input
              type="text"
              placeholder="제목을 입력해주세요"
              id="WriteForm-2-info-title_input"
            />
          </div>

          <div id="quill">
            <ReactQuill onChange={Select_studyContent} value={study_content}/>
          </div>
          <div id="WriteForm-2-info-btns">
            <button id="WriteForm-2-info-btns-cancle" onClick={write_cancle}>취소</button>
            <button id="WriteForm-2-info-btns-save" onClick={write_save}>등록</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WriteForm;
