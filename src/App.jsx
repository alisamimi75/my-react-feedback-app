import Header from "./Components/Header";

import FeedbackList from "./Components/FeedbackList";
import FeedbackStats from "./Components/FeedbackStats";
import FeedbackForm from "./Components/FeedbackForm";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import AbouticonLink from "./Components/AbouticonLink";
import { FeedbackProvider } from "./context/FeedbackContext";

const App = () => {
  return (
    <FeedbackProvider>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <div className="bg-blue-900  flex justify-center items-center flex-col">
                <Header />

                <FeedbackStats />
                <FeedbackForm />
                <FeedbackList />
                 <AbouticonLink /> 
              </div>
            }
          />

          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Router>
    </FeedbackProvider>
  );
};

export default App;
