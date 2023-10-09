import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import CoursesCataloguePage from "./pages/CoursesCataloguePage/CoursesCataloguePage";
import Layout from "./pages/Layout";
// import "./styles/reset.scss";
import "./styles/global.scss";


function App() {
    return (
        <div className="app-container">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route index element={<HomePage/>}/>
                        <Route path="register" element={<RegisterPage/>}/>
                        <Route path="login" element={<LoginPage/>}/>
                        <Route path="courses" element={<CoursesCataloguePage/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
