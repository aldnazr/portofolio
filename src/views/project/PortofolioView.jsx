import "./portofolio.css";
import Menu from "./PortofolioModel";
import { useState, useEffect } from "react";
import { Zoom } from "react-awesome-reveal";

const PortofolioView = () => {
  const [items, setItems] = useState(Menu);
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);

  const handleClick = () => {
    alert("Div diklik!");
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setItemsPerPage(4); // mobile
      } else {
        setItemsPerPage(6); // desktop or tablet
      }
    };

    handleResize(); // set initial value

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const filterItem = (categoryItem) => {
    const updateItems = Menu.filter((curElem) => {
      return curElem.category === categoryItem;
    });
    setItems(updateItems);
    setCurrentPage(1); // Reset to the first page when filtering
    setActiveCategory("All");
  };

  // Calculate the indices for the current page items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  // Calculate total pages
  const totalPages = Math.ceil(items.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <section id="porto" className="container section">
      <div>
        <h2 className="section_title">Projects</h2>
      </div>

      <div className="work_filters">
        <span
          className={`work_item ${
            activeCategory === "All" ? "active_tab" : ""
          }`}
          onClick={() => {
            setItems(Menu);
            setCurrentPage(1);
            setActiveCategory("All");
          }}
        >
          All
        </span>
        <span
          className={`work_item ${
            activeCategory === "Mobile" ? "active_tab" : ""
          }`}
          onClick={() => {
            filterItem("Mobile");
            setActiveCategory("Mobile");
          }}
        >
          Mobile
        </span>
        <span
          className={`work_item ${
            activeCategory === "Web" ? "active_tab" : ""
          }`}
          onClick={() => {
            filterItem("Web");
            setActiveCategory("Web");
          }}
        >
          Web
        </span>
        <span
          className={`work_item ${
            activeCategory === "Desktop" ? "active_tab" : ""
          }`}
          onClick={() => {
            filterItem("Desktop");
            setActiveCategory("Desktop");
          }}
        >
          Desktop
        </span>
      </div>

      <div className="work_container grid">
        {currentItems.map((elem) => {
          const { id, image, title, category, link } = elem;
          return (
            <div className="work_card" key={id}>
              <Zoom>
                <div className="work_thumbnail">
                  <img src={image} alt="" className="work_img" />
                  <div className="work_mask"></div>
                </div>
              </Zoom>
              <div className="work_group">
                <span className="work_category">{category} Development</span>
                <h3 className="work_title">{title}</h3>
                <a className="work_button" href={link}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                  </svg>
                  View Project
                </a>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex justify-center md:mt-[0px] mt-[40px]">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={`pagination_button ${
              currentPage === index + 1 ? "active" : ""
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </section>
  );
};

export default PortofolioView;
