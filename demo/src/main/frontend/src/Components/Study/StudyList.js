import './StudyList.css';
import StudyListHeader from './StudyListHeader';
import on_heart from "../../img/heart.png";
import off_heart from "../../img/empty-heart.png";
import React, { useState, useEffect } from "react";
import { ReactComponent as View} from "../../svg/View.svg";
import { ReactComponent as Comment} from "../../svg/Comment.svg";

function StudyList() {
    const [likeState, setLikeState] = useState(false);
    console.log("초기상태" + likeState);
    function likeBtn_click() {
      /*좋아요가 안 눌러져 있을 경우 */
      if(likeState === false){
        setLikeState(true);
      }
      else if(likeState){
        setLikeState(false);
      }
    }
    
  return (
    <div>
        <StudyListHeader/>
        <div id="study-list-main">
              {/*추후에 db연결 후 정보 가져올 예정 */}
            <div class="study-box">
                <div class="study-box-inbox">
                    <div class="study-box-header">
                        <div class="study-box-header-content1">모집중</div>
                        <div class="study-box-header-content2">어학</div>
                    </div>
                    <div class="study-box-main">
                        <div class="study-box-region">지역 | 서울</div>
                        <div class="study-box-title">어학 같이 공부하실 분 모집합니다.</div>
                    </div>
                    <button id="like-btn" onClick={() => likeBtn_click()}><img className="btn_itemLike_icon" src={likeState?on_heart:off_heart}></img></button>
                    <div class="study-box-inbox-line"></div>
                    <div class="study-box-footer">
                        <div class="study-box-footer-content">
                            <View class="study-box-footer-icon1"/>
                            <span class="study-box-footer-count">30</span>
                            <Comment class="study-box-footer-icon2"/>
                            <span class="study-box-footer-count">1200</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="study-box">
                <div class="study-box-inbox">
                    <div class="study-box-header">
                        <div class="study-box-header-content1">모집중</div>
                        <div class="study-box-header-content2">어학</div>
                    </div>
                    <div class="study-box-main">
                        <div class="study-box-region">지역 | 서울</div>
                        <div class="study-box-title">어학 같이 공부하실 분 모집합니다.</div>
                    </div>
                    <button id="like-btn" onClick={() => likeBtn_click()}><img className="btn_itemLike_icon" src={likeState?on_heart:off_heart}></img></button>
                    <div class="study-box-inbox-line"></div>
                    <div class="study-box-footer">
                        <div class="study-box-footer-content">
                            <View class="study-box-footer-icon1"/>
                            <span class="study-box-footer-count">30</span>
                            <Comment class="study-box-footer-icon2"/>
                            <span class="study-box-footer-count">1200</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="study-box">
                <div class="study-box-inbox">
                    <div class="study-box-header">
                        <div class="study-box-header-content1">모집중</div>
                        <div class="study-box-header-content2">어학</div>
                    </div>
                    <div class="study-box-main">
                        <div class="study-box-region">지역 | 서울</div>
                        <div class="study-box-title">어학 같이 공부하실 분 모집합니다.</div>
                    </div>
                    <button id="like-btn" onClick={() => likeBtn_click()}><img className="btn_itemLike_icon" src={likeState?on_heart:off_heart}></img></button>
                    <div class="study-box-inbox-line"></div>
                    <div class="study-box-footer">
                        <div class="study-box-footer-content">
                            <View class="study-box-footer-icon1"/>
                            <span class="study-box-footer-count">30</span>
                            <Comment class="study-box-footer-icon2"/>
                            <span class="study-box-footer-count">1200</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="study-box">
                <div class="study-box-inbox">
                    <div class="study-box-header">
                        <div class="study-box-header-content1">모집중</div>
                        <div class="study-box-header-content2">어학</div>
                    </div>
                    <div class="study-box-main">
                        <div class="study-box-region">지역 | 서울</div>
                        <div class="study-box-title">어학 같이 공부하실 분 모집합니다.</div>
                    </div>
                    <button id="like-btn" onClick={() => likeBtn_click()}><img className="btn_itemLike_icon" src={likeState?on_heart:off_heart}></img></button>
                    <div class="study-box-inbox-line"></div>
                    <div class="study-box-footer">
                        <div class="study-box-footer-content">
                            <View class="study-box-footer-icon1"/>
                            <span class="study-box-footer-count">30</span>
                            <Comment class="study-box-footer-icon2"/>
                            <span class="study-box-footer-count">1200</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="study-box">
                <div class="study-box-inbox">
                    <div class="study-box-header">
                        <div class="study-box-header-content1">모집중</div>
                        <div class="study-box-header-content2">어학</div>
                    </div>
                    <div class="study-box-main">
                        <div class="study-box-region">지역 | 서울</div>
                        <div class="study-box-title">어학 같이 공부하실 분 모집합니다.</div>
                    </div>
                    <button id="like-btn" onClick={() => likeBtn_click()}><img className="btn_itemLike_icon" src={likeState?on_heart:off_heart}></img></button>
                    <div class="study-box-inbox-line"></div>
                    <div class="study-box-footer">
                        <div class="study-box-footer-content">
                            <View class="study-box-footer-icon1"/>
                            <span class="study-box-footer-count">30</span>
                            <Comment class="study-box-footer-icon2"/>
                            <span class="study-box-footer-count">1200</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="study-box">
                <div class="study-box-inbox">
                    <div class="study-box-header">
                        <div class="study-box-header-content1">모집중</div>
                        <div class="study-box-header-content2">어학</div>
                    </div>
                    <div class="study-box-main">
                        <div class="study-box-region">지역 | 서울</div>
                        <div class="study-box-title">어학 같이 공부하실 분 모집합니다.</div>
                    </div>
                    <button id="like-btn" onClick={() => likeBtn_click()}><img className="btn_itemLike_icon" src={likeState?on_heart:off_heart}></img></button>
                    <div class="study-box-inbox-line"></div>
                    <div class="study-box-footer">
                        <div class="study-box-footer-content">
                            <View class="study-box-footer-icon1"/>
                            <span class="study-box-footer-count">30</span>
                            <Comment class="study-box-footer-icon2"/>
                            <span class="study-box-footer-count">1200</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default StudyList