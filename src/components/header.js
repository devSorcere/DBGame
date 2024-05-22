import { Dropdown, Space, Select, ConfigProvider } from "antd";
import { CaretDownOutlined, CaretUpOutlined } from "@ant-design/icons";
import Flag from "react-world-flags";
import "../assets/styles/header.css";
const Header = () => {
  const countries = [
    { code: "cn", name: "繁體中文" },
    { code: "hk", name: "简体中文" },
    { code: "us", name: "English" },
    { code: "in", name: "Tiếng Việt" },
    { code: "fr", name: "ไทย" },
    { code: "es", name: "Español" },
    { code: "pt", name: "Português" },
    { code: "ru", name: "Русский" },
  ];
  const country_item = countries.map((item) => {
    return {
      value: item.code,
      label: (
        <div className="flex">
          <Flag
            code={item.code}
            style={{ width: "23px", marginRight: "10px" }}
          />{" "}
          {item.name}
        </div>
      ),
    };
  });
  console.log(country_item);

  const items = [
    {
      label: (
        <div className="flex items-center">
          {" "}
          <div className="bg-[#ff7e04] rounded-full h-[8px] w-[8px] mr-[10px]"></div>
          <div>KM White Label</div>{" "}
        </div>
      ),
      key: "0",
    },
    {
      label: (
        <div className="flex items-center">
          {" "}
          <div className="bg-[#ff7e04] rounded-full h-[8px] w-[8px] mr-[10px]"></div>
          <div>KM White Label</div>{" "}
        </div>
      ),
      key: "1",
    },
    {
      label: (
        <div className="flex items-center">
          {" "}
          <div className="bg-[#ff7e04] rounded-full h-[8px] w-[8px] mr-[10px]"></div>
          <div>KM White Label</div>{" "}
        </div>
      ),
      key: "2",
    },
  ];
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  return (
    <div className="fixed w-[100%] flex flex-col items-center shadow bg-white">
      <div className="w-[1467px]">
        <header className="">
          <nav
            className="flex items-center justify-between"
            aria-label="Global"
          >
            <div className="">
              <a href="#" className="">
                <img
                  className="w-[169px] h-[49px]"
                  src="https://dbgaming.com/img/en/db_logo.png"
                  alt=""
                />
              </a>
            </div>
            <div>
              <ul className="flex flex-row nav items-center">
                <li>Home</li>
                <li>Products</li>
                <li>
                  {" "}
                  <Dropdown
                    menu={{
                      items,
                    }}
                    trigger={["click"]}
                  >
                    <a onClick={(e) => e.preventDefault()}>
                      <Space>
                        Sub-line products
                        <CaretDownOutlined />
                      </Space>
                    </a>
                  </Dropdown>
                </li>
                <li>Collaboration</li>
                <li>
                  {" "}
                  <Dropdown
                    menu={{
                      items,
                    }}
                    trigger={["click"]}
                  >
                    <a
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                    >
                      <Space>
                        Latest News
                        <CaretDownOutlined />
                      </Space>
                    </a>
                  </Dropdown>
                </li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Careers</li>
                <Select
                  className="border-none"
                  defaultValue="us"
                  style={{ width: "auto", outLine: "none" }}
                  onChange={handleChange}
                  options={country_item}
                />
              </ul>
            </div>
          </nav>
        </header>
      </div>
    </div>
  );
};
export default Header;
