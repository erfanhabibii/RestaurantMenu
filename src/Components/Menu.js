import React from "react";

const Menu = ({ allMenus }) => {
  return (
    <>
      <div className='mx-auto grid gap-8 xl:gap-12 justify-items-center grid-cols-1 md:grid-cols-2'>
        {allMenus.map((menu) => {
          return (
            <article key={menu.id} className='grid gap-y-4 grid-rows-1 lg:grid-cols-2 max-w-[40rem] justify-items-center'>
              <img src={menu.img} alt={menu.title} className='object-cover w-80 lg:w-56 xl:w-64 block rounded border-4 border-gold-50' />
              <div className="max-w-80">
                <div className='flex justify-between border-b-[0.5px] border-grey-500'>
                  <h4 className='font-semibold text-xl xl:text-2xl mb-1 xl:mb-2'>{menu.title}</h4>
                  <h4 className='text-gold-50 font-semibold text-lg xl:text-xl xl:mb-2 xl:mt-1'>${menu.price}</h4>
                </div>
                <p className='mb-0 pt-4 text-grey-500'>{menu.desc}</p>
              </div>
            </article>
          );
        })}
      </div>
    </>
  );
};

export default Menu;
