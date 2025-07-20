'use client'
import Image from 'next/image'
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaGlobe } from 'react-icons/fa'
import { useState } from 'react'

// Language data
const translations = {
  vi: {
    hero: {
      greeting: "Xin chào, tôi là",
      title: "Software Developer | Technical Team Lead | System Optimization Specialist",
      learnMore: "Tìm hiểu thêm",
      contact: "Liên hệ"
    },
    about: {
      title: "Về tôi",
      story: "Câu chuyện của tôi",
      story1: "Tôi là một software developer đam mê và technical team lead, chuyên về tối ưu hóa hệ thống và thiết kế, triển khai các ứng dụng hiệu suất cao. Với thành tích mạnh mẽ trong việc lãnh đạo team, tối ưu hóa quy trình làm việc và cung cấp giải pháp kỹ thuật hiệu quả.",
      story2: "Tôi liên tục tìm cách nâng cao phương pháp phát triển, tích hợp công nghệ hiện đại và đảm bảo khả năng mở rộng của hệ thống. Với kinh nghiệm trong Java, Spring Framework, và các công nghệ full-stack, tôi luôn hướng đến việc tạo ra những sản phẩm chất lượng cao.",
      education: "Giáo dục",
      educationText: "Kỹ sư công nghệ thông tin - Đại học Công nghệ Thông tin và Truyền thông Việt - Hàn (2019-2024)",
      experience: "Kinh nghiệm",
      experienceText: "4+ năm phát triển phần mềm và lãnh đạo team",
      location: "Vị trí",
      locationText: "Đà Nẵng, Việt Nam"
    },
    experience: {
      title: "Kinh nghiệm làm việc",
      javaBackend: {
        title: "Java Backend Developer",
        company: "ARCH Vietnam",
        period: "Tháng 4/2025 - Hiện tại",
        description: "Làm việc với nhiều phiên bản Java bao gồm Java 5, Java 8, và Java 17. Thiết kế và duy trì các hệ thống backend có khả năng mở rộng sử dụng Spring Framework. Viết unit tests để đảm bảo chất lượng code và khả năng bảo trì."
      },
      fullStack: {
        title: "Full Stack Developer & Team Lead",
        company: "Techzen Company Limited",
        period: "Tháng 12/2023 - Tháng 3/2025",
        description: "Đóng vai trò vừa là backend developer vừa là team leader, thiết kế các hệ thống có khả năng mở rộng và quản lý team phát triển. Tích hợp các công nghệ tiên tiến trên nhiều dự án nội bộ và dự án cho khách hàng."
      },
      backend: {
        title: "Backend Developer",
        company: "DIFI Soft",
        period: "Tháng 4/2022 - Tháng 11/2023",
        description: "Đóng góp cho dự án Paave.io, một nền tảng đầu tư tích hợp giao dịch thực và mô phỏng. Xây dựng và duy trì APIs, bao gồm tích hợp đăng nhập xã hội và xử lý dữ liệu thời gian thực."
      },
      intern: {
        title: "Intern",
        company: "NCC ASIA",
        period: "Tháng 10 - Tháng 12/2021",
        description: "Làm việc trên website thương mại điện tử giày dép sử dụng NodeJS cho backend và ReactJS cho frontend."
      }
    },
    skills: {
      title: "Kỹ năng kỹ thuật",
      backend: "Backend",
      frontend: "Frontend & Mobile",
      databases: "Databases & DevOps",
      devops: "DevOps & Tools",
      additional: "Kỹ năng bổ sung",
      aiRealtime: "AI & Realtime",
      devopsCloud: "DevOps & Cloud",
      certifications: "Chứng chỉ"
    },
    projects: {
      title: "Dự án nổi bật",
      techzai: {
        title: "Techzai - Internal Systems",
        description: "Hệ thống nội bộ bao gồm chấm công, quản lý chi phí, đánh giá hiệu suất và cơ chế thưởng.",
        type: "Internal Project"
      },
      smartchat: {
        title: "Smartchat - AI Messaging",
        description: "Nền tảng nhắn tin thời gian thực được hỗ trợ AI với khả năng dịch thuật và xử lý ngôn ngữ tự nhiên.",
        type: "AI Platform"
      },
      paave: {
        title: "Paave.io - Investment Platform",
        description: "Nền tảng đầu tư tích hợp giao dịch thực và mô phỏng với APIs xử lý dữ liệu thời gian thực.",
        type: "Investment Platform"
      }
    },
    contact: {
      title: "Liên hệ",
      subtitle: "Hãy liên hệ với tôi",
      description: "Tôi luôn sẵn sàng thảo luận về các cơ hội hợp tác, dự án mới hoặc chỉ đơn giản là trò chuyện về công nghệ. Hãy liên hệ với tôi!",
      name: "Họ tên",
      email: "Email",
      message: "Tin nhắn",
      namePlaceholder: "Nhập họ tên của bạn",
      emailPlaceholder: "your.email@example.com",
      messagePlaceholder: "Nhập tin nhắn của bạn...",
      sendButton: "Gửi tin nhắn"
    },
    footer: {
      copyright: "© 2024 Lê Hồng Đức. Next.js và Tailwind CSS"
    }
  },
  en: {
    hero: {
      greeting: "Hello, I'm",
      title: "Software Developer | Technical Team Lead | System Optimization Specialist",
      learnMore: "Learn More",
      contact: "Contact"
    },
    about: {
      title: "About Me",
      story: "My Story",
      story1: "I am a passionate software developer and technical team lead, specializing in system optimization and the design and implementation of high-performance applications. With a strong track record in leading teams, streamlining workflows, and delivering efficient technical solutions.",
      story2: "I continuously seek to enhance development methodologies, integrate modern technologies, and ensure system scalability. With experience in Java, Spring Framework, and full-stack technologies, I always aim to create high-quality products.",
      education: "Education",
      educationText: "Bachelor of Computer Science - University of Information and Communication Technology Vietnam-Korea (2019-2024)",
      experience: "Experience",
      experienceText: "4+ years of software development and team leadership",
      location: "Location",
      locationText: "Da Nang, Vietnam"
    },
    experience: {
      title: "Work Experience",
      javaBackend: {
        title: "Java Backend Developer",
        company: "ARCH Vietnam",
        period: "April 2025 - Present",
        description: "Working with multiple Java versions including Java 5, Java 8, and Java 17. Designing and maintaining scalable backend systems using Spring Framework. Writing unit tests to ensure code quality and maintainability."
      },
      fullStack: {
        title: "Full Stack Developer & Team Lead",
        company: "Techzen Company Limited",
        period: "December 2023 - March 2025",
        description: "Acted as both backend developer and team leader, designing scalable systems and managing the development team. Integrated cutting-edge technologies across multiple internal and client-facing projects."
      },
      backend: {
        title: "Backend Developer",
        company: "DIFI Soft",
        period: "April 2022 - November 2023",
        description: "Contributed to Paave.io, an investment platform integrating real and simulated trading. Built and maintained APIs, including social login integration and real-time data processing."
      },
      intern: {
        title: "Intern",
        company: "NCC ASIA",
        period: "October - December 2021",
        description: "Worked on a footwear e-commerce site using NodeJS for backend and ReactJS for frontend."
      }
    },
    skills: {
      title: "Technical Skills",
      backend: "Backend",
      frontend: "Frontend & Mobile",
      databases: "Databases & DevOps",
      devops: "DevOps & Tools",
      additional: "Additional Skills",
      aiRealtime: "AI & Realtime",
      devopsCloud: "DevOps & Cloud",
      certifications: "Certifications"
    },
    projects: {
      title: "Featured Projects",
      techzai: {
        title: "Techzai - Internal Systems",
        description: "Internal systems for timekeeping, expense management, performance review, and reward mechanisms.",
        type: "Internal Project"
      },
      smartchat: {
        title: "Smartchat - AI Messaging",
        description: "AI-powered real-time messaging and translation platform with natural language processing capabilities.",
        type: "AI Platform"
      },
      paave: {
        title: "Paave.io - Investment Platform",
        description: "Investment platform integrating real and simulated trading with real-time data processing APIs.",
        type: "Investment Platform"
      }
    },
    contact: {
      title: "Contact",
      subtitle: "Get in Touch",
      description: "I'm always ready to discuss collaboration opportunities, new projects, or simply chat about technology. Feel free to reach out!",
      name: "Full Name",
      email: "Email",
      message: "Message",
      namePlaceholder: "Enter your full name",
      emailPlaceholder: "your.email@example.com",
      messagePlaceholder: "Enter your message...",
      sendButton: "Send Message"
    },
    footer: {
      copyright: "© 2024 Le Hong Duc. Made with Next.js and Tailwind CSS"
    }
  }
}

