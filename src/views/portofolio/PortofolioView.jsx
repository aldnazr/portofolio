import "./portofolio.css";
import Menu from "./Menu";
import { useState } from "react";
import { Zoom } from "react-awesome-reveal";

const PortofolioView = () => {
  const [items, setItems] = useState(Menu);
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // Number of items to display per page

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
    <section id="porto" className="work container section">
      <div>
        <h2 className="section_title">Recent Works</h2>
      </div>

      <div className="work_filters">
        <div>
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
        </div>
        <div>
          <span
            className={`work_item ${
              activeCategory === "Web Development" ? "active_tab" : ""
            }`}
            onClick={() => {
              filterItem("Web Development");
              setActiveCategory("Web Development");
            }}
          >
            Web Development
          </span>
        </div>
        <div>
          <span
            className={`work_item ${
              activeCategory === "Mobile Application" ? "active_tab" : ""
            }`}
            onClick={() => {
              filterItem("Mobile Application");
              setActiveCategory("Mobile Application");
            }}
          >
            Mobile Application
          </span>
        </div>
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
              <span className="work_category">{category}</span>
              <h3 className="work_title">{title}</h3>
              <a href={link} className="work_button">
                <i className="icon-link work_button-icon"></i>
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
