import { Routes, Route } from "react-router-dom";
import Main from './Components/Main/Main';
import Header from './Components/Main/Header';
import Login from './Components/Member/Login';
import Signup from './Components/Member/Signup';
import WriteForm from './Components/Study/WriteForm';
import StudyList from './Components/Study/StudyList';

import Search_ID from './Components/Member/Search_ID';
import Search_password from './Components/Member/Search_password';

function App() {
  return (
    <div className="App">
      <Routes>
        {/* Header,Footer를 보여주고 싶은 컴포넌트 */}
        <Route element={<Header />}>
          <Route path="/" element={<Main />} />
          <Route path="/write-form" element={<WriteForm />} />
          <Route path="/study-list" element={<StudyList />} />
        </Route>
        {/* Header,Footer를 안 보여주고 싶은 컴포넌트 */}
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/search_id" element={<Search_ID />} />
        <Route path="/search_password" element={<Search_password />} />
      </Routes>
    </div>
  );
}

export default App;