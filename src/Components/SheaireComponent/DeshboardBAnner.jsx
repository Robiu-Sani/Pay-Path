import banner from "../../image/banner1.jpg";
export default function DeshboardBAnner() {
  return (
    <div className="w-full opacity-50 h-[150px] sm:h-[250px] mb-4 overflow-hidden rounded-md border border-[#cfb46b85]">
      <img src={banner} alt="banner image" className="w-full min-h-full" />
    </div>
  );
}
