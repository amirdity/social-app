import haraj from "/haraj.webp";
import logo from "/digikala-logo-asli.svg";
import MegaMenu from "../components/header/MegaMenu";
import Pages from "../page/Pages";
function Header() {
  return (
    <header className="w-full flex flex-col">
      {/*-------------- BANER ----------------------*/}
      <a href="/">
        <picture>
          <img
            src={haraj}
            alt="حراج سر ماه"
            className=" h-[60px] w-full object-cover"
          />
        </picture>
      </a>
      {/* ------------------MAIN HEADER------------------ */}
      <div className="flex w-full mx-auto justify-between md:px-4 grow container flex-row h-[68px] max-w-[1644px] ">
        <div className="flex flex-row my-auto gap-x-10 ">
          <img
            src={logo}
            alt="لوگواصلی دیجی کالا"
            className="h-[30px] my-auto"
          />
          <div className="w-[600px] bg-[#f0f0f1] rounded-lg">
            <input
              type="search"
              className="bg-[#f0f0f1] rounded-lg h-[44px]"
              placeholder="جستجو"
            />
          </div>
        </div>
        <div className="flex flex-row my-auto h-[45px] gap-x-5">
          <button className="border flex flex-row w-[136px] h-[40px] items-center rounded-lg justify-center gap-x-2 py-[4px] px-[8px]">
            <img src="/login-icon.svg" />{" "}
            <p className=" text-[12px] font-[700]"> ورود | ثبت نام</p>
          </button>
          <span className="h-[20px] w-[1px] border-gray border border-solid my-auto" />

          <a href="/" className="my-auto">
            <img src="/cart-icon.svg" alt="سبد خرید" />
          </a>
        </div>
      </div>
      {/* ---------------------NAVBAR------------------------- */}
      <nav className=" flex flex-row my-auto justify-between md:px-4 grow container mx-auto">
        <div className="flex flex-row h-[40px] gap-x-5">
          <MegaMenu />
          <Pages
            src="/shegeftAngiz.svg"
            alt="شگفت‌انگیزها"
            link="/incredible-offers"
          >
            شگفت‌انگیزها
          </Pages>
          <Pages src="/super-market-icon.svg" alt="سوپرمارکت" link="/fresh">
            سوپرمارکت
          </Pages>
          <Pages
            src="/giftCart-icon.svg"
            alt="کارت هدیه"
            link="/dk-ds-gift-card"
          >
            کارت هدیه
          </Pages>
          <Pages
            src="/bestSeleres-icon.svg"
            alt="پرفروش‌ترین‌ها"
            link="/best-selling"
          >
            پرفروش‌ترین‌ها
          </Pages>
          <Pages
            src="/off-icon.svg"
            alt="تخفیف‌ها و پیشنهادها"
            link="/promotion-center"
          >
            تخفیف‌ها و پیشنهادها
          </Pages>
          <Pages src="" alt="" link="/faq">
            سوالی دارید؟
          </Pages>
          <span className="h-[20px] w-[1px] border-gray border border-solid my-auto" />
          <Pages src="" alt="" link="/seller-introduction">
            در دیجی‌کالا بفروشید!
          </Pages>
        </div>
        <div className="flex flex-row w-[173px] items-center gap-x-2">
          <img src="/location-icon.svg" alt="لوکیشن" className="w-[20px] h-[20px]" />
          لطفا شهر خود را انتخاب کنید
        </div>
      </nav>
    </header>
  );
}

export default Header;
