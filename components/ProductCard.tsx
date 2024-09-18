import React from 'react';



const ProductCard = ({ item }: { item: any }) => {
    return (
        <div className="flex flex-col items-start bg-white p-[20px] max-w-full w-[300px] h-[441px] rounded-[18px] gap-[50px]">
            <div className="flex flex-col gap-[5px]">
                <img src={item?.img} alt="product" className='w-full max-w-full' />
                <p className="text-[24px] font-[600]">{item.price}</p>
                <p className="text-[16px] font-[400]">{item.name}</p>
            </div>
            <div className="flex flex-col items-start gap-[5px] w-full h-full">
                <span className="text-[16px] font-[600] text-[#B1B1B1]">{item.m}</span>
                <button className="w-full max-w-full bg-[#F2F2F3] rounded-xl h-full">Добавить</button>
            </div>
        </div>
    );
};

export default ProductCard;