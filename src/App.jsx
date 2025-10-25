import React from 'react';
import Header from './components/Header/Header';
import CoursesSection from './components/Courses/CoursesSection';
import TeachersSection from './components/Teachers/TeacherSection';
import ScholarshipsSection from './components/Scholarships/ScholarshipsSection';
import ReviewsSection from './components/Reviews/ReviewsSection';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div className="flex flex-col gap-10 md:gap-20">
      <Header />
      <CoursesSection />
      <TeachersSection />
      <ScholarshipsSection />
      {/* <ReviewsSection /> */}
      <Footer />
    </div>
  );
};

export default App;