export default function Home() {
  const [language, setLanguage] = useState('vi')
  const t = translations[language as keyof typeof translations]

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Language Switcher */}
      <div className="fixed top-4 right-4 z-50">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 flex items-center space-x-2">
          <FaGlobe className="text-white text-lg" />
          <button
            onClick={() => setLanguage('vi')}
            className={`px-3 py-1 rounded text-sm font-medium transition-colors ${language === 'vi'
              ? 'bg-purple-600 text-white'
              : 'text-gray-300 hover:text-white'
              }`}
          >
            VI
          </button>
          <button
            onClick={() => setLanguage('en')}
            className={`px-3 py-1 rounded text-sm font-medium transition-colors ${language === 'en'
              ? 'bg-purple-600 text-white'
              : 'text-gray-300 hover:text-white'
              }`}
          >
            EN
          </button>
        </div>
      </div>

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
              {t.hero.greeting} <span className="text-purple-400">Lê Hồng Đức</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              {t.hero.title}
            </p>
            <div className="flex justify-center space-x-4">
              <a href="#about" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg transition-colors">
                {t.hero.learnMore}
              </a>
              <a href="#contact" className="border border-white/30 hover:bg-white/10 text-white px-8 py-3 rounded-lg transition-colors">
                {t.hero.contact}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-16">{t.about.title}</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-purple-400 mb-4">{t.about.story}</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                {t.about.story1}
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                {t.about.story2}
              </p>
            </div>
            <div className="space-y-6">
              <div className="bg-white/10 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-white mb-2">{t.about.education}</h4>
                <p className="text-gray-300">{t.about.educationText}</p>
              </div>
              <div className="bg-white/10 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-white mb-2">{t.about.experience}</h4>
                <p className="text-gray-300">{t.about.experienceText}</p>
              </div>
              <div className="bg-white/10 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-white mb-2">{t.about.location}</h4>
                <p className="text-gray-300">{t.about.locationText}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-16">{t.experience.title}</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-white">{t.experience.javaBackend.title}</h3>
                  <p className="text-purple-400 text-lg">{t.experience.javaBackend.company}</p>
                </div>
                <span className="text-gray-400">{t.experience.javaBackend.period}</span>
              </div>
              <p className="text-gray-300 mb-4">
                {t.experience.javaBackend.description}
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
                  <h3 className="text-2xl font-semibold text-white">{t.experience.fullStack.title}</h3>
                  <p className="text-purple-400 text-lg">{t.experience.fullStack.company}</p>
                </div>
                <span className="text-gray-400">{t.experience.fullStack.period}</span>
              </div>
              <p className="text-gray-300 mb-4">
                {t.experience.fullStack.description}
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
                  <h3 className="text-2xl font-semibold text-white">{t.experience.backend.title}</h3>
                  <p className="text-purple-400 text-lg">{t.experience.backend.company}</p>
                </div>
                <span className="text-gray-400">{t.experience.backend.period}</span>
              </div>
              <p className="text-gray-300 mb-4">
                {t.experience.backend.description}
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
                  <h3 className="text-2xl font-semibold text-white">{t.experience.intern.title}</h3>
                  <p className="text-purple-400 text-lg">{t.experience.intern.company}</p>
                </div>
                <span className="text-gray-400">{t.experience.intern.period}</span>
              </div>
              <p className="text-gray-300 mb-4">
                {t.experience.intern.description}
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
          <h2 className="text-4xl font-bold text-white text-center mb-16">{t.skills.title}</h2>
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/10 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-white mb-6">{t.skills.backend}</h3>
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
              <h3 className="text-2xl font-semibold text-white mb-6">{t.skills.frontend}</h3>
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
              <h3 className="text-2xl font-semibold text-white mb-6">{t.skills.databases}</h3>
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
              <h3 className="text-2xl font-semibold text-white mb-6">{t.skills.devops}</h3>
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
            <h3 className="text-3xl font-bold text-white text-center mb-8">{t.skills.additional}</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/10 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-white mb-4">{t.skills.aiRealtime}</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-purple-600 px-3 py-1 rounded-full text-sm text-white">OpenAI</span>
                  <span className="bg-purple-600 px-3 py-1 rounded-full text-sm text-white">Web Speech API</span>
                  <span className="bg-purple-600 px-3 py-1 rounded-full text-sm text-white">Socket.IO</span>
                  <span className="bg-purple-600 px-3 py-1 rounded-full text-sm text-white">Kafka</span>
                  <span className="bg-purple-600 px-3 py-1 rounded-full text-sm text-white">LLM</span>
                </div>
              </div>
              <div className="bg-white/10 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-white mb-4">{t.skills.devopsCloud}</h4>
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
            <h3 className="text-3xl font-bold text-white text-center mb-8">{t.skills.certifications}</h3>
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
          <h2 className="text-4xl font-bold text-white text-center mb-16">{t.projects.title}</h2>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-colors">
              <div className="w-full h-48 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">Techzai</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{t.projects.techzai.title}</h3>
              <p className="text-gray-300 mb-4">
                {t.projects.techzai.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-purple-600 px-2 py-1 rounded text-xs text-white">Team Lead</span>
                <span className="bg-purple-600 px-2 py-1 rounded text-xs text-white">Java</span>
                <span className="bg-purple-600 px-2 py-1 rounded text-xs text-white">Spring Boot</span>
              </div>
              <div className="flex space-x-2">
                <span className="text-purple-400 text-sm">{t.projects.techzai.type}</span>
              </div>
            </div>

            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-colors">
              <div className="w-full h-48 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">Smartchat</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{t.projects.smartchat.title}</h3>
              <p className="text-gray-300 mb-4">
                {t.projects.smartchat.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-purple-600 px-2 py-1 rounded text-xs text-white">Team Lead</span>
                <span className="bg-purple-600 px-2 py-1 rounded text-xs text-white">AI</span>
                <span className="bg-purple-600 px-2 py-1 rounded text-xs text-white">Real-time</span>
              </div>
              <div className="flex space-x-2">
                <span className="text-purple-400 text-sm">{t.projects.smartchat.type}</span>
              </div>
            </div>

            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-colors">
              <div className="w-full h-48 bg-gradient-to-br from-green-600 to-emerald-600 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">Paave.io</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{t.projects.paave.title}</h3>
              <p className="text-gray-300 mb-4">
                {t.projects.paave.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-purple-600 px-2 py-1 rounded text-xs text-white">Backend</span>
                <span className="bg-purple-600 px-2 py-1 rounded text-xs text-white">Trading</span>
                <span className="bg-purple-600 px-2 py-1 rounded text-xs text-white">Real-time</span>
              </div>
              <div className="flex space-x-2">
                <span className="text-purple-400 text-sm">{t.projects.paave.type}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-16">{t.contact.title}</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-6">{t.contact.subtitle}</h3>
                <p className="text-gray-300 text-lg mb-8">
                  {t.contact.description}
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
                <div className="space-y-6">
                  <div>
                    <label className="block text-white mb-2">{t.contact.name}</label>
                    <div className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white">
                      Lê Hồng Đức
                    </div>
                  </div>
                  <div>
                    <label className="block text-white mb-2">{t.contact.email}</label>
                    <div className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white">
                      lehongduc225@gmail.com
                    </div>
                  </div>
                  <div>
                    <label className="block text-white mb-2">{t.contact.message}</label>
                    <div className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white min-h-[100px] flex items-center">
                      Software Developer | Technical Team Lead | System Optimization Specialist
                    </div>
                  </div>
                  <div className="text-center">
                    <span className="text-purple-400 text-sm">
                      {language === 'vi' ? 'Thông tin liên hệ chỉ để hiển thị' : 'Contact information for display only'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            {t.footer.copyright}
          </p>
        </div>
      </footer>
    </main>
  )
}
