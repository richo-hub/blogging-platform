
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import BlogView from './components/BlogView';
import CreateBlog from './components/CreateBlog';
import OwnBlogs from './components/OwnBlogs';
import Footer from './components/Footer';
import NavbarO from './components/NavbarO';
import Services from '../Pages/Services';
import UserAuthForm from '../Pages/UserAuthForm';

function App() {

  return (
    <BrowserRouter>
      <NavbarO/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Services />} />
          <Route path="/login" element={<UserAuthForm type="sign-in"/>} />
          <Route path="/signup" element={<UserAuthForm type="sign-up"/>} />
          <Route path="/createblog" element={<CreateBlog />} />
          <Route path="/ownblogs" element={<OwnBlogs />} />
          <Route path="/blogview/:id" element={<BlogView />} />
        </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
