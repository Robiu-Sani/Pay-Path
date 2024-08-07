import OurCompanys from "../About/OurCompanys";
import Banner from "./Banner";
import JuindCompany from "./JuindCompany";
import Services from "./Services";
import Testimonial from "./Testimonial";
import WeProvite from "./WeProvite";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <JuindCompany></JuindCompany>
      <OurCompanys></OurCompanys>
      <Services></Services>
      <WeProvite></WeProvite>
      <Testimonial></Testimonial>
    </div>
  );
}
