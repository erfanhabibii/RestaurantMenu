import React, { useState } from "react";

const Categories = ({ categories, filterMenus }) => {
  const [mainCategory, setMainCategory] = useState("all");

  return (
    <div className='mb-16 flex justify-center flex-wrap'>
      {categories.map((category, index) => (
        <button
          key={index}
          type='button'
          className={
            category === mainCategory
              ? "bg-gold-50 border-transparent text-base/6 tracking-wide capitalize m-2 px-4 py-2 text-white cursor-pointer transition-all duration-300 ease-linear rounded"
              : "bg-transparent border-transparent text-base/6 tracking-wide capitalize m-2 px-4 py-2 text-gold-50 cursor-pointer transition-all duration-300 ease-linear rounded hover:bg-gold-50 hover:text-white"
          }
          onClick={() => {
            setMainCategory(category);
            filterMenus(category);
          }}>
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;
