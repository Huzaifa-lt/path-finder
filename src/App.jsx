import "./App.css";
import Header from "./components/Header";
import Layout from "./components/Layout";
import Login from "./components/Login-pages/Login";
import SignUp from "./components/Login-pages/SignUp";
import RatingLayout from "./components/RatingLayout";
import Sidebar from "./components/Sidebar";
import Stepper from "./components/Stepper";
import InterviewPrep from "./components/interview-prep";
import Main from "./components/main";
import ResumeBuilder from "./components/resume-builder.jsx";
import Companies from "./pages/Companies";

function App() {
  return (
    <>
      <div className="  flex">
        <Layout>
          {/* <Main /> */}
          <Companies />
          {/* <ResumeBuilder /> */}
          {/* <InterviewPrep /> */}
        </Layout>
      </div>
    </>
  );
}

export default App;
