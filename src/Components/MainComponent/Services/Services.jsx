import JuindCompany from "../Home/JuindCompany";
import image from "../../../image/history.png";
import JuinCard from "../../SheaireComponent/JuinCard";
import SerVicesSection from "./SerVicesSection";
import services1 from "../../../image/carousel1.jpg";
import services2 from "../../../image/carousel.jpg";
import services3 from "../../../image/banner1.jpg";
import services4 from "../../../image/carousel3.jpg";

export default function Services() {
  const servcesData = [
    {
      image: services1,
      title: "This is title1",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque reiciendis odit adipisci consequuntur numquam consequatur nostrum, quaerat ex dolorum minus voluptatum nihil aliquam. Tempora illum unde officia quisquam commodi dolorem praesentium, ducimus, labore excepturi illo et esse, temporibus maxime voluptatum amet omnis! Cumque soluta, asperiores illum mollitia nostrum voluptatibus pariatur.",
    },
    {
      image: services2,
      title: "This is title2",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque reiciendis odit adipisci consequuntur numquam consequatur nostrum, quaerat ex dolorum minus voluptatum nihil aliquam. Tempora illum unde officia quisquam commodi dolorem praesentium, ducimus, labore excepturi illo et esse, temporibus maxime voluptatum amet omnis! Cumque soluta, asperiores illum mollitia nostrum voluptatibus pariatur.",
    },
    {
      image: services3,
      title: "This is title3",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque reiciendis odit adipisci consequuntur numquam consequatur nostrum, quaerat ex dolorum minus voluptatum nihil aliquam. Tempora illum unde officia quisquam commodi dolorem praesentium, ducimus, labore excepturi illo et esse, temporibus maxime voluptatum amet omnis! Cumque soluta, asperiores illum mollitia nostrum voluptatibus pariatur.",
    },
    {
      image: services4,
      title: "This is title4",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque reiciendis odit adipisci consequuntur numquam consequatur nostrum, quaerat ex dolorum minus voluptatum nihil aliquam. Tempora illum unde officia quisquam commodi dolorem praesentium, ducimus, labore excepturi illo et esse, temporibus maxime voluptatum amet omnis! Cumque soluta, asperiores illum mollitia nostrum voluptatibus pariatur.",
    },
    {
      image: "",
      title: "",
      desc: "",
    },
  ];
  return (
    <div className="w-full">
      <div className="w-full px-2 py-20 flex justify-around items-center flex-col-reverse sm:flex-row bg-gradient-bg min-h-[500px]">
        <h1 className="text-gradient text-center text-4xl sm:text-6xl md:text-[70px] md:text-left font-bold ">
          OUR SERVICES
        </h1>
        <div className="max-w-[300px] flex justify-center items-center">
          <div className="max-w-full h-[300px] md:h-auto flex justify-center items-center relative">
            <div className="w-[300px] h-[300px]  rounded-full bg-gradient-bg"></div>
            <img
              src={image}
              className="w-[125px] bannerImageStyle absolute top-[50%]"
              alt="banner iconic mobile phone"
            />
          </div>
        </div>
      </div>
      <JuindCompany></JuindCompany>
      <h1 className="text-center my-7 text-4xl uppercase font-extrabold">
        Our services
      </h1>
      {servcesData.map((item, idx) => (
        <SerVicesSection
          key={idx}
          image={item.image}
          title={item.title}
          desc={item.desc}
        />
      ))}

      <JuinCard></JuinCard>
    </div>
  );
}
