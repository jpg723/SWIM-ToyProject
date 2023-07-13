import './Main.css'
import { ReactComponent as Polygon} from "../../svg/Polygon 1.svg";
import { ReactComponent as Arrow} from "../../svg/Arrow 1.svg";
import { Link } from "react-router-dom";

function Main() {
    /*id는 요소가 하나인 경우 많이 사용, css가 비슷한 요소가 많은 경우 사용*/
    return (
        <div id="Main">
            <div class="main-content1">Study With Me</div>
            <div class="main-content2">SWIM</div>
            <div class="main-content3">홈페이지 설명</div>
            <div class="main-content4">
                <div class="main-btn-box1">
                    <button id="study-list-btn">
                        <Polygon/>
                        <text class="study-list-btn-text">글 보러가기</text>
                    </button>
                </div>
                <Link to="/sign-up" class="main-btn-box2">  
                    <button id="signup-btn">
                        <text class="signup-btn-text">Sign Up</text>
                        <Arrow/>
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Main;
