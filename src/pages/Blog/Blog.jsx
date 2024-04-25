import React from 'react';
import './Blog.css';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import Blog1Img from '../../utils/images/blog1-img.jpg';
import Blog2Img from '../../utils/images/blog2-img.jpg';
import Blog3Img from '../../utils/images/blog3-img.jpg';
import Blog4Img from '../../utils/images/blog4-img.jpg';
import Blog6Img from '../../utils/images/blog6-img.jpg';


const blogs = [
    {
        id: 1,
        img: [Blog1Img],
        title: 'Blog 1',
        description: 'The Academic Building was designed to house teaching activities - classrooms, library, laboratories and computer rooms, and administrative and service areas necessary for the proper functioning of academic and university extension programs.'
    },
    {
        id: 2,
        img: [Blog2Img],
        title: 'Blog 2',
        description: 'The University Library, which has been established in the year 1978 gained autonomy from December 2000. It is housed in a three storeyed Building located at the eastern side in the main campus. The total area of the Library building is about 4122 sq.m. 30 video cameras are placed at strategic points in the library for surveillance. The MIT campus also has a library of area 1256 sq.m. Around 10,157 registered uses are in access of the library. Many knowledge-based services like that of Reference, Bibliography, MALIBNET service., DELNET, Reprography, Internet browsing and e-services are provided by the library for its users.'
    },
    {
        id: 3,
        img: [Blog3Img],
        title: 'Blog 3',
        description: 'University graduation ceremonies are part of a tradition that dates back to when the first universities were established in Europe in the 12th century. Today graduation is a special, momentous occasion for our graduates and their families. Find out everything you need to know about graduation at UC.'
    },
    {
        id: 4,
        img: [Blog4Img],
        title: 'Blog 4',
        description: 'Bachelor of Commerce programme focuses both in-depth study of theory along with acquisition of professional and research skills.'
    },
    {
        id: 6,
        img: [Blog6Img],
        title: 'Blog 6',
        description: 'The University recognises that equality and inclusion should be embedded in all its activities and seeks to promote awareness of equality and foster good practice. The University is committed to a programme of action to support its equality policy, to monitoring its effectiveness, and to publishing information on progress towards its equality aims.'
    },
];


function Blog() {
  return (
    <div className='blog-page'>
        <header className='height-75'>
            <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                <h1 className='text-center fw-semibold'>Blog</h1>
                <p className='text-center w-75 mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia voluptas suscipit ratione quod culpa, eius ad consequatur, dolor quasi nulla optio quo error tempora temporibus distinctio quidem asperiores dolore ex amet nam. Consequatur, odit corporis.</p>
            </div>
        </header>

        <div className='bg-body-tertiary py-5'>
            <div className="container">
                <div className="row g-4">
                    {blogs.map((blog) => (
                        <div key={blog.id} className='col-md-6 col-lg-4'>
                            <Link to="/blog" className='text-decoration-none'>
                                <Card className='h-100 shadow scale-hover-effect bg-dark text-light border-0'>
                                    <Card.Img variant="top" src={blog.img} />
                                    <Card.Body className='p-md-5 d-flex flex-column align-items-center'>
                                        <Card.Title className='fs-2 mb-4'>{blog.title}</Card.Title>
                                        <Card.Text className='text-center'>{blog.description}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Blog;