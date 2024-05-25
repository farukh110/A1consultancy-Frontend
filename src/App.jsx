import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/home/Home';
import Header from './components/layouts/header/Header';
import Footer from './components/layouts/footer/Footer';
import Digital from './pages/digital-marketing/Digital';
import ContactCenter from './pages/contact-center/ContactCenter';
import InboundCalls from './pages/inbound-calls/InboundCalls';
import OutboundCalls from './pages/outbound-calls/OutboundCalls';
import LeadGeneration from './pages/lead-generation/LeadGeneration';
import Contact from './pages/contact/Contact';
import Careers from './pages/careers/Careers';
import AboutUs from './pages/about/AboutUs';
import TawkMessenger from '@tawk.to/tawk-messenger-react';
import ReactGA from 'react-ga';
import NotFound from './pages/404/404';
import AdminLayout from './admin/admin-layout/AdminLayout';
import AdminLogin from './admin/login/AdminLogin';
import Dashboard from './admin/dashboard/Dashboard';
import DashboardHome from './admin/home/Home';
import BlogList from './admin/blog/BlogList';
import AddBlog from './admin/blog/AddBlog';
import CategoryList from './admin/category/CategoryList';
import AddCategory from './admin/category/AddCategory';
import CommentList from './admin/comment/CommentList';
import ProtectedRoute from './protected-routes/ProtectedRoute';

const App = () => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.initialize('G-VYD0TR3HJ6');
    const logPageView = () => {
      ReactGA.pageview(window.location.pathname + window.location.search);
    };
    logPageView();
    window.addEventListener('popstate', logPageView);

    return () => {
      window.removeEventListener('popstate', logPageView);
    };
  }, []);

  return (
    <div>
      {location.pathname !== '/admin/login' &&
        location.pathname !== '/admin/dashboard' &&
        location.pathname !== '/admin/dashboard/blogs' &&
        location.pathname !== '/admin/dashboard/add-blog' &&
        location.pathname !== '/admin/dashboard/edit-blog' &&
        location.pathname !== '/admin/dashboard/categories' &&
        location.pathname !== '/admin/dashboard/add-category' &&
        location.pathname !== '/admin/dashboard/edit-category' &&
        location.pathname !== '/admin/dashboard/comments' && <Header />}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about-us" element={<AboutUs />} />
        <Route exact path="/inbound-calls" element={<InboundCalls />} />
        <Route exact path="/outbound-calls" element={<OutboundCalls />} />
        <Route exact path="/lead-generation" element={<LeadGeneration />} />
        <Route exact path="/digital-marketing" element={<Digital />} />
        <Route exact path="/contact-center-services" element={<ContactCenter />} />
        <Route exact path="/careers" element={<Careers />} />
        <Route exact path="/contact-us" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="login" element={<AdminLogin />} />
          <Route path="dashboard" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }>
            <Route path="" element={<DashboardHome />} />
            <Route path="blogs" element={<BlogList />} />
            <Route path="add-blog" element={<AddBlog key="add-blog" mode="add-blog" />} />
            <Route path="edit-blog" element={<AddBlog key="edit-blog" mode="edit-blog" />} />
            <Route path="categories" element={<CategoryList />} />
            <Route path="add-category" element={<AddCategory key="add" mode="add" />} />
            <Route path="edit-category" element={<AddCategory key="edit" mode="edit" />} />
            <Route path="comments" element={<CommentList />} />
          </Route>
        </Route>
      </Routes>
      {location.pathname !== '/admin/login' &&
        location.pathname !== '/admin/dashboard' &&
        location.pathname !== '/admin/dashboard/blogs' &&
        location.pathname !== '/admin/dashboard/add-blog' &&
        location.pathname !== '/admin/dashboard/edit-blog' &&
        location.pathname !== '/admin/dashboard/categories' &&
        location.pathname !== '/admin/dashboard/add-category' &&
        location.pathname !== '/admin/dashboard/edit-category' &&
        location.pathname !== '/admin/dashboard/comments' && <Footer />}
      <TawkMessenger propertyId="663a57189a809f19fb2e61fd" widgetId="default" />
    </div>
  );
}

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
