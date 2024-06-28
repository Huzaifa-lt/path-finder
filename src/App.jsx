import "./App.css";
import Header from "./components/Header";
import Layout from "./components/Layout";
import RatingLayout from "./components/RatingLayout";
import Sidebar from "./components/Sidebar";
import Stepper from "./components/Stepper";
import ResumeBuilder from "./components/resume-builder.jsx";
import Companies from "./pages/Companies";

function App() {
  return (
    <>
      <div className="  flex">
        <Layout>
          {/* <Stepper /> */}
          {/* <Companies /> */}
          <ResumeBuilder />
        </Layout>
      </div>
    </>
  );
}

export default App;
