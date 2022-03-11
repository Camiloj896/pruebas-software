import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Login from './pages/login/index';
import Register from './pages/register/index';
import Home from './pages/home/index';
import Home2 from './pages/home/index2';
import PostCreate from './pages/post/create';
import AskQUestion from './pages/ask-question/index';
import ViewQuestion from './pages/ask-question/view';
import PostView from './pages/post/view';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Login /> } />
        <Route path="/register" element={ <Register /> } />
        <Route path="/home2" element={ <Home /> } />
        <Route path="/home" element={ <Home2 /> } />
        <Route path="/ask-question" element={ <AskQUestion /> } />
        <Route path="/ask-question/:id" element={ <ViewQuestion /> } />
        <Route path="/create-post" element={ <PostCreate /> } />
        <Route path="/view/:id" element={ <PostView /> } />
      </Routes>
    </Router>
  );
}

export default App;
