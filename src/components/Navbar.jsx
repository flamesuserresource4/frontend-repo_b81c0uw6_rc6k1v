import { ShoppingCart, User, Search } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-emerald-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-emerald-600 flex items-center justify-center text-white font-bold">ف</div>
            <span className="text-lg sm:text-xl font-extrabold text-emerald-700 tracking-tight">فروشگاه سبز</span>
          </div>

          {/* Search */}
          <div className="hidden md:flex items-center flex-1 max-w-xl mx-6">
            <div className="relative w-full">
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-emerald-500" />
              <input
                dir="rtl"
                type="text"
                placeholder="جستجوی محصول، برند یا دسته‌بندی..."
                className="w-full rounded-xl border border-emerald-200/70 py-2.5 pr-10 pl-4 text-sm placeholder-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-400"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200 transition">
              <ShoppingCart className="h-5 w-5" />
              <span className="hidden sm:inline text-sm font-medium">سبد خرید</span>
            </button>
            <button className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 transition">
              <User className="h-5 w-5" />
              <span className="hidden sm:inline text-sm font-medium">حساب کاربری</span>
            </button>
          </div>
        </div>

        {/* Mobile search */}
        <div className="md:hidden pb-3">
          <div className="relative">
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-emerald-500" />
            <input
              dir="rtl"
              type="text"
              placeholder="جستجو..."
              className="w-full rounded-xl border border-emerald-200/70 py-2.5 pr-10 pl-4 text-sm placeholder-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-400"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
