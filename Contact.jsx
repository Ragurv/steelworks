export default function Contact() {
  return (
    <section className="py-16 grid md:grid-cols-2 gap-8">
      <div>
        <h2 className="text-3xl font-bold">Get in Touch</h2>
        <p className="mt-4 text-slate-600">
          📧 raguecebec@gmail.com <br />
          📞 +91 7022888907 <br />
          📍 Oppathavadi, Tamil Nadu
        </p>
      </div>

      <iframe
        title="Steelworks Location"
        src="https://www.google.com/maps?q=Oppathavadi,Tamil%20Nadu&output=embed"
        className="w-full h-64 rounded-xl border"
        loading="lazy"
      />
    </section>
  );
}
