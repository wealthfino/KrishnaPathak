"use client";

import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
import { MailCheck, Zap, DownloadCloud } from "lucide-react";
import { BackgroundGradient } from "../../../components/ui/background-gradient";

// ✅ Phone number validation
const validatePhoneNumber = (phone: string) => {
  const regex = /^\d{10,15}$/;
  return regex.test(phone);
};

export default function ResourceDownloadPage() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // Allow only numbers for phone field
    if (name === "phone") {
      const onlyNums = value.replace(/\D/g, "");
      if (onlyNums.length <= 10) {
        setFormData((prev) => ({ ...prev, [name]: onlyNums }));
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // ✅ Validate phone number
    if (!validatePhoneNumber(formData.phone)) {
      toast.error("Please enter a valid phone number (10-15 digits).");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/submit-resources-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const { error } = await response.json();
        toast.error(error || "Submission failed.");
        setIsSubmitting(false);
        return;
      }

      toast.success("Download link sent to your email!");
      setIsSubmitted(true);
    } catch (err) {
      console.error("Submission failed", err);
      toast.error("Something went wrong!");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-[800px] bg-blue-50 flex flex-col items-center justify-center py-20 px-4">
      <ToastContainer position="bottom-right" autoClose={3000} />

      {/* Header Section */}
      <motion.div
        className="relative z-10 text-center mb-14 px-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        viewport={{ once: false }}
      >
        <div className="inline-flex flex-col justify-center text-center mb-12">
          <div className="w-24 h-1 bg-[#1f2b5e] rounded-full mb-2" />
          <h2 className="text-4xl md:text-5xl text-[#1f2b5e] font-extrabold pb-3">
            <span className="animate-gradient bg-gradient-to-r from-[#1f2b5e] via-[#13B5E8] to-[#7ac678] bg-clip-text text-transparent px-1">
              Get Instant Access
            </span>{" "}
            to Study Kit
          </h2>
          <div className="w-24 h-1 bg-[#7ac678] rounded-full mt-2 ml-auto" />
        </div>

        <p className="text-base font-medium md:text-lg text-[#1f2b5e] max-w-2xl mx-auto">
          Get access to all the stock market study materials, trading
          strategies, analysis tools, and practice resources — absolutely free!
        </p>
      </motion.div>

      {/* Thank You or Form */}
      {isSubmitted ? (
        <motion.div
          className="bg-[#18181b] text-white p-10 rounded-xl shadow-xl text-center max-w-xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">🎊 Thank You! 🎊</h2>
          <p className="text-lg">
            Your free stock market study kit has been emailed to you. Check your inbox!
          </p>
        </motion.div>
      ) : (
        <motion.div
          className="bg-[#18181b] rounded-2xl shadow-2xl w-full max-w-6xl overflow-hidden grid grid-cols-1 md:grid-cols-[40%_60%]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          viewport={{ once: false }}
        >
          {/* Left Panel */}
          <div className="bg-gradient-to-br from-blue-400 via-blue-200 to-[#7ac678] rounded-lg m-2 p-8 text-[#18181b]">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Unlock Your Free Stock Market Study Kit!
            </h2>
            <p className="mb-8">
              This free learning bundle includes curated eBooks, educational
              content, and market insights to support your journey of learning
              and discipline in the market.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <DownloadCloud className="w-5 h-5 shrink-0" />
                <span>Includes - Study materials on trading concepts and market learning.</span>
              </div>
              <div className="flex items-center gap-4">
                <MailCheck className="w-5 h-5 shrink-0" />
                <span>Sent directly to your email</span>
              </div>
              <div className="flex items-center gap-4">
                <Zap className="w-5 h-5 shrink-0" />
                <span>Instant access - no waiting</span>
              </div>
            </div>
          </div>

          {/* Right Panel (Form) */}
          <div className="flex flex-col justify-center p-8 bg-gradient-to-br from-[#18181b] to-white/20 text-blue-50">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">
              Fill in Your Details
            </h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <input
                  type="text"
                  name="first_name"
                  value={formData.first_name}
                  onChange={handleChange}
                  placeholder="First Name"
                  className="w-full px-4 py-2 border-b text-blue-50 focus:outline-none border-blue-50"
                  required
                />
                <input
                  type="text"
                  name="last_name"
                  value={formData.last_name}
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
                <div className="flex flex-col">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="w-full px-4 py-2 border-b text-blue-50 focus:outline-none border-blue-50"
                    required
                    inputMode="numeric"
                    pattern="\d{10,15}"
                  />
                  {formData.phone &&
                    !validatePhoneNumber(formData.phone) && (
                      <p className="text-red-400 text-sm mt-1">
                        Phone number must be 10 digits.
                      </p>
                    )}
                </div>
              </div>

              <button
                className="w-full mt-6"
                type="submit"
                disabled={isSubmitting}
              >
                <BackgroundGradient
                  className="rounded-full flex justify-center items-center text-white px-6 py-2 bg-[#18181b] cursor-pointer"
                  innerContainer1ClassName="rounded-full"
                  innerContainer2ClassName="rounded-full"
                >
                  <span className="text-base md:text-lg font-medium">
                    {isSubmitting ? "Getting Study Kit..." : "Get Study Kit"}
                  </span>
                </BackgroundGradient>
              </button>
            </form>
          </div>
        </motion.div>
      )}
    </div>
  );
}
