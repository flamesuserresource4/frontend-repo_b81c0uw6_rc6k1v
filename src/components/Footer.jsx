export default function Footer() {
  return (
    <footer className="mt-12 border-t border-emerald-100 bg-gradient-to-b from-white to-emerald-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid md:grid-cols-4 gap-8 text-right">
          <div className="md:col-span-2">
            <h3 className="text-lg font-bold text-emerald-900">فروشگاه سبز</h3>
            <p className="mt-2 text-sm text-emerald-700/80 leading-7">
              با ما خریدی مطمئن و سالم را تجربه کنید. ارسال سریع به تمام نقاط ایران و ضمانت بازگشت کالا.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-emerald-900">خدمات مشتریان</h4>
            <ul className="mt-3 space-y-2 text-sm text-emerald-700/90">
              <li><a href="#" className="hover:text-emerald-900">سوالات متداول</a></li>
              <li><a href="#" className="hover:text-emerald-900">پیگیری سفارش</a></li>
              <li><a href="#" className="hover:text-emerald-900">شرایط بازگشت</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-emerald-900">ارتباط با ما</h4>
            <ul className="mt-3 space-y-2 text-sm text-emerald-700/90">
              <li>تلفن: ۰۲۱-۱۲۳۴۵۶۷۸</li>
              <li>ایمیل: support@greenstore.ir</li>
              <li>آدرس: تهران، خیابان ولیعصر</li>
            </ul>
          </div>
        </div>
        <div className="pt-6 mt-8 border-t border-emerald-100 text-center text-sm text-emerald-700/80">
          © {new Date().getFullYear()} تمامی حقوق محفوظ است.
        </div>
      </div>
    </footer>
  );
}
