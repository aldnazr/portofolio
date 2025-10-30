import { useEffect, useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Outlet } from "react-router-dom";
import "./sidebar.css";

export const Sidebar = () => {
  const [toggle, setToggle] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");
  const yearNow = new Date().getFullYear();

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const handleScroll = () => {
      const scrollY = window.pageYOffset;

      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58;
        const sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveNav("#" + sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <aside className={toggle ? "aside show-menu" : "aside"}>
        <AnchorLink href="#" className="nav_logo">
          <h1>
            PF<span>.</span>
          </h1>
        </AnchorLink>

        <nav className="nav">
          <div className="nav_menu">
            <ul className="nav_list">
              <li className="nav_item">
                <AnchorLink
                  href="#home"
                  onClick={() => setActiveNav("#home")}
                  className={
                    activeNav === "#home" ? "nav_link active-link" : "nav_link"
                  }
                >
                  <i className="icon-home"></i>
                </AnchorLink>
              </li>
              <li className="nav_item">
                <AnchorLink
                  href="#about"
                  onClick={() => setActiveNav("#about")}
                  className={
                    activeNav === "#about" ? "nav_link active-link" : "nav_link"
                  }
                >
                  <i className="icon-user-following"></i>
                </AnchorLink>
              </li>
              <li className="nav_item">
                <AnchorLink
                  href="#ability"
                  onClick={() => setActiveNav("#ability")}
                  className={
                    activeNav === "#ability"
                      ? "nav_link active-link"
                      : "nav_link"
                  }
                >
                  <i className="icon-briefcase"></i>
                </AnchorLink>
              </li>
              <li className="nav_item">
                <AnchorLink
                  href="#resume"
                  onClick={() => setActiveNav("#resume")}
                  className={
                    activeNav === "#resume"
                      ? "nav_link active-link"
                      : "nav_link"
                  }
                >
                  <i className="icon-graduation"></i>
                </AnchorLink>
              </li>
              <li className="nav_item">
                <AnchorLink
                  href="#porto"
                  onClick={() => setActiveNav("#porto")}
                  className={
                    activeNav === "#porto" ? "nav_link active-link" : "nav_link"
                  }
                >
                  <i className="icon-layers"></i>
                </AnchorLink>
              </li>
            </ul>
          </div>
        </nav>
        <div className="nav_footer">
          <span className="copyright">&copy; {yearNow}</span>
        </div>
        <Outlet />
      </aside>

      <div
        className={toggle ? "nav_toggle nav_toggle-open" : "nav_toggle"}
        onClick={() => setToggle(!toggle)}
      >
        <i className="icon-menu"></i>
      </div>
    </>
  );
};
