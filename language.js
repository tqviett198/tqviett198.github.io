const translations = {
  "Giới thiệu": "About",
  "Kỹ năng": "Skills",
  "Dự án": "Projects",
  "Học vấn": "Education",
  "Liên hệ": "Contact",
  "Xem CV của tôi": "View CV",
  "Sẵn sàng thực tập": "Open to internships",
  "Xin chào, mình là": "Hi, I’m",
  "Xem các dự án": "Explore projects",
  "Liên hệ với mình": "Get in touch",
  "Sinh viên HUIT (2023 - Hiện tại)": "HUIT student (2023–present)",
  "TP. Hồ Chí Minh": "Ho Chi Minh City",
  "Kỹ năng chuyên môn": "Technical skills",
  "Công nghệ và công cụ mình sử dụng trong các dự án": "Technologies and tools I use in my projects",
  "Ngôn ngữ lập trình": "Programming languages",
  "Web & di động": "Web and mobile",
  "Backend & cơ sở dữ liệu": "Backend and databases",
  "Redis (cơ bản)": "Redis (basic)",
  "Docker (cơ bản)": "Docker (basic)",
  "Công cụ": "Tools",
  "Dự án nổi bật": "Selected projects",
  "Các sản phẩm thực tế được thực hiện thông qua đồ án và tự học": "Projects from coursework and independent study",
  "Full-stack · Dự án cá nhân": "Full-stack development · Personal project",
  "Dự án cá nhân đang phát triển · Có AI hỗ trợ": "Personal project in development · AI-assisted coding",
  "Dự án cá nhân · Có AI hỗ trợ": "Personal project · AI-assisted coding",
  "Đọc bài phân tích": "Read the case study",
  "Hành trình đào tạo và các môn học chuyên ngành": "Degree program and selected coursework",
  "Trường Đại học Công Thương Thành phố Hồ Chí Minh (HUIT)": "Ho Chi Minh City University of Industry and Trade (HUIT)",
  "Sinh viên ngành Công nghệ thông tin": "Information Technology student",
  "2023 - Hiện tại": "2023–present",
  "Các môn học chuyên ngành tiêu biểu:": "Selected coursework",
  "Công nghệ .NET (Winform/C#)": ".NET development (Windows Forms and C#)",
  "Cơ sở dữ liệu (SQL Server)": "Databases (SQL Server)",
  "Lập trình Web (HTML/CSS/JavaScript)": "Web development (HTML, CSS and JavaScript)",
  "Lập trình di động (Flutter)": "Mobile development (Flutter)",
  "Khóa luận đang thực hiện": "Thesis in progress",
  "So sánh các mô hình học sâu trong nhận diện bệnh trên lá ngô.": "Comparing deep learning models for maize leaf disease detection.",
  "Ngoại ngữ": "Languages",
  "Tiếng Anh: Đọc hiểu tài liệu kỹ thuật, giao tiếp cơ bản.": "English: Technical reading and basic conversation.",
  "Kết nối với mình!": "Get in touch",
  "Mình hiện đang tích cực tìm kiếm cơ hội Thực tập sinh Công nghệ phần mềm. Hãy liên hệ với mình qua các kênh dưới đây nhé!": "I’m looking for a software development internship. Contact me by email or use the form to start a conversation.",
  "Điện thoại / Zalo": "Phone / Zalo",
  "Địa chỉ": "Location",
  "Họ và Tên": "Full name",
  "Lời nhắn": "Message",
  "Gửi tin nhắn": "Compose email",
  "Tên của bạn": "Your name",
  "Chào Việt, mình muốn liên hệ về công việc...": "Hi Việt, I’d like to get in touch about…",
  "Hai đơn hàng cùng mua 50 kg sầu riêng cuối cùng": "How DurianCare handles two orders for the last 50 kg",
  "Hai người cùng thấy lô còn 50 kg. Nếu cả hai phiếu đều bán 50 kg, hệ thống có thể ghi nhận bán 100 kg dù vườn chỉ có một nửa.": "Two buyers each order the last 50 kg from the same batch. If both orders use the same starting balance, the orchard could record 100 kg in sales against just 50 kg of stock.",
  "Cách xử lý trong PostgreSQL": "How the sale is processed in PostgreSQL",
  "Mỗi phiếu bán chạy trong một transaction. Dịch vụ khóa các dòng tồn kho bằng select_for_update() theo thứ tự ID, rồi kiểm tra số kg còn lại trước khi ghi phiếu và trừ tồn.": "Each sale runs in a transaction. The service locks inventory rows in ID order with select_for_update(), checks the available weight, then records the sale and deducts the quantity.",
  "Nếu đơn A lấy khóa trước và mua hết 50 kg, đơn B phải chờ. Sau khi A hoàn tất, B đọc số dư mới là 0 kg và nhận lỗi insufficient_stock. Nếu A bị hủy giao dịch, lượng hàng vẫn còn cho B.": "If order A acquires the lock first and buys all 50 kg, order B waits. Once A commits, B reads the new balance of 0 kg and receives an insufficient_stock error. If A rolls back, the stock remains available to B.",
  "Bài kiểm thử chứng minh điều gì?": "What does the test verify?",
  "Test gọi hàm tạo phiếu hai lần liên tiếp trên cùng 50 kg và kiểm tra mã lỗi ở lần thứ hai. Nó xác nhận quy tắc khi hết tồn. Để đo hành vi chờ khóa thực tế cần hai kết nối PostgreSQL chạy đồng thời.": "The test submits two sales in sequence against the same 50 kg and checks the error on the second call. It verifies the out-of-stock rule. Observing the lock wait itself requires two concurrent PostgreSQL connections.",
  "Đoạn kiểm thử hai phiếu bán trong test_sales.py": "The two-sale test in test_sales.py",
  "Xem mã xử lý bán hàng": "View the sales service",
  "Xem bài kiểm thử": "View the test",
  "Mã nguồn DurianCare": "DurianCare source code",
  "Mã nguồn Loan Platform": "Loan Platform source code",
  "Mã nguồn Deepfake Detector": "Deepfake Detector source code",
  "Mình là sinh viên năm cuối ngành Công nghệ thông tin tại HUIT, đang tìm vị trí thực tập lập trình full-stack. Mình xây dựng giao diện bằng React và Ant Design, phát triển REST API bằng Django REST Framework, FastAPI và Express. Qua các dự án cá nhân, mình đã làm việc với phân quyền, giao dịch cơ sở dữ liệu và kiểm thử tự động.": "I’m a final-year IT student at HUIT seeking a full-stack development internship. I build interfaces with React and Ant Design and REST APIs with Django REST Framework, FastAPI, and Express. My projects cover role-based access, database transactions, and automated testing.",
  "Nền tảng mô phỏng quy trình vay. Mình thiết kế 14 model Mongoose và xây dựng API cho hồ sơ vay, nộp hồ sơ KYC, duyệt hồ sơ, lịch sử ví và yêu cầu rút tiền. Người dùng và quản trị viên có luồng đăng nhập riêng với JWT và bcrypt.": "A lending simulation built around 14 Mongoose models. I developed APIs for loan applications, KYC submission and review, wallet history, and withdrawal requests. Users and administrators have separate sign-in flows with JWT and bcrypt.",
  "Ứng dụng quản lý vườn sầu riêng từ nhật ký canh tác đến bán hàng. Hệ thống kiểm tra thời gian cách ly trước thu hoạch, ghi lại lý do khi chủ vườn cho phép ngoại lệ và khóa các dòng tồn kho khi bán. Dự án có 138 bài kiểm thử tự động và dùng Celery để gửi nhắc việc.": "An orchard management app for cultivation records, harvests, and sales. It enforces pesticide preharvest intervals, logs owner overrides, and locks inventory rows during sales. The project includes 138 automated tests and uses Celery for reminders.",
  "Mình kết hợp EfficientNet-B4, BiLSTM và Transformer để phân loại video và tạo ảnh Grad-CAM cho các khung hình đáng ngờ. API xử lý video tải lên ở chế độ nền, trả mã tác vụ để tra cứu kết quả và hỗ trợ phân tích luồng khung hình qua WebSocket.": "I combined EfficientNet-B4, a bidirectional LSTM, and a Transformer to classify videos and generate Grad-CAM heatmaps for suspicious frames. The API processes uploads in the background, returns a task ID for result lookup, and supports frame analysis over WebSocket."
};

