import Image from 'next/image';
import React from 'react';

interface BasketCardProps {

}

const BasketCard = ({ item, title, weight }: { item: any, title: any, weight: any }) => {
    return (
        <div className="w-full flex justify-between items-center pb-[10px] max-w-full border-b-[1px] border-b-[#F2F2F3]">
            <div className="flex items-center gap-2">
                <Image width={70} height={30} className="w-[70px] max-w-full object-cover h-full" src={item?.img} alt="" />
                <div className="flex flex-col items-start">
                    <span className="text-[15px]">{title}</span>
                    <span className="text-[15px] text-[#B1B1B1]">{weight}</span>
                    <span className="text-[15px]">{item.price}</span>
                </div>
            </div>
            <div className="flex justify-between items-center w-[90px] h-[45px] bg-[#F2F2F3] rounded-xl p-[15px]">
                <button className="text-base">-</button>
                <span className="text-base">1</span>
                <button className="text-base">+</button>
            </div>
        </div>

    );
};

export default BasketCard;