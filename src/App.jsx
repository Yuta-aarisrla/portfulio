import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


export default function App() {
  return (
    <div className="bg-[#FFFFE8] text-[#AACB73] min-h-screen font-sans">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-6 bg-[#FFD4D4] shadow">
        <h1 className="font-bold text-xl animate-bounce">My Portfolio</h1>
        <ul className="hidden md:flex gap-8 font-medium">
          <li><a href="#home" className="hover:text-[#CDE990] transition-colors duration-300">Home</a></li>
          <li><a href="#about" className="hover:text-[#CDE990] transition-colors duration-300">About</a></li>
          <li><a href="#projects" className="hover:text-[#CDE990] transition-colors duration-300">Activities</a></li>
          <li><a href="#contact" className="hover:text-[#CDE990] transition-colors duration-300">Contact</a></li>
        </ul>
        <button className="bg-[#CDE990] text-[#AACB73] px-4 py-2 rounded-lg font-semibold hover:scale-110 transition-transform duration-300">
          Contact Me
        </button>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-10 py-16">
        {/* Left Content */}
        <div className="max-w-lg space-y-6 animate-fadeIn">
          <h2 className="text-4xl md:text-5xl font-bold">
            Hi, I'm <span className="text-[#CDE990] animate-pulse">arisrla sintoem</span>👾
          </h2>
          <h3 className="text-xl font-medium">Welcome to my portfolio!</h3>
          <p className="leading-relaxed text-[#AACB73]/80">
            “สวัสดีค่ะ ฉ้นนางสาวอาริสลา สินเติม ปัจจุบันกำลังศึกษาอยู่ชั้นมัธยมศึกษาปีที่ 6 โรงเรียนหัวตะพานวิทยาคม แผนการเรียนวิทยาศาสตร์-คณิตศาสตร์  เว็บนี้เพื่อเพิ่มทักษะและความตั้งใจ มาอย่างดีหวังว่าคุณจะชอบมันนะคะ!”"
          </p>
          <div className="flex gap-4">
            <button className="bg-[#CDE990] text-[#AACB73] px-6 py-2 rounded-lg font-semibold hover:scale-105 transition-transform duration-300">
              Contact Info
            </button>
            <button className="bg-[#FFD4D4] text-[#AACB73] px-6 py-2 rounded-lg font-semibold hover:scale-105 transition-transform duration-300">
              Download CV
            </button>
          </div>
          {/* Social icons */}
          <div className="flex gap-4 text-2xl">
            <a href="#" className="hover:scale-125 transition-transform duration-300"><i className="fab fa-instagram"></i></a>
            <a href="#" className="hover:scale-125 transition-transform duration-300"><i className="fab fa-linkedin"></i></a>
            <a href="#" className="hover:scale-125 transition-transform duration-300"><i className="fab fa-github"></i></a>
          </div>
        </div>

        {/* Right Profile Image */}
        <div className="relative mt-10 md:mt-0 animate-fadeInRight">
          <div className="w-64 h-64 rounded-full shadow-lg overflow-hidden border-4 border-[#CDE990] hover:scale-105 transition-transform duration-500">
            {/* ใส่รูปโปรไฟล์จริง */}
            <img
              src="Port/ทำเว็บ.Png" // 
              alt="Profile"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </section>

{/* About Section */}
<section id="about" className="py-16 bg-[#FFD4D4]">
  <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
    
    {/* รูปโปรไฟล์ */}
    <div className="flex-shrink-0">
      <img
        src="/port/p2.jpg" // ใส่รูปจริงของคุณ
        alt="Profile"
        className="w-64 h-80 object-cover rounded-xl shadow-lg"
      />
    </div>

    {/* เนื้อหา */}
    <div className="flex-1">
      <h3 className="text-4xl font-bold text-pink-600 mb-6">About Me</h3>
      <p className="text-gray-700 leading-relaxed mb-8">
        สวัสดีค่ะ ฉันชื่อ <b>นางสาวอาริสลา สินเติม</b> ปัจจุบันกำลังศึกษาอยู่ชั้นมัธยมศึกษาปีที่ 6 โรงเรียนหัวตะพานวิทยาคม แผนการเรียนวิทยาศาสตร์-คณิตศาสตร์ มีความมุ่งมั่นและตั้งใจที่จะศึกษาด้านวิทยาการคอมพิวเตอร์ และเทคโนโลยีสารสนเทศ
      </p>

      {/* Tabs */}
      <div className="flex gap-6 mb-6">
        <button className="text-pink-600 font-semibold border-b-2 border-pink-600">Hobby</button>
      </div>

      {/* เนื้อหาแท็บ Hobby */}
      <div className="space-y-4">
        <div>
          <h4 className="font-bold text-lg text-pink-600">🎮 Gaming</h4>
          <p className="text-gray-700">ชอบเล่นเกมเพื่อผ่อนคลายและได้แรงบันดาลใจจากดีไซน์ในเกม</p>
        </div>
        <div>
          <h4 className="font-bold text-lg text-pink-600">📺 ดูซีรีส์</h4>
          <p className="text-gray-700">ชอบดูซีรีส์/ภาพยนตร์เพื่อสร้างแรงบันดาลใจในการออกแบบ</p>
        </div>
        <div>
          <h4 className="font-bold text-lg text-pink-600">📚 อ่านการ์ตูน</h4>
          <p className="text-gray-700">การอ่านการ์ตูนทำให้ได้เรียนรู้การเล่าเรื่องและแรงบันดาลใจใหม่ ๆ</p>
        </div>
      </div>
    </div>
  </div>
</section>


     {/* Activities Section */}
<section id="Activities" className="py-16 bg-[#CDE990]">
  <div className="max-w-6xl mx-auto px-6">
    <h3 className="text-3xl font-semibold text-center mb-12 text-[#AACB73] animate-bounce">
     Activities
    </h3>

    {/* Grid container: 3 คอลัมน์ต่อแถว */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      
      {/* Project 1 */}
      <div className="bg-[#FFD4D4] rounded-xl shadow p-4 hover:scale-105 hover:shadow-2xl transition-transform duration-500 animate-fadeInUp">
        <img
          src="/Port/o1.jpg"
          alt="Project 1"
          className="w-full h-60 object-cover rounded mb-6"
        />
        <h4 className="font-bold text-lg mb-2"> Coding Bootcamp 2024</h4>
        <p className="text-sm">ได้เข้าร่วมกิจกรรมในงาน Coding Bootcamp 2024 จากสำนักงานส่งเสริมเศรษฐกิจดิจิทัล</p>
      </div>

      {/* Project 2 */}
      <div className="bg-[#FFD4D4] rounded-xl shadow p-4 hover:scale-105 hover:shadow-2xl transition-transform duration-500 animate-fadeInUp">
        <img
          src="/Port/o2.jpg"
          alt="Project 2"
          className="w-full h-60 object-cover rounded mb-6"
        />
        <h4 className="font-bold text-lg mb-2">เรียนคอร์ส Learn Coding Basics with Block-based Programming</h4>
        <p className="text-sm">ได้ผ่านการเรียนออนไลน์คอร์ส Learn Coding Basics with Block-based Programming เรียนรู้พื้นฐานการโค้ดผ่านการทำโปรแกรมแบบบล็อก จากจุฬาลงกรณ์มหาวิทยาลั</p>
      </div>

      {/* Project 3 */}
      <div className="bg-[#FFD4D4] rounded-xl shadow p-4 hover:scale-105 hover:shadow-2xl transition-transform duration-500 animate-fadeInUp">
        <img
          src="/Port/o3.jpg"
          alt="Project 3"
          className="w-full h-60 object-cover rounded mb-6"
        />
        <h4 className="font-bold text-lg mb-2">เรียนคอร์ส Crunching data with Pandas รุ่นที่ 2</h4>
        <p className="text-sm">ได้ผ่านการเรียนออนไลน์คอร์ส Crunching data with Pandas รุ่นที่ 2 จากจุฬาลงกรณ์มหาวิทยาลัย</p>
      </div>

      {/* Project 4 */}
      <div className="bg-[#FFD4D4] rounded-xl shadow p-4 hover:scale-105 hover:shadow-2xl transition-transform duration-500 animate-fadeInUp">
        <img
          src="/Port/o4.jpg"
          alt="Project 4"
          className="w-full h-60 object-cover rounded mb-6"
        />
        <h4 className="font-bold text-lg mb-2">กิจกรรมปฏิบัติการทางวิศกรรมไฟฟ้าเบื้องต้น</h4>
        <p className="text-sm">ได้เข้าร่วมกิจกรรมปฏิบัติการทางวิศกรรมไฟฟ้าเบื้องต้น จากศูนย์นวัตกรรมและบริการวิศวกรรม</p>
        </div>
      

      {/* Project 5 */}
      <div className="bg-[#FFD4D4] rounded-xl shadow p-4 hover:scale-105 hover:shadow-2xl transition-transform duration-500 animate-fadeInUp">
        <img
          src="/Port/o5.jpg"
          alt="Project 5"
          className="w-full h-60 object-cover rounded mb-6"
        />
        <h4 className="font-bold text-lg mb-2"> นักเรียนที่มีผลการเรียนเฉลี่ย “ดีเยี่ยม” ในภาคเรียนที่ 2 ปีการศึกษา 2567</h4>
        <p className="text-sm">ได้เป็น นักเรียนที่มีผลการเรียนเฉลี่ย “ดีเยี่ยม” ในภาคเรียนที่ 2 ปีการศึกษา 2567 จากโรงเรียนหัวตะพานวิทยาคม</p>
      </div>

      {/* Project 6 */}
      <div className="bg-[#FFD4D4] rounded-xl shadow p-4 hover:scale-105 hover:shadow-2xl transition-transform duration-500 animate-fadeInUp">
        <img
          src="/Port/o6.jpg"
          alt="Project 6"
          className="w-full h-60 object-cover rounded mb-6"
        />
        <h4 className="font-bold text-lg mb-2">ปฏิบัตหน้าที่เป็น “กรรมการสภานักเรียน”ประจำปีการศึกษา 2567</h4>
        <p className="text-sm">ได้ปฏิบัตหน้าที่เป็น “กรรมการสภานักเรียน”ประจำปีการศึกษา 2567 จากโรงเรียนหัวตะพานวิทยาคม</p>
      </div>
      {/* Project 7 */}
      <div className="bg-[#FFD4D4] rounded-xl shadow p-4 hover:scale-105 hover:shadow-2xl transition-transform duration-500 animate-fadeInUp">
        <img
          src="/Port/o7.jpg"
          alt="Project 6"
          className="w-full h-60 object-cover rounded mb-6"
        />
        <h4 className="font-bold text-lg mb-2">งานศิลปหัตถกรรม ระดับเขตพื้นที่การศึกษา ครั้งที่ 72 ประจำปีการศึกษา 2567</h4>
        <p className="text-sm">ได้รับรางวัลระดับเหรียญทอง กิจกรรมการแข่งขันวาดภาพระบายสี ระดับชั้น ม.4-ม.6 ในงานศิลปหัตถกรรม ระดับเขตพื้นที่การศึกษา ครั้งที่ 72 ประจำปีการศึกษา 2567</p>
      </div>
      {/* Project 8 */}
      <div className="bg-[#FFD4D4] rounded-xl shadow p-4 hover:scale-105 hover:shadow-2xl transition-transform duration-500 animate-fadeInUp">
        <img
          src="/Port/o8.jpg"
          alt="Project 6"
          className="w-full h-60 object-cover rounded mb-6"
        />
        <h4 className="font-bold text-lg mb-2">Students staff in English Camp 2024</h4>
        <p className="text-sm">ได้เข้าร่วมกิจกรรมเป็น a Students staff in English Camp 2024 จากโรงเรียนหัวตะพานวิทยาคม</p>
      </div>
      {/* Project 9 */}
      <div className="bg-[#FFD4D4] rounded-xl shadow p-4 hover:scale-105 hover:shadow-2xl transition-transform duration-500 animate-fadeInUp">
        <img
          src="/Port/o9.jpg"
          alt="Project 6"
          className="w-full h-60 object-cover rounded mb-6"
        />
        <h4 className="font-bold text-lg mb-2">นิทรรศการวิทยาศาตร์และเทคโนโลยี สาขา ชีววิทยา</h4>
        <p className="text-sm">ได้เข้าร่วมกิจกรรมในงาน นิทรรศการวิทยาศาตร์และเทคโนโลยี สาขา ชีววิทยา จากโรงเรียนหัวตะพานวิทยาคม</p>
      </div>
      {/* Project 10 */}
      <div className="bg-[#FFD4D4] rounded-xl shadow p-4 hover:scale-105 hover:shadow-2xl transition-transform duration-500 animate-fadeInUp">
        <img
          src="/Port/o10.jpg"
          alt="Project 6"
          className="w-full h-60 object-cover rounded mb-6"
        />
        <h4 className="font-bold text-lg mb-2">ค่ายอบรมพัฒนาศักยภาพภาวะผู้นำเยาวชน สร้างชาติ Reunion</h4>
        <p className="text-sm">ได้เข้าร่วมกิจกรรมโครงการค่ายอบรมพัฒนาศักยภาพภาวะผู้นำเยาวชน สร้างชาติ Reunion จากสถาบันการสร้างชาติ
</p>
      </div>
      {/* Project 11 */}
      <div className="bg-[#FFD4D4] rounded-xl shadow p-4 hover:scale-105 hover:shadow-2xl transition-transform duration-500 animate-fadeInUp">
        <img
          src="/Port/o11.jpg"
          alt="Project 6"
          className="w-full h-60 object-cover rounded mb-6"
        />
        <h4 className="font-bold text-lg mb-2">จิตอาสาบำเพ็ญประโยชน์ ในงานบำเพ็ญกุศลพระราชาเจ้าคณะจังหวัด</h4>
        <p className="text-sm">เข้าร่วมกิจกรรมจิตอาสาบำเพ็ญประโยชน์ ในงานบำเพ็ญกุศลพระราชาเจ้าคณะจังหวัด ณ สำนักปฏิบัติธรรมแห่งที่ 1 ณ วัดเก่าบ่อ ดิฉันได้เรียนรู้ประเพณีทางพระพุทธศาสนา และวิธีปฏิบัติตนในการเป็นพุทธศาสนิกชนที่ดี </p>
      </div>
      {/* Project 12 */}
      <div className="bg-[#FFD4D4] rounded-xl shadow p-4 hover:scale-105 hover:shadow-2xl transition-transform duration-500 animate-fadeInUp">
        <img
          src="/Port/o12.jpg"
          alt="Project 6"
          className="w-full h-60 object-cover rounded mb-6"
        />
        <h4 className="font-bold text-lg mb-2">แสดงบนเวทีการแสดงละคร เนื่องในวันสุนทรภู่ วันภาษไทยแห่งชาติ</h4>
        <p className="text-sm">ได้เข้าร่วมกิจกรรม แสดงบนเวทีการแสดงละคร เนื่องในวันสุนทรภู่ วันภาษไทยแห่งชาติ จากโรงเรียนหัวตะพานวิทยาคม</p>
      </div>

    </div>
  </div>
</section>


      {/* Contact Section */}
      <section id="contact" className="max-w-4xl mx-auto px-6 py-16 text-center animate-fadeIn">
        <h3 className="text-3xl font-semibold mb-6 text-[#AACB73]">Contact</h3>
        <p className="mb-2">📧 arisrlasintoem@gmail.com</p>
        <p>🐱 https://github.com/Yuta-aarisrla</p>
      </section>

      {/* Footer */}
      <footer className="bg-[#AACB73] text-[#FFFFE8] py-6 text-center text-sm animate-fadeIn">
        © {new Date().getFullYear()} Your Name. All rights reserved.
      </footer>
    </div>
  );
}
