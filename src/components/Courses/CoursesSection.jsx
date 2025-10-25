import React from 'react';
import Container from '../UI/Container';
import SectionTitle from '../UI/SectionTitle';
import CourseCard from './CourseCard';
import qrafik from '../../assets/img/graphic design.svg'
import UIUX from '../../assets/img/UIUX.svg'
import frontend from '../../assets/img/Frontend.svg'
import backend from '../../assets/img/backend.svg'
import data from '../../assets/img/data.svg'
import QA from '../../assets/img/QA.svg'
const CoursesSection = () => {
  const courses = [
    { title: 'Qrafik Dizayn', iconSrc: qrafik },
    { title: 'UX/UI Dizayn', iconSrc: UIUX },
    { title: 'Frontend', iconSrc:  frontend},
    { title: 'Backend', iconSrc: backend },
    { title: 'Data Analitika', iconSrc: data },
    { title: 'QA', iconSrc: QA },
  ];

  return (
    <section className="py-10 md:py-20">
      <Container>
        <SectionTitle title="Kurslarımız" />
        <div className="flex flex-wrap justify-center md:justify-between gap-4 md:gap-6 mt-4">
          {courses.map((course, index) => (
            <CourseCard key={index} title={course.title} iconSrc={course.iconSrc} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CoursesSection;