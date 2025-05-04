import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from '../pages/App.jsx';
import News from '../pages/news.jsx';


function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path = '/news/:topic' element = {<News />} />

      </Routes>
    </Router>
  );
}

export default AppRouter;