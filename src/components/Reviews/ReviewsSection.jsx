import React from "react";
import Container from "../UI/Container";
import ReviewCard from "./ReviewCard";
import telebe from "../../assets/img/telebe.svg";

const ReviewsSection = () => {
  
  const reviews = [
    {
      name: "Vesper",
      review:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus. Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus.Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus.",
      className: "bg-[rgba(162,89,5,0.6)] text-white",
    },
    {
      name: "Vesper",
      review:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus. Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus.Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibusconsectetur adipiscing elit quisque faucibus.",
      className: "bg-[#8EA3B8]",
    },
    {
      name: "Vesper",
      review:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus. Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus.Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adLorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus.ipiscing elit quisque faucibusconsectetur adipiscing elit quisque faucibus.",
      className: "bg-[#B8C7D5]",
    },
    {
      name: "Vesper",
      review:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus. Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus.Lorem ipsum dolor sit amet e faucibus.",
      className: "bg-[#D5DDE4]",
    },
  ];

  return (
    <section className="py-10 md:py-20 overflow-hidden">
      <Container>
         
        <div className="flex items-center gap-2 mb-8">
          <h2 className="text-[#023047] font-bold text-2xl md:text-3xl">
            Tələbələrimizin rəyləri
          </h2>
          <span className="text-[#023047] text-2xl">→</span>
        </div>

        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
         
          <div className="flex-shrink-0">
            <img
              src={telebe}
              alt="Student"
              className="w-[220px] h-[260px] object-cover rounded-[40px] shadow-md"
            />
          </div>

         
          <div className="w-full bg-white rounded-[16px] shadow-md p-4 md:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-start">

              {reviews.map((review, index) => (
                <ReviewCard
                  key={index}
                  name={review.name}
                  review={review.review}
                  className={`${review.className}  rounded-md p-5`}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ReviewsSection;