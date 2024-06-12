import "./App.css";
import Header from "./components/Header";
import Layout from "./components/Layout";
import RatingLayout from "./components/RatingLayout";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <div className="  flex">
        <Layout>
          <RatingLayout />
        </Layout>
      </div>
    </>
  );
}

export default App;
