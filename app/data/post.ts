export interface BlogPost {
  id: string;
  title: string;
  description: string;
  content: string;
  category: string;
  publishedAt: string;
  readTime: string;
  coverImage: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    title: "10 Tuyệt Chiêu Săn Vé Máy Bay Giá Rẻ 0 Đồng Mùa Du Lịch 2026",
    description: "Bật mí khung giờ vàng thả vé, mẹo xóa cookie trình duyệt và cách đặt vé nhóm không bị đẩy giá cao từ các chuyên gia săn vé.",
    category: "Mẹo Săn Vé",
    publishedAt: "06 Tháng 8, 2026",
    readTime: "5 phút đọc",
    coverImage: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1200&auto=format&fit=crop",
    content: `
Đặt vé máy bay giá rẻ không chỉ dựa vào may mắn mà đòi hỏi bạn phải nắm rõ quy luật phát hành vé của các hãng hàng không. Dưới đây là những bí quyết giúp bạn tối ưu chi phí cho chuyến đi.

## 1. Chọn Khung Giờ Đặt Vé "Vàng"

Các hãng hàng không giá rẻ thường tung ra các đợt khuyến mãi vào khung giờ đêm muộn hoặc sáng sớm (từ 0h00 - 2h00). Việc chuẩn bị sẵn thông tin cá nhân và thẻ thanh toán sẽ giúp bạn thao tác nhanh hơn.

## 2. Bật Chế Độ Ẩn Danh Khi Tìm Vé

Hệ thống của các hãng và đại lý có thể tự động tăng giá nhẹ nếu nhận thấy bạn tìm kiếm một chặng bay nhiều lần. 

* **Mẹo:** Hãy sử dụng tab ẩn danh (Incognito) hoặc xóa Cookie/Cache trình duyệt trước khi chốt đặt vé.
* **So sánh giá:** Đừng quên kiểm tra giá vé trên nhiều đại lý khác nhau trước khi quyết định.

\`\`\`text
Mẹo nhỏ: Đặt vé vào Thứ Ba hoặc Thứ Tư thường có giá mềm hơn đáng kể so với các ngày cuối tuần!
\`\`\`

## 3. Quy Tắc Đặt Vé Cho Nhóm Đông

Khi đi nhóm từ 4-6 người, hệ thống sẽ tự động tìm kiếm các hạng ghế cùng mức giá cho cả nhóm. Nếu chỉ còn 2 ghế giá rẻ, hệ thống sẽ đẩy toàn bộ vé của nhóm lên hạng giá cao hơn.

**Giải pháp:** Hãy chia nhỏ nhóm ra đặt từng lượt 1-2 vé để lấy hết các suất giá rẻ nhất trước!
    `
  },
  {
    id: "2",
    title: "Cẩm Nang Hành Lý Hàng Không: Những Vật Dụng Bị Cấm Vẫn Nhiều Người Mắc Phải",
    description: "Phân biệt rõ ràng quy định về pin dự phòng, chất lỏng và các mặt hàng hạn chế mang lên khoang cabin để không bị giữ lại tại cổng an ninh.",
    category: "Quy Định Bay",
    publishedAt: "02 Tháng 8, 2026",
    readTime: "6 phút đọc",
    coverImage: "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=1200&auto=format&fit=crop",
    content: `
An ninh hàng không ngày càng được kiểm soát chặt chẽ. Việc nắm rõ danh mục hàng hóa cấm sẽ giúp bạn tiết kiệm thời gian làm thủ tục và tránh những sự cố dở khóc dở cười tại sân bay.

## 1. Sạc Dự Phòng (Powerbank) – Bắt Buộc Ký Gửi Hay Xách Tay?

* **Chỉ mang xách tay:** Tất cả pin sạc dự phòng tuyệt đối **KHÔNG** được để trong hành lý ký gửi do nguy cơ cháy nổ cao trong khoang hàng.
* **Dung lượng cho phép:** Dưới 20.000mAh (hoặc dưới 100Wh) được mang tự do. Từ 100Wh - 160Wh cần sự chấp thuận của hãng.

## 2. Quy Định Chất Lỏng Trên Các Chặng Bay Quốc Tế

Đối với các chuyến bay quốc tế, mỗi hành khách chỉ được mang không quá 1.000ml chất lỏng và phải chia nhỏ vào các chai/lọ có dung tích **không quá 100ml** mỗi chai. Tất cả phải đựng trong túi nhựa trong suốt có khóa zip.

Chủ động chuẩn bị hành lý chuẩn quy định sẽ mang lại cho bạn một chuyến bay suôn sẻ và trọn vẹn!
    `
  }
];