import { Route, Routes } from "react-router-dom";
import Header from "./Components/Main/Header";
import Main from "./Components/Main/Main";

//Study 폴더 애들
import StudyList from "./Components/Study/StudyList";
import StudyView from "./Components/Study/StudyView";
import WriteForm from "./Components/Study/WriteForm";

//멤버 폴더 애들
import Login from "./Components/Member/Login";
import Member_Header from "./Components/Member/Member_Header";
import Search_ID from "./Components/Member/Search_ID";
import Search_password from "./Components/Member/Search_password";
import Signup from "./Components/Member/Signup";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* Header,Footer를 보여주고 싶은 컴포넌트 */}
        <Route element={<Header />}>
          <Route path="/" element={<Main />} />
          <Route path="/write-form" element={<WriteForm />} />
          <Route path="/study-list" element={<StudyList />} />
          <Route path="/study-view" element={<StudyView />} />
        </Route>
        {/* Header,Footer를 안 보여주고 싶은 컴포넌트 */}
        <Route element={<Member_Header />}>
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/search_id" element={<Search_ID />} />
          <Route path="/search_pw" element={<Search_password />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
