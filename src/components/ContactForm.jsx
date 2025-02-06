// import React from 'react';

// const ContactForm = () => (
  

//   <section id="contact" className="p-10 bg-white">
//     <h3 className="text-3xl font-bold text-center mb-6">Contact Me</h3>
//     <form className="mt-6 grid grid-cols-1 gap-4 max-w-md mx-auto">
//       <input
//         type="text"
//         placeholder="Your Name"
//         className="input input-bordered w-full"
//       />
//       <input
//         type="email"
//         placeholder="Your Email"
//         className="input input-bordered w-full"
//       />
//       <textarea
//         placeholder="Your Message"
//         className="textarea textarea-bordered w-full"
//         rows="4"
//       ></textarea>
//       <button type="submit" className="btn btn-primary w-full">
//         Send Message
//       </button>
//     </form>
//   </section>
// );

// export default ContactForm;

import React, { useState } from 'react';
import Swal from 'sweetalert2';

const ContactForm = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "6c4776c9-9b91-4329-8249-cc8e60ca5280");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully!",
        icon: "success"
      });
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <section id="contact" className="p-10 bg-white">
      <h3 className="text-4xl font-extrabold text-center mb-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text animate-pulse">Contact Me</h3>
      <form 
        className="mt-6 grid grid-cols-1 gap-4 max-w-md mx-auto" 
        onSubmit={onSubmit}
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="input input-bordered w-full"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="input input-bordered w-full"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          className="textarea textarea-bordered w-full"
          rows="4"
          required
        ></textarea>
        <button type="submit" className="btn btn-primary w-full">
          Send Message
        </button>
      </form>
      {result && <p className="mt-4 text-center">{result}</p>}
    </section>
  );
};

export default ContactForm;

