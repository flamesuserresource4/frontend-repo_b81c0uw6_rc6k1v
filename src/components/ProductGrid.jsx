const products = [
  { id: 1, title: "عسل ارگانیک کوهستان", price: 320000, image: "https://images.unsplash.com/photo-1498842812179-c81beecf902c?q=80&w=1400&auto=format&fit=crop", badge: "پرفروش" },
  { id: 2, title: "روغن زیتون بکر", price: 210000, image: "https://images.unsplash.com/photo-1661689220633-51a57735f733?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHwlRDglQjklRDglQjMlRDklODQlMjAlRDglQTclRDglQjElREElQUYlRDglQTclRDklODYlREIlOEMlREElQTklMjAlREElQTklRDklODglRDklODclRDglQjMlRDglQUElRDglQTclRDklODZ8ZW58MHwwfHx8MTc2MjQ0OTMxNXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80", badge: "ویژه" },
  { id: 3, title: "چای سبز ممتاز", price: 145000, image: "https://images.unsplash.com/photo-1661689220633-51a57735f733?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHwlRDglQjklRDglQjMlRDklODQlMjAlRDglQTclRDglQjElREElQUYlRDglQTclRDklODYlREIlOEMlREElQTklMjAlREElQTklRDklODglRDklODclRDglQjMlRDglQUElRDglQTclRDklODZ8ZW58MHwwfHx8MTc2MjQ0OTMxNXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" },
  { id: 4, title: "شامپو گیاهی", price: 175000, image: "https://images.unsplash.com/photo-1661689220633-51a57735f733?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHwlRDglQjklRDglQjMlRDklODQlMjAlRDglQTclRDglQjElREElQUYlRDglQTclRDklODYlREIlOEMlREElQTklMjAlREElQTklRDklODglRDklODclRDglQjMlRDglQUElRDglQTclRDklODZ8ZW58MHwwfHx8MTc2MjQ0OTMxNXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" },
  { id: 5, title: "بیسکویت سبوس‌دار", price: 68000, image: "https://images.unsplash.com/photo-1661689220633-51a57735f733?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHwlRDglQjklRDglQjMlRDklODQlMjAlRDglQTclRDglQjElREElQUYlRDglQTclRDklODYlREIlOEMlREElQTklMjAlREElQTklRDklODglRDklODclRDglQjMlRDglQUElRDglQTclRDklODZ8ZW58MHwwfHx8MTc2MjQ0OTMxNXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" },
  { id: 6, title: "اسپری خوشبوکننده محیط", price: 98000, image: "https://images.unsplash.com/photo-1661689220633-51a57735f733?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHwlRDglQjklRDglQjMlRDklODQlMjAlRDglQTclRDglQjElREElQUYlRDglQTclRDklODYlREIlOEMlREElQTklMjAlREElQTklRDklODglRDklODclRDglQjMlRDglQUElRDglQTclRDklODZ8ZW58MHwwfHx8MTc2MjQ0OTMxNXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" },
];

function toRials(n) {
  return n.toLocaleString("fa-IR");
}

export default function ProductGrid() {
  return (
    <section id="products" className="py-10 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-emerald-900">محصولات پیشنهاد ویژه</h2>
          <a href="#" className="text-emerald-700 hover:text-emerald-800 text-sm font-medium">مشاهده همه</a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {products.map((p) => (
            <div key={p.id} className="group bg-white rounded-2xl border border-emerald-100 overflow-hidden shadow-sm hover:shadow-md transition">
              <div className="relative">
                <img src={p.image} alt={p.title} className="h-44 w-full object-cover" loading="lazy" />
                {p.badge && (
                  <span className="absolute top-2 left-2 bg-emerald-600 text-white text-xs font-medium px-2.5 py-1 rounded-full">{p.badge}</span>
                )}
              </div>
              <div className="p-3 sm:p-4 text-right">
                <h3 className="font-semibold text-emerald-900 line-clamp-2 h-12">{p.title}</h3>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-emerald-700 font-bold">{toRials(p.price)} تومان</span>
                  <button className="px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100 text-sm border border-emerald-200">افزودن</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
