import CategoriesCard from "@/components/CategoriesCard";
import ProductCard from "@/components/ProductCard";

type Category = {
  id: number,
  name: string,
  img: string,
  active: boolean
}

type Products = {
  id: number,
  img: string,
  price: string,
  name: string,
  m: string
}

export default function Home() {

  const categoriesData: Category[] = [
    {
      id: 1,
      name: "Бургеры",
      img: "/free-icon-cheeseburger-2362255.png",
      active: true
    },
    {
      id: 2,
      name: "Закуски",
      img: "/free-icon-onion-2362361.png",
      active: false

    },
    {
      id: 3,
      name: "Хот-доги",
      img: "/free-icon-hotdog-sandwich-2362313.png",
      active: false

    },
    {
      id: 4,
      name: "Комбо",
      img: "/free-icon-fast-food-2362274.png",
      active: false
    },
    {
      id: 5,
      name: "Шаурма",
      img: "/free-icon-burrito-2362225.png",
      active: false
    },
    {
      id: 6,
      name: "Пицца",
      img: "/free-icon-pizza-2362372.png",
      active: false
    },
    {
      id: 7,
      name: "Вок",
      img: "/free-icon-noodles-2362350.png",
      active: false
    },
    {
      id: 8,
      name: "Десерты",
      img: "/free-icon-doughnut-2362260.png",
      active: false
    },
    {
      id: 9,
      name: "Соусы",
      img: "/free-icon-ketchup-2362341.png",
      active: false
    },
  ]

  const productsData: Products[] = [
    {
      id: 1,
      img: '/photo.png',
      price: "689₽",
      name: "Мясная бомба",
      m: "520г"
    },
    {
      id: 2,
      img: '/photo2.png',
      price: "550₽",
      name: "Супер сырный",
      m: "512г"
    },
    {
      id: 3,
      img: '/photo3.png',
      price: "639₽",
      name: "МСытный",
      m: "580г"
    },
    {
      id: 4,
      img: '/photo4.png',
      price: "480₽",
      name: "Тяжелый удар",
      m: "47z0г"
    },
    {
      id: 5,
      img: '/photo5.png',
      price: "450₽",
      name: "Вечная классика",
      m: "450г"
    },
    {
      id: 6,
      img: '/photo6.png',
      price: "560₽",
      name: "Итальянский",
      m: "510г"
    }
  ]

  return (
    <>
      <div className="main max-w-full w-[185vh] m-auto h-full">
        <div className="category w-full max-w-full py-[100px] flex justify-between gap-5">
          {
            categoriesData.map((item: Category) => (
              <CategoriesCard item={item} key={item.id} />
            ))
          }
        </div>
        <div className="main_box flex gap-[40px] pb-[50px] w-full max-w-full h-full">
          <div className="w-[20%] h-[476px] rounded-[18px] bg-white max-w-full">
              <div className="basket w-full max-w-full px-[20px] py-[35px] flex flex-col gap-[20px]">
                <div className="flex justify-between items-center">
                  <h1 className="text-[24px] font-[600]">Корзина</h1>
                  <div className="count w-[41px] h-[26px] rounded-md bg-[#F2F2F3] flex justify-center items-center">
                      4
                  </div>
                </div>
                <div className="line w-full h-[1px] max-w-full bg-[#F2F2F3]"></div>
              </div>
          </div>
          <div className="grid grid-cols-3 gap-[20px] w-[80%] h-[467px]">
           {
            productsData.map((item: Products) => (
              <ProductCard key={item.id} item={item}/>
            ))
           }
         
          </div>
        </div>
      </div>
    </>
  );
}
