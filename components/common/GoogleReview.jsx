"use client"
export default function GoogleReviews() {
  return (
    <div className="w-full h-[400px]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2799092951!2d-74.25986716844446!3d40.69767006408817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xadc9c69f0b472d3b!2sGoogle!5e0!3m2!1sen!2sus!4v1694700134678!5m2!1sen!2sus"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
