import Image from 'next/image'
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 z-10 text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white/20">
              <Image
                src="/avatar.jpg"
                alt="Lê Hồng Đức"
                width={128}
                height={128}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
              Xin chào, tôi là <span className="text-purple-400">Lê Hồng Đức</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Software Developer | Technical Team Lead | System Optimization Specialist
            </p>
            <div className="flex justify-center space-x-4">
              <a href="#about" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg transition-colors">
                Tìm hiểu thêm
              </a>
              <a href="#contact" className="border border-white/30 hover:bg-white/10 text-white px-8 py-3 rounded-lg transition-colors">
                Liên hệ
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Về tôi</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-purple-400 mb-4">Câu chuyện của tôi</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Tôi là một software developer đam mê và technical team lead, chuyên về tối ưu hóa hệ thống
                và thiết kế, triển khai các ứng dụng hiệu suất cao. Với thành tích mạnh mẽ trong việc
                lãnh đạo team, tối ưu hóa quy trình làm việc và cung cấp giải pháp kỹ thuật hiệu quả.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Tôi liên tục tìm cách nâng cao phương pháp phát triển, tích hợp công nghệ hiện đại và
                đảm bảo khả năng mở rộng của hệ thống. Với kinh nghiệm trong Java, Spring Framework,
                và các công nghệ full-stack, tôi luôn hướng đến việc tạo ra những sản phẩm chất lượng cao.
              </p>
            </div>
            <div className="space-y-6">
              <div className="bg-white/10 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-white mb-2">Giáo dục</h4>
                <p className="text-gray-300">Kỹ sư công nghệ thôn tin - Đại học Công nghệ Thông tin và Truyền thông Việt - Hàn (2019-2024)</p>
              </div>
              <div className="bg-white/10 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-white mb-2">Kinh nghiệm</h4>
                <p className="text-gray-300">4+ năm phát triển phần mềm và lãnh đạo team</p>
              </div>
              <div className="bg-white/10 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-white mb-2">Vị trí</h4>
                <p className="text-gray-300">Đà Nẵng, Việt Nam</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Kinh nghiệm làm việc</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-white">Java Backend Developer</h3>
                  <p className="text-purple-400 text-lg">ARCH Vietnam</p>
                </div>
                <span className="text-gray-400">Tháng 4/2025 - Hiện tại</span>
              </div>
              <p className="text-gray-300 mb-4">
                Làm việc với nhiều phiên bản Java bao gồm Java 5, Java 8, và Java 17. Thiết kế và duy trì
                các hệ thống backend có khả năng mở rộng sử dụng Spring Framework. Viết unit tests để đảm bảo
                chất lượng code và khả năng bảo trì.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-purple-600 px-3 py-1 rounded-full text-sm text-white">Java</span>
                <span className="bg-purple-600 px-3 py-1 rounded-full text-sm text-white">Spring Framework</span>
                <span className="bg-purple-600 px-3 py-1 rounded-full text-sm text-white">Unit Testing</span>
                <span className="bg-purple-600 px-3 py-1 rounded-full text-sm text-white">Enterprise Solutions</span>
              </div>
            </div>

            <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-white">Full Stack Developer & Team Lead</h3>
                  <p className="text-purple-400 text-lg">Techzen Company Limited</p>
                </div>
                <span className="text-gray-400">Tháng 12/2023 - Tháng 3/2025</span>
              </div>
              <p className="text-gray-300 mb-4">
                Đóng vai trò vừa là backend developer vừa là team leader, thiết kế các hệ thống có khả năng
                mở rộng và quản lý team phát triển. Tích hợp các công nghệ tiên tiến trên nhiều dự án nội bộ
                và dự án cho khách hàng.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-purple-600 px-3 py-1 rounded-full text-sm text-white">Team Leadership</span>
                <span className="bg-purple-600 px-3 py-1 rounded-full text-sm text-white">System Design</span>
                <span className="bg-purple-600 px-3 py-1 rounded-full text-sm text-white">Full Stack</span>
                <span className="bg-purple-600 px-3 py-1 rounded-full text-sm text-white">Project Management</span>
              </div>
            </div>

            <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-white">Backend Developer</h3>
                  <p className="text-purple-400 text-lg">DIFI Soft</p>
                </div>
                <span className="text-gray-400">Tháng 4/2022 - Tháng 11/2023</span>
              </div>
              <p className="text-gray-300 mb-4">
                Đóng góp cho dự án Paave.io, một nền tảng đầu tư tích hợp giao dịch thực và mô phỏng.
                Xây dựng và duy trì APIs, bao gồm tích hợp đăng nhập xã hội và xử lý dữ liệu thời gian thực.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-purple-600 px-3 py-1 rounded-full text-sm text-white">API Development</span>
                <span className="bg-purple-600 px-3 py-1 rounded-full text-sm text-white">Real-time Data</span>
                <span className="bg-purple-600 px-3 py-1 rounded-full text-sm text-white">Social Login</span>
                <span className="bg-purple-600 px-3 py-1 rounded-full text-sm text-white">Trading Platform</span>
              </div>
            </div>

            <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-white">Intern</h3>
                  <p className="text-purple-400 text-lg">NCC ASIA</p>
                </div>
                <span className="text-gray-400">Tháng 10 - Tháng 12/2021</span>
              </div>
              <p className="text-gray-300 mb-4">
                Làm việc trên website thương mại điện tử giày dép sử dụng NodeJS cho backend và ReactJS cho frontend.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-purple-600 px-3 py-1 rounded-full text-sm text-white">NodeJS</span>
                <span className="bg-purple-600 px-3 py-1 rounded-full text-sm text-white">ReactJS</span>
                <span className="bg-purple-600 px-3 py-1 rounded-full text-sm text-white">E-commerce</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Kỹ năng kỹ thuật</h2>
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/10 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-white mb-6">Backend</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">Java (Spring Boot)</span>
                    <span className="text-purple-400">95%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-purple-600 h-2 rounded-full" style={{ width: '95%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">NestJS</span>
                    <span className="text-purple-400">85%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-purple-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">Laravel</span>
                    <span className="text-purple-400">80%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-purple-600 h-2 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">Python</span>
                    <span className="text-purple-400">75%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-purple-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-white mb-6">Frontend & Mobile</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">ReactJS</span>
                    <span className="text-purple-400">90%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-purple-600 h-2 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">Vue.js</span>
                    <span className="text-purple-400">85%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-purple-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">Angular</span>
                    <span className="text-purple-400">80%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-purple-600 h-2 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">Flutter</span>
                    <span className="text-purple-400">75%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-purple-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-white mb-6">Databases & DevOps</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">MySQL</span>
                    <span className="text-purple-400">90%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-purple-600 h-2 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">MongoDB</span>
                    <span className="text-purple-400">85%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-purple-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">Redis</span>
                    <span className="text-purple-400">80%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-purple-600 h-2 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">Firebase</span>
                    <span className="text-purple-400">75%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-purple-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-white mb-6">DevOps & Tools</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">Docker</span>
                    <span className="text-purple-400">85%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-purple-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">Git</span>
                    <span className="text-purple-400">90%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-purple-600 h-2 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">Jira</span>
                    <span className="text-purple-400">80%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-purple-600 h-2 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">IntelliJ IDEA</span>
                    <span className="text-purple-400">85%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-purple-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Skills */}
          <div className="max-w-6xl mx-auto mt-12">
            <h3 className="text-3xl font-bold text-white text-center mb-8">Kỹ năng bổ sung</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/10 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-white mb-4">AI & Realtime</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-purple-600 px-3 py-1 rounded-full text-sm text-white">OpenAI</span>
                  <span className="bg-purple-600 px-3 py-1 rounded-full text-sm text-white">Web Speech API</span>
                  <span className="bg-purple-600 px-3 py-1 rounded-full text-sm text-white">Socket.IO</span>
                  <span className="bg-purple-600 px-3 py-1 rounded-full text-sm text-white">Kafka</span>
                  <span className="bg-purple-600 px-3 py-1 rounded-full text-sm text-white">LLM</span>
                </div>
              </div>
              <div className="bg-white/10 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-white mb-4">DevOps & Cloud</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-purple-600 px-3 py-1 rounded-full text-sm text-white">Webhook</span>
                  <span className="bg-purple-600 px-3 py-1 rounded-full text-sm text-white">S3 Bucket</span>
                  <span className="bg-purple-600 px-3 py-1 rounded-full text-sm text-white">Liquibase</span>
                  <span className="bg-purple-600 px-3 py-1 rounded-full text-sm text-white">Bitbucket</span>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="max-w-4xl mx-auto mt-12">
            <h3 className="text-3xl font-bold text-white text-center mb-8">Chứng chỉ</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/10 p-6 rounded-lg text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">PSM</span>
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">Professional Scrum Master I</h4>
                <p className="text-gray-300">2024</p>
              </div>
              <div className="bg-white/10 p-6 rounded-lg text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">PSM</span>
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">Professional Scrum Master II</h4>
                <p className="text-gray-300">2024</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Dự án nổi bật</h2>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-colors">
              <div className="w-full h-48 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">Techzai</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Techzai - Internal Systems</h3>
              <p className="text-gray-300 mb-4">
                Hệ thống nội bộ bao gồm chấm công, quản lý chi phí, đánh giá hiệu suất và cơ chế thưởng.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-purple-600 px-2 py-1 rounded text-xs text-white">Team Lead</span>
                <span className="bg-purple-600 px-2 py-1 rounded text-xs text-white">Java</span>
                <span className="bg-purple-600 px-2 py-1 rounded text-xs text-white">Spring Boot</span>
              </div>
              <div className="flex space-x-2">
                <span className="text-purple-400 text-sm">Internal Project</span>
              </div>
            </div>

            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-colors">
              <div className="w-full h-48 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">Smartchat</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Smartchat - AI Messaging</h3>
              <p className="text-gray-300 mb-4">
                Nền tảng nhắn tin thời gian thực được hỗ trợ AI với khả năng dịch thuật và xử lý ngôn ngữ tự nhiên.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-purple-600 px-2 py-1 rounded text-xs text-white">Team Lead</span>
                <span className="bg-purple-600 px-2 py-1 rounded text-xs text-white">AI</span>
                <span className="bg-purple-600 px-2 py-1 rounded text-xs text-white">Real-time</span>
              </div>
              <div className="flex space-x-2">
                <span className="text-purple-400 text-sm">AI Platform</span>
              </div>
            </div>

            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-colors">
              <div className="w-full h-48 bg-gradient-to-br from-green-600 to-emerald-600 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">Paave.io</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Paave.io - Investment Platform</h3>
              <p className="text-gray-300 mb-4">
                Nền tảng đầu tư tích hợp giao dịch thực và mô phỏng với APIs xử lý dữ liệu thời gian thực.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-purple-600 px-2 py-1 rounded text-xs text-white">Backend</span>
                <span className="bg-purple-600 px-2 py-1 rounded text-xs text-white">Trading</span>
                <span className="bg-purple-600 px-2 py-1 rounded text-xs text-white">Real-time</span>
              </div>
              <div className="flex space-x-2">
                <span className="text-purple-400 text-sm">Investment Platform</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Liên hệ</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-6">Hãy liên hệ với tôi</h3>
                <p className="text-gray-300 text-lg mb-8">
                  Tôi luôn sẵn sàng thảo luận về các cơ hội hợp tác, dự án mới hoặc chỉ đơn giản là
                  trò chuyện về công nghệ. Hãy liên hệ với tôi!
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <FaPhone className="text-purple-400 text-xl" />
                    <span className="text-gray-300">+84 865 957 009</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <FaEnvelope className="text-purple-400 text-xl" />
                    <span className="text-gray-300">lehongduc225@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <FaLinkedin className="text-purple-400 text-xl" />
                    <span className="text-gray-300">linkedin.com/in/duclehong</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <FaMapMarkerAlt className="text-purple-400 text-xl" />
                    <span className="text-gray-300">Đà Nẵng, Việt Nam</span>
                  </div>
                </div>
              </div>
              <div className="bg-white/10 p-8 rounded-lg">
                <form className="space-y-6">
                  <div>
                    <label className="block text-white mb-2">Họ tên</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400"
                      placeholder="Nhập họ tên của bạn"
                    />
                  </div>
                  <div>
                    <label className="block text-white mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-white mb-2">Tin nhắn</label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400"
                      placeholder="Nhập tin nhắn của bạn..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg transition-colors"
                  >
                    Gửi tin nhắn
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2024 Lê Hồng Đức. Được tạo với ❤️ bằng Next.js và Tailwind CSS
          </p>
        </div>
      </footer>
    </main>
  )
}
