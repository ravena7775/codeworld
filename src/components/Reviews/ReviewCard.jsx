import React from "react";
import ReviewCard from "./ReviewCard";

const ReviewsSection = () => {
  const reviews = [
    {
      name: "Vesper",
      review:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus. Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus.",
      className: "bg-[#CDA26E] text-white rounded-md",
    },
    {
      name: "Vesper",
      review:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus. Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus.",
      className: "bg-[#8DA6BA] rounded-md",
    },
    {
      name: "Vesper",
      review:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus. Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus.",
      className: "bg-[#B7C6D4] rounded-md",
    },
    {
      name: "Vesper",
      review:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus. Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus.",
      className: "bg-[#D4DFE7] rounded-md",
    },
  ];

  return (
    <section className="w-full px-6 md:px-20 py-12 bg-[#F8FCFF] overflow-hidden">
      <h2 className="text-[#023047] text-2xl md:text-3xl font-bold mb-8 flex items-center gap-2">
        Tələbələrimizin rəyləri →
      </h2>

      <div className="flex flex-col md:flex-row items-start gap-8">
        {/* Sol tərəf - Şəkil */}
        <div className="flex-shrink-0">
          <img
            src="https://i.imgur.com/kH1F5rV.png"
            alt="Student"
            className="w-[200px] h-[200px] md:w-[240px] md:h-[240px] object-cover rounded-[30px] shadow-md"
          />
        </div>

        {/* Sağ tərəf - Review card-lar */}
        <div className="w-full bg-white shadow-md rounded-2xl p-6 md:p-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {reviews.map((r, i) => (
              <ReviewCard
                key={i}
                name={r.name}
                review={r.review}
                className={r.className}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
