import React from 'react'
import { useState, useRef, useEffect } from "react";


function Mail() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
      });
      const [resultMessage, setResultMessage] = useState("");
      const [isLoading, setIsLoading] = useState(false);
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setResultMessage("Please wait...");
    
        const payload = {
          access_key: "2b9fc0fa-46bc-4da4-8ca7-89c72dae6e4c",
          ...formData,
        };
    
        try {
          const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify(payload),
          });
    
          const result = await response.json();
    
          if (response.status === 200) {
            setResultMessage("Message sent successfully!");
          } else {
            setResultMessage("Failed to send message. Please try again.");
          }
        } catch (error) {
          setResultMessage("Something went wrong!");
        } finally {
          setIsLoading(false);
          setFormData({ name: "", email: "", message: "" });
          setTimeout(() => setResultMessage(""), 3000);
        }
      };

    const [colorIndex, setColorIndex] = useState(0);
    const colors = ["darkgrey", "white"]; // Array of colors
    useEffect(() => {
      const interval = setInterval(() => {
        setColorIndex((prevIndex) => (prevIndex + 1) % colors.length); // Cycle through colors
      }, 1); // Change color every second
  
      return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []);

  return (
   <>
   <div className='dark:bg-zinc-900 text-center py-2 px-2'>
      <div className='py-4  rounded-xl border-[2px] border-sky-700 dark:shadow-white shadow-black shadow-sm dark:bg-black bg-[#fffcf3]'>
        <h1 className='my-5 text-3xl font-bold dark:text-white'  style={{fontFamily: 'doto', color: colors[colorIndex]}}>Send Message.</h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Name Field */}
          <div>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your Name"
              className="mt-1 px-4 py-2 border-[2px] border-sky-700 dark:bg-black dark:text-zinc-500 w-3/4 dark:shadow-white shadow-black shadow-sm rounded-lg"
            />
          </div>

          {/* Email Field */}
          <div>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Your Email"
              className=" px-4 py-2 dark:bg-black border-[2px] border-sky-700 dark:text-zinc-500 w-3/4 dark:shadow-white shadow-black shadow-sm rounded-lg"
            />
          </div>

          {/* Message Field */}
          <div>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              placeholder="Your Message"
              className=" px-4 py-2 dark:bg-black border-[2px] border-sky-700 dark:text-zinc-500 w-3/4 dark:shadow-white shadow-black shadow-sm rounded-lg"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className=" px-4 py-2 dark:bg-black border-[2px] border-sky-700 bg-white dark:text-zinc-500 w-3/4 dark:shadow-white shadow-black shadow-sm rounded-lg"
          >
            {isLoading ? "Sending..." : "Send"}
          </button>

          {/* Result Message */}
          <div className="text-center text-gray-700 mt-4">{resultMessage}</div>
        </form>
      </div>
   </div>
   </>
  )
}

export default Mail