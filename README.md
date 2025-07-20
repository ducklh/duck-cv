# Personal Resume Website

Một website resume cá nhân hiện đại được xây dựng bằng Next.js và Tailwind CSS.

## 🚀 Tính năng

- **Responsive Design**: Tương thích với mọi thiết bị
- **Modern UI**: Giao diện hiện đại với gradient và glassmorphism
- **Smooth Scrolling**: Cuộn mượt mà giữa các section
- **Contact Form**: Form liên hệ tích hợp
- **Skills Visualization**: Hiển thị kỹ năng với progress bars
- **Project Showcase**: Trưng bày các dự án nổi bật

## 📁 Cấu trúc dự án

```
duck-cv/
├── src/
│   └── app/
│       ├── page.tsx          # Trang chính
│       ├── layout.tsx        # Layout chung
│       └── globals.css       # CSS toàn cục
├── public/                   # Assets tĩnh
└── package.json
```

## 🛠️ Cách tùy chỉnh

### 1. Thông tin cá nhân
Cập nhật thông tin trong `src/app/page.tsx`:
- Tên và chức danh trong Hero section
- Thông tin về bản thân trong About section
- Kinh nghiệm làm việc
- Kỹ năng và mức độ thành thạo
- Dự án nổi bật
- Thông tin liên hệ

### 2. Ảnh đại diện
Thêm ảnh đại diện vào thư mục `public/` với tên `avatar.jpg`

### 3. Màu sắc
Website sử dụng theme tím-xanh với gradient. Bạn có thể thay đổi màu sắc bằng cách cập nhật các class Tailwind CSS.

### 4. Metadata
Cập nhật metadata trong `src/app/layout.tsx`:
- Title
- Description
- Keywords
- Open Graph tags

## 🚀 Chạy dự án

```bash
# Cài đặt dependencies
npm install

# Chạy development server
npm run dev

# Build cho production
npm run build

# Chạy production server
npm start
```

## 📱 Responsive Design

Website được thiết kế responsive với:
- Mobile-first approach
- Breakpoints: sm, md, lg, xl
- Flexible grid system
- Adaptive typography

## 🎨 Technologies Used

- **Next.js 14**: React framework
- **TypeScript**: Type safety
- **Tailwind CSS**: Utility-first CSS framework
- **React Icons**: Icon library
- **ESLint**: Code linting

## 📝 Sections

1. **Hero**: Giới thiệu và call-to-action
2. **About**: Thông tin cá nhân và background
3. **Experience**: Kinh nghiệm làm việc
4. **Skills**: Kỹ năng với progress bars
5. **Projects**: Dự án nổi bật
6. **Contact**: Form liên hệ và thông tin

## 🔧 Tùy chỉnh nâng cao

### Thêm animations
Sử dụng Framer Motion hoặc CSS animations để thêm hiệu ứng chuyển động.

### Thêm dark/light mode
Implement theme switching với Tailwind CSS.

### Thêm blog section
Tích hợp CMS như Contentful hoặc Sanity.

### Thêm portfolio gallery
Tạo gallery để showcase các dự án với ảnh và video.

## 📄 License

MIT License - tự do sử dụng và tùy chỉnh.

---

Được tạo với ❤️ bằng Next.js và Tailwind CSS
