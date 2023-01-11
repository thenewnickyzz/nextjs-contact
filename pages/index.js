import { useState } from "react";
import Input from "./Input";

export default function Home() {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const onChange = (e) => setData({ ...data, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();

    await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(data),
    });

    setData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="bg-gradient-to-br from-blue-700 via-blue-800 to-gray-900">
      <div className="max-w-[600px] mx-auto h-screen flex flex-col justify-center">
        <form
          className="p-20  border-4 border-white/60 rounded-xl"
          onSubmit={onSubmit}
        >
          <h1 className="text-white text-5xl font-semibold mb-8">Contact</h1>

          <Input
            placeholder="Name"
            name="name"
            value={data.name}
            onChange={onChange}
          />
          <Input
            placeholder="Email"
            name="email"
            value={data.email}
            onChange={onChange}
          />
          <Input
            placeholder="Message"
            name="message"
            onChange={onChange}
            isTextarea
            rows={5}
            value={data.message}
          />
          <button className="mt-3 py-4 px-10 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-zinc-600/30 transition hover:bg-blue-700">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
