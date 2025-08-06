import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { Toaster } from "sonner";
import { ThemeProvider } from "./hooks/use-theme";
import { AdminProvider } from "@/context/AdminContext";
import { ImageEditorProvider } from "@/context/ImageEditorContext";
import EditableImageWrapper from "@/components/EditableImageWrapper";
import AdminToolbar from "@/components/AdminToolbar";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Index from "./pages/Index";
import About from "./pages/About";
import Academics from "./pages/Academics";
import Admissions from "./pages/Admissions";
import CampusLife from "./pages/CampusLife";
import Gallery from "./pages/Gallery";
import NewsEvents from "./pages/NewsEvents";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import VisionMission from "./pages/VisionMission";
import PageEditor from "./components/admin/PageEditor";
import CustomPage from "./pages/CustomPage";
import AdminControls from "./components/admin/AdminControls";
import WhatsAppButton from "./components/ui/WhatsAppButton";
import AdminLogin from './pages/admin/Login';
import AdminDashboard from './pages/admin/Dashboard';
import PrivateRoute from './components/auth/PrivateRoute';
import Example from './pages/Example';
import MediaLibrary from './pages/admin/MediaLibrary';
import { useAdmin } from "@/context/AdminContext";

import "./App.css";

function AppContent() {
  const location = useLocation();
  const isAdminDashboard = location.pathname === '/admin/dashboard';
  const { isAdminMode } = useAdmin();

  return (
    <div className="flex flex-col min-h-screen">
      {!isAdminDashboard && <Header />}
      <main className="flex-grow pt-0">
        <EditableImageWrapper>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/about/vision-mission" element={<VisionMission />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/campus-life" element={<CampusLife />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/news-events" element={<NewsEvents />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/page/:pageId" element={<CustomPage />} />
            <Route path="/admin/edit/:pageId" element={<PageEditor />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route 
              path="/admin/dashboard" 
              element={
                <PrivateRoute>
                  <AdminDashboard />
                </PrivateRoute>
              } 
            />
            <Route path="/admin/media" element={<MediaLibrary />} />
            <Route path="/example" element={<Example />} />
            <Route path="/admin" element={<Navigate to="/admin/dashboard" replace />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </EditableImageWrapper>
      </main>
      {!isAdminDashboard && <Footer />}
      {isAdminMode && <AdminToolbar />}
      {isAdminMode && <AdminControls />}
      <WhatsAppButton />
      <Toaster />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AdminProvider>
        <ImageEditorProvider>
          <Router>
            <AppContent />
          </Router>
        </ImageEditorProvider>
      </AdminProvider>
    </ThemeProvider>
  );
}

// Protected Route Component
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const token = localStorage.getItem('token');
  if (!token) {
    return <Navigate to="/admin/login" replace />;
  }
  return <>{children}</>;
};

export default App;
