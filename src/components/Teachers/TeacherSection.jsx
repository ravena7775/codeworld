import React from 'react';
import Container from '../UI/Container';
import SectionTitle from '../UI/SectionTitle';
import TeacherCard from './TeacherCard';
import t1 from "../../assets/img/teacher1.svg"
import t2 from "../../assets/img/teacher1.svg"
import t3 from "../../assets/img/teacher1.svg"
import t4 from "../../assets/img/teacher1.svg"
const TeachersSection = () => {
  const teachers = [
    { name: 'James Bond', role: 'Qrafik Dizayner', imgSrc: t1 },
    { name: 'Katniss Everdeen', role: 'Qrafik Dizayner', imgSrc: t2 },
    { name: 'Jack Sparrow', role: 'Qrafik Dizayner', imgSrc: t3 },
    { name: 'Jane Doe', role: 'Qrafik Dizayner', imgSrc: t4 },
  ];

  return (
    <section className="py-10 md:py-20">
      <Container>
        <SectionTitle title="Müəllimlərimiz" />
        <div className="flex gap-6 md:gap-15 overflow-x-auto scrollbar-hide w-full cursor-grab active:cursor-grabbing select-none mt-4">
          {teachers.map((teacher, index) => (
            <TeacherCard key={index} name={teacher.name} role={teacher.role} imgSrc={teacher.imgSrc} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TeachersSection;