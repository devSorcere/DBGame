import "../assets/styles/home.css";
import {
  HomeOutlined,
  TrophyOutlined,
  AppstoreOutlined,
  GiftOutlined,
  BlockOutlined,
  BarsOutlined,
} from "@ant-design/icons";
import Slider from "react-slick";
import Button from "../components/button";
import { useState } from "react";
import obSports from "../assets/video/ob-sports.mp4";
import liveCasino from "../assets/video/DB_live_casino.mp4";
import db_games from "../assets/images/db_games_sports2.png";
import heguan_new from "../assets/images/heguan_new.png";
import dianjing from "../assets/images/dianjing.png";
import qipai from "../assets/images/qipai.png";
import caipiao from "../assets/images/caipiao.png";
import SectionHeader from "../components/section_header";
import Icon from "../assets/images/icon.png";
import IconBack from "../assets/images/xiaolvtisheng.png";

const Home = () => {
  const [selectItem, setSelectItem] = useState("SPORTS");
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
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
      video: obSports,
      img: db_games,
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
      video: liveCasino,
      img: heguan_new,
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
      video: obSports,
      img: dianjing,
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
      video: liveCasino,
      img: qipai,
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
      video: obSports,
      img: caipiao,
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
      video: liveCasino,
      img: db_games,
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
      video: obSports,
      img: db_games,
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
      video: liveCasino,
      img: db_games,
    },
  ];
  const advantages = [
    {
      title: "Leader in the industry",
      content:
        "The largest Asian trusted organization for online gaming products’ development and distribution that has established partnership with thousands of clients and brands based on mutual trust and integrity.",
      icon: Icon,
    },
    {
      title: "Leader in the industry",
      content:
        "The largest Asian trusted organization for online gaming products’ development and distribution that has established partnership with thousands of clients and brands based on mutual trust and integrity.",
      icon: Icon,
    },
    {
      title: "Leader in the industry",
      content:
        "The largest Asian trusted organization for online gaming products’ development and distribution that has established partnership with thousands of clients and brands based on mutual trust and integrity.",
      icon: Icon,
    },
    {
      title: "Leader in the industry",
      content:
        "The largest Asian trusted organization for online gaming products’ development and distribution that has established partnership with thousands of clients and brands based on mutual trust and integrity.",
      icon: Icon,
    },
    {
      title: "Leader in the industry",
      content:
        "The largest Asian trusted organization for online gaming products’ development and distribution that has established partnership with thousands of clients and brands based on mutual trust and integrity.",
      icon: Icon,
    },
    {
      title: "Leader in the industry",
      content:
        "The largest Asian trusted organization for online gaming products’ development and distribution that has established partnership with thousands of clients and brands based on mutual trust and integrity.",
      icon: Icon,
    },
  ];
  const AboutUsData = [
    {
      icon: IconBack,
      title: "90%",
      content: "Efficiency improved",
    },
    {
      icon: IconBack,
      title: "90%",
      content: "Efficiency improved",
    },
    {
      icon: IconBack,
      title: "90%",
      content: "Efficiency improved",
    },
    {
      icon: IconBack,
      title: "90%",
      content: "Efficiency improved",
    },
  ];
  return (
    <div className="">
      <section className="text-center py-[30px] px-[200px]">
        <Slider {...settings}>
          <div>
            <SectionHeader title="Advantages" />
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-[10px]">
              {advantages.map((item) => (
                <div className="text-center flex flex-col justify-center items-center border border-[#ff9a53] rounded-[20px] p-[15px]">
                  <img src={item.icon} alt="" />
                  <div className="text-[18px]">{item.title}</div>
                  <p>{item.content}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div>
              <SectionHeader title="About Us" />
              <div className="grid lg:grid-cols-2 grid-cols-1 text-left">
                <div>
                  <div>
                    <div className="text-[24px]">About DB</div>
                    <div className="leading-[30px]tracking-normal">
                      With the brand spirit "Do The Best, Double The Fun", DB
                      Gaming is committed to creating innovative games in the
                      industry, specializing in the fields of sports, live
                      games, e-sports, chess and card games, lotteries and
                      electronics field. DB Gaming has earned the trust of users
                      all over the world with its professional, safe and
                      excellent services.
                    </div>
                    <div className="text-[24px]">About DB</div>
                    <div className="leading-[30px] tracking-[1.56]">
                      With the brand spirit "Do The Best, Double The Fun", DB
                      Gaming is committed to creating innovative games in the
                      industry, specializing in the fields of sports, live
                      games, e-sports, chess and card games, lotteries and
                      electronics field. DB Gaming has earned the trust of users
                      all over the world with its professional, safe and
                      excellent services.
                    </div>
                  </div>
                  <Button text="Click to view" />
                </div>
                <div className="grid grid-cols-2">
                  {AboutUsData.map((item) => (
                    <div className="flex min-h-[250px] justify-center itmes-center flex-col relative text-center">
                      <img src={IconBack} className="absolute" alt="" />
                      <div className="z-[10] text-[42px]">90%</div>
                      <div className="z-[10]">Efficiency improved</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </section>
      <section className="video flex flex-col justify-center items-center relative text-white h-auto">
        {videoData.map((item) => (
          <div className={item.id === selectItem ? "block" : "hidden"}>
            <div className="">
              {/* <video
                className="w-[auto] md:min-h-[1100px] lg:min-h-[800px] min-h-[1300px]"
                src={item.video}
                muted
                autoPlay
                loop
              >
                <img src="https://dbgaming.com/img/sports111.png" alt="" />
              </video> */}
            </div>
          </div>
        ))}
        <div className="overlay absolute top-0 left-0 w-[100%] h-[100%]"></div>
        <div className="absolute top-0 left-0 w-[100%] h-[100%]">
          <div className="relative text-center">
            <SectionHeader title="Products" />
            <div className="flex justify-center py-2 flex-wrap relative">
              {menuItems.map((item, index) => (
                <div
                  key={item.label}
                  onClick={() => {
                    setSelectItem(item.label);
                  }}
                  className="cursor-pointer relative w-[155px] flex flex-col justify-center items-center mx-[-11px] px-5 py-3"
                >
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
                  <div className="z-[5] text-center text-[12px]">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
            {videoData.map((data) => (
              // <div className="grid"></div>
              <div className={data.id === selectItem ? "block" : "hidden"}>
                <div className="left-panel  flex-col flex justify-start text-left px-[200px] ml-[94px] media-p-x-10">
                  <div className="animation translate-y-[50%] z-10 w-auto sm:w-[552px]">
                    <div className={"text-[40px] mb-[29px] "}>{data.title}</div>
                    <div className="text-[17px] w-auto sm:w-[552px] mb-[63px]">
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
                    </div>
                  </div>

                  <div className="">
                    {/* <img
                      className="media-hidden lg:absolute  mt-[60px] top-[130px] right-[0] w-[532px] img-animation"
                      src={data.img}
                      alt=""
                    /> */}
                    {/* <div className="absolute top-0 left-0 overlay w-full h-full"></div> */}
                  </div>
                  <Button text={"Try now"} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="text-center">
        <SectionHeader title="Sub-line products" />

        sdfsdfsdfdsf
      </section>
    </div>
  );
};
export default Home;
