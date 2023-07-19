import React from 'react'
import { ReactComponent as Arrow2} from "../../svg/Arrow 2.svg";
import './StudyView.css';

function StudyView() {
  return (
    <div id="study-view-box">
        {/*스터디 헤더 */}
        <div id="study-view-header">
            <Arrow2></Arrow2>
            <div id="study-view-title">플러터 입문 뿌시기</div>
            <div id="study-view-header-content">
                <div id="study-view-profile"></div>
                <span id="study-view-id">닉네임</span>
                <div id="study-view-header-line"></div>
                <span id="study-view-date">2023.07.19</span>
            </div>
        </div>
        {/*스터디 카테고리 */}
        <div id="study-view-info">
            <div class="study-view-info-wrap">
                <div class="study-view-info-content">
                    <div class="study-view-info-category">모집여부</div>
                    <div>모집중</div>
                </div>
                <div class="study-view-info-content">
                    <div class="study-view-info-category">진행방식</div>
                    <div>오프라인</div>
                </div>
            </div>
            <div class="study-view-info-wrap">
                <div class="study-view-info-content">
                    <div class="study-view-info-category">카테고리</div>
                    <div>어학</div>
                </div>
                <div class="study-view-info-content">
                    <div class="study-view-info-category">지역</div>
                    <div>서울</div>
                </div>
            </div>
            <div class="study-view-info-wrap">
                <div class="study-view-info-content">
                    <div class="study-view-info-category">모집인원</div>
                    <div>인원 미정</div>
                </div>
            </div>
        </div>
        {/*스터디 소개 */}
        <div id="study-view-intro">
            <div id="study-view-intro-title">프로젝트 소개</div>
            <div id="study-view-intro-content">
                안녕하세요 프로젝트를 진행해보아요~ 하이루 방가방가!
            </div>
        </div>
    </div>
  )
}

export default StudyView