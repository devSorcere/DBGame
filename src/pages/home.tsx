import "../assets/styles/home.css";
import {
  HomeOutlined,
  TrophyOutlined,
  AppstoreOutlined,
  GiftOutlined,
  BlockOutlined,
  BarsOutlined,
} from "@ant-design/icons";
import Button from "../components/button";
import { useState } from "react";

const Home = () => {
  const [selectItem, setSelectItem] = useState("SPORTS");
  const menuItems = [
    { icon: <TrophyOutlined />, label: "SPORTS" },
    { icon: <HomeOutlined />, label: "LIVE CASINO" },
    { icon: <TrophyOutlined />, label: "E-SPORTS" },
    { icon: <AppstoreOutlined />, label: "POKER GAMES" },
    { icon: <GiftOutlined />, label: "LOTTERY" },
    { icon: <BlockOutlined />, label: "SLOTS" },
    { icon: <BarsOutlined />, label: "BLOCKCHAIN HASH" },
    { icon: <BarsOutlined />, label: "Scratch Cards" },
  ];
  const videoData = [
    {
      id: "SPORTS",
      title: "DB SPORTS",
      content:
        "DB SPORTS: A globally reputable leading brand, committed to promoting industry innovation and expects to become the most favorite brand, chosen and trusted by more than ten million users. Through safe and stable customized services, combined with professional-level trading module, intelligent AI risk control services, making the service more comprehensive.Empowering numerous clients to establish themselves in Asia and expand globally.",
      list: [
        "Majority Matches Coverage",
        "Majority Matches Coverage",
        "Majority Matches Coverage",
        "Majority Matches Coverage",
        "Majority Matches Coverage",
        "Majority Matches Coverage",
      ],
      video: "https://dbgaming.com/video/ob-sports.mp4",
      img: "https://dbgaming.com/img/games/db_games_sports2.png",
    },
    {
      id: "LIVE CASINO",
      title: "DB LIVE CASINO",
      content:
        "DB LIVE CASINO: A globally reputable leading brand, committed to promoting industry innovation and expects to become the most favorite brand, chosen and trusted by more than ten million users. Through safe and stable customized services, combined with professional-level trading module, intelligent AI risk control services, making the service more comprehensive.Empowering numerous clients to establish themselves in Asia and expand globally.",
      list: [
        "Majority Matches Coverage",
        "Majority Matches Coverage",
        "Majority Matches Coverage",
        "Majority Matches Coverage",
        "Majority Matches Coverage",
        "Majority Matches Coverage",
      ],
      video: "https://dbgaming.com/video/DB_live_casino.mp4",
      img: "https://dbgaming.com/img/heguan_new.png",
    },
    {
      id: "E-SPORTS",
      title: "DB E-SPORTS",
      content:
        "DB E-SPORTS: A globally reputable leading brand, committed to promoting industry innovation and expects to become the most favorite brand, chosen and trusted by more than ten million users. Through safe and stable customized services, combined with professional-level trading module, intelligent AI risk control services, making the service more comprehensive.Empowering numerous clients to establish themselves in Asia and expand globally.",
      list: [
        "Majority Matches Coverage",
        "Majority Matches Coverage",
        "Majority Matches Coverage",
        "Majority Matches Coverage",
        "Majority Matches Coverage",
        "Majority Matches Coverage",
      ],
      video: "https://dbgaming.com/video/ob-sports.mp4",
      img: "https://dbgaming.com/img/dianjing.png",
    },
    {
      id: "POKER GAMES",
      title: "DB POKER GAMES",
      content:
        "DB POKER GAMES: A globally reputable leading brand, committed to promoting industry innovation and expects to become the most favorite brand, chosen and trusted by more than ten million users. Through safe and stable customized services, combined with professional-level trading module, intelligent AI risk control services, making the service more comprehensive.Empowering numerous clients to establish themselves in Asia and expand globally.",
      list: [
        "Majority Matches Coverage",
        "Majority Matches Coverage",
        "Majority Matches Coverage",
        "Majority Matches Coverage",
        "Majority Matches Coverage",
        "Majority Matches Coverage",
      ],
      video: "https://dbgaming.com/video/ob-gambling.mp4",
      img: "https://dbgaming.com/img/qipai.png",
    },
    {
      id: "LOTTERY",
      title: "DB LOTTERY",
      content:
        "DB LOTTERY: A globally reputable leading brand, committed to promoting industry innovation and expects to become the most favorite brand, chosen and trusted by more than ten million users. Through safe and stable customized services, combined with professional-level trading module, intelligent AI risk control services, making the service more comprehensive.Empowering numerous clients to establish themselves in Asia and expand globally.",
      list: [
        "Majority Matches Coverage",
        "Majority Matches Coverage",
        "Majority Matches Coverage",
        "Majority Matches Coverage",
        "Majority Matches Coverage",
        "Majority Matches Coverage",
      ],
      video: "https://dbgaming.com/video/ob-sports.mp4",
      img: "https://dbgaming.com/img/caipiao.png",
    },
    {
      id: "SLOTS",
      title: "DB SLOTS",
      content:
        "DB SLOTS: A globally reputable leading brand, committed to promoting industry innovation and expects to become the most favorite brand, chosen and trusted by more than ten million users. Through safe and stable customized services, combined with professional-level trading module, intelligent AI risk control services, making the service more comprehensive.Empowering numerous clients to establish themselves in Asia and expand globally.",
      list: [
        "Majority Matches Coverage",
        "Majority Matches Coverage",
        "Majority Matches Coverage",
        "Majority Matches Coverage",
        "Majority Matches Coverage",
        "Majority Matches Coverage",
      ],
      video: "https://dbgaming.com/video/ob-sports.mp4",
      img: "https://dbgaming.com/img/games/db_games_sports2.png",
    },
    {
      id: "BLOCKCHAIN HASH",
      title: "DB BLOCKCHAIN HASH",
      content:
        "DB BLOCKCHAIN HASH: A globally reputable leading brand, committed to promoting industry innovation and expects to become the most favorite brand, chosen and trusted by more than ten million users. Through safe and stable customized services, combined with professional-level trading module, intelligent AI risk control services, making the service more comprehensive.Empowering numerous clients to establish themselves in Asia and expand globally.",
      list: [
        "Majority Matches Coverage",
        "Majority Matches Coverage",
        "Majority Matches Coverage",
        "Majority Matches Coverage",
        "Majority Matches Coverage",
        "Majority Matches Coverage",
      ],
      video: "https://dbgaming.com/video/ob-sports.mp4",
      img: "https://dbgaming.com/img/games/db_games_sports2.png",
    },
    {
      id: "Scratch Cards",
      title: "DB Scratch Cards",
      content:
        "DB Scratch Cards: A globally reputable leading brand, committed to promoting industry innovation and expects to become the most favorite brand, chosen and trusted by more than ten million users. Through safe and stable customized services, combined with professional-level trading module, intelligent AI risk control services, making the service more comprehensive.Empowering numerous clients to establish themselves in Asia and expand globally.",
      list: [
        "Majority Matches Coverage",
        "Majority Matches Coverage",
        "Majority Matches Coverage",
        "Majority Matches Coverage",
        "Majority Matches Coverage",
        "Majority Matches Coverage",
      ],
      video: "https://dbgaming.com/video/ob-sports.mp4",
      img: "https://dbgaming.com/img/games/db_games_sports2.png",
    },
  ];

  return (
    <div className="">
      <section className="video flex flex-col justify-center items-center relative text-white pb-[150px]">
        <div className="z-[-1] absolute left-0 top-0 w-[100%] h-[100%] overlay"></div>
        <h2 className="text-[36px] font-medium">Product</h2>
        <div className="line ">
          <span className="bg-[#ffc10f]"></span>
          <span className="bg-[#ffc10f]"></span>
          <span className="bg-[#ff7e04]"></span>
        </div>
        <div className="flex justify-center py-2 flex-wrap relative">
          {menuItems.map((item, index) => (
            <div
              onClick={() => {
                setSelectItem(item.label);
              }}
              className="cursor-pointer relative w-[155px] flex flex-col justify-center items-center mx-[-11px] px-5 py-3"
            >
              <img src="" alt="" />
              <img src="" alt="" />
              {selectItem === item.label && (
                <img
                  width={"100%"}
                  className="absolute"
                  src="https://dbgaming.com/img/companypage/sport_active.png"
                  alt=""
                />
              )}
              {selectItem !== item.label && (
                <img
                  width={"100%"}
                  className="absolute"
                  src="https://dbgaming.com/img/companypage/sport_defult.png"
                  alt=""
                />
              )}

              <div className="z-[5]">{item.icon}</div>
              <div className="z-[5] text-center text-[12px]">{item.label}</div>
            </div>
          ))}
        </div>

        {videoData.map((data) => (
          <div className={data.id === selectItem ? "block" : "hidden"}>
            <div className="z-[-2] absolute left-0 top-0">
              <video
                className="w-[100%] h-[100%]"
                src={data.video}
                muted
                autoPlay
                loop
              >
                <img src="https://dbgaming.com/img/sports111.png" alt="" />
              </video>
            </div>

            <div className="left-panel  flex justify-start  ml-[-300px] ">
              <div className="animation translate-y-[50%] opacity-0">
                <div className={"text-[29px] mb-[49px] "}>{data.title}</div>
                <div className="text-[17px] w-[552px] mb-[63px]">
                  {data.content}
                </div>
                <div className="grid grid-cols-2">
                  {data.list.map((item) => (
                    <div className="flex items-center mb-[32px]">
                      <img
                        src="https://dbgaming.com/img/tuoyuanxing.png"
                        className="w-[16px] h-[16px]"
                        alt=""
                      />
                      <span className="ml-[7px]">{item}</span>
                    </div>
                  ))}
                  <Button text={"Try now"} />
                </div>
              </div>
              <div>
                <img
                  className="absolute mt-[60px] top-[130px] right-[0] w-[532px] img-animation"
                  src={data.img}
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};
export default Home;
