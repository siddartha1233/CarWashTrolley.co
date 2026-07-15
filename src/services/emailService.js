import emailjs from "@emailjs/browser";

export const sendInquiry = async (data) => {
  return emailjs.send(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    {
      name: data.name,
      email: data.email,
      phone: data.phone,
      company: data.company,
      message: data.message,
    },
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  );
};