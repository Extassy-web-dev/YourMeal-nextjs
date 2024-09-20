import { getDictionary } from "./dictionaries";
import "./globals.css";
import Image from "next/image";



export default async function RootLayout({
  children,
  params: { lang },
}: Readonly<{
  children: React.ReactNode;
}> & {
  params: { lang: string };
}) {
  const translation = await getDictionary(lang);

  return (
    <html lang="en">
      <link rel="icon" href={"/logo.svg"} sizes="any" />
      <title>YourMeal</title>
      <body>
        <header className="w-full max-w-full">
          <div className="w-full max-w-full h-[550px] bg-[#FFAB08] rounded-b-[100%]">
            <div className="flex justify-center items-center pt-[20px] gap-2">
              <h1 className="text-white text-[20px] ">YourMeal</h1>
              <Image width={30} height={30} src={"/logo.svg"} alt="logo" />
            </div>
            <div className="w-full max-w-full flex justify-center items-center gap-6">
              <Image width={300} height={300} src={"/burger.png"} alt="burger" />
              <div className="flex flex-col gap-10">
                <div>
                  <h1 className="text-[50px] font-[700] text-white">{translation.header.mainTitle}</h1>
                  <h1 className="text-[50px] font-[700] text-[#ff5c00]">{translation.header.secondTitle}</h1>
                </div>
                <span className="text-white">{translation.header.delivery}</span>
              </div>
            </div>
          </div>
        </header>
        {children}
        {/* <footer className="bg-white flex justify-between items-center w-full py-[50px] mt-[50px] px-[100px] max-w-full">
          <div className="flex flex-col gap-10">
            <div className="flex items-center gap-4">
              <h1 className="text-[#ff7020] text-[50px] font-[700]">YourMeal</h1>
              <img src="../logo-orange.png" alt="" />
            </div>
            <div className="flex flex-col items-start gap-3">
              <span>© YouMeal, 2022</span>
              <span>Design: Anastasia Ilina</span>
            </div>
          </div>
          <div className="flex flex-col items-start gap-5 ">
            <p className="text-[24px] ">Номер для заказа</p>
            <div className="flex items-center gap-1">
              <img src="../Call.png" alt="" />
              <span className="text-[16px]">+7(930)833-38-11</span>
            </div>
          </div>
          <div className="flex flex-col items-start gap-5">
            <p className="text-[24px] ">Мы в соцсетях</p>
            <div className="flex items-center gap-3">
              <img className="transition-all hover:opacity-[0.5] hover:scale-[0.95] cursor-pointer" src="../vk.png" alt="" />
              <img className="transition-all hover:opacity-[0.5] hover:scale-[0.95] cursor-pointer" src="../tg.png" alt="" />
            </div>
          </div>
        </footer> */}
      </body>
    </html>
  );
}
