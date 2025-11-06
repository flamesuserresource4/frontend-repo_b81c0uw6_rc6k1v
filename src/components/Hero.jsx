export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-50 via-white to-white pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-right">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-700 border border-emerald-200">حراج ویژه پاییز</span>
            <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-emerald-900">
              خریدی سبز، تجربه‌ای متفاوت
            </h1>
            <p className="mt-3 text-emerald-700/80 text-sm sm:text-base leading-relaxed">
              بهترین محصولات ارگانیک، سلامت و لوازم خانه با ارسال سریع در سراسر ایران. همین حالا خرید کنید و از تخفیف‌های ویژه بهره‌مند شوید.
            </p>
            <div className="mt-6 flex justify-end gap-3">
              <a href="#products" className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-emerald-600 text-white hover:bg-emerald-700 transition font-medium shadow-sm">
                مشاهده محصولات
              </a>
              <a href="#categories" className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition font-medium border border-emerald-200">
                دسته‌بندی‌ها
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-emerald-100 via-emerald-50 to-white border border-emerald-100 shadow-inner overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1604881991720-f91add269bed?q=80&w=1600&auto=format&fit=crop"
                alt="محصولات طبیعی"
                className="w-full h-full object-cover mix-blend-multiply"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
