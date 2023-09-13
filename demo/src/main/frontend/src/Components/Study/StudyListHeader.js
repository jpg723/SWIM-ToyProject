import React from 'react'
import './StudyListHeader.css';
import search_btn from '../../svg/search_btn.png';
import language_icon from '../../img/language-icon.png';
import company_icon from '../../img/company-icon.png';
import studying_icon from '../../img/studying-icon.png';
import programming_icon from '../../img/programming-icon.png';
import hobby_icon from '../../img/hobbies-icon.png';
import etc_icon from '../../img/etc-icon.png';
import { studyCategoryAtom } from "../../atoms";
import { useRecoilState } from "recoil";

function StudyList() {

  //카테고리 클릭 시
  const [study_category, setStudy_category] = useRecoilState(studyCategoryAtom);

  function select_studyCategory(category) {
    setStudy_category(category);
    window.location.replace("/study-list/" + category);
  }

  return (
    <div>
      {/*헤더1 */}
      <div id="study-list-header">
          <div class="study-list-header-content1">
              <div class="study-list-header-content1-text" 
              onClick={() => select_studyCategory('인기')}>인기</div>
              <div class="study-list-header-content1-text" 
              onClick={() => select_studyCategory('최신')}>최신</div>
              <div class="study-list-header-content1-text" 
              onClick={() => select_studyCategory('전체')}>전체</div>
          </div>
          <div class="study-list-header-content2">
              <div class="search-box">
                <input class="search-input-box" placeholder='검색어를 입력해주세요'></input>
                <img id="search_btn_img" src={search_btn}></img>
              </div>
          </div>
          <div class="study-list-header-content3">
              <div class="study-list-header-wrap-text">모집 중만 보기</div>
              <div class="recruting-btn">
                <input type="checkbox" id="switch"></input>
                <label for="switch" class="switch_label">
                  <span class="onf_btn"></span>
                </label>
              </div>
          </div>
      </div>
      <div class="study-list-line"></div>
      {/*헤더2 */}
      <div id="study-list-tag">
          <button class="study-tag" onClick={() => select_studyCategory('어학')}>
            <div class="study-tag-content">
              <img class="study-tag-img" src={language_icon}></img>
              <div class="study-tag-text">어학</div>
            </div>
          </button>
          <button class="study-tag" onClick={() => select_studyCategory('취업')}>
            <div class="study-tag-content">
              <img class="study-tag-img" src={company_icon}></img>
              <div class="study-tag-text">취업</div>
            </div>
          </button>
          <button class="study-tag"onClick={() => select_studyCategory('고시공무원')}>
            <div class="study-tag-content">
              <img class="study-tag-img" src={studying_icon}></img>
              <div class="study-tag-text">고시/공무원</div>
            </div>
          </button>
          <button class="study-tag" onClick={() => select_studyCategory('취미교양')}>
            <div class="study-tag-content">
              <img class="study-tag-img" src={hobby_icon}></img>
              <div class="study-tag-text">취미/교양</div>
            </div>
          </button>
          <button class="study-tag" onClick={() => select_studyCategory('프로그래밍')}>
            <div class="study-tag-content">
              <img class="study-tag-img" src={programming_icon}></img>
              <div class="study-tag-text">프로그래밍</div>
            </div>
          </button>
          <button class="study-tag" onClick={() => select_studyCategory('기타')}>
            <div class="study-tag-content">
              <img class="study-tag-img" src={etc_icon}></img>
              <div class="study-tag-text">기타</div>
            </div>
          </button>
      </div>
    </div>
  )
}

export default StudyList