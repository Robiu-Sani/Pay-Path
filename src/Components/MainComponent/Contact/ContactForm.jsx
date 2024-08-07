import { useForm } from "react-hook-form";
import image from "../../../image/contact.jpg";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Here you can handle form submission, e.g., send the data to a server
  };

  return (
    <div className="w-full bg-[#f0e6dc] py-10">
      <div className="container mx-auto px-2 grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="w-full flex justify-center items-center">
          <img src={image} className="max-w-full" alt="Contact" />
        </div>
        <div className="w-full p-7 flex flex-col gap-7 justify-center">
          <h2 className="text-[#0a2f47] font-bold text-2xl">
            Send us a message
          </h2>
          <form
            className="w-full flex flex-col gap-5 justify-center items-center"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className={`border ${
                errors.name ? "border-red-500" : "border-[#0a2f47]"
              } w-full text-[#0a2f47] p-2 rounded`}
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span className="text-red-500">Name is required</span>
            )}

            <input
              type="text"
              name="address"
              placeholder="Your Address"
              className={`border ${
                errors.address ? "border-red-500" : "border-[#0a2f47]"
              } w-full text-[#0a2f47] p-2 rounded`}
              {...register("address", { required: true })}
            />
            {errors.address && (
              <span className="text-red-500">Address is required</span>
            )}

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className={`border ${
                errors.email ? "border-red-500" : "border-[#0a2f47]"
              } w-full text-[#0a2f47] p-2 rounded`}
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <span className="text-red-500">{errors.email.message}</span>
            )}

            <textarea
              placeholder="Write Your Message"
              required
              className={`border ${
                errors.message ? "border-red-500" : "border-[#0a2f47]"
              } h-[100px] w-full text-[#0a2f47] p-2 rounded`}
              {...register("message", { required: true })}
            ></textarea>
            {errors.message && (
              <span className="text-red-500">Message is required</span>
            )}

            <button
              className="button !w-full bg-gradient-bg !rounded relative"
              type="submit"
            >
              <span className="absolute text-gradient">Send Message</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
