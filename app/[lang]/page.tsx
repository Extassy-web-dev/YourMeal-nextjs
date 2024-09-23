import BasketCard from "@/components/BasketCard";
import CategoriesCard from "@/components/CategoriesCard";
import ProductCard from "@/components/ProductCard";
import { getDictionary } from "./dictionaries";
import Accordion from "@/components/Accordion";
import Image from "next/image";
import cheeseburger from "../../public/free-icon-cheeseburger-2362255.png"
import snacks from "../../public/free-icon-onion-2362361.png"
import hot_dog from "../../public/free-icon-hotdog-sandwich-2362313.png"
import combo from "../../public/free-icon-fast-food-2362274.png"



type Category = {
    id: number,
    img: any,
    active: boolean,
    lang: any,

}

type Products = {
    id: number,
    img: string,
    price: string,
    m: string,
    lang: any
}

type Basket = {
    id: number,
    price: string,
    img: string,
    lang: any
}

export default async function Home({
    params: { lang },
}: {
    params: { lang: string };
}) {

    const categoriesData: Category[] = [
        {
            id: 1,
            img: cheeseburger,
            active: true,
            lang: {
                ru: "Бургеры",
                en: "Burgers"
            }
        },
        {
            id: 2,
            img: snacks,
            active: false,
            lang: {
                ru: "Закуски",
                en: "Snacks"
            }

        },
        {
            id: 3,
            img: hot_dog,
            active: false,
            lang: {
                ru: "Хот-доги",
                en: "Hot-dogs"
            }

        },
        {
            id: 4,
            img: combo,
            active: false,
            lang: {
                ru: "Комбо",
                en: "Combo"
            }
        },
        {
            id: 5,
            img: "/free-icon-burrito-2362225.png",
            active: false,
            lang: {
                ru: "Шаурма",
                en: "Shaurma"
            }
        },
        {
            id: 6,
            img: "/free-icon-pizza-2362372.png",
            active: false,
            lang: {
                ru: "Пицца",
                en: "Pizza"
            }
        },
        {
            id: 7,
            img: "/free-icon-noodles-2362350.png",
            active: false,
            lang: {
                ru: "Вок",
                en: "Vok"
            }
        },
        {
            id: 8,
            img: "/free-icon-doughnut-2362260.png",
            active: false,
            lang: {
                ru: "Десерты",
                en: "Desserts"
            }
        },
        {
            id: 9,
            img: "/free-icon-ketchup-2362341.png",
            active: false,
            lang: {
                ru: "Соусы",
                en: "Sauces"
            }
        },
    ]

    const productsData: Products[] = [
        {
            id: 1,
            img: '/photo.png',
            price: "689₽",
            // name: "Мясная бомба",
            m: "520г",
            lang: {
                ru: "Мясная бомба",
                en: "Meat Bomb"
            }
        },
        {
            id: 2,
            img: '/photo2.png',
            price: "550₽",
            // name: "Супер сырный",
            m: "512г",
            lang: {
                ru: "Супер сырный",
                en: "Super cheesy"
            }
        },
        {
            id: 3,
            img: '/photo3.png',
            price: "639₽",
            // name: "Сытный",
            m: "580г",
            lang: {
                ru: "Сытный",
                en: "Satisfying"
            }
        },
        {
            id: 4,
            img: '/photo4.png',
            price: "480₽",
            // name: "Тяжелый удар",
            m: "470г",
            lang: {
                ru: "Тяжелый удар",
                en: "A heavy blow"
            }
        },
        {
            id: 5,
            img: '/photo5.png',
            price: "450₽",
            // name: "Вечная классика",
            m: "450г",
            lang: {
                ru: "Вечная классика",
                en: "Eternal classics"
            }
        },
        {
            id: 6,
            img: '/photo6.png',
            price: "560₽",
            // name: "Итальянский",
            m: "510г",
            lang: {
                ru: "Итальянский",
                en: "Italian"
            }
        }
    ]

    const basketData: Basket[] = [
        {
            id: 1,
            price: "550₽",
            img: "/cheezeburger.png",
            lang: {
                title: {
                    ru: "Супер сырный",
                    en: "Super cheesy"
                },
                weight: {
                    ru: "512г",
                    en: "512g"
                }
            }
        },
        {
            id: 2,
            price: "245₽",
            img: "/chips.png",
            lang: {
                title: {
                    ru: "Картошка фри",
                    en: "French fries"
                },
                weight: {
                    ru: "180г",
                    en: "180g"
                }
            }
        },
        {

            id: 3,
            price: "239₽",
            img: "/hot-dog.png",
            lang: {
                title: {
                    ru: "Жгучий хот-дог",
                    en: "Burning hot dog"
                },
                weight: {
                    ru: "245г",
                    en: "245g"
                }
            }
        },
        {
            id: 4,
            price: "550₽",
            img: "/cheezeburger.png",
            lang: {
                title: {
                    ru: "Супер сырный",
                    en: "Super cheesy"
                },
                weight: {
                    ru: "512г",
                    en: "512g"
                }
            }
        }
    ]

    const translation = await getDictionary(lang);

    return (
        <>
            <div className="main max-w-full w-[185vh] m-auto h-full">
                <Accordion />
                <div className="category w-full max-w-full py-[100px] flex justify-between gap-5">
                    {
                        categoriesData.map((item: Category) => (
                            <CategoriesCard name={lang === "ru" ? item.lang.ru : item.lang.en} item={item} key={item.id} />
                        ))
                    }
                </div>
                <div className="main_box flex gap-[40px] pb-[50px] justify-between w-full max-w-full h-full">
                    <div className="w-[25%] sticky top-[20px] h-[600px] rounded-[18px] bg-white max-w-full">
                        <div className="basket w-full max-w-full px-[20px] py-[35px] flex flex-col gap-[10px]">
                            <div className="flex justify-between items-center">
                                <h1 className="text-[24px] font-[600]">{translation.basket.mainTitle}</h1>
                                <div className="count w-[41px] h-[26px] rounded-md bg-[#F2F2F3] flex justify-center items-center">
                                    4
                                </div>
                            </div>
                            <div className="line w-full h-[1px] max-w-full bg-[#F2F2F3]"></div>
                            <div className="box-bucket relative flex flex-col gap-[15px] items-start w-full max-w-full overflow-y-scroll h-[260px]">
                                {
                                    basketData.map((item: Basket) => (
                                        <BasketCard title={lang === "ru" ? item.lang.title.ru : item.lang.title.en} weight={lang === "ru" ? item.lang.weight.ru : item.lang.weight.en} key={item.id} item={item} />
                                    ))
                                }
                            </div>
                        </div>
                        <div className="absolute bottom-0 total w-full max-w-full flex flex-col items-start gap-7 px-[20px] pb-[20px]">
                            <div className="w-full flex justify-between items-center">
                                <h1 className="text-[20px]">{translation.basket.total}</h1>
                                <h1 className="text-[20px]">1279₽</h1>
                            </div>
                            <div className="flex justify-center w-full max-w-full">
                                <button className="w-full h-[45px] text-white max-w-full p-[11px_32px] bg-[#FF7020] rounded-xl">{translation.basket.addOrder}</button>
                            </div>
                            <div className="flex items-center gap-3">
                                <Image width={40} height={40} src="/free-icon-delivery-2362252.png" alt="" />
                                <p>{translation.basket.freeDelivery}</p>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-[20px] w-[75%] h-[467px]">
                        {
                            productsData.map((item: Products) => (
                                <ProductCard add={lang === "ru" ? "Добавить" : "Add"} name={lang === "ru" ? item.lang.ru : item.lang.en} key={item.id} item={item} />
                            ))
                        }

                    </div>
                </div>
            </div>
        </>
    );
}
