import React from 'react'
import './StudyListHeader.css';
import search_btn from '../../svg/search_btn.png';

function StudyList() {
  return (
    <div>
      {/*헤더1 */}
      <div id="study-list-header">
          <div class="study-list-header-content1">
              <div class="study-list-header-content1-text">인기</div>
              <div class="study-list-header-content1-text">최신</div>
              <div class="study-list-header-content1-text">전체</div>
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
          <button class="study-tag"><div class="study-tag-content"><img class="study-tag-img"></img><div class="study-tag-text">어학</div></div></button>
          <button class="study-tag"><div class="study-tag-content"><img class="study-tag-img"></img><div class="study-tag-text">취업</div></div></button>
          <button class="study-tag"><div class="study-tag-content"><img class="study-tag-img"></img><div class="study-tag-text">고시/공무원</div></div></button>
          <button class="study-tag"><div class="study-tag-content"><img class="study-tag-img"></img><div class="study-tag-text">취미/교양</div></div></button>
          <button class="study-tag"><div class="study-tag-content"><img class="study-tag-img"></img><div class="study-tag-text">프로그래밍</div></div></button>
          <button class="study-tag"><div class="study-tag-content"><img class="study-tag-img"></img><div class="study-tag-text">기타</div></div></button>
      </div>
    </div>
  )
}

export default StudyList