export default function Contact() {
  return (
    <div className="p-10 space-y-6">
      <h1 className="text-4xl font-bold">Contact Steelworks</h1>

      <p className="text-gray-600">
        📧 raguecebec@gmail.com <br />
        📞 +91 7022888907 <br />
        📍 Oppathavadi, Tamil Nadu
      </p>

      <a
        href="https://wa.me/917022888907"
        className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg"
        target="_blank"
      >
        Chat on WhatsApp
      </a>
    </div>
  );
}
