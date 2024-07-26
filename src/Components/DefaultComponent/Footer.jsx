import { Link } from "react-router-dom";
import banner from "../../image/carousel3.jpg";
import playstore from "../../image/playStore.png";
import appstore from "../../image/appstore.png";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-bg px-2 py-7">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <div className="w-full flex-col flex justify-center items-center sm:items-start pt-4">
          <div className="relative">
            <div className="w-[50px] h-[50px] rounded-full bg-gradient-bg absolute left-1"></div>
            <a className="btn btn-ghost text-xl text-gradient drop-shadow font-extrabold ">
              <span className="">PayPath</span>
            </a>
          </div>
          <p className="text-center mt-8 sm:text-left text-gradient">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            itaque assumenda, ducimus exercitationem laborum libero!
          </p>
        </div>
        <div className="w-full flex-col flex justify-center items-center sm:items-start">
          <div className="w-full border-b border-[#cfb46b62] p-3 mb-3">
            <h3 className="text-gradient text-2xl font-bold">Pages</h3>
          </div>
          <div className="w-full flex flex-col px-3">
            <Link to="/" className="text-gradient my-1">
              Home
            </Link>
            <Link to="/" className="text-gradient my-1">
              About
            </Link>
            <Link to="/" className="text-gradient my-1">
              Deshboard
            </Link>
            <Link to="/" className="text-gradient my-1">
              Contact
            </Link>
            <Link to="/" className="text-gradient my-1">
              Get the Card
            </Link>
          </div>
        </div>
        <div className="w-full flex-col flex justify-center items-center sm:items-start">
          <div className="w-full border-b border-[#cfb46b62] p-3 mb-3">
            <h3 className="text-gradient text-2xl font-bold">Cantact Us</h3>
          </div>
          <div className="w-full flex flex-col px-3">
            <Link to="/" className="text-gradient my-1">
              Facebook
            </Link>
            <Link to="/" className="text-gradient my-1">
              Twitter
            </Link>
            <Link to="/" className="text-gradient my-1">
              LinkedIn
            </Link>
            <Link to="/" className="text-gradient my-1">
              Whatsapp
            </Link>
            <Link to="/" className="text-gradient my-1">
              Email
            </Link>
          </div>
        </div>
        <div className="w-full flex-col flex justify-center items-center sm:items-start">
          <div className="w-full border-b border-[#cfb46b62] p-3 mb-3">
            <h3 className="text-gradient text-2xl font-bold">Find Us</h3>
          </div>
          <div className="w-full flex flex-col gap-3">
            <div className="w-full border border-[#cfb46b62] overflow-hidden rounded-md flex justify-center items-center h-[100px]">
              <img src={banner} alt="banner image " className="w-full " />
            </div>
            <div className="w-full flex gap-3">
              <img
                src={playstore}
                alt="playstore"
                className="w-1/2 border h-[50px] cursor-pointer border-[#cfb46b62] rounded-md"
              />
              <img
                src={appstore}
                alt="appstore"
                className="w-1/2 border h-[50px] cursor-pointer border-[#cfb46b62] rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full border-b border-[#cfb46b62] mt-4"></div>
      <div className="w-full p-3 flex justify-center sm:justify-between items-center flex-col-reverse sm:flex-row">
        <p className="text-gradient font-thin">
          © 2024 PayPath. All Rights Reserved.
        </p>
        <p className="text-gradient font-thin">Robius Sani</p>
      </div>
    </footer>
  );
}
