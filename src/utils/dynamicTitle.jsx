import { useEffect } from "react";
import { useLocation } from "react-router-dom";


const DynamicTitle = () => {
    const location = useLocation();
  
    useEffect(() => {
      switch (location.pathname) {
        case '/':
          document.title = "Home - StudyNotion";
          break;
        case '/about':
          document.title = "About - StudyNotion";
          break;
        case'/courses':
          document.title = "Courses -StudyNotion";
          break;
        case '/profile':
          document.title = "Profile - StudyNotion";
          break;
        case '/contact':
          document.title = "Contact Us - StudyNotion";
          break;
        default:
          document.title = "My Awesome App";
      }
    }, [location]);
  
    return null;
  };

export default DynamicTitle;