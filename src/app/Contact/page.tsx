"use client";

import { supabase } from "../../../lib/supabaseClient";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { BackgroundGradient } from "../../../components/ui/background-gradient";
import { useState } from "react";

const ContactPage = () => {
  const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!isValidEmail(formData.email)) {
      toast.error("Please enter a valid email address!");
      setIsSubmitting(false);
      return;
    }

    const { error } = await supabase.from("contact_messages").insert({
      first_name: formData.firstName,
      last_name: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message,
    });

    if (error) {
      console.error("Error submitting form:", error.message);
      toast.error("Something went wrong!");
      setIsSubmitting(false);
      return;
    }

    // Send admin notification email
    try {
      await fetch("/api/send-admin-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
        }),
      });
    } catch (err) {
      console.error("Failed to send email to admin:", err);
    }

    toast.success("Message sent successfully!");
    setIsSubmitting(false);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col items-center justify-center pt-40 pb-20 px-4 md:px-10">
      <ToastContainer position="bottom-right" autoClose={3000} />
      <motion.div
        className="relative z-10 text-center mb-14 px-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        viewport={{ once: false }}
      >
        <div className="inline-flex flex-col justify-center text-center mb-12">
          {/* Top Left Decorative Line */}
          <div className="w-24 h-1 bg-[#1f2b5e] rounded-full mb-2" />

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl text-[#1f2b5e] font-extrabold pb-3">
            <span className="animate-gradient bg-gradient-to-r from-[#1f2b5e] via-[#13B5E8] to-[#7ac678] bg-clip-text text-transparent px-1">
              Contact
            </span>
            {"  "}Us
          </h2>

          {/* Bottom Right Decorative Line */}
          <div className="w-24 h-1 bg-[#7ac678] rounded-full mt-2 ml-auto" />
        </div>

        {/* Subheading */}
        <p className="text-base font-medium md:text-lg text-[#1f2b5e] max-w-2xl mx-auto">
          Have any questions, feedback, or need support? Don't hesitate to reach
          out. Our team is here to assist you and provide the help you
          need—anytime.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        viewport={{ once: false }}
        className="bg-[#18181b] rounded-2xl shadow-2xl w-full max-w-6xl overflow-hidden grid grid-cols-1 md:grid-cols-[40%_60%]"
      >
        {/* Left Panel */}
        <div className="bg-gradient-to-br from-blue-400 via-blue-200 to-[#7ac678] rounded-lg m-2 p-8 text-[#18181b]">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            We Would Like To Hear From You!
          </h2>
          <p className="mb-8">
            Our friendly team is ready to assist you with any questions or
            concerns you may have.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Phone className="w-5 h-5 shrink-0" />
              <span>+91 9883455700</span>
            </div>
            <div className="flex items-center gap-4">
              <FaWhatsapp className="w-5 h-5 shrink-0" />
              <span>WhatsApp Support - 9353523685</span>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="w-5 h-5 shrink-0" />
              <span>skrishna.sk4@gmail.com</span>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="w-5 h-5 shrink-0" />
              <span>
                RS-39/43, 5/3C Golden Park, Sankarpur West, Near Rabindranagar
                Co-operative, Durgapur, West Bengal - 713206
              </span>
            </div>
          </div>
        </div>

        {/* Right Panel */}
        <div className="flex flex-col justify-center p-8 bg-gradient-to-br from-[#18181b] to-white/20 text-blue-50">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            Get In Touch
          </h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                className="w-full px-4 py-2 border-b text-blue-50 focus:outline-none border-blue-50"
                required
              />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                className="w-full px-4 py-2 border-b text-blue-50 focus:outline-none border-blue-50"
                required
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full px-4 py-2 border-b text-blue-50 focus:outline-none border-blue-50"
                required
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full px-4 py-2 border-b text-blue-50 focus:outline-none border-blue-50"
                required
              />
            </div>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              className="w-full px-4 py-2 border-b text-blue-50 focus:outline-none border-blue-50"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Leave us a message"
              rows={4}
              className="w-full min-h-[110px] px-4 py-2 border-b text-blue-50 focus:outline-none border-blue-50"
              required
            ></textarea>
            <button
              className="w-full mt-4"
              type="submit"
              disabled={isSubmitting}
            >
              <BackgroundGradient
                className="rounded-full flex justify-center items-center text-white px-6 py-2 bg-[#18181b] cursor-pointer"
                innerContainer1ClassName="rounded-full"
                innerContainer2ClassName="rounded-full"
              >
                <span className="text-base md:text-lg font-medium">
                  {isSubmitting ? "Sending Message..." : "Send Message"}
                </span>
              </BackgroundGradient>
            </button>
          </form>
        </div>
      </motion.div>

      {/* Disclaimer Section */}
      <motion.div
        className="relative z-10 mt-20 max-w-6xl text-center italic"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        viewport={{ once: false }}
      >
        <p className="text-base text-blue-50 bg-[#18181b] border-3 border-[#7ac678] shadow-2xl rounded-lg p-4">
          <span className="text-xl font-bold">Disclaimer:</span>
          <br />
          Investment in securities market is subject to market risks. Read all
          the related documents carefully before investing. Registration granted
          by SEBI and certification from NISM is no way guarantee performance of
          the intermediary or provide any assurance of returns to investors.
        </p>
      </motion.div>

      {/* Title - SEBI Address */}
      <motion.div
        className="relative z-10 text-center mt-20 px-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        viewport={{ once: false }}
      >
        <div className="inline-flex flex-col justify-center text-center">
          {/* Top Left Decorative Line */}
          <div className="w-24 h-1 bg-[#7ac678] rounded-full mb-2" />

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl text-[#1f2b5e] font-extrabold pb-3">
            SEBI{" "}
            <span className="animate-gradient bg-gradient-to-r from-[#1f2b5e] via-[#13B5E8] to-[#7ac678] bg-clip-text text-transparent px-1">
              Address
            </span>
          </h2>

          {/* Bottom Right Decorative Line */}
          <div className="w-24 h-1 bg-[#1f2b5e] rounded-full mt-2 ml-auto" />
        </div>
      </motion.div>

      {/* Office Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        viewport={{ once: false }}
        className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-14 w-full max-w-5xl cursor-pointer"
      >
        {/* ERO Office */}
        <div className="rounded-xl p-6 text-center text-[#18181b] border-3 border-[#18181b] bg-gradient-to-br from-blue-200 via-blue-200 to-blue-400 transition-all duration-300 hover:shadow-2xl">
          <h3 className="text-xl font-semibold mb-4">
            EASTERN REGIONAL OFFICE (ERO)
          </h3>
          <MapPin className="mx-auto mb-4" />
          <p>
            The Regional Director, L&amp;T Chambers, 3rd Floor,
            <br />
            16 Camac Street, Kolkata - 700017, West Bengal.
            <br />
            Tel. Board: +91-33-23023000
            <br />
            Fax: +91-33-22874307
            <br />
            E-mail: sebiero@sebi.gov.in
          </p>
        </div>

        {/* HO Office */}
        <div className="rounded-xl p-6 text-center text-[#18181b] border-3 border-[#18181b] bg-gradient-to-br from-blue-200 via-blue-200 to-blue-400 transition-all duration-300 hover:shadow-2xl">
          <h3 className="text-xl font-semibold mb-4">HEAD OFFICE (HO)</h3>
          <MapPin className="mx-auto mb-4" />
          <p>
            SEBI Bhavan BKC,
            <br />
            Plot No.C4. 'G' Block, Bandra-Kurla Complex,
            <br />
            Bandra (East), Mumbai - 400051, Maharashtra.
            <br />
            Tel: +91-22-26449000 / 40459000
            <br />
            Fax: +91-22-26449019-22 / 40459019-22
            <br />
            Toll Free Investor Helpline: 1800 22 7575
          </p>
        </div>
      </motion.div>

      {/* Title - Visit Us */}
      <motion.div
        className="relative z-10 text-center mt-20 px-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        viewport={{ once: false }}
      >
        <div className="inline-flex flex-col justify-center text-center">
          {/* Top Left Decorative Line */}
          <div className="w-24 h-1 bg-[#1f2b5e] rounded-full mb-2" />

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl text-[#1f2b5e] font-extrabold pb-3">
            <span className="animate-gradient bg-gradient-to-r from-[#1f2b5e] via-[#13B5E8] to-[#7ac678] bg-clip-text text-transparent px-1">
              Visit
            </span>{" "}
            Us
          </h2>

          {/* Bottom Right Decorative Line */}
          <div className="w-24 h-1 bg-[#7ac678] rounded-full mt-2 ml-auto" />
        </div>
      </motion.div>

      {/* Map Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        viewport={{ once: false }}
        className="w-full mt-16 max-w-6xl"
      >
        <div className="w-full h-[400px] rounded-xl overflow-hidden border-3 border-[#18181b] shadow-xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.9627158448866!2d88.34976347559812!3d22.54306937951271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277177765151b%3A0x9ebe0ea65bbbff39!2sL%20%26%20T%20Chambers!5e0!3m2!1sen!2sin!4v1750329650746!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactPage;
