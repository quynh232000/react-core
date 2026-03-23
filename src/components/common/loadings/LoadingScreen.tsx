// import logo from "../../assets/logo/logo-no-text.png"
const logo = "../../assets/logo/logo-no-text.png"
export const LoadingScreen = () => (
  <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-slate-50/60 backdrop-blur-md">
    <div className="relative">
      {/* Vòng tròn kép xoay ngược chiều nhau tạo cảm giác cao cấp */}
      <div className="h-24 w-24 rounded-full border-[3px] border-slate-200 border-t-primary-600 animate-spin"></div>
      <div className="absolute inset-0 h-24 w-24 rounded-full border-[3px] border-transparent border-b-primary-400/50 animate-[spin_1.5s_linear_infinite_reverse]"></div>

      {/* Vùng chứa Logo */}
      <div className="absolute opacity-75 inset-0 flex items-center justify-center">
        <div className="group relative flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg transition-transform duration-300 group-hover:scale-110">
          {/* Hiệu ứng sóng lan tỏa từ tâm logo */}
          {/* <div className="absolute h-full w-full animate-ping rounded-full bg-primary-400 opacity-20"></div> */}
          
          {/* Logo của bạn */}
          <div className="p-6"><img 
            src={logo} 
            className="relative z-10 w-full h-full object-contain" 
            alt="Loading..."
          /></div>
        </div>
      </div>
    </div>

    {/* Phần chữ tối giản */}
    <div className="mt-8 text-center">
      <h3 className="text-sm    text-slate-500">
        Đang tải
      </h3>
      {/* Thanh progress bar giả chạy lặp lại bên dưới chữ */}
      <div className="mt-3 h-[2px] w-32 overflow-hidden rounded-full bg-slate-200">
        <div className="h-full w-full origin-left animate-[loading_1.5s_ease-in-out_infinite] bg-primary-600"></div>
      </div>
    </div>

    {/* Custom Animation cho thanh ngang (Thêm vào tailwind.config.js hoặc dùng style tag) */}
    <style dangerouslySetInnerHTML={{ __html: `
      @keyframes loading {
        0% { transform: scaleX(0); transform-origin: left; }
        45% { transform: scaleX(1); transform-origin: left; }
        50% { transform: scaleX(1); transform-origin: right; }
        100% { transform: scaleX(0); transform-origin: right; }
      }
    `}} />
  </div>
);