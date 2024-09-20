import Image from 'next/image';
import React from 'react';


const CategoriesCard = ({ item, name }: { item: any, name: any }) => {
    return (
        <div className={item.active ? "flex items-center gap-3 max-w-full h-[40px] rounded-[50px] bg-[#ffab08] py-[10px] px-[20px] transition-all hover:bg-white cursor-pointer" : "flex items-center gap-3 max-w-full h-[40px] rounded-[50px] bg-white py-[10px] px-[20px] transition-all hover:bg-[#dda53583] cursor-pointer"}>
            <Image width={20} height={20} src={item.img} alt="" />
            <span className="text-[16px] text-[black]">{name}</span>
        </div>
    );
};

export default CategoriesCard;