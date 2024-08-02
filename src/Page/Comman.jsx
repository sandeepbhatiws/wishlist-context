import React, { useContext, useEffect, useState } from 'react';
import Header from './Header';
import { Button, Card, Col, Container, Dropdown, DropdownButton, Row } from 'react-bootstrap';
import '../Custom.css';
import Footer from './Footer';
import axios from 'axios';
import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/classic.css';
import Loading from './Loading';
import { Context } from '../MainContext';

export default function Comman() {
  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const { addToCart, cart,removeFromCart } = useContext(Context);
  // Select price
  const [Price, setPrice] = useState({});

  // Select discount
  const [discount, setDiscount] = useState({});

  // Rating
  const [Rating, setRating] = useState(null);

  // Sorting
  const [sorting, setSorting] = useState(null);

  const [product, setAllProduct] = useState([]);
  const [categories, setAllCategories] = useState([]);
  const [brand, setAllBrand] = useState([]);
  const [LoadingIcon, setLoadingIcon] = useState(true);
  const [noDataFound, setNoDataFound] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const show_product = () => {
    axios
      .get(
        `https://wscubetech.co/ecommerce-api/products.php?page=${currentPage}&limit=12&categories=${selectedCategories}&brands=${selectedBrand}&price_from=${Price.start || ''}&price_to=${Price.end || ''}&discount_from=${discount.start || ''}&discount_to=${discount.end || ''}&rating=${Rating}&sorting=${sorting}`
      )
      .then((res) => {

        setAllProduct(res.data.data);
        setLoadingIcon(false);
        setNoDataFound(res.data.data.length === 0);
        setTotalPages(res.data.toal_pages);
        scrollToTop();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const show_categories = () => {
    axios
      .get('https://wscubetech.co/ecommerce-api/categories.php')
      .then((res) => {
        setAllCategories(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const show_brand = () => {
    axios
      .get('https://wscubetech.co/ecommerce-api/brands.php')
      .then((res) => {
        setAllBrand(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Selected categories
  const [selectedCategories, setSelectedCategories] = useState([]);
  const handleCategoryFilter = (slug) => {
    setLoadingIcon(true);
    let updatedCategories = [...selectedCategories];

    if (updatedCategories.includes(slug)) {
      updatedCategories = updatedCategories.filter((category) => category !== slug);
    } else {
      updatedCategories.push(slug);
    }
    setSelectedCategories(updatedCategories);
    setCurrentPage(1);
    scrollToTop();
  };

  // Brand filter
  const [selectedBrand, setSelectedBrand] = useState([]);
  const handleBrandFilter = (slug) => {
    setLoadingIcon(true);
    let updatedBrand = [...selectedBrand];

    if (updatedBrand.includes(slug)) {
      updatedBrand = updatedBrand.filter((brand) => brand !== slug);
    } else {
      updatedBrand.push(slug);
    }
    setSelectedBrand(updatedBrand);
    setCurrentPage(1);
    scrollToTop();
  };

  // Clear all filters
  const clearAll = () => {
    setSelectedCategories([]);
    setSelectedBrand([]);
    setPrice({});
    setDiscount({});
    setRating(null);
    setSorting(null);
    setCurrentPage(1);
    setLoadingIcon(true);
    scrollToTop();
  };

  useEffect(() => {
    show_product();
  }, [selectedCategories, currentPage, selectedBrand, Price, discount, Rating, sorting]);

  useEffect(() => {
    show_categories();
    show_brand();
    clearAll();
  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    scrollToTop();
  };

  return (
    <>
      <Header />
      <Container fluid>
        <div className="breadcrumbs-base">
          <ul>
            <li>Home</li>/
            <li>Clothing</li>/
            <li>
              <strong>Men T-shirts</strong>
            </li>
          </ul>
        </div>
        <div className="item">
          <p>
            <strong>Men T-shirts</strong>
          </p>
          &nbsp;-<span> 126446 items</span>
        </div>
      </Container>

      <Container fluid>
        <Row>
          <div className="categories-text col-lg-2">
            <ul>
              <li>FILTERS</li>
              <li onClick={clearAll}>CLEAR ALL</li>
            </ul>
          </div>

          <div className="col-lg-9 d-flex justify-content-between">
            <div></div>
            <Dropdown>
              <DropdownButton
                align={{ lg: 'end' }}
                title="Sort by : Recommended"
                id="dropdown-menu-align-responsive-1"
                className="sort_button"
              >
                <Dropdown.Item onClick={() => setSorting(1)}>Name : A to Z</Dropdown.Item>
                <Dropdown.Item onClick={() => setSorting(2)}>Name : Z to A</Dropdown.Item>
                <Dropdown.Item onClick={() => setSorting(3)}>Price : Low to High</Dropdown.Item>
                <Dropdown.Item onClick={() => setSorting(4)}>Price : High to Low</Dropdown.Item>
                <Dropdown.Item onClick={() => setSorting(5)}>Discounted Price : Low to High</Dropdown.Item>
                <Dropdown.Item onClick={() => setSorting(6)}>Discounted Price : High to Low</Dropdown.Item>
                <Dropdown.Item onClick={() => setSorting(7)}>Rating : Low to High</Dropdown.Item>
                <Dropdown.Item onClick={() => setSorting(8)}>Rating : High to Low</Dropdown.Item>
              </DropdownButton>
            </Dropdown>
          </div>
        </Row>
      </Container>

      <Container fluid className="lift_sidebar pb-3">
        <Row>
          <Col className="categories" lg={2}>
            <div className="cat_items">
              <h2>categories</h2>
              <ul>
                {categories.map((v, i) => (
                  <li key={i}>
                    <label>
                      <input
                        type="checkbox"
                        onChange={() => handleCategoryFilter(v.slug)}
                        checked={selectedCategories.includes(v.slug)}
                      />
                      {v.name}
                    </label>
                  </li>
                ))}
              </ul>
            </div>

            <div className="cat_items">
              <h2>BRAND</h2>
              <ul>
                {brand.map((v, i) => (
                  <li key={i}>
                    <label>
                      <input
                        type="checkbox"
                        onChange={() => handleBrandFilter(v.slug)}
                        checked={selectedBrand.includes(v.slug)}
                      />
                      {v.name}
                    </label>
                  </li>
                ))}
              </ul>
            </div>

            <div className="cat_items">
              <h2>PRICE</h2>
              <ul>
                <li>
                  <label>
                    <input
                      type="radio"
                      name="money"
                      onChange={() => {
                        setPrice({ start: '10', end: '250' });
                        setLoadingIcon(true);
                      }}
                      checked={Price.start === '10' && Price.end === '250'}
                    />
                    Rs. 10 to Rs. 250
                  </label>
                </li>
                <li>
                  <label>
                    <input
                      type="radio"
                      name="money"
                      onChange={() => {
                        setPrice({ start: '250', end: '500' });
                        setLoadingIcon(true);
                      }}
                      checked={Price.start === '250' && Price.end === '500'}
                    />
                    Rs. 250 to Rs. 500
                  </label>
                </li>
                <li>
                  <label>
                    <input
                      type="radio"
                      name="money"
                      onChange={() => {
                        setPrice({ start: '500', end: '1000' });
                        setLoadingIcon(true);
                      }}
                      checked={Price.start === '500' && Price.end === '1000'}
                    />
                    Rs. 500 to Rs. 1000
                  </label>
                </li>
                <li>
                  <label>
                    <input
                      type="radio"
                      name="money"
                      onChange={() => {
                        setPrice({ start: '1000', end: '100000' });
                        setLoadingIcon(true);
                      }}
                      checked={Price.start === '1000' && Price.end === '100000'}
                    />
                    Rs. 1000 to Above
                  </label>
                </li>
              </ul>
            </div>

            <div className="cat_items">
              <h2>DISCOUNT RANGE</h2>
              <ul>
                <li>
                  <label>
                    <input
                      type="radio"
                      name="RANGE"
                      onChange={() => {
                        setDiscount({ start: '0', end: '5' });
                        setLoadingIcon(true);
                      }}
                      checked={discount.start === '0' && discount.end === '5'}
                    />
                    5% and above
                  </label>
                </li>
                <li>
                  <label>
                    <input
                      type="radio"
                      name="RANGE"
                      onChange={() => {
                        setDiscount({ start: '0', end: '10' });
                        setLoadingIcon(true);
                      }}
                      checked={discount.start === '0' && discount.end === '10'}
                    />
                    10% and above
                  </label>
                </li>
                <li>
                  <label>
                    <input
                      type="radio"
                      name="RANGE"
                      onChange={() => {
                        setDiscount({ start: '0', end: '15' });
                        setLoadingIcon(true);
                      }}
                      checked={discount.start === '0' && discount.end === '15'}
                    />
                    15% and above
                  </label>
                </li>
                <li>
                  <label>
                    <input
                      type="radio"
                      name="RANGE"
                      onChange={() => {
                        setDiscount({ start: '0', end: '20' });
                        setLoadingIcon(true);
                      }}
                      checked={discount.start === '0' && discount.end === '20'}
                    />
                    20% and above
                  </label>
                </li>
              </ul>
            </div>

            <div className="cat_items">
              <h2>Rating</h2>
              <ul>
                <li
                  className="pointer"
                  onClick={() => {
                    setRating(4);
                    setLoadingIcon(true);
                  }}
                >
                  <label>
                    <input type="radio" name="rating" checked={Rating === 4} />
                    4★ & above
                  </label>
                </li>

                <li
                  className="pointer"
                  onClick={() => {
                    setRating(3);
                    setLoadingIcon(true);
                  }}
                >
                  <label>
                    <input type="radio" name="rating" checked={Rating === 3} />
                    3★ & above
                  </label>
                </li>

                <li
                  className="pointer"
                  onClick={() => {
                    setRating(2);
                    setLoadingIcon(true);
                  }}
                >
                  <label>
                    <input type="radio" name="rating" checked={Rating === 2} />
                    2★ & above
                  </label>
                </li>

                <li
                  className="pointer"
                  onClick={() => {
                    setRating(1);
                    setLoadingIcon(true);
                  }}
                >
                  <label>
                    <input type="radio" name="rating" checked={Rating === 1} />
                    1★ & above
                  </label>
                </li>
              </ul>
            </div>
          </Col>

          <Col lg={10} style={{ backgroundColor: '#fafafa' }}>
            <Row className="row row-cols-4 justify-content-start">
              {LoadingIcon ? (
                Array.from({ length: 12 }).map((_, i) => <Loading key={i} />)
              ) : noDataFound ? (
                <div className="no-data-found">
                  <h4>No products found</h4>
                </div>
              ) : (
                product.map((v, i) => (
                  <div className="product_items my-2" key={i}>
                    <Card style={{ minHeight: '370px' }}>
                      <Card.Img variant="top" src={v.image} height={180} />
                      <Card.Body>
                        <Card.Title>{v.name}</Card.Title>
                        <Card.Text>
                          <p className="description">{v.description}</p>
                          <span className="product-discountedPrice">Rs.{v.price}</span>
                          <span className="product-strike">Rs. {v.price}</span>
                          <span className="product-discountPercentage">({v.discount_percentage})</span>
                          {
                            cart.includes(v.id)
                              ?
                              <button onClick={() => removeFromCart(v.id)} className='btn btn-primary d-block my-3'>
                                Remove from cart
                              </button>
                              :
                              <button onClick={() => addToCart(v.id)} className='btn btn-primary d-block my-3'>
                                Add to cart
                              </button>

                          }


                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                ))
              )}
            </Row>

            {!LoadingIcon && !noDataFound && (
              <ResponsivePagination current={currentPage} total={totalPages} onPageChange={handlePageChange} />
            )}
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
}