const language = new URLSearchParams(location.search).get('lang') === 'en' ? 'en' : 'vi';
document.documentElement.lang = language;
const languageLink = document.querySelector('.language-link');
const alternate = language === 'vi' ? 'en' : 'vi';
const alternateUrl = new URL(location.href);
alternateUrl.searchParams.set('lang', alternate);
function updateLanguageLink() {
    alternateUrl.hash = location.hash;
    languageLink.href = alternateUrl.href;
}
updateLanguageLink();
window.addEventListener('hashchange', updateLanguageLink);
languageLink.textContent = alternate.toUpperCase();
languageLink.lang = languageLink.hreflang = alternate;
languageLink.setAttribute('aria-label', alternate === 'en' ? 'English' : 'Tiếng Việt');
if (language === 'en') {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    while (walker.nextNode()) {
        const node = walker.currentNode;
        const original = node.nodeValue.trim();
        if (Object.hasOwn(translations, original)) {
            node.nodeValue = node.nodeValue.replace(original, translations[original]);
        }
    }
    document.querySelectorAll('[placeholder]').forEach(field => {
        field.placeholder = translations[field.placeholder] || field.placeholder;
    });
    document.querySelector('meta[name="description"]').content = 'Trần Quốc Việt, final-year IT student at HUIT seeking a full-stack software development internship. Explore React and Python projects.';
} else {
    document.querySelector('#theme-toggle').setAttribute('aria-label', 'Đổi giao diện sáng hoặc tối');
    document.querySelector('.mobile-menu-btn').setAttribute('aria-label', 'Mở menu');
}
