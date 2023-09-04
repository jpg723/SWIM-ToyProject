import './Main.css'
import { ReactComponent as Polygon} from "../../svg/Polygon 1.svg";
import { ReactComponent as Arrow} from "../../svg/Arrow 1.svg";
import { Link } from "react-router-dom";


function Main() {

    return (
        <div id="Main">
            <div class="main-content1">Study With Me</div>
            <div class="main-content2">SWIM</div>
            <br></br>
            <div class="main-content3">함께 성장해나갈 스터디원을 구할 수 있습니다. </div>
            <div class="main-content4">
                <Link to='/study-list' class="main-btn-box1">
                    <button id="study-list-btn">
                        <Polygon/>
                        <text class="study-list-btn-text">글 보러가기</text>
                    </button>
                </Link>
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
