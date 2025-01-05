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
import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  // Use ref to clear the form after submission
  const form = useRef();

  // State to store form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_xphpdkj',  
        'template_hhek4pq',  
        form.current,       
        'ZX9_CrT55cv-TgOnA'  
      )
      .then(
        (response) => {
          console.log('Message sent successfully', response);
          alert('Message sent successfully!');
          // Clear the form after successful submission
          setFormData({ name: '', email: '', message: '' });
        },
        (error) => {
          console.error('Error sending message', error);
          alert('Failed to send message. Please try again.');
        }
      );
  };

  return (
    <section id="contact" className="p-10 bg-white">
      <h3 className="text-3xl font-bold text-center mb-6">Contact Me</h3>
      <form ref={form} onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 gap-4 max-w-md mx-auto">
        {/* Name input */}
        <input
          type="text"
          name="from_name"  // This should match {{from_name}} in your template
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="input input-bordered w-full"
        />
        
        {/* Email input */}
        <input
          type="email"
          name="reply_to"  // This should match {{to_name}} in your template (if necessary)
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          className="input input-bordered w-full"
        />
        
        {/* Message textarea */}
        <textarea
          name="message"  // This should match {{message}} in your template
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          className="textarea textarea-bordered w-full"
          rows="4"
        ></textarea>
        
        {/* Submit button */}
        <button type="submit" className="btn btn-primary w-full">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
