import { HashRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { ProjectsProvider } from './store/ProjectsContext';
import Layout from './layouts/Layout';
import Home from './pages/Home/Home';
import NewProject from './pages/NewProject/NewProject';
import Project from './pages/Project/Project';
import './App.css';

export default function App() {
  return <>
    <ToastContainer toastClassName="custom-toast" draggable theme="dark" />
    <HashRouter>
      <ProjectsProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/project/new" element={<NewProject />} />
            <Route path="/project/:id" element={<Project />} />
          </Route>
        </Routes>
      </ProjectsProvider>
    </HashRouter>
  </>
}