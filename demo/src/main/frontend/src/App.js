import { Routes, Route } from "react-router-dom";
import Main from './Components/Main/Main';
import Header from './Components/Main/Header';
import Login from './Components/Member/Login';
import Signup from './Components/Member/Signup';

function App() {
  return (
    <div className="App">
      <Routes>
        {/* Header,Footer,Nav을 보여주고 싶은 컴포넌트 */}
        <Route element={<Header />}>
          <Route path="/" element={<Main />} />
        </Route>
        {/* Header,Footer,Nav을 안 보여주고 싶은 컴포넌트 */}
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;