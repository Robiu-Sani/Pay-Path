import JuindCompany from "../Home/JuindCompany";
import image from "../../../image/Balance Inquiry.webp";
import JuinCard from "../../SheaireComponent/JuinCard";
import OurCommitment from "./OurCommitment";
import OurVision from "./OurVision";
import OurCompanys from "./OurCompanys";
import OurTeam from "./OurTeam";
import FAQ from "./FAQ";
import OurServices from "./OurServices";

export default function About() {
  return (
    <div className="w-full">
      <div className="w-full px-2 py-20 flex justify-around items-center flex-col-reverse sm:flex-row bg-gradient-bg min-h-[500px]">
        <h1 className="text-gradient text-center text-4xl sm:text-6xl md:text-[70px] md:text-left font-bold ">
          ABOUT US
        </h1>
        <div className="max-w-[300px] flex justify-center items-center">
          <div className="max-w-full h-[300px] md:h-auto flex justify-center items-center relative">
            <div className="w-[300px] h-[300px]  rounded-full bg-gradient-bg"></div>
            <img
              src={image}
              className="w-full bannerImageStyle absolute top-[50%]"
              alt="banner iconic mobile phone"
            />
          </div>
        </div>
      </div>
      <JuindCompany></JuindCompany>
      <OurCommitment></OurCommitment>
      <OurVision></OurVision>
      <OurCompanys></OurCompanys>
      <OurTeam></OurTeam>
      <OurServices></OurServices>
      <FAQ></FAQ>
      <JuinCard></JuinCard>
    </div>
  );
}
