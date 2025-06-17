import './portofolio.css';
import Menu from './Menu';
import { useState } from 'react';
import { Fade, Slide, Bounce } from 'react-awesome-reveal';

const PortofolioView = () => {
  const [items, setItems] = useState(Menu);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Number of items to display per page

  const filterItem = (categoryItem) => {
    const updateItems = Menu.filter((curElem) => {
      return curElem.category === categoryItem;
    });
    setItems(updateItems);
    setCurrentPage(1); // Reset to the first page when filtering
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
      <Fade>
        <h2 className="section_title">Recent Works</h2>
      </Fade>

      <div className="work_filters">
        <Slide>
          <span
            className="work_item"
            onClick={() => {
              setItems(Menu);
              setCurrentPage(1);
            }}
          >
            Everything
          </span>
        </Slide>
        <Slide>
          <span className="work_item" onClick={() => filterItem('Data Analyst')}>
            Data Analyst
          </span>
        </Slide>
        <Slide>
          <span className="work_item" onClick={() => filterItem('Web Development')}>
            Web Development
          </span>
        </Slide>
        <Slide>
          <span className="work_item" onClick={() => filterItem('Database Administrator')}>
            Database Administrator
          </span>
        </Slide>
        <Slide>
          <span className="work_item" onClick={() => filterItem('Mobile Application')}>
            Mobile Application
          </span>
        </Slide>
      </div>

      <div className="work_container grid">
        {currentItems.map((elem) => {
          const { id, image, title, category, link } = elem;
          return (
            <div className="work_card" key={id}>
              <Bounce>
                <div className="work_thumbnail">
                  <img src={image} alt="" className="work_img" />
                  <div className="work_mask"></div>
                </div>
              </Bounce>
              <span className="work_category">{category}</span>
              <h3 className="work_title">{title}</h3>
              <a href={link} className="work_button">
                <i className="icon-link work_button-icon"></i>
              </a>
            </div>
          );
        })}
      </div>

      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button key={index + 1} onClick={() => handlePageChange(index + 1)} className={`pagination_button ${currentPage === index + 1 ? 'active' : ''}`}>
            {index + 1}
          </button>
        ))}
      </div>
    </section>
  );
};

export default PortofolioView;
