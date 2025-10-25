import React from 'react';
import Container from '../UI/Container';
import SectionTitle from '../UI/SectionTitle';
import ScholarshipCard from './ScholarshipCard';
import Button from '../UI/Button';
import a from '../../assets/img/UIUX.svg';
import line2 from "../../assets/img/line2.svg" 

const ScholarshipsSection = () => {
  const scholarships = [
    {
      title: 'Akademik Təqaüd',
      description: 'Yüksək nəticə göstərən və tədrisdə fəallığı ilə seçilən tələbələrə təqdim olunur.',
      iconSrc: a,
    },
    {
      title: 'Sosial Dəstək Təqaüdü',
      description: 'Maddi imkanı məhdud olan, lakin öyrənmək həvəsi güclü olan tələbələr üçün nəzərdə tutulub.',
      iconSrc: a,
    },
    {
      title: 'Erkən Qeydiyyat Endirimi',
      description: 'Semestr başlamazdan əvvəl qeydiyyatdan keçən tələbələr üçün xüsusi endirimlər tətbiq olunur.',
      iconSrc: a,
    },
    {
      title: 'Qızlar üçün IT Dəstəyi Proqramı',
      description: 'Texnologiya və dizayn sahəsində təhsil alan xanım tələbələr üçün qismən təqaüd imkanı yaradır.',
      iconSrc: a,
    },
  ];

  return (
    <section className="py-10 md:py-20">
      <Container>
        <SectionTitle title="Təqaüdlər" />
        <div className="flex flex-col items-center justify-center gap-6 md:gap-8 mt-4">
          <img src={line2 } alt="Line" className="w-full max-w-[800px]" />
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            {scholarships.map((scholarship, index) => (
              <ScholarshipCard
                key={index}
                title={scholarship.title}
                description={scholarship.description}
                iconSrc={scholarship.iconSrc}
              />
            ))}
          </div>
          <img src={line2} alt="Line" className="w-full max-w-[800px]" />
        </div>
        <div className="flex justify-center mt-6">
          <Button className="h-[53px] w-[200px] md:w-[233px] bg-[#A25905]">İndi müraciət et</Button>
        </div>
      </Container>
    </section>
  );
};

export default ScholarshipsSection;