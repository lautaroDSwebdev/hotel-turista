import { useEffect, useState } from "react";
import { NAV_LINKS } from "@/components/site-data";

const useNavigationHover = () => {
 const [activeSection, setActiveSection] = useState("");
 
     // Scroll spy: detecta la sección activa
     useEffect(() => {
         const handleScroll = () => {
             for (let i = NAV_LINKS.length - 1; i >= 0; i--) {
                 const section = document.getElementById(NAV_LINKS[i].href);
                 if (section) {
                     const rect = section.getBoundingClientRect();
                     if (rect.top <= 200 && rect.bottom >= 560) {
                         // console.log(rect)
                         setActiveSection(NAV_LINKS[i].href);
                         break;
                     }
                 }
             }
         };
 
         window.addEventListener("scroll", handleScroll);
         return () => window.removeEventListener("scroll", handleScroll);
     }, []);
return {
    activeSection
}
}

export default useNavigationHover