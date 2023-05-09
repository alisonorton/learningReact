import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticleListPage from './pages/ArticlesListPage';
import ArticlePage from './pages/ArticlePage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <BrowserRouter> 
    <div className="App">
      <h1>My Blog</h1>
      <div id="page-body">
        <Routes>
         <Route path="/" element={<HomePage/>}/>
         <Route path="/about" element={<AboutPage/>}/>
         <Route path="/article-list" element={<ArticleListPage/>}/>
         <Route path="/about" element={<AboutPage/>}/>
         <Route path="/about" element={<AboutPage/>}/>

          
          
          <ArticlePage/>
          <NotFoundPage/>
        </Routes>
        
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
