import React from 'react';
import './Courses.css';
import { Card } from 'react-bootstrap';
import ArtCourseImg from '../../utils/images/art-course.jpg';
import BusinessCourseImg from '../../utils/images/business-course.jpg';
import ComputerScienceCourseImg from '../../utils/images/computer-science-course.jpg';
import EducationCourseImg from '../../utils/images/education-course.jpg';
import HealthcareCourseImg from '../../utils/images/healthcare-course.jpg';
import LawCourseImg from '../../utils/images/law-course.jpg';
import MusicCourseImg from '../../utils/images/music-course.jpg';
import SportCourseImg from '../../utils/images/sport-course.jpg';
import FaqAccordion from '../../components/FaqAccordion/FaqAccordion';

const courses = [
    {
        id: 1,
        img: [ArtCourseImg],
        title: 'Art Course',
        description: 'Fine Arts are the study of different art forms such as drawing, sculpture, painting, literature, music, dance, architecture, and theatre. Fine Arts Courses also cover other fields such as Photography, Graphic Design, Interior Design, Drawing, etc.'
    },
    {
        id: 2,
        img: [BusinessCourseImg],
        title: 'Business Course',
        description: 'Formation, EIN, Registered Agent, Annual State Filings, Federal Tax Filings and a Dedicated Account Manager. Grow your business and let doola handle your business compliance needs.'
    },
    {
        id: 3,
        img: [ComputerScienceCourseImg],
        title: 'Computer Science Course',
        description: ' Computer science is the study of computation, information, and automation.[1][2][3] Computer science spans theoretical disciplines (such as algorithms, theory of computation, and information theory) to applied disciplines (including the design and implementation of hardware and software.Though more often considered an academic discipline, computer science is closely related to computer programming.'
    },
    {
        id: 4,
        img: [EducationCourseImg],
        title: 'Education Course',
        description: 'is an important tool which is very useful in everybody’s life. Education is what differentiates us from other living beings on earth. It makes man the smartest creature on earth. It empowers humans and gets them ready to face challenges of life efficiently. With that being said, education still remains a luxury and not a necessity in our country. Educational awareness needs to be spread through the country to make education accessible.'
    },
    {
        id: 5,
        img: [HealthcareCourseImg],
        title: 'Healthcare Course',
        description: 'Health care encompasses a range of services provided by medical professionals to maintain or improve people’s health. Essays on health care could explore the different health care systems across countries, challenges in healthcare delivery, ethical concerns, or the impact of technology and policy on healthcare services'
    },
    {
        id: 6,
        img: [LawCourseImg],
        title: 'Law Course',
        description: 'LLB or Bachelor of Legislative Law is a 3-year undergraduate degree course whose General Eligibility criteria inlcude candidates having cleared their graduation in relevant subject with an aggregate score of 50% and above. LLB Admissions 2024 is based on various LLB entrance exams such as CLAT, AILET, LSAT and DU LLB. '
    },
    {
        id: 7,
        img: [MusicCourseImg],
        title: 'Music Course',
        description: 'Music is a form of art crafted by mankind thousands of years ago. It has been the way to express emotions since prehistoric times. Our ancestors used music and dance to celebrate occasions such as a big hunt. Hence, music has been integral to human life since its origin. Music can be defined as the soothing combination of vocals and instruments '
    },
    {
        id: 8,
        img: [SportCourseImg],
        title: 'Sport Course',
        description: 'of people are very fond of sports and games. These activities are good for everyone because they can give you a healthy body and mind that superfoods can not offer you. Sports is counted as one of the healthier activities. Many people don’t have much interest in sports and games. But it is a fact that sports leave a magical effect on one’s physique.'
    },
];

function Courses() {
  return (
    <div className='courses-page'>
        <header className='height-75'>
            <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                <h1 className='text-center fw-semibold'>Our Courses</h1>
            </div>
        </header>

        <div className='container py-5'>
            <div className='row g-4'>
                {courses.map((course) => (
                    <div key={course.id} className='col-lg-6'>
                        <Card className='text-white shadow scale-hover-effect'>
                            <Card.Img src={course.img} />
                            <Card.ImgOverlay className='d-flex flex-column align-items-center justify-content-center p-md-5'>
                                <Card.Title className='fs-1 text-danger'>{course.title}</Card.Title>
                                <Card.Text className='text-center'>{course.description}</Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                    </div>
                ))}
            </div>
        </div>

        <div className='bg-dark text-light py-5'>
            <FaqAccordion />
        </div>
    </div>
  )
}

export default Courses;

