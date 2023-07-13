import "./WriteForm.css";

function WriteForm() {
  var region_option = [
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
  ];
  var region_value = [
    "Entire",
    "Seoul",
    "Suwon",
    "Incheon",
    "Daegu",
    "Busan",
    "Ulsan",
    "Gwangju",
    "Jeonju",
    "Daejeon",
    "Sejong",
    "Jeju",
    "ChunCheon",
    "Wonju",
    "etc",
  ];

  function option_repeat() {
    for (let i = 0; i < region_option.length; i++) {
      <option value={region_value}>{region_option}</option>;
    }
  }
  return (
    <div>
      <div className="WriteForm-1">
        <div id="WriteForm-1txt">스터디 기본정보를 입력 해주세요.</div>
        <div id="WriteForm-1txt-info">
          <div id="WriteForm-1txt-info-select">
            <div  id="WriteForm-option"><text id="s">카테고리</text></div>
            <select>
              <option value="language">어학</option>
              <option value="employment">취업</option>
              <option value="gosi">고시/공무원</option>
              <option value="hobby">취미/교양</option>
              <option value="program">프로그래밍</option>
              <option value="etc">가타</option>
            </select>
          </div>
          <div id="WriteForm-1txt-info-select">
            <text>모집인원</text>
            <select>
              <option value="direct">직접 입력</option>
              <option value="Undefined">인원 미정</option>
            </select>
          </div>
          <div id="WriteForm-1txt-info-select">
            <text>진행방식</text>
            <select>
              <option value="on">온라인</option>
              <option value="off">오프라인</option>
            </select>
          </div>
          <div id="WriteForm-1txt-info-select">
            <text>지역</text>
            <select>option_repeat()</select>
          </div>
        </div>
      </div>
      <div className="WriteForm-2">
        <div id="WriteForm-1txt">스터디를 소개해주세요</div>
        <div id="WriteForm-2-info">
          <div>제목</div>
          <input></input>
          {/* 글쓰는 공간 추가 */}
          <div>
            <button>취소</button>
            <button>등록</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WriteForm;
