const Hom = () => {
  return (
  

       <div className="text-center">
          <div className="text-3xl font-bold mt-[130px] text-center">
      <h2 className="text-3xl md:text-[2.5rem] mb-5 animate-fadeUp text-white text-center">
        Kompyuter klubingizni oson boshqaring
      </h2>
      <span className="animate-fadeUp text-center text-white text-[1.2rem] opacity-90">
  Zamonaviy yechim bilan biznesingizni avtomatlashtiring
</span>
     


    </div>
    <button className="mb-[60px] mt-[40px] relative overflow-hidden px-5 py-2 rounded-md border-none cursor-pointer font-medium text-[#1565c0] bg-white transition-all duration-300 ease-in-out transform hover:-translate-y-0.5 shadow-md hover:shadow-lg animate-slideUp opacity-1">
  Boshlash
</button>
<div className="mt-[60px]">
  
<section class="features">
  <div class="container mx-auto">
    <div class="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-[30px] cursor-pointer">
      <div class="feature-card bg-white/10 backdrop-blur-[10px] p-[30px] rounded-[15px] text-center transition-all duration-300 ease-in-out hover:-translate-y-[10px]">
        <i class="text-white material-icons text-[3rem] mb-5 transition-transform">computer</i>
        <h3 class="text-white text-[1.5rem] font-semibold mb-4">Kompyuterlar monitoringi</h3>
        <p class="text-white opacity-80 leading-6">Barcha kompyuterlar holatini real vaqtda kuzating</p>
      </div>

      <div class="feature-card bg-white/10 backdrop-blur-[10px] p-[30px] rounded-[15px] text-center transition-all duration-300 ease-in-out hover:-translate-y-[10px]">
        <i class="text-white material-icons text-[3rem] mb-5 transition-transform">schedule</i>
        <h3 class="text-white text-[1.5rem] font-semibold mb-4">Band qilish tizimi</h3>
        <p class="text-white opacity-80 leading-6">Onlayn band qilish va navbat boshqaruvi</p>
      </div>

      <div class="feature-card bg-white/10 backdrop-blur-[10px] p-[30px] rounded-[15px] text-center transition-all duration-300 ease-in-out hover:-translate-y-[10px]">
        <i class="text-white material-icons text-[3rem] mb-5 transition-transform">payments</i>
        <h3 class="text-white text-[1.5rem] font-semibold mb-4">To'lov tizimi</h3>
        <p class="text-white opacity-80 leading-6">To'lovlarni avtomatik hisoblash va nazorat qilish Payme Click Uzumbank</p>
      </div>
    </div>
  </div>
</section>
</div>


<div>
<section className="animate-fadeUp flex cursor-pointer flex-wrap justify-center sm:justify-around items-center my-[40px] gap-4 sm:gap-8 ">

    <div className="stat-card bg-white bg-opacity-10 p-5 rounded-lg text-center w-full sm:w-64 lg:w-80 xl:w-[360px]">
        <div className="text-4xl text-white font-bold mb-2">1000+</div>
        <div className="text-lg text-white opacity-90">Foydalanuvchilar
        </div>
    </div>

    <div className="animate-fadeUp stat-card bg-white bg-opacity-10 p-5 rounded-lg text-center w-full sm:w-64 lg:w-80 xl:w-[360px]">
        <div className="text-4xl text-white font-bold mb-2">50+</div>
        <div className="text-lg text-white opacity-90">Kompyuter klublar
        </div>
    </div>

    <div className="animate-fadeUp stat-card bg-white bg-opacity-10 p-5 rounded-lg text-center w-full sm:w-64 lg:w-80 xl:w-[360px]">
        <div className="text-4xl text-white font-bold mb-2">24/7</div>
        <div className="text-white text-[1.1rem] opacity-90">Qo'llab-quvvatlash
        </div>
    </div>

</section>




</div>
       </div>
  );
};
export default Hom;
