import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export default function Footer() {
    return (
        <>
            <Container className='footer py-4'>
                <Row className='row row-cols-4'>
                    <Col lg={3}>
                        <ul>
                            <h2>ONLINE SHOPPING</h2>
                            <li>Men</li>
                            <li>Women</li>
                            <li>Kids</li>
                            <li>Home & Living</li>
                            <li>Beauty</li>
                            <li>Gift Cards</li>
                            <li>Myntra Insider</li>
                        </ul>

                        <ul>
                            <h2>USEFUL LINKS</h2>
                            <li>Blog</li>
                            <li>Careers</li>
                            <li>Site Map</li>
                            <li>Corporate Information</li>
                            <li>Whitehat</li>
                            <li>Cleartrip</li>
                        </ul>
                    </Col>

                    <Col lg={3}>
                        <ul>
                            <h2>CUSTOMER POLICIES</h2>
                            <li>Contact Us</li>
                            <li>FAQ</li>
                            <li>T&C</li>
                            <li>Terms Of Use</li>
                            <li>Track Orders</li>
                            <li>Shipping</li>
                            <li>Cancellation</li>
                            <li>Returns</li>
                            <li>Privacy policy</li>
                            <li>Grievance Officer</li>
                        </ul>
                    </Col>

                    <Col lg={3}>
                        <h2>EXPERIENCE MYNTRA APP ON MOBILE</h2>
                        <div className='d-flex app_icon py-4'>
                            <img src="https://constant.myntassets.com/web/assets/img/80cc455a-92d2-4b5c-a038-7da0d92af33f1539674178924-google_play.png" />
                            <img src="https://constant.myntassets.com/web/assets/img/bc5e11ad-0250-420a-ac71-115a57ca35d51539674178941-apple_store.png" />
                        </div>
                    </Col>

                    <Col lg={3}>

                        <ul className='footer_inner'>
                            <li>

                                <img src="https://constant.myntassets.com/web/assets/img/6c3306ca-1efa-4a27-8769-3b69d16948741574602902452-original.png" />
                                <p><strong>100% ORIGINAL</strong> guarantee for all products at myntra.com</p>
                            </li>

                            <li>

                                <img src="https://assets.myntassets.com/assets/images/retaillabs/2023/5/22/becb1b16-86cc-4e78-bdc7-7801c17947831684737106127-Return-Window-image.png" />
                                <p><strong>Return within 14days</strong> of receiving your order</p>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>

            <Container className='footer_end'>
                <h4>POPULAR SEARCHES</h4>
                <p>Dishant Patel | Men | Sports Shoes | Adidas | Arrow | Fila | Online Shopping |
                    Nike | Pepe Jeans | Puma | United Colors Of Benetton | Fastrack | Shorts | Being Human | Skirts |
                    Woodland | Supra | Dresses | Men Shopping | Women Shopping | Blazers | Sherwani | Online Shopping |
                    Men Olive Green & Cream Coloured | St  Rahul Raina | Saurabh Sharma | Clothing | Jewellery | T Shirts | Shoes | Bags |
                    Watches | Caps | Shirts | Backpacks | Puma Tshirts | Woodland Shoes | Titan Watches | Fastrack Watches | Wrangler Shirts |
                    Adidas Tshirts | Nike Shoes | Roadster Shirts | Casual Shoes | Running Shoes | Nike Sports Shoes | Jeans | Being Human shirts |
                    Converse Shoes | Cricket Shoes</p>
            </Container>

            <Container className='py-5'>
                <Row className='row row-cols-3'>
                    <Col lg={4}>
                        <p>In case of any concern,<span style={{ color: "blue" }}> Contact Us</span></p>
                    </Col>
                    <Col lg={4}>
                        <p>© 2024 www.myntra.com. All rights reserved.</p>
                    </Col>
                    <Col lg={4} className='text-end'>
                        <p>A Flipkart company</p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}








{/* <div className="">
    import React, {useEffect, useState} from 'react';
    import Header from './Header';
    import {Button, Card, Col, Container, Dropdown, DropdownButton, Row} from 'react-bootstrap';
    import '../Custom.css';
    import Footer from './Footer';
    import axios from 'axios';

    export default function Comman() {
  const [product, setProduct] = useState([]);
    const [categories, setCategories] = useState([]);
    const [brands, setBrands] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [selectedPriceRange, setSelectedPriceRange] = useState('');
    const [selectedDiscountRange, setSelectedDiscountRange] = useState('');
    const [selectedColor, setSelectedColor] = useState('');
    const [sortOrder, setSortOrder] = useState('');

  useEffect(() => {
        fetchProducts();
    fetchCategories();
    fetchBrands();
  }, []);

  useEffect(() => {
        filterProducts();
  }, [selectedCategories, selectedBrands, selectedPriceRange, selectedDiscountRange, selectedColor, sortOrder]);

  const fetchProducts = () => {
        axios.get("https://wscubetech.co/ecommerce-api/products.php?page=2&limit=100")
            .then(response => {
                setProduct(response.data.data);
            })
            .catch(error => {
                console.log(error);
            });
  };

  const fetchCategories = () => {
        axios.get("https://wscubetech.co/ecommerce-api/categories.php")
            .then(response => {
                setCategories(response.data.data);
            })
            .catch(error => {
                console.log(error);
            });
  };

  const fetchBrands = () => {
        axios.get("https://wscubetech.co/ecommerce-api/brands.php")
            .then(response => {
                setBrands(response.data.data);
            })
            .catch(error => {
                console.log(error);
            });
  };

  const handleCategoryFilter = (slug) => {
    const updatedCategories = selectedCategories.includes(slug)
      ? selectedCategories.filter(category => category !== slug)
    : [...selectedCategories, slug];
    setSelectedCategories(updatedCategories);
  };

  const handleBrandFilter = (name) => {
    const updatedBrands = selectedBrands.includes(name)
      ? selectedBrands.filter(brand => brand !== name)
    : [...selectedBrands, name];
    setSelectedBrands(updatedBrands);
  };

  const handlePriceFilter = (priceRange) => {
        setSelectedPriceRange(priceRange);
  };

  const handleDiscountFilter = (discountRange) => {
        setSelectedDiscountRange(discountRange);
  };

  const handleColorFilter = (color) => {
        setSelectedColor(color);
  };

  const handleSortOrder = (order) => {
        setSortOrder(order);
  };

  const filterProducts = () => {
    const filterApi = `https://wscubetech.co/ecommerce-api/products.php?page=&limit=&sorting=${sortOrder}&name=&price_from=&price_to=&discount_from=&discount_to=&rating=&brands=${selectedBrands.join(',')}&categories=${selectedCategories.join(',')}`;
    axios.get(filterApi)
      .then(response => {
        setProduct(response.data.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

    return (
    <>
        <Header />
        <Container fluid>
            <div className='breadcrumbs-base'>
                <ul>
                    <li>Home</li>/
                    <li>Clothing</li>/
                    <li><strong>Men T-shirts</strong></li>
                </ul>
            </div>
            <div className='item'>
                <p><strong>Men T-shirts</strong></p>&nbsp;-<span> 126446 items</span>
            </div>
        </Container>

        <Container fluid>
            <Row>
                <div className='categories-text col-lg-2'>
                    <ul>
                        <li>FILTERS</li>
                        <li onClick={() => { setSelectedCategories([]); setSelectedBrands([]); setSelectedPriceRange(''); setSelectedDiscountRange(''); setSelectedColor(''); }}>CLEAR ALL</li>
                    </ul>
                </div>

                <div className='col-lg-9 d-flex justify-content-between'>
                    <div></div>
                    <Dropdown>
                        <DropdownButton
                            align={{ lg: 'end' }}
                            title="Sort by : Recommended"
                            id="dropdown-menu-align-responsive-1"
                            className="sort_button"
                        >
                            <Dropdown.Item onClick={() => handleSortOrder('name_asc')}>Name: A to Z</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleSortOrder('name_desc')}>Name: Z to A</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleSortOrder('price_asc')}>Price: Low to High</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleSortOrder('price_desc')}>Price: High to Low</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleSortOrder('discount_asc')}>Discounted Price: Low to High</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleSortOrder('discount_desc')}>Discounted Price: High to Low</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleSortOrder('rating_asc')}>Rating: Low to High</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleSortOrder('rating_desc')}>Rating: High to Low</Dropdown.Item>
                        </DropdownButton>
                    </Dropdown>
                </div>
            </Row>
        </Container>

        <Container fluid className='lift_sidebar pb-3'>
            <Row>
                <Col className='categories' lg={2}>
                    <div className='cat_items'>
                        <h2>Categories</h2>
                        <ul>
                            {categories.map((category, i) => (
                                <li key={i}>
                                    <input
                                        type='checkbox'
                                        onChange={() => handleCategoryFilter(category.slug)}
                                        checked={selectedCategories.includes(category.slug)}
                                    />
                                    {category.name}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className='cat_items'>

                    </div> */}
















