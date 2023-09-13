import './StudyList.css';
import StudyListHeader from './StudyListHeader';
import on_heart from "../../img/heart.png";
import off_heart from "../../img/empty-heart.png";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ReactComponent as View} from "../../svg/View.svg";
import { ReactComponent as Comment} from "../../svg/Comment.svg";
import axios from 'axios'; 
import { studyCategoryAtom } from "../../atoms";
import {useNavigate} from 'react-router-dom'

function StudyList() {

    const [likeState, setLikeState] = useState(false);
    //console.log("초기상태" + likeState);
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
    const category = useParams(studyCategoryAtom);

    useEffect(()=> {
        console.log(category.study_category);
        if(category.study_category === "전체" || category.study_category === undefined){
            axios.get('/study/list').then((res)=>{
                SetStudy_list(res.data)
            })
            .catch(error => console.log(error))
        }else{
            axios.get(`/study/list/category/${category.study_category}`).then((res)=>{
                SetStudy_list(res.data)
            })
            .catch(error => console.log(error))
        }
    },[])  

    return (
        <div>
            <StudyListHeader/>
            <div id="study-list-main">
                {study_list.map(function(a,i){
                return(
                <div class="study-box">
                <Link to={'/study-view/'+ study_list[i].study_id} class="study-box-inbox"> 
                    <div class="study-box-inbox">
                        <div class="study-box-header">
                            <div class="study-box-header-content1">
                                {study_list[i].study_state}
                            </div>
                            <div class="study-box-header-content2">
                                {study_list[i].study_category}
                            </div>
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