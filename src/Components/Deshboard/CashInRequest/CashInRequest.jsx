import { FaGetPocket } from "react-icons/fa";
import useCetRequest from "../../CustomHooks/useCetRequest";
import useLogedUser from "../../CustomHooks/useLogedUser";
import DeshboardBanner from "../../SheaireComponent/DeshboardBAnner"; // Fixed the spelling of the import
import { IoMdRemoveCircle } from "react-icons/io";
import useAxiosSource from "../../CustomHooks/useAxiousSorce";

export default function CashInRequest() {
  const { cashin_request, refetch } = useCetRequest();
  const { logedUser } = useLogedUser();
  const { axiosSource } = useAxiosSource();

  // Check if userInfo is available before filtering cashin_request
  const getData = cashin_request.filter(
    (item) => item.number === logedUser.number
  );

  const removeRequest = (id) => {
    refetch();
    axiosSource
      .delete(`/removeCashIn/${id}`)
      .then((result) => console.log(result))
      .then((err) => console.log(err));
  };

  const exceptRequest = (id) => {
    refetch();
    axiosSource
      .post(
        `/AddCashIn/${id}`,
        cashin_request.filter((item) => item._id === id)
      )
      .then((result) => console.log(result))
      .then((err) => console.log(err));
  };

  return (
    <div className="w-full overflow-y-auto max-h-[calc(100vh-50px)] p-4 !scrollNone">
      <DeshboardBanner />
      <div
        className="max-w-full grid gap-4 mt-4"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))" }}
      >
        {getData?.map((item, idx) => (
          <div
            key={idx}
            className="w-full p-4 pb-0 rounded-md bg-gradient-bg border flex flex-col gap-4 border-[#cfb46b85]"
          >
            <h2 className="text-xl font-bold text-gradient">{item.email}</h2>
            <h2 className="text-sm text-gradient">{item.type}</h2>
            <h2 className="text-2xl font-bold text-gradient">{item.amount}</h2>
            <div className="w-full border-t border-[#cfb46b85] p-2 grid grid-cols-2">
              <div
                className="w-full flex justify-center items-center cursor-pointer "
                onClick={() => removeRequest(item._id)}
              >
                <IoMdRemoveCircle className="text-2xl text-[#c09a30]" />
              </div>
              <div
                className="w-full flex justify-center items-center cursor-pointer "
                onClick={() => exceptRequest(item._id)}
              >
                <FaGetPocket className="text-2xl text-[#c09a30]" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
