import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import BlogView from './components/BlogView';
import Login from './components/Login';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import CreateBlog from './components/CreateBlog';
import OwnBlogs from './components/OwnBlogs';

function App() {

  return (
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/createblog" element={<CreateBlog />} />
          <Route path="/ownblogs" element={<OwnBlogs />} />
          <Route path="/blogview/:id" element={<BlogView />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
