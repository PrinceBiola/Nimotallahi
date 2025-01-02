import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Admission from './Pages/Admission/Admission'
import Academics from './Pages/Academics/Academics'
import Blog from './Pages/Blog/Blog'
import Gallery from './Pages/Gallery/Gallery'
import Contact from './Pages/Contact/Contact'
import StudentLayout from './Pages/DashboardLayout/Student-Layout'
import AdminLayout from './Pages/DashboardLayout/Admin-Layout'
import StudentDashboard from './Pages/Dashboard/Student-Dashboard'
import Subjects from './Pages/Subjects/Subjects'
import Assignments from './Pages/Assignments/Assignments'
import Grades from './Pages/Grades/Grades'
import StudentProfile from './Pages/Profile/StudentProfile'
import StudentManagement from './Pages/Student-Management/StudentManagement'
import AdminDashboard from './Pages/Dashboard/Admin-Dashboard'
import StaffManagement from './Pages/Staff-Management/StaffManagement'
import AdminAcademics from './Pages/Academics/AdminAcademics'
import Finance from './Pages/Finance/Finance'
import Setting from './Pages/Setting/Setting'
import Calender from './Pages/Calender/Calender'
import ContentManagement from './Pages/Content-Management/ContentManagement'
import StudentLogin from './Pages/Auth/StudentLogin'
import AdminLogin from './Pages/Auth/AdminLogin'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/admissions" element={<Admission />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/news" element={<Blog />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/student-login" element={<StudentLogin/>} />
          <Route path="/admin-login" element={<AdminLogin />} />
          

          {/* Authentication Routes */}

          
          
          
          {/* Student Dashboard Routes */}
          <Route path="/student" element={<StudentLayout />}>
            <Route index element={<StudentDashboard />} />
            <Route path="subjects" element={<Subjects />} />
            <Route path="assignments" element={<Assignments />} />
            <Route path="grades" element={<Grades />} />
            <Route path="profile" element={<StudentProfile />} />
          </Route>

          {/* Admin Dashboard Routes */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="students" element={<StudentManagement />} />
            <Route path="staff" element={<StaffManagement />} />
            <Route path="academics" element={<AdminAcademics />} />
            <Route path="finance" element={<Finance />} />
            <Route path="settings" element={<Setting />} />
            <Route path="calendar" element={<Calender />} />
            <Route path="content" element={<ContentManagement />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
