import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import ChooseSection from '../../components/ChooseSection/ChooseSection';
import StartCoursesImg from '../../utils/images/start-courses-img.jpg';
import FaqAccordion from '../../components/FaqAccordion/FaqAccordion';
import { Card } from 'react-bootstrap';
import Blog1Img from '../../utils/images/blog1-img.jpg';
import Blog2Img from '../../utils/images/blog2-img.jpg';
import Blog3Img from '../../utils/images/blog3-img.jpg';

const blogs = [
    {
        id: 1,
        img: [Blog1Img],
        title: 'Blog 1',
        description: 'The Academic Building was designed to house tteaching activities - classrooms, library, laboratories and computer rooms, and administrative and service areas necessary for the proper functioning of academic and university extension programs.'
    },
    {
        id: 2,
        img: [Blog2Img],
        title: 'Blog 2',
        description: 'The University Library, which has been established in theablished in the 978 gained year 1autonomy from December 2000. It is housed in a three storeyed Building located at the eastern side in the main campus. The total area of the Library building is about 4122 sq.m. 30 video cameras are placed at strategic points in the library for surveillance. The MIT campus also has a library of area 1256 sq.m. Around 10,157 registered uses are in access of the library. Many knowledge-based services like that of Reference, Bibliography, MALIBNET service., DELNET, Reprography, Internet browsing and e-services are provided by the library for its users.'
    },
    {
        id: 3,
        img: [Blog3Img],
        title: 'Blog 3',
        description: 'University graduation ceremonies are part of a tradition that dates back to when the first universities were established in Europe in the 12th century. Today graduation is a special, momentous occasion for our graduates and their families. Find out everything you need to know about graduation at UC.'
    }
];

function Home() {
    return (
      <div className='home-page'>
          <header className='h-100 min-vh-100 d-flex align-items-center text-light'>
              <div className='container d-flex flex-column align-items-center'>
                  <h1 className='text-center fw-semibold'><strong>WEB UNIVERSITY</strong></h1>
                  <div className='d-flex flex-column flex-sm-row align-items-center'>
                      <Link to="/courses">
                          <button type='button' className='btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>Our Courses</button>
                      </Link>
                      <Link to="/contact">
                          <button type='button' className='btn btn-outline-light btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>Contact Us</button>
                      </Link>
                  </div>
              </div>
          </header>
  
          <div className="py-5">
              <ChooseSection />
          </div>
  
          <div className='py-5 bg-light'>
              <div className="container">
                  <div className='row d-flex align-items-center justify-content-around'>
                      <div className='col-lg-5'>
                          <h2 className='text-capitalize'>2024 start courses</h2>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, placeat.</p>
                          <Link to="/courses">
                              <button type='button' className='btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>Learn More</button>
                          </Link>
                      </div>
                      <div className='col-lg-5 mt-5 mt-lg-0'>
                          <img src={StartCoursesImg} className='img-fluid' alt="" />
                      </div>
                  </div>
              </div>
          </div>
  
          <div className="py-5">
              <FaqAccordion />
          </div>
  
          <div className='blog-section text-light py-5'>
              <div className='container d-flex flex-column align-items-center'>
                  <h2 className='text-center text-capitalize mb-5'>Latest on the blog</h2>
                  <div className='row g-4'>
                      {blogs.map((blog) => (
                          <div key={blog.id} className='col-md-6 col-lg-4'>
                              <Link to="/blog" className='text-decoration-none'>
                                  <Card className='h-100 shadow scale-hover-effect'>
                                      <Card.Img variant="top" src={blog.img} />
                                      <Card.Body className='p-md-5'>
                                          <Card.Title>{blog.title}</Card.Title>
                                          <Card.Text>{blog.description}</Card.Text>
                                      </Card.Body>
                                  </Card>
                              </Link>
                          </div>
                      ))}
                  </div>
                  <Link to="/blog">
                      <button type='button' className='btn btn-danger btn-lg mt-5'>Read More Blogs</button>
                  </Link>
              </div>
          </div>
      </div>
    )
  }
  
  export default Home;
  
  
  
  