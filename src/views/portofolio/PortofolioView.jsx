import "./portofolio.css";
import Menu from "./Menu";
import { useState, useEffect } from "react";
import { Zoom } from "react-awesome-reveal";

const PortofolioView = () => {
  const [items, setItems] = useState(Menu);
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);

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
              <span className="work_category">{category} Development</span>
              <h3 className="work_title">{title}</h3>
              <a href={link} className="work_button">
                Repository
              </a>
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
