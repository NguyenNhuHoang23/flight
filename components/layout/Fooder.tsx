import { useGetData } from "@/context/GetContext";
import { PhoneCall, Mail, MapPin, ShieldCheck, CreditCard, Clock } from "lucide-react";

export default function Fooder() {
    const { info, isLoading, error: loadError, refetchInfo } = useGetData();

    return (
           <footer className="bg-[#1e293b] text-slate-300 pt-10 pb-6 mt-12 border-t border-slate-700">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* Cột 1: Thông tin công ty / Thương hiệu */}
          <div className="space-y-3">
            <h3 className="text-white text-base font-bold uppercase tracking-wider">
              Vé Máy Bay Giá Rẻ
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Hệ thống đặt vé máy bay trực tuyến uy tín, nhanh chóng hàng đầu. Cam kết hỗ trợ tư vấn và xuất vé 24/7 với mức giá tốt nhất thị trường.
            </p>
            <div className="pt-2 space-y-2 text-xs">
              <div className="flex items-center gap-2 text-slate-300">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{info?.address}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <PhoneCall className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Hotline: {info?.hotline}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{info?.fanpage}</span>
              </div>
            </div>
          </div>

          {/* Cột 2: Hỗ trợ khách hàng */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold text-sm uppercase border-b border-slate-700 pb-2">
              Hỗ trợ khách hàng
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Hướng dẫn đặt vé trực tuyến
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Hướng dẫn thanh toán & Upload bill
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Quy định giấy tờ tùy thân
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Điều kiện hoàn / đổi vé
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Câu hỏi thường gặp (FAQ)
                </a>
              </li>
            </ul>
          </div>

          {/* Cột 3: Chính sách & Điều khoản */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold text-sm uppercase border-b border-slate-700 pb-2">
              Chính sách & Điều khoản
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Chính sách bảo mật thông tin
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Điều khoản sử dụng dịch vụ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Quy định xuất hóa đơn VAT
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Chính sách giải quyết tranh chấp
                </a>
              </li>
            </ul>
          </div>

          {/* Cột 4: Phương thức thanh toán & Thời gian làm việc */}
          <div className="space-y-4">
            <div className="space-y-2">
              <h4 className="text-white font-semibold text-sm uppercase border-b border-slate-700 pb-2">
                Thời gian phục vụ
              </h4>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Thứ 2 - Chủ Nhật: 07:00 - 23:00</span>
              </div>
              <p className="text-[11px] text-slate-400 italic">
                (Bao gồm cả ngày lễ, Tết)
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="text-white font-semibold text-sm uppercase border-b border-slate-700 pb-2">
                Chấp nhận thanh toán
              </h4>
              <div className="flex items-center gap-2 text-slate-400 text-xs">
                <CreditCard className="w-4 h-4 text-emerald-400" />
                <span>Chuyển khoản QR, Chuyển khoản ngân hàng 24/7</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Line (Copyright) */}
        <div className="border-t border-slate-800 pt-6 mt-6 text-center text-xs text-slate-500">
          <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
            <p>© {new Date().getFullYear()} Flight Booking System. All rights reserved.</p>
            <p className="flex items-center gap-1">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              Giao dịch an toàn & Bảo mật thông tin
            </p>
          </div>
        </div>
      </footer>
    )
}