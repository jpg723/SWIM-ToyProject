import './StudyList.css';
import StudyListHeader from './StudyListHeader';
import on_heart from "../../img/heart.png";
import off_heart from "../../img/empty-heart.png";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as View} from "../../svg/View.svg";
import { ReactComponent as Comment} from "../../svg/Comment.svg";
import axios from 'axios'; 

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

    /*스터디 리스트 가져오기*/
    const [study_list , SetStudy_list] = useState([]);
   
    useEffect(()=> {
        axios.get('/study/list').then((res)=>{
        SetStudy_list(res.data)
        console.log(res)
        })
        .catch(error => console.log(error))
    },[])   

    return (
        <div>
            <StudyListHeader/>
            <div id="study-list-main">
                {study_list.map(function(a,i){
                return(
                <div class="study-box">
                <Link to={'/item/'+ study_list[i].study_id}> 
                    <div class="study-box-inbox">
                        <div class="study-box-header">
                            <div class="study-box-header-content1">
                                {study_list[i].study_state === "모집중" ? <div>모집중</div> : <div>모집마감</div>}
                            </div>
                            <div class="study-box-header-content2">{study_list[i].study_category}</div>
                        </div>
                        <div class="study-box-main">
                            <div class="study-box-region">지역 | {study_list[i].study_region}</div>
                            <div class="study-box-title">{study_list[i].study_title}</div>
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
                </Link>
                </div>)           
                })}
            </div>
        </div>
    )
}

export default StudyList