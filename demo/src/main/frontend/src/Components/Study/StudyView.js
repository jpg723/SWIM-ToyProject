import React, { useState, useEffect }  from 'react'
import { ReactComponent as Arrow2} from "../../svg/Arrow 2.svg";
import './StudyView.css';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios'; 

function StudyView() {

    let { id } = useParams();
    const [study, setStudy] = useState("");

    useEffect(()=>{
      axios.get("/study/list/" + id).then((response)=>{
          if(response.data){
              console.log(response.data);
              setStudy(response.data);
          }else{
            console.log(response.data);
          }
      });
    }, []);

  return (
    <div id="study-view-box">
        {/*스터디 헤더 */}
        <div id="study-view-header">
            <Link to="/study-list"><Arrow2></Arrow2></Link>
            <div id="study-view-title">{study.study_title}</div>
            <div id="study-view-header-content">
                <div id="study-view-profile"></div>
                <span id="study-view-id">{study.writer}</span>
                <div id="study-view-header-line"></div>
                <span id="study-view-date">{study.study_create_date}</span>
            </div>
        </div>
        {/*스터디 카테고리 */}
        <div id="study-view-info">
            <div class="study-view-info-wrap">
                <div class="study-view-info-content">
                    <div class="study-view-info-category">모집여부</div>
                    <div>{study.study_state}</div>
                </div>
                <div class="study-view-info-content">
                    <div class="study-view-info-category">진행방식</div>
                    <div>{study.study_onoff}</div>
                </div>
            </div>
            <div class="study-view-info-wrap">
                <div class="study-view-info-content">
                    <div class="study-view-info-category">카테고리</div>
                    <div>{study.study_category}</div>
                </div>
                <div class="study-view-info-content">
                    <div class="study-view-info-category">지역</div>
                    <div>{study.study_region}</div>
                </div>
            </div>
            <div class="study-view-info-wrap">
                <div class="study-view-info-content">
                    <div class="study-view-info-category">모집인원</div>
                    <div>{study.study_num === 0 ? "인원 미정" : study.study_num}명</div>
                </div>
            </div>
        </div>
        {/*스터디 소개 */}
        <div id="study-view-intro">
            <div id="study-view-intro-title">프로젝트 소개</div>
            <div id="study-view-intro-content" dangerouslySetInnerHTML={{ __html :  study.study_content  }}>
            </div>
        </div>
    </div>
  )
}

export default StudyView