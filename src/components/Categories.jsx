const categories = [
  { id: 1, name: "مواد غذایی ارگانیک", image: "https://images.unsplash.com/photo-1506806732259-39c2d0268443?q=80&w=1200&auto=format&fit=crop" },
  { id: 2, name: "آرایش و بهداشت", image: "https://images.unsplash.com/photo-1597362925123-77861d3fbac7?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHwlRDklODUlRDklODglRDglQTclRDglQUYlMjAlRDglQkElRDglQjAlRDglQTclREIlOEMlREIlOEMlMjAlRDglQTclRDglQjElREElQUYlRDglQTclRDklODYlREIlOEMlREElQTl8ZW58MHwwfHx8MTc2MjQ0OTMxNHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" },
  { id: 3, name: "خانه و آشپزخانه", image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=1200&auto=format&fit=crop" },
  { id: 4, name: "سلامت و ورزشی", image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop" },
];

export default function Categories() {
  return (
    <section id="categories" className="py-10 sm:py-14 bg-gradient-to-b from-white to-emerald-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-emerald-900">دسته‌بندی‌های محبوب</h2>
          <a href="#" className="text-emerald-700 hover:text-emerald-800 text-sm font-medium">مشاهده همه</a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((cat) => (
            <a key={cat.id} href="#" className="group relative overflow-hidden rounded-2xl border border-emerald-100 bg-white shadow-sm">
              <img src={cat.image} alt={cat.name} className="h-36 w-full object-cover transition-transform duration-300 group-hover:scale-105" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-90" />
              <div className="absolute bottom-2 right-2">
                <span className="inline-block bg-white/90 text-emerald-800 text-xs font-medium px-3 py-1 rounded-lg shadow">{cat.name}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
