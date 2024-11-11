import { useState } from "react";
import Button from "../shared/Button";

export default function ContactForm() {
  // State to hold form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
  });

  // State to handle form submission status
  const [status, setStatus] = useState("");

  // Handle input changes
  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    setStatus("Submitting...");

    // Simulate form submission (in a real app, make API call here)
    try {
      // Simulate successful submission
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setStatus("Form submitted successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        date: "",
    time: "",
      });
    } catch (error) {
      setStatus("An error occurred. Please try again.");
    }
  };

  return (
    <div className="border border-slate-500 rounded-xl mt-2">
      <h2 className="text-center font-bold text-2xl mt-6">Contact Us</h2>
      <form className="max-w-[500px] m-auto p-5" onSubmit={handleSubmit}>
        <div >
          <label htmlFor="name" className="block font-bold mb-2">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            className="w-full border border-gray-300"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block font-bold mb-2">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your Email Address"
            className="w-full border border-gray-300"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="phone" className="block font-bold mb-2">Phone Number:</label>
          <input
            id="phone"
            name="phone"
            placeholder="Enter your Phone Number"
            className="w-full border border-gray-300"
            value={formData.phone}
            onChange={handleChange}
            required
          ></input>
        </div>

        <div>
          <label htmlFor="date" className="block font-bold mb-2">Date:</label>
          <input
          className="w-full border border-gray-300"
            id="date"
            name="date"
            placeholder="Enter required Date"
            value={formData.date}
            onChange={handleChange}
            required
          ></input>
        </div>

        <div>
          <label htmlFor="time" className="block font-bold mb-2">Time:</label>
          <input
            id="time"
            name="time"
            placeholder="Enter required Time"
            className="w-full border border-gray-300"
            value={formData.time}
            onChange={handleChange}
            required
          ></input>
        </div>
        <div> <Button text={"Submit"} /></div>
        </form>
      

      {status && <p>{status}</p>}
    </div>
  );
}
