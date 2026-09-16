import React, { useState, useEffect, FormEvent } from "react";

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    seniorName: "",
    guardianPhone: "",
    preferredDate: "",
    notes: "",
  });

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
      setScrollProgress(scrolled);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq((prev) => (prev === index ? null : index));
  };

  const handleModalSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert(
      `${formData.seniorName || "어르신"} 견학 신청이 완료되었습니다.\n담당 간호사/원장이 곧 연락해 드리겠습니다.\n(빠른 전화 문의: 062-675-8090)`
    );
    setIsModalOpen(false);
    setFormData({ seniorName: "", guardianPhone: "", preferredDate: "", notes: "" });
  };

  return (
    <div className="min-h-screen bg-[#FBFAF7] text-[#23291F] font-sans antialiased selection:bg-[#E8EDE4] selection:text-[#1F3D2B]">
      <style>{`
        :root {
          --deep-forest: #1F3D2B;
          --sage: #7A9070;
          --pale-green: #E8EDE4;
          --paper: #FBFAF7;
          --sunlight: #E4A93C;
          --ink: #23291F;
          --border-color: #E0E4DC;
        }

        h1, h2, h3, h4, .font-serif-custom {
          font-family: 'Gowun Batang', serif;
        }

        .text-senior-body {
          font-size: 20px;
          line-height: 1.9;
        }
      `}</style>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#1F3D2B] text-[#FBFAF7] border-b border-[#2C523B] py-3.5 shadow-md transition-all">
        <div className="max-w-[1080px] mx-auto px-4 sm:px-6 flex justify-between items-center">
          {/* Logo & Center Name */}
          <a href="#" className="flex items-center gap-2.5 sm:gap-3 group">
            <img
              src="/logo.png"
              alt="더사랑 주간보호센터 로고"
              className="h-10 sm:h-12 w-auto object-contain drop-shadow"
            />
            <span className="font-serif-custom text-base sm:text-xl font-bold tracking-tight text-[#FBFAF7] group-hover:text-[#E4A93C] transition-colors">
              더사랑 주간보호센터
            </span>
          </a>

          {/* Navigation Menus (전화상담 / 블로그 / 오시는길) */}
          <nav className="hidden md:flex items-center gap-6 text-base font-semibold text-[#E8EDE4]">
            <a
              href="tel:062-675-8090"
              className="hover:text-[#E4A93C] transition-colors flex items-center gap-1.5"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#03CF5D] animate-pulse" />
              전화상담
            </a>
            <a
              href="https://blog.naver.com/sarang8090"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#E4A93C] transition-colors"
            >
              네이버 블로그
            </a>
            <a
              href="https://map.naver.com/p/entry/place/1313104249?placePath=%2Fhome%3Fentry%3Dplt%26from%3Dmap%26fromPanelNum%3D1%26additionalHeight%3D76%26timestamp%3D202608061030%26locale%3Dko%26svcName%3Dmap_pcv5&searchType=place&lng=126.8951916&lat=35.1226735&c=15.00,0,0,0,dh"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#E4A93C] transition-colors text-[#85B6FF]"
            >
              오시는길
            </a>
          </nav>

          <div className="flex items-center gap-2.5">
            <a
              href="tel:062-675-8090"
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-sm md:text-base font-semibold text-[#FBFAF7] border border-[#FBFAF7]/40 rounded hover:bg-white/10 transition-colors"
            >
              062-675-8090
            </a>
            <a
              href="tel:062-675-8090"
              className="inline-flex items-center justify-center px-3.5 py-2 sm:px-4 sm:py-2 text-xs sm:text-base font-semibold bg-[#E4A93C] text-[#23291F] rounded hover:bg-[#d69b2d] transition-colors shadow-sm"
            >
              견학 · 상담 신청
            </a>
          </div>
        </div>

        {/* Mobile Sub-Nav */}
        <div className="md:hidden flex items-center justify-around border-t border-[#2C523B] mt-2.5 pt-2 px-4 text-xs font-semibold text-[#E8EDE4]">
          <a href="tel:062-675-8090" className="py-1 text-[#E4A93C] flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-[#03CF5D]" />
            전화상담
          </a>
          <span className="text-white/20">|</span>
          <a href="https://blog.naver.com/sarang8090" target="_blank" rel="noopener noreferrer" className="py-1 hover:text-white">블로그</a>
          <span className="text-white/20">|</span>
          <a
            href="https://map.naver.com/p/entry/place/1313104249?placePath=%2Fhome%3Fentry%3Dplt%26from%3Dmap%26fromPanelNum%3D1%26additionalHeight%3D76%26timestamp%3D202608061030%26locale%3Dko%26svcName%3Dmap_pcv5&searchType=place&lng=126.8951916&lat=35.1226735&c=15.00,0,0,0,dh"
            target="_blank"
            rel="noopener noreferrer"
            className="py-1 text-[#85B6FF]"
          >
            오시는길
          </a>
        </div>

        {/* Scroll Progress Bar */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-[#1F3D2B]/10 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#1F3D2B] to-[#E4A93C] transition-all duration-150 ease-out"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      </header>

      {/* ① Hero Section */}
      <section className="py-8 sm:py-14 md:py-24 bg-[#FBFAF7]">
        <div className="max-w-[1080px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-12 items-center">
            <div className="bg-white border border-[#E0E4DC] rounded p-4 sm:p-7 md:p-12 shadow-sm">
              <span className="inline-block text-sm sm:text-base md:text-lg font-semibold text-[#7A9070] mb-1.5 tracking-tight">
                걷기전문 · 실내산책 · 운동재활
              </span>
              <h1 className="font-serif-custom text-2xl sm:text-3xl md:text-5xl font-bold text-[#1F3D2B] mb-3 sm:mb-5 leading-tight tracking-tight">
                더사랑 주간보호센터
              </h1>

              {/* [3. 메인 카피 교체] */}
              <div className="mb-5 sm:mb-8 space-y-2.5 sm:space-y-4">
                <p className="text-lg sm:text-xl md:text-2xl font-bold text-[#1F3D2B] leading-snug">
                  100m 트랙이 있는 넓은 센터(걷기전문, 실내산책)
                </p>
                <p className="text-sm sm:text-base md:text-lg text-[#4A5243] leading-relaxed">
                  날마다, 시간 날 때마다, 움직일 때마다 걷는 운동이 가능한 센터
                </p>
                <div className="pt-1 flex flex-col gap-2">
                  <div className="flex items-center gap-2 sm:gap-2.5 bg-[#E8EDE4] text-[#1F3D2B] border border-[#7A9070]/30 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded font-semibold text-xs sm:text-sm md:text-base">
                    <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#1F3D2B] text-white font-black text-[10px] sm:text-xs flex items-center justify-center flex-shrink-0">
                      YES
                    </span>
                    <span>걷기 전문 더사랑 선택 YES</span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-2.5 bg-[#FDF2F2] text-[#B91C1C] border border-[#FCA5A5]/40 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded font-semibold text-xs sm:text-sm md:text-base">
                    <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#B91C1C] text-white font-black text-[10px] sm:text-xs flex items-center justify-center flex-shrink-0">
                      NO
                    </span>
                    <span>하루종일 앉아만 있는 센터 NO</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3">
                <a
                  href="tel:062-675-8090"
                  className="inline-flex items-center justify-center px-5 py-3 sm:px-6 sm:py-3.5 text-sm sm:text-base md:text-lg font-semibold bg-[#E4A93C] text-[#23291F] rounded hover:bg-[#d69b2d] transition-colors text-center"
                >
                  상담 문의 062-675-8090
                </a>
                <a
                  href="tel:062-675-8090"
                  className="inline-flex items-center justify-center px-5 py-3 sm:px-6 sm:py-3.5 text-sm sm:text-base md:text-lg font-semibold text-[#1F3D2B] border border-[#1F3D2B] rounded hover:bg-[#1F3D2B]/5 transition-colors text-center"
                >
                  견학 · 라운딩 신청
                </a>
              </div>
            </div>
            <div className="overflow-hidden rounded border border-[#E0E4DC] shadow-sm">
              <img
                src="/images/센터사진.jpg"
                alt="더사랑 주간보호센터 전경"
                className="w-full h-[200px] sm:h-[280px] md:h-[480px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ② Special Features Grid [4. '특별함' 3개 항목 수정] */}
      <section className="py-8 sm:py-14 md:py-24 bg-[#E8EDE4]">
        <div className="max-w-[1080px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-6 sm:mb-8 md:mb-12">
            <h2 className="font-serif-custom text-xl sm:text-2xl md:text-4xl font-bold text-[#1F3D2B] mb-2 sm:mb-3">
              더사랑 주간보호센터의 특별함
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-[#7A9070]">
              어르신이 안전하고 자유롭게 지내실 수 있는 최적의 환경
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-6">
            {/* ① 걷기전문, 실내산책 전문 */}
            <div className="bg-white border border-[#E0E4DC] rounded overflow-hidden shadow-sm flex flex-col">
              <img
                src="/images/실내산책.jpg"
                alt="100m 트랙 실내산책 공간"
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="p-4 sm:p-6 flex-grow flex flex-col justify-between">
                <div>
                  <div className="text-[11px] sm:text-xs font-bold text-[#7A9070] mb-0.5 sm:mb-1">특별함 01</div>
                  <h3 className="font-serif-custom text-lg sm:text-xl font-bold text-[#1F3D2B] mb-1 sm:mb-2">
                    걷기전문, 실내산책 전문
                  </h3>
                  <p className="text-xs sm:text-base text-[#4A5243] leading-relaxed">
                    100m 트랙이 있는 넓은 센터(200평), 계단없이 한 층, 부딪힘 없이 실내산책 가능
                  </p>
                </div>
              </div>
            </div>

            {/* ② 운동재활 전문 */}
            <div className="bg-white border border-[#E0E4DC] rounded overflow-hidden shadow-sm flex flex-col">
              <div className="relative">
                <img
                  src="/images/슬링.jpg"
                  alt="운동재활 기구 슬링 및 필라테스링"
                  className="w-full aspect-[4/3] object-cover"
                />
                <span className="absolute bottom-1.5 right-1.5 sm:bottom-2 sm:right-2 bg-black/60 text-white text-[10px] sm:text-xs px-2 py-0.5 sm:px-2.5 sm:py-1 rounded">
                  필라테스링 높이~ 높이~ 더높이~~~~
                </span>
              </div>
              <div className="p-4 sm:p-6 flex-grow flex flex-col justify-between">
                <div>
                  <div className="text-[11px] sm:text-xs font-bold text-[#7A9070] mb-0.5 sm:mb-1">특별함 02</div>
                  <h3 className="font-serif-custom text-lg sm:text-xl font-bold text-[#1F3D2B] mb-1 sm:mb-2">
                    운동재활 전문
                  </h3>
                  <p className="text-xs sm:text-base font-semibold text-[#1F3D2B] mb-1 sm:mb-2">
                    &quot;넓은 곳에서 마음대로 운동하세요^^&quot;
                  </p>
                  <p className="text-xs sm:text-sm md:text-base text-[#4A5243] leading-relaxed">
                    바디힐더, 슬링, 스모비, 필라테스링 등 전문화된 운동기구를 이용한 재활 운동
                  </p>
                </div>
              </div>
            </div>

            {/* ③ 특화된 사회적응 프로그램 */}
            <div className="bg-white border border-[#E0E4DC] rounded overflow-hidden shadow-sm flex flex-col">
              <div className="relative">
                <img
                  src="/images/숲체험.jpg"
                  alt="숲체험 나들이"
                  className="w-full aspect-[4/3] object-cover"
                />
                <span className="absolute bottom-1.5 right-1.5 sm:bottom-2 sm:right-2 bg-black/60 text-white text-[10px] sm:text-xs px-2 py-0.5 sm:px-2.5 sm:py-1 rounded">
                  가슴펴고 하늘을 향해 숨, 깊~~~게 피톤치드 마시기
                </span>
              </div>
              <div className="p-4 sm:p-6 flex-grow flex flex-col justify-between">
                <div>
                  <div className="text-[11px] sm:text-xs font-bold text-[#7A9070] mb-0.5 sm:mb-1">특별함 03</div>
                  <h3 className="font-serif-custom text-lg sm:text-xl font-bold text-[#1F3D2B] mb-1 sm:mb-2">
                    특화된 사회적응 프로그램
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-[#4A5243] leading-relaxed">
                    숲체험, 나들이, 맛집탐방, 시장보기, 이미용실 이용 등... 지역사회 속에서 행복찾기
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ③ Director Greeting */}
      <section className="py-8 sm:py-14 md:py-24 bg-[#FBFAF7]">
        <div className="max-w-[1080px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-[360px_1fr] gap-5 md:gap-12 items-start">
            <div className="overflow-hidden rounded border border-[#E0E4DC] shadow-sm">
              <img
                src="/images/대표원장 인삿말.jpg"
                alt="임의숙 원장"
                className="w-full h-[240px] sm:h-[340px] md:h-[520px] object-cover"
              />
            </div>
            <div className="text-sm sm:text-base md:text-lg leading-relaxed text-[#23291F] space-y-3 sm:space-y-4 md:space-y-5">
              <p className="text-base sm:text-lg md:text-xl font-medium text-[#1F3D2B]">
                &quot;어르신~~&quot;<br />이 말 한마디에 마음이 따뜻해지고, 또 애잔해집니다.
              </p>
              <p>
                어르신 한 분 한 분의 인생을 생각하면<br />
                얼마나 힘껏 살아내셨을까 싶어요.<br />
                힘드셨을 텐데도 늘 웃어주시고 사랑을 표현해 주십니다.<br />
                그래서 저희 직원들은 어르신들께 오히려 힘을 얻습니다.
              </p>
              <p>
                저는 어릴 때 할머니 할아버지 사랑을 듬뿍 받고 자랐어요.<br />
                그 마음이 이어져 사회복지를 공부했고,<br />
                노인복지시설부터 요양병원까지 30여 년을 어르신들과 함께했습니다.
              </p>
              <p>
                어느덧 제 나이도 예순을 바라봅니다.<br />
                그래서 저는 <strong className="text-[#1F3D2B] font-semibold">나 자신을 대하듯 어르신을 봅니다.</strong>
              </p>
              <p>
                어르신이 웃으시면 오늘 하루도 좋겠구나 싶고,<br />
                얼굴에 근심이 비치면 무슨 일이 있으신지 걱정이 앞섭니다.
              </p>
              <p>어르신이 웃고 행복하실 수 있도록 마음을 다하겠습니다.</p>
              <div className="pt-3 sm:pt-6 text-right font-serif-custom text-base sm:text-xl font-bold text-[#1F3D2B]">
                더사랑 주간보호센터 원장 임의숙
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ④ Senior Story */}
      <section className="py-8 sm:py-14 md:py-24 bg-[#E8EDE4]">
        <div className="max-w-[1080px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-5 sm:mb-8">
            <h2 className="font-serif-custom text-xl sm:text-2xl md:text-4xl font-bold text-[#1F3D2B] leading-snug">
              &quot;죽을 때까지 못 신을 줄 알았던 새 등산화를<br />숲체험에서 신었습니다&quot;
            </h2>
          </div>

          <div className="mb-5 sm:mb-8 md:mb-12 overflow-hidden rounded border border-[#E0E4DC] shadow-sm">
            <img
              src="/images/사연자어르신숲체험사진.jpg"
              alt="숲체험에 참여하신 김OO 어르신"
              className="w-full h-[180px] sm:h-[260px] md:h-[480px] object-cover"
            />
          </div>

          <div className="max-w-[840px] mx-auto text-sm sm:text-base md:text-xl leading-relaxed text-[#23291F] space-y-3 sm:space-y-4 md:space-y-6">
            <p>
              김○○ 어르신은 여든여섯 되신 남자 어르신이에요.<br />
              2025년 6월부터 저희 센터에 나오고 계십니다.<br />
              따님께서 인터넷으로 프로그램을 보시고 마음에 든다며 먼저 연락을 주셨어요.
            </p>
            <p>
              정년퇴직을 하시고는 특별히 하실 일 없이 댁에서 지내셨대요.<br />
              그래도 친구분들 모임도 나가시고 등산도 다니셨다고 합니다.<br />
              그렇게 십 년, 다시 오 년이 흐르는 동안<br />
              친구분들이 한 분씩 세상을 떠나셨습니다.<br />
              바깥 활동이 점점 줄고, 댁에만 계시는 날이 많아졌어요.
            </p>
            <p>
              구 년 전에는 왼쪽 눈이 잘 안 보이셔서 병원 검사를 받으셨고,<br />
              뇌하수체가 커진 것이 발견되어 수술을 받으셨습니다.<br />
              그 뒤 이 년 만에 암 판정을 받아 다시 수술을 하셨고,<br />
              움직이지 못한 채 오랫동안 병상에 누워 계셨어요.<br />
              긴 병원 생활로 양쪽 무릎이 굳어서,<br />
              지팡이를 짚고도 누가 붙잡아 드려야 겨우 걸으실 수 있었습니다.
            </p>
            <p>
              2025년 6월, 처음 센터에 오셨을 때는<br />
              주간보호가 어떤 곳인지 모르셔서 많이 거부하셨어요.<br />
              가족들이 &quot;딱 사흘만 다녀보세요&quot; 하고 겨우 설득해 모시고 오셨지요.
            </p>
            <p>그런데 사흘이 되기도 전에 어르신이 이렇게 말씀하셨습니다.</p>
          </div>

          {/* Signature Quote 1 */}
          <div className="my-4 sm:my-6 md:my-10 max-w-[840px] mx-auto bg-[#1F3D2B] text-[#FBFAF7] p-4 sm:p-6 md:p-12 rounded-lg text-center shadow-lg border border-white/10">
            <blockquote className="font-serif-custom text-base sm:text-xl md:text-3xl font-bold leading-relaxed">
              &quot;마음대로 운동할 수 있는 곳이 다 있다니.&quot;
            </blockquote>
          </div>

          <div className="max-w-[840px] mx-auto text-sm sm:text-base md:text-xl leading-relaxed text-[#23291F] space-y-3 sm:space-y-4 md:space-y-6">
            <p>
              센터가 넓어서 걷고 싶을 때 걸을 수 있고,<br />
              직원들이 옆에서 친절하게 같이 걸어주니 너무 좋다고 하셨어요.
            </p>
            <p>
              보행차를 밀며 하는 실내 산책은 다리 힘을 키우는 데 정말 큰 효자였습니다.<br />
              지금도 지팡이는 짚으시지만,<br />
              예전과 다르게 누가 붙잡아 드리지 않아도 혼자 걸으십니다.
            </p>
            <p>
              2025년, 한 달에 두 번 있는 숲체험에 다녀오시던 길이었어요.<br />
              돌아오는 차 안에서 어르신이 이렇게 고백하셨습니다.
            </p>
          </div>

          {/* Signature Quote 2 */}
          <div className="my-4 sm:my-6 md:my-10 max-w-[840px] mx-auto bg-[#1F3D2B] text-[#FBFAF7] p-4 sm:p-6 md:p-12 rounded-lg text-center shadow-lg border border-white/10">
            <blockquote className="font-serif-custom text-base sm:text-xl md:text-3xl font-bold leading-relaxed">
              &quot;나에게 이런 기적 같은 일이 있다니.&quot;
            </blockquote>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-6 my-4 sm:my-8">
            <img
              src="/images/어르신등산화.jpg"
              alt="어르신의 새 등산화"
              className="w-full aspect-[4/3] object-cover rounded border border-[#E0E4DC]"
            />
            <img
              src="/images/등산화와함께찰칵.jpg"
              alt="새 등산화를 신고 숲길을 걸으신 모습"
              className="w-full aspect-[4/3] object-cover rounded border border-[#E0E4DC]"
            />
          </div>

          <div className="max-w-[840px] mx-auto text-sm sm:text-base md:text-xl leading-relaxed text-[#23291F] space-y-3 sm:space-y-4 md:space-y-6">
            <p>
              아프시기 전에 등산화를 사두셨는데,<br />
              한 번도 못 신어보고 죽겠구나 생각하셨대요.<br />
              그 새 등산화를 처음으로 신고 숲길을 걸으셨다며 눈물을 훔치셨습니다.
            </p>
            <p>
              저 등산화를 언제 신어보나, 신발장만 우두커니 바라보셨는데<br />
              버리지 않고 놔두었더니 이런 날이 왔다며<br />
              몇 번이고 고맙다고 인사를 하셨어요.
            </p>
          </div>
        </div>
      </section>

      {/* ⑤ Programs [6. 프로그램 섹션 재구성: 1~5 순서 재구성] */}
      <section className="py-8 sm:py-14 md:py-24 bg-[#FBFAF7]">
        <div className="max-w-[1080px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-6 sm:mb-10 md:mb-16">
            <h2 className="font-serif-custom text-xl sm:text-2xl md:text-4xl font-bold text-[#1F3D2B] mb-2 sm:mb-3">
              프로그램
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-[#7A9070]">
              어르신의 신체 건강과 인지 활력을 되찾아 드리는 특화 프로그램
            </p>
          </div>

          {/* 1. 걷기전문, 산책전문 */}
          <div className="mb-8 sm:mb-12 md:mb-16">
            <div className="border-b-2 border-[#E8EDE4] pb-2 sm:pb-3 mb-3 sm:mb-4">
              <h3 className="font-serif-custom text-lg sm:text-2xl md:text-3xl font-bold text-[#1F3D2B]">
                1. 걷기전문, 산책전문
              </h3>
            </div>
            <p className="text-xs sm:text-base md:text-lg text-[#4A5243] mb-3 sm:mb-4 leading-relaxed">
              <strong className="text-[#1F3D2B]">100m 실내 트랙 산책로 상시 개방</strong> — 계단 없이 평평한 200평 단층 공간에서 보행차 및 자율 걷기, 아침 다함께 걷기 운동을 시간 날 때마다 진행합니다.
            </p>

            {/* 메인 걷기 트랙 사진 2열 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-4 mb-3 sm:mb-4">
              <div className="overflow-hidden rounded border border-[#E0E4DC] relative">
                <img src="/images/더사랑 걷기전문 사진추가2.jpg" alt="100m 트랙 실내 산책 훈련" className="w-full h-[160px] sm:h-[220px] md:h-[280px] object-cover" />
                <span className="absolute bottom-1.5 left-1.5 sm:bottom-3 sm:left-3 bg-[#1F3D2B]/85 text-white text-[10px] sm:text-xs md:text-sm px-2 py-1 sm:px-3 sm:py-1.5 rounded shadow">
                  100m 트랙 보행 보조 & 자율 걷기
                </span>
              </div>
              <div className="overflow-hidden rounded border border-[#E0E4DC] relative">
                <img src="/images/더사랑 걷기전문 사진추가.jpg" alt="선생님과 1:1 보행 동행" className="w-full h-[160px] sm:h-[220px] md:h-[280px] object-cover" />
                <span className="absolute bottom-1.5 left-1.5 sm:bottom-3 sm:left-3 bg-[#1F3D2B]/85 text-white text-[10px] sm:text-xs md:text-sm px-2 py-1 sm:px-3 sm:py-1.5 rounded shadow">
                  전문 인력의 안심 1:1 보행 동행
                </span>
              </div>
            </div>

            {/* 서브 걷기 활동 사진 3열 */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-4 sm:mb-6">
              <div className="overflow-hidden rounded border border-[#E0E4DC] relative">
                <img src="/images/더사랑 걷기전문 사진추가3.jpg" alt="다정하게 함께 걷는 어르신들" className="w-full h-[110px] sm:h-[150px] md:h-[190px] object-cover" />
                <span className="absolute bottom-1 left-1 bg-[#1F3D2B]/80 text-white text-[9px] sm:text-xs px-1.5 py-0.5 rounded">
                  다정한 보행 동행
                </span>
              </div>
              <div className="overflow-hidden rounded border border-[#E0E4DC] relative">
                <img src="/images/실내산책.jpg" alt="100m 트랙 안전 실내 산책" className="w-full h-[110px] sm:h-[150px] md:h-[190px] object-cover" />
                <span className="absolute bottom-1 left-1 bg-[#1F3D2B]/80 text-white text-[9px] sm:text-xs px-1.5 py-0.5 rounded">
                  자유로운 트랙 걷기
                </span>
              </div>
              <div className="overflow-hidden rounded border border-[#E0E4DC] relative">
                <img src="/images/아침체조.jpg" alt="다함께 걷기 및 아침 체조" className="w-full h-[110px] sm:h-[150px] md:h-[190px] object-cover" />
                <span className="absolute bottom-1 left-1 bg-[#1F3D2B]/80 text-white text-[9px] sm:text-xs px-1.5 py-0.5 rounded">
                  다함께 걷기 체조
                </span>
              </div>
            </div>
          </div>

          {/* 2. 특화된 운동 · 재활 */}
          <div className="mb-8 sm:mb-12 md:mb-16">
            <div className="border-b-2 border-[#E8EDE4] pb-2 sm:pb-3 mb-3 sm:mb-4">
              <h3 className="font-serif-custom text-lg sm:text-2xl md:text-3xl font-bold text-[#1F3D2B]">
                2. 특화된 운동 · 재활
              </h3>
            </div>
            <p className="text-xs sm:text-base md:text-lg text-[#4A5243] mb-3 sm:mb-4 leading-relaxed">
              근력 저하와 관절 굳음을 예방하고 잔존 기능을 강화하는 맞춤형 재활 피트니스입니다.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2.5 mb-4 sm:mb-6 text-xs sm:text-base md:text-lg text-[#23291F]">
              <li className="flex items-center gap-2"><span className="text-[#7A9070] text-lg">•</span> 스모비(Smovey) 진동 운동 — 균형 감각 회복</li>
              <li className="flex items-center gap-2"><span className="text-[#7A9070] text-lg">•</span> 시니어 전용 맞춤 피트니스 기구 운동</li>
              <li className="flex items-center gap-2"><span className="text-[#7A9070] text-lg">•</span> 전신 관절 스트레칭 및 탄성 고무밴드 근력 운동</li>
              <li className="flex items-center gap-2"><span className="text-[#7A9070] text-lg">•</span> 바디힐더 및 슬링 기구 재활 운동, 편백 족욕</li>
            </ul>
            <div className="grid grid-cols-3 gap-2 sm:gap-3.5 md:gap-4">
              <div className="flex flex-col">
                <img src="/images/특화운동 스모비.jpg" alt="스모비 운동" className="w-full aspect-[4/3] object-cover rounded border border-[#E0E4DC]" />
                <span className="text-[10px] sm:text-xs md:text-sm text-[#7A9070] mt-1 text-center font-medium">스모비(Smovey) 운동</span>
              </div>
              <div className="flex flex-col">
                <img src="/images/특화운동 시니어 피티니스.jpg" alt="시니어 맞춤 피트니스" className="w-full aspect-[4/3] object-cover rounded border border-[#E0E4DC]" />
                <span className="text-[10px] sm:text-xs md:text-sm text-[#7A9070] mt-1 text-center font-medium">시니어 피트니스 기구</span>
              </div>
              <div className="flex flex-col">
                <img src="/images/특화운동 관절운동.jpg" alt="관절 스트레칭" className="w-full aspect-[4/3] object-cover rounded border border-[#E0E4DC]" />
                <span className="text-[10px] sm:text-xs md:text-sm text-[#7A9070] mt-1 text-center font-medium">전신 관절 스트레칭</span>
              </div>
              <div className="flex flex-col">
                <img src="/images/특화운동 고무밴ㄷ.jpg" alt="탄성 고무밴드 운동" className="w-full aspect-[4/3] object-cover rounded border border-[#E0E4DC]" />
                <span className="text-[10px] sm:text-xs md:text-sm text-[#7A9070] mt-1 text-center font-medium">탄성 고무밴드 운동</span>
              </div>
              <div className="flex flex-col">
                <img src="/images/슬링.jpg" alt="슬링 재활 운동" className="w-full aspect-[4/3] object-cover rounded border border-[#E0E4DC]" />
                <span className="text-[10px] sm:text-xs md:text-sm text-[#7A9070] mt-1 text-center font-medium">슬링 재활 운동</span>
              </div>
              <div className="flex flex-col">
                <img src="/images/족욕.jpg" alt="족욕 물리치료" className="w-full aspect-[4/3] object-cover rounded border border-[#E0E4DC]" />
                <span className="text-[10px] sm:text-xs md:text-sm text-[#7A9070] mt-1 text-center font-medium">편백 족욕 및 물리치료</span>
              </div>
            </div>
          </div>

          {/* 3. 인지기능 향상프로그램 */}
          <div className="mb-8 sm:mb-12 md:mb-16">
            <div className="border-b-2 border-[#E8EDE4] pb-2 sm:pb-3 mb-3 sm:mb-4">
              <h3 className="font-serif-custom text-lg sm:text-2xl md:text-3xl font-bold text-[#1F3D2B]">
                3. 인지기능 향상프로그램
              </h3>
            </div>
            <p className="text-xs sm:text-base md:text-lg text-[#4A5243] mb-3 sm:mb-4 leading-relaxed">
              스마트 AI 기술을 활용한 디지털 인지 훈련과 손을 쓰는 오감 자극 프로그램으로 치매를 예방하고 뇌 활성화를 돕습니다.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2.5 mb-4 sm:mb-6 text-xs sm:text-base md:text-lg text-[#23291F]">
              <li className="flex items-center gap-2"><span className="text-[#7A9070] text-lg">•</span> AI 활용 스마트 디지털 인지 강화 훈련</li>
              <li className="flex items-center gap-2"><span className="text-[#7A9070] text-lg">•</span> 팀별 두뇌 대결 및 협동 블록 게임</li>
              <li className="flex items-center gap-2"><span className="text-[#7A9070] text-lg">•</span> 소근육 자극 미술·공예 및 원예 체험</li>
              <li className="flex items-center gap-2"><span className="text-[#7A9070] text-lg">•</span> 계절별 실내 오감 체험 (딸기 수확 등)</li>
            </ul>
            <div className="grid grid-cols-3 gap-2 sm:gap-3.5 md:gap-4">
              <div className="flex flex-col">
                <img src="/images/인지기능 사진추가4.jpg" alt="워크북 인지 학습" className="w-full aspect-[4/3] object-cover rounded border border-[#E0E4DC]" />
                <span className="text-[10px] sm:text-xs md:text-sm text-[#7A9070] mt-1 text-center font-medium">워크북 두뇌 학습</span>
              </div>
              <div className="flex flex-col">
                <img src="/images/인지기능 사진추가.jpg" alt="소근육 미술 인지" className="w-full aspect-[4/3] object-cover rounded border border-[#E0E4DC]" />
                <span className="text-[10px] sm:text-xs md:text-sm text-[#7A9070] mt-1 text-center font-medium">단풍잎 미술 공예</span>
              </div>
              <div className="flex flex-col">
                <img src="/images/인지기능 사진추가2.jpg" alt="종이꽃 만들기" className="w-full aspect-[4/3] object-cover rounded border border-[#E0E4DC]" />
                <span className="text-[10px] sm:text-xs md:text-sm text-[#7A9070] mt-1 text-center font-medium">종이꽃 공예 활동</span>
              </div>
              <div className="flex flex-col">
                <img src="/images/인지기능 사진추가3.jpg" alt="곡물 모자이크 활동" className="w-full aspect-[4/3] object-cover rounded border border-[#E0E4DC]" />
                <span className="text-[10px] sm:text-xs md:text-sm text-[#7A9070] mt-1 text-center font-medium">곡물 모자이크 인지</span>
              </div>
              <div className="flex flex-col">
                <img src="/images/팀대결.jpg" alt="팀대결 인지활동" className="w-full aspect-[4/3] object-cover rounded border border-[#E0E4DC]" />
                <span className="text-[10px] sm:text-xs md:text-sm text-[#7A9070] mt-1 text-center font-medium">팀별 협동 인지 대결</span>
              </div>
              <div className="flex flex-col">
                <img src="/images/딸기실내체험.jpg" alt="딸기 실내 오감체험" className="w-full aspect-[4/3] object-cover rounded border border-[#E0E4DC]" />
                <span className="text-[10px] sm:text-xs md:text-sm text-[#7A9070] mt-1 text-center font-medium">오감 자극 실내 체험</span>
              </div>
            </div>
          </div>

          {/* 4. 특화된 사회적응프로그램 */}
          <div className="mb-8 sm:mb-12 md:mb-16">
            <div className="border-b-2 border-[#E8EDE4] pb-2 sm:pb-3 mb-4 sm:mb-6">
              <h3 className="font-serif-custom text-lg sm:text-2xl md:text-3xl font-bold text-[#1F3D2B]">
                4. 특화된 사회적응프로그램
              </h3>
            </div>

            {/* 숲체험 & 국화터널 */}
            <div className="mb-2 sm:mb-3">
              <p className="text-xs sm:text-base md:text-lg text-[#4A5243] leading-relaxed">
                <strong className="text-[#1F3D2B]">숲체험 & 국화터널 야외 나들이</strong> — 월 2회 전용 버스 이동, 숲해설가와 힐링 산책
              </p>
            </div>
            <div className="grid grid-cols-3 gap-2 sm:gap-3.5 md:gap-4 mb-3">
              <div className="flex flex-col">
                <img src="/images/숲체험 국화터널 사진추가.jpg" alt="국화터널 나들이" className="w-full aspect-[4/3] object-cover rounded border border-[#E0E4DC]" />
                <span className="block text-[10px] sm:text-xs md:text-sm text-[#7A9070] mt-1 text-center font-medium">국화꽃 터널 산책</span>
              </div>
              <div className="flex flex-col">
                <img src="/images/숲체험 사진추가.jpg" alt="숲 데크길 힐링" className="w-full aspect-[4/3] object-cover rounded border border-[#E0E4DC]" />
                <span className="block text-[10px] sm:text-xs md:text-sm text-[#7A9070] mt-1 text-center font-medium">숲길 힐링 산책</span>
              </div>
              <div className="flex flex-col">
                <img src="/images/숲체험 사진추가2.jpg" alt="야외 부스 체험" className="w-full aspect-[4/3] object-cover rounded border border-[#E0E4DC]" />
                <span className="block text-[10px] sm:text-xs md:text-sm text-[#7A9070] mt-1 text-center font-medium">야외 오감 힐링 체험</span>
              </div>
              <div className="flex flex-col">
                <img src="/images/숲체험.jpg" alt="편백 숲체험" className="w-full aspect-[4/3] object-cover rounded border border-[#E0E4DC]" />
                <span className="block text-[10px] sm:text-xs md:text-sm text-[#7A9070] mt-1 text-center font-medium">편백 숲길 걷기</span>
              </div>
              <div className="flex flex-col">
                <img src="/images/무등산숲체험.jpg" alt="무등산 숲체험" className="w-full aspect-[4/3] object-cover rounded border border-[#E0E4DC]" />
                <span className="block text-[10px] sm:text-xs md:text-sm text-[#7A9070] mt-1 text-center font-medium">무등산 자연 나들이</span>
              </div>
              <div className="flex flex-col">
                <img src="/images/가을숲체험.jpg" alt="가을 숲체험" className="w-full aspect-[4/3] object-cover rounded border border-[#E0E4DC]" />
                <span className="block text-[10px] sm:text-xs md:text-sm text-[#7A9070] mt-1 text-center font-medium">사계절 야외 소풍</span>
              </div>
            </div>
            <div className="bg-[#E8EDE4] p-2.5 sm:p-3 rounded text-xs sm:text-sm md:text-base font-medium text-[#1F3D2B] mb-5 sm:mb-8 text-center">
              🌲 &quot;은은한 <strong className="font-bold underline">편백</strong> 오일향 가득한 숲길 걷기 및 국화터널 나들이로 몸과 마음의 피톤치드 충전!&quot;
            </div>

            {/* 맛집 탐방 */}
            <div className="mb-2 sm:mb-3">
              <p className="text-xs sm:text-base md:text-lg text-[#4A5243] leading-relaxed">
                <strong className="text-[#1F3D2B]">지역 맛집 탐방</strong> — 추어탕, 떡갈비, 오리탕 등 어르신 선호 맞춤 외식
              </p>
            </div>
            <div className="grid grid-cols-3 gap-2 sm:gap-3.5 md:gap-4 mb-5 sm:mb-8">
              <div className="flex flex-col">
                <img src="/images/맛집탐방.jpg" alt="맛집탐방 1" className="w-full aspect-[4/3] object-cover rounded border border-[#E0E4DC]" />
                <span className="text-[10px] sm:text-xs md:text-sm text-[#7A9070] mt-1 text-center font-medium">건강 밥상 외식</span>
              </div>
              <div className="flex flex-col">
                <img src="/images/맛집탐방2.jpg" alt="맛집탐방 2" className="w-full aspect-[4/3] object-cover rounded border border-[#E0E4DC]" />
                <span className="text-[10px] sm:text-xs md:text-sm text-[#7A9070] mt-1 text-center font-medium">영양 든든 식사</span>
              </div>
              <div className="flex flex-col">
                <img src="/images/맛집탐방3.jpg" alt="맛집탐방 3" className="w-full aspect-[4/3] object-cover rounded border border-[#E0E4DC]" />
                <span className="text-[10px] sm:text-xs md:text-sm text-[#7A9070] mt-1 text-center font-medium">제철 보양식 탐방</span>
              </div>
              <div className="flex flex-col">
                <img src="/images/맛집탐방4.jpg" alt="맛집탐방 4" className="w-full aspect-[4/3] object-cover rounded border border-[#E0E4DC]" />
                <span className="text-[10px] sm:text-xs md:text-sm text-[#7A9070] mt-1 text-center font-medium">정갈한 한정식 나들이</span>
              </div>
              <div className="flex flex-col">
                <img src="/images/맛집탐방5.jpg" alt="맛집탐방 5" className="w-full aspect-[4/3] object-cover rounded border border-[#E0E4DC]" />
                <span className="text-[10px] sm:text-xs md:text-sm text-[#7A9070] mt-1 text-center font-medium">어르신 취향 맞춤 맛집</span>
              </div>
              <div className="flex flex-col">
                <img src="/images/토요시장체험.jpg" alt="지역 시장 맛집" className="w-full aspect-[4/3] object-cover rounded border border-[#E0E4DC]" />
                <span className="text-[10px] sm:text-xs md:text-sm text-[#7A9070] mt-1 text-center font-medium">전통시장 별미 나들이</span>
              </div>
            </div>

            {/* 시장보기 & 가족참여 */}
            <p className="text-xs sm:text-base md:text-lg text-[#4A5243] mb-2 sm:mb-3 leading-relaxed">
              <strong className="text-[#1F3D2B]">토요시장 구경 & 장보기</strong> — 장보기와 물건값 계산으로 사회 적응력과 일상 감각 유지
            </p>
            <div className="grid grid-cols-2 gap-2.5 sm:gap-4 mb-5 sm:mb-8">
              <img src="/images/토요시장체험.jpg" alt="토요시장 구경 1" className="w-full aspect-[4/3] object-cover rounded border border-[#E0E4DC]" />
              <img src="/images/토요시장체험2.jpg" alt="토요시장 구경 2" className="w-full aspect-[4/3] object-cover rounded border border-[#E0E4DC]" />
            </div>

            <p className="text-xs sm:text-base md:text-lg text-[#4A5243] mb-2 sm:mb-3 leading-relaxed">
              <strong className="text-[#1F3D2B]">가족 참여 프로그램</strong> — 보호자와 함께 걷는 숲길, 꽃손수건 만들기, 추억의 포토북
            </p>
            <div>
              <img src="/images/가족과함께참여하는프로그램.jpg" alt="가족 참여 프로그램" className="w-full aspect-[16/9] object-cover rounded border border-[#E0E4DC]" />
            </div>
          </div>

          {/* 5. 공연 */}
          <div>
            <div className="border-b-2 border-[#E8EDE4] pb-2 sm:pb-3 mb-3 sm:mb-4">
              <h3 className="font-serif-custom text-lg sm:text-2xl md:text-3xl font-bold text-[#1F3D2B]">
                5. 공연
              </h3>
            </div>
            <p className="text-xs sm:text-base md:text-lg text-[#4A5243] mb-3 sm:mb-4 leading-relaxed">
              생신 축하 잔치, 전문 예술인 초청 위문 공연, 어르신들이 직접 무대에 서는 참여형 발표회까지 웃음과 신명이 넘칩니다.
            </p>
            <div className="flex items-center justify-between mb-2 sm:mb-3">
              <ul className="space-y-1 sm:space-y-2 text-xs sm:text-base md:text-lg text-[#23291F]">
                <li className="flex items-center gap-2"><span className="text-[#7A9070] text-lg">•</span> 따뜻하고 감동 가득한 어르신 생신 축하 잔치</li>
                <li className="flex items-center gap-2"><span className="text-[#7A9070] text-lg">•</span> 국악, 부채춤, 색소폰 연주, 숟가락 난타 위문 공연</li>
                <li className="flex items-center gap-2"><span className="text-[#7A9070] text-lg">•</span> 어르신들이 직접 준비한 연말 송년 무대와 노래자랑</li>
              </ul>
            </div>
            <div className="grid grid-cols-3 gap-2 sm:gap-3.5 md:gap-4">
              <div className="flex flex-col">
                <img src="/images/생신체험.jpg" alt="생신 축하 잔치" className="w-full aspect-[4/3] object-cover rounded border border-[#E0E4DC]" />
                <span className="text-[10px] sm:text-xs md:text-sm text-[#7A9070] mt-1 text-center font-medium">생신 축하 잔치</span>
              </div>
              <div className="flex flex-col">
                <img src="/images/문화예술공연.jpg" alt="문화 예술 공연 1" className="w-full aspect-[4/3] object-cover rounded border border-[#E0E4DC]" />
                <span className="text-[10px] sm:text-xs md:text-sm text-[#7A9070] mt-1 text-center font-medium">국악 및 무용 공연</span>
              </div>
              <div className="flex flex-col">
                <img src="/images/문화예술공연3.jpg" alt="색소폰 공연" className="w-full aspect-[4/3] object-cover rounded border border-[#E0E4DC]" />
                <span className="text-[10px] sm:text-xs md:text-sm text-[#7A9070] mt-1 text-center font-medium">색소폰 연주</span>
              </div>
              <div className="flex flex-col">
                <img src="/images/문화예술공연2.jpg" alt="문화 예술 공연 2" className="w-full aspect-[4/3] object-cover rounded border border-[#E0E4DC]" />
                <span className="text-[10px] sm:text-xs md:text-sm text-[#7A9070] mt-1 text-center font-medium">전통 가락 위문 공연</span>
              </div>
              <div className="flex flex-col">
                <img src="/images/문화예술공연4.jpg" alt="문화 예술 공연 3" className="w-full aspect-[4/3] object-cover rounded border border-[#E0E4DC]" />
                <span className="text-[10px] sm:text-xs md:text-sm text-[#7A9070] mt-1 text-center font-medium">흥겨운 트롯 위문 무대</span>
              </div>
              <div className="flex flex-col">
                <img src="/images/어르신들이준비한송년공연2.jpg" alt="송년 공연" className="w-full aspect-[4/3] object-cover rounded border border-[#E0E4DC]" />
                <span className="text-[10px] sm:text-xs md:text-sm text-[#7A9070] mt-1 text-center font-medium">어르신 발표회</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ⑥ Daily Schedule [7. 하루 일과 섹션 수정: 오전/오후 큰 구분 + 사진 교체 + 바디힐더] */}
      <section className="py-8 sm:py-14 md:py-24 bg-[#E8EDE4]">
        <div className="max-w-[1080px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-6 sm:mb-10 md:mb-12">
            <h2 className="font-serif-custom text-xl sm:text-2xl md:text-4xl font-bold text-[#1F3D2B] mb-2 sm:mb-3">
              하루 일과
            </h2>
            <p className="text-xs sm:text-base md:text-lg text-[#7A9070]">
              규칙적이고 세심한 간호 케어로 채워지는 안전하고 활기찬 하루
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-5 md:gap-12 items-start">
            {/* Morning and Afternoon Big Blocks */}
            <div className="space-y-4 sm:space-y-6">
              {/* 오전 일정 */}
              <div className="bg-white rounded-lg border border-[#E0E4DC] p-4 sm:p-6 md:p-8 shadow-sm">
                <div className="flex items-center gap-2.5 sm:gap-3 border-b border-[#E8EDE4] pb-3 mb-3 sm:pb-4 sm:mb-4">
                  <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#E4A93C] text-[#23291F] flex items-center justify-center font-bold text-xs sm:text-sm shadow-sm flex-shrink-0">
                    오전
                  </span>
                  <div>
                    <h3 className="font-serif-custom text-base sm:text-xl md:text-2xl font-bold text-[#1F3D2B]">
                      오전 일과 (07:00 ~ 12:30)
                    </h3>
                    <p className="text-[11px] sm:text-xs md:text-sm text-[#7A9070]">건강 체크 · 영양 아침 · 트랙 걷기 · 바디힐더 재활</p>
                  </div>
                </div>

                <div className="space-y-2.5 sm:space-y-3.5 text-xs sm:text-sm md:text-base text-[#23291F]">
                  <div className="flex gap-2 sm:gap-3">
                    <span className="font-bold text-[#1F3D2B] w-16 sm:w-20 flex-shrink-0 text-[11px] sm:text-sm">07:00~08:30</span>
                    <div>
                      <strong className="text-[#1F3D2B]">등원 및 건강 확인 (노인전문간호사)</strong>
                      <p className="text-[11px] sm:text-xs md:text-sm text-[#555555]">혈압·체온·혈당 측정 및 정기 투약 관리, 아침 영양죽 식사</p>
                    </div>
                  </div>
                  <div className="flex gap-2 sm:gap-3">
                    <span className="font-bold text-[#1F3D2B] w-16 sm:w-20 flex-shrink-0 text-[11px] sm:text-sm">08:30~09:30</span>
                    <div>
                      <strong className="text-[#1F3D2B]">아침 산책 & 노래 체조</strong>
                      <p className="text-[11px] sm:text-xs md:text-sm text-[#555555]">100m 트랙에서 흥겨운 노래에 맞춰 전신 스트레칭 및 다 함께 걷기</p>
                    </div>
                  </div>
                  <div className="flex gap-2 sm:gap-3">
                    <span className="font-bold text-[#1F3D2B] w-16 sm:w-20 flex-shrink-0 text-[11px] sm:text-sm">09:30~11:30</span>
                    <div>
                      <strong className="text-[#1F3D2B]">바디힐더 · 인지 활동 · 물리치료</strong>
                      <p className="text-[11px] sm:text-xs md:text-sm text-[#555555]">바디힐더 기구 운동, AI 스마트 인지 훈련 및 외부 강사 특화 프로그램</p>
                    </div>
                  </div>
                  <div className="flex gap-2 sm:gap-3">
                    <span className="font-bold text-[#1F3D2B] w-16 sm:w-20 flex-shrink-0 text-[11px] sm:text-sm">11:30~12:30</span>
                    <div>
                      <strong className="text-[#1F3D2B]">입 운동 및 점심 식사</strong>
                      <p className="text-[11px] sm:text-xs md:text-sm text-[#555555]">연하 장애 예방 구강 체조 후, 노인전문 영양사가 설계한 5찬 균형 식사</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 오후 일정 */}
              <div className="bg-white rounded-lg border border-[#E0E4DC] p-4 sm:p-6 md:p-8 shadow-sm">
                <div className="flex items-center gap-2.5 sm:gap-3 border-b border-[#E8EDE4] pb-3 mb-3 sm:pb-4 sm:mb-4">
                  <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#1F3D2B] text-[#FBFAF7] flex items-center justify-center font-bold text-xs sm:text-sm shadow-sm flex-shrink-0">
                    오후
                  </span>
                  <div>
                    <h3 className="font-serif-custom text-base sm:text-xl md:text-2xl font-bold text-[#1F3D2B]">
                      오후 일과 (12:30 ~ 17:30)
                    </h3>
                    <p className="text-[11px] sm:text-xs md:text-sm text-[#7A9070]">휴식 및 오침 · 스모비 운동 · 요일별 특화 프로그램 · 안전 하원</p>
                  </div>
                </div>

                <div className="space-y-2.5 sm:space-y-3.5 text-xs sm:text-sm md:text-base text-[#23291F]">
                  <div className="flex gap-2 sm:gap-3">
                    <span className="font-bold text-[#1F3D2B] w-16 sm:w-20 flex-shrink-0 text-[11px] sm:text-sm">12:30~13:00</span>
                    <div>
                      <strong className="text-[#1F3D2B]">편안한 휴식 (오침)</strong>
                      <p className="text-[11px] sm:text-xs md:text-sm text-[#555555]">식후 따뜻한 온돌방 및 리클라이너에서 안락한 재충전</p>
                    </div>
                  </div>
                  <div className="flex gap-2 sm:gap-3">
                    <span className="font-bold text-[#1F3D2B] w-16 sm:w-20 flex-shrink-0 text-[11px] sm:text-sm">13:00~14:00</span>
                    <div>
                      <strong className="text-[#1F3D2B]">스모비 운동 & 시니어 피트니스</strong>
                      <p className="text-[11px] sm:text-xs md:text-sm text-[#555555]">파킨슨·치매 예방 스모비 진동 운동 및 균형 감각 강화</p>
                    </div>
                  </div>
                  <div className="flex gap-2 sm:gap-3">
                    <span className="font-bold text-[#1F3D2B] w-16 sm:w-20 flex-shrink-0 text-[11px] sm:text-sm">14:00~15:00</span>
                    <div>
                      <strong className="text-[#1F3D2B]">요일별 맞춤 특화 프로그램</strong>
                      <p className="text-[11px] sm:text-xs md:text-sm text-[#555555]">슬링 운동, 편백 족욕, 노래 교실, 민요·악단 공연, 미술 치료</p>
                    </div>
                  </div>
                  <div className="flex gap-2 sm:gap-3">
                    <span className="font-bold text-[#1F3D2B] w-16 sm:w-20 flex-shrink-0 text-[11px] sm:text-sm">15:00~17:30</span>
                    <div>
                      <strong className="text-[#1F3D2B]">오후 간식, 종례 및 안전 하원 송영</strong>
                      <p className="text-[11px] sm:text-xs md:text-sm text-[#555555]">영양 간식 후 전용 차량으로 댁 앞까지 안전 귀가 (저녁 이용 관절 운동 및 석식)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Photos: on mobile horizontal swipe */}
            <div className="flex md:flex-col gap-2.5 md:gap-4 overflow-x-auto md:overflow-visible pb-2 md:pb-0 snap-x scrollbar-none">
              <div className="w-[230px] md:w-full flex-shrink-0 snap-start bg-white rounded border border-[#E0E4DC] overflow-hidden shadow-sm">
                <img src="/images/하루일과 간호사진 교체.jpg" alt="간호사 혈압 및 건강 체크" className="w-full h-[150px] md:h-[190px] object-cover" />
                <div className="p-2 sm:p-3 text-xs md:text-sm text-[#1F3D2B] font-semibold bg-[#FAFBF8] border-t border-[#E0E4DC]">
                  🩺 전담 노인간호사의 활력징후 측정
                </div>
              </div>
              <div className="w-[230px] md:w-full flex-shrink-0 snap-start bg-white rounded border border-[#E0E4DC] overflow-hidden shadow-sm">
                <img src="/images/정해진시간 투약관리 사진교체.jpg" alt="정해진 시간 1:1 맞춤 투약 관리" className="w-full h-[150px] md:h-[190px] object-cover" />
                <div className="p-2 sm:p-3 text-xs md:text-sm text-[#1F3D2B] font-semibold bg-[#FAFBF8] border-t border-[#E0E4DC]">
                  💊 정해진 시간 철저한 개별 투약 관리
                </div>
              </div>
              <div className="w-[230px] md:w-full flex-shrink-0 snap-start bg-white rounded border border-[#E0E4DC] overflow-hidden shadow-sm">
                <img src="/images/더사랑 걷기전문 사진추가2.jpg" alt="100m 트랙 실내 산책" className="w-full h-[150px] md:h-[170px] object-cover" />
                <div className="p-2 sm:p-3 text-xs md:text-sm text-[#1F3D2B] font-semibold bg-[#FAFBF8] border-t border-[#E0E4DC]">
                  🚶 100m 트랙 자유로운 실내 걷기
                </div>
              </div>
            </div>
          </div>

          {/* Meals Cards - 5종 한 줄 배치 */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-3 md:gap-4 mt-6 sm:mt-12">
            <div className="bg-white border border-[#E0E4DC] rounded p-2 sm:p-3 text-center shadow-sm flex flex-col justify-between">
              <img src="/images/아침죽과일부추김치요플레.jpg" alt="아침 죽 식단" className="w-full aspect-[4/3] object-cover rounded mb-1.5 sm:mb-2" />
              <div className="font-semibold text-[#1F3D2B] text-[11px] sm:text-xs md:text-sm">아침 — 영양죽 차림</div>
            </div>
            <div className="bg-white border border-[#E0E4DC] rounded p-2 sm:p-3 text-center shadow-sm flex flex-col justify-between">
              <img src="/images/아침.jpg" alt="아침 식단" className="w-full aspect-[4/3] object-cover rounded mb-1.5 sm:mb-2" />
              <div className="font-semibold text-[#1F3D2B] text-[11px] sm:text-xs md:text-sm">아침 — 정갈한 밥상</div>
            </div>
            <div className="bg-white border border-[#E0E4DC] rounded p-2 sm:p-3 text-center shadow-sm flex flex-col justify-between">
              <img src="/images/점심저녁.jpg" alt="점심 저녁 식단 1" className="w-full aspect-[4/3] object-cover rounded mb-1.5 sm:mb-2" />
              <div className="font-semibold text-[#1F3D2B] text-[11px] sm:text-xs md:text-sm">점심·저녁 — 맞춤 식단 1</div>
            </div>
            <div className="bg-white border border-[#E0E4DC] rounded p-2 sm:p-3 text-center shadow-sm flex flex-col justify-between">
              <img src="/images/점심저녁2.jpg" alt="점심 저녁 식단 2" className="w-full aspect-[4/3] object-cover rounded mb-1.5 sm:mb-2" />
              <div className="font-semibold text-[#1F3D2B] text-[11px] sm:text-xs md:text-sm">점심·저녁 — 맞춤 식단 2</div>
            </div>
            <div className="bg-white border border-[#E0E4DC] rounded p-2 sm:p-3 text-center shadow-sm col-span-2 sm:col-span-1 flex flex-col justify-between">
              <img src="/images/오후간식떡케이크주스.jpg" alt="오후 간식" className="w-full aspect-[4/3] object-cover rounded mb-1.5 sm:mb-2" />
              <div className="font-semibold text-[#1F3D2B] text-[11px] sm:text-xs md:text-sm">오후 간식 — 떡·생과일주스</div>
            </div>
          </div>
        </div>
      </section>

      {/* ⑦ Promises */}
      <section className="py-8 sm:py-14 md:py-24 bg-[#FBFAF7]">
        <div className="max-w-[1080px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-6 sm:mb-10 md:mb-12">
            <h2 className="font-serif-custom text-xl sm:text-2xl md:text-4xl font-bold text-[#1F3D2B] mb-2 sm:mb-3">
              우리의 약속
            </h2>
            <p className="text-xs sm:text-base md:text-lg text-[#7A9070]">
              1991년 UN 「노인을 위한 원칙」을 이렇게 지킵니다.
            </p>
          </div>

          <div className="border-l-2 border-[#7A9070] pl-4 sm:pl-6 md:pl-10 space-y-4 sm:space-y-6 md:space-y-8 max-w-[800px] mx-auto">
            <div>
              <h3 className="font-serif-custom text-base sm:text-xl md:text-2xl font-bold text-[#1F3D2B] mb-1 sm:mb-2">
                살던 집에서 오래오래
              </h3>
              <p className="text-xs sm:text-base md:text-lg text-[#4A5243]">
                평생 살아오신 집에서 오래 지내실 수 있도록 돕습니다.
              </p>
            </div>
            <div>
              <h3 className="font-serif-custom text-base sm:text-xl md:text-2xl font-bold text-[#1F3D2B] mb-1 sm:mb-2">
                센터 안에만 머물지 않게
              </h3>
              <p className="text-xs sm:text-base md:text-lg text-[#4A5243]">
                매달, 해마다 바깥 나들이 프로그램을 진행합니다.
              </p>
            </div>
            <div>
              <h3 className="font-serif-custom text-base sm:text-xl md:text-2xl font-bold text-[#1F3D2B] mb-1 sm:mb-2">
                아픈 곳을 그냥 지나치지 않게
              </h3>
              <p className="text-xs sm:text-base md:text-lg text-[#4A5243]">
                세심하게 살피고 따뜻하게 돌봅니다.
              </p>
            </div>
            <div>
              <h3 className="font-serif-custom text-base sm:text-xl md:text-2xl font-bold text-[#1F3D2B] mb-1 sm:mb-2">
                배움은 나이와 상관없이
              </h3>
              <p className="text-xs sm:text-base md:text-lg text-[#4A5243]">
                새로 배우실 수 있는 프로그램을 마련합니다.
              </p>
            </div>
            <div>
              <h3 className="font-serif-custom text-base sm:text-xl md:text-2xl font-bold text-[#1F3D2B] mb-1 sm:mb-2">
                한 분도 소외되지 않게
              </h3>
              <p className="text-xs sm:text-base md:text-lg text-[#4A5243]">
                한 분 한 분의 목소리에 귀 기울입니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ⑧ Center Facilities Gallery */}
      <section className="py-8 sm:py-14 md:py-24 bg-[#E8EDE4]">
        <div className="max-w-[1080px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-6 sm:mb-10 md:mb-12">
            <h2 className="font-serif-custom text-xl sm:text-2xl md:text-4xl font-bold text-[#1F3D2B] mb-2 sm:mb-3">
              센터 둘러보기
            </h2>
            <p className="text-xs sm:text-base md:text-lg text-[#7A9070]">
              계단 없는 단층 200평. 앞뒤 창으로 제석산과 금당산이 보입니다.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3.5 md:gap-4">
            <div className="rounded overflow-hidden border border-[#E0E4DC] bg-white shadow-sm flex flex-col">
              <img src="/images/센터사진.jpg" alt="센터 전경 및 트랙" className="w-full aspect-[4/3] object-cover" />
              <div className="p-1.5 sm:p-2 text-center text-[11px] sm:text-xs md:text-sm font-semibold text-[#1F3D2B] bg-white border-t border-[#E0E4DC]">
                200평 전경 & 100m 트랙
              </div>
            </div>
            <div className="rounded overflow-hidden border border-[#E0E4DC] bg-white shadow-sm flex flex-col">
              <img src="/images/센터사진2.jpg" alt="탁 트인 통창 메인홀" className="w-full aspect-[4/3] object-cover" />
              <div className="p-1.5 sm:p-2 text-center text-[11px] sm:text-xs md:text-sm font-semibold text-[#1F3D2B] bg-white border-t border-[#E0E4DC]">
                탁 트인 마운틴뷰 메인홀
              </div>
            </div>
            <div className="rounded overflow-hidden border border-[#E0E4DC] bg-white shadow-sm flex flex-col">
              <img src="/images/센터사진3.jpg" alt="안전한 보행 트랙 공간" className="w-full aspect-[4/3] object-cover" />
              <div className="p-1.5 sm:p-2 text-center text-[11px] sm:text-xs md:text-sm font-semibold text-[#1F3D2B] bg-white border-t border-[#E0E4DC]">
                계단 없는 안전 보행로
              </div>
            </div>
            <div className="rounded overflow-hidden border border-[#E0E4DC] bg-white shadow-sm flex flex-col">
              <img src="/images/센터사진5.jpg" alt="프로그램 및 활동 공간" className="w-full aspect-[4/3] object-cover" />
              <div className="p-1.5 sm:p-2 text-center text-[11px] sm:text-xs md:text-sm font-semibold text-[#1F3D2B] bg-white border-t border-[#E0E4DC]">
                쾌적한 생활 & 활동실
              </div>
            </div>
            <div className="rounded overflow-hidden border border-[#E0E4DC] bg-white shadow-sm flex flex-col">
              <img src="/images/센터사진6.jpg" alt="재활 운동 및 휴게 구역" className="w-full aspect-[4/3] object-cover" />
              <div className="p-1.5 sm:p-2 text-center text-[11px] sm:text-xs md:text-sm font-semibold text-[#1F3D2B] bg-white border-t border-[#E0E4DC]">
                재활 운동 & 케어 공간
              </div>
            </div>
            <div className="rounded overflow-hidden border border-[#E0E4DC] bg-white shadow-sm flex flex-col">
              <img src="/images/센터사진7.jpg" alt="편안한 생활 라운지" className="w-full aspect-[4/3] object-cover" />
              <div className="p-1.5 sm:p-2 text-center text-[11px] sm:text-xs md:text-sm font-semibold text-[#1F3D2B] bg-white border-t border-[#E0E4DC]">
                햇살 가득 휴게 라운지
              </div>
            </div>
            <div className="rounded overflow-hidden border border-[#E0E4DC] bg-white shadow-sm flex flex-col">
              <img src="/images/센터사진8카페테리아.jpg" alt="카페테리아 휴게실" className="w-full aspect-[4/3] object-cover" />
              <div className="p-1.5 sm:p-2 text-center text-[11px] sm:text-xs md:text-sm font-semibold text-[#1F3D2B] bg-white border-t border-[#E0E4DC]">
                어르신 전용 카페테리아
              </div>
            </div>
            <div className="rounded overflow-hidden border border-[#E0E4DC] bg-white shadow-sm flex flex-col">
              <img src="/images/센터사진43.jpg" alt="편안한 힐링 쉼터" className="w-full aspect-[4/3] object-cover" />
              <div className="p-1.5 sm:p-2 text-center text-[11px] sm:text-xs md:text-sm font-semibold text-[#1F3D2B] bg-white border-t border-[#E0E4DC]">
                아늑한 편백 힐링 쉼터
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ⑨ Blog News Section */}
      <section className="py-8 sm:py-14 md:py-24 bg-[#FBFAF7]" id="blog-news">
        <div className="max-w-[1080px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-6 sm:mb-10 md:mb-12">
            <h2 className="font-serif-custom text-xl sm:text-2xl md:text-4xl font-bold text-[#1F3D2B] mb-2 sm:mb-3">
              더사랑 생생 소식
            </h2>
            <p className="text-xs sm:text-base md:text-lg text-[#7A9070]">
              어르신들과 함께 만들어가는 매일매일의 따뜻하고 행복한 일상입니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-7">
            {/* News Item 1 */}
            <div className="bg-white border border-[#E0E4DC] rounded-lg overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[#7A9070]">
              <div className="relative w-full h-[170px] sm:h-[220px] md:h-[240px] bg-[#E8EDE4] overflow-hidden">
                <img
                  src="/images/토요시장체험.jpg"
                  alt="화순 토요시장 나들이"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <span className="absolute top-2.5 left-2.5 sm:top-4 sm:left-4 bg-[#1F3D2B] text-[#FBFAF7] text-[11px] sm:text-xs md:text-sm font-semibold px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full shadow-md">
                  야외 체험 나들이
                </span>
              </div>
              <div className="p-4 sm:p-7 flex flex-col flex-grow">
                <h3 className="font-serif-custom text-base sm:text-xl md:text-2xl font-bold text-[#1F3D2B] mb-1.5 sm:mb-3 leading-snug">
                  어르신들과 함께한 정겨운 &apos;화순 토요 시장&apos; 나들이
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-[#555555] leading-relaxed mb-3.5 sm:mb-6 flex-grow">
                  시골 장터의 정겨운 온기와 싱싱한 먹거리를 함께 둘러보며 소중한 추억을 만들었습니다. 오랜만에 전통시장을 자유롭게 거니시며 밝게 웃으시는 어르신들의 모습을 확인해 보세요.
                </p>
                <a
                  href="https://blog.naver.com/sarang8090/224281421743"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between bg-[#FBFAF7] text-[#1F3D2B] border border-[#E0E4DC] px-3.5 py-2 sm:px-5 sm:py-3 rounded-md text-xs sm:text-sm md:text-base font-semibold hover:bg-[#1F3D2B] hover:text-[#FBFAF7] hover:border-[#1F3D2B] transition-colors"
                >
                  <span>네이버 블로그에서 보기</span>
                  <span className="text-base sm:text-lg">→</span>
                </a>
              </div>
            </div>

            {/* News Item 2 */}
            <div className="bg-white border border-[#E0E4DC] rounded-lg overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[#7A9070]">
              <div className="relative w-full h-[170px] sm:h-[220px] md:h-[240px] bg-[#E8EDE4] overflow-hidden">
                <img
                  src="/images/어르신들송년공연.jpg"
                  alt="어르신 열창 노래자랑"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <span className="absolute top-2.5 left-2.5 sm:top-4 sm:left-4 bg-[#1F3D2B] text-[#FBFAF7] text-[11px] sm:text-xs md:text-sm font-semibold px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full shadow-md">
                  특별 행사
                </span>
              </div>
              <div className="p-4 sm:p-7 flex flex-col flex-grow">
                <h3 className="font-serif-custom text-base sm:text-xl md:text-2xl font-bold text-[#1F3D2B] mb-1.5 sm:mb-3 leading-snug">
                  박수와 웃음이 가득한 &apos;더사랑 어르신 노래자랑&apos; 현장
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-[#555555] leading-relaxed mb-3.5 sm:mb-6 flex-grow">
                  한 달 동안 어르신들께서 정성스레 연습하신 애창곡을 멋지게 선보여 주셨습니다. 마음껏 노래하시고 서로 응원하며 센터 전체가 흥겨운 축제의 장이 되었습니다.
                </p>
                <a
                  href="https://blog.naver.com/sarang8090/224237441626"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between bg-[#FBFAF7] text-[#1F3D2B] border border-[#E0E4DC] px-3.5 py-2 sm:px-5 sm:py-3 rounded-md text-xs sm:text-sm md:text-base font-semibold hover:bg-[#1F3D2B] hover:text-[#FBFAF7] hover:border-[#1F3D2B] transition-colors"
                >
                  <span>네이버 블로그에서 보기</span>
                  <span className="text-base sm:text-lg">→</span>
                </a>
              </div>
            </div>

            {/* News Item 3 */}
            <div className="bg-white border border-[#E0E4DC] rounded-lg overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[#7A9070]">
              <div className="relative w-full h-[170px] sm:h-[220px] md:h-[240px] bg-[#E8EDE4] overflow-hidden">
                <img
                  src="/images/문화예술공연.jpg"
                  alt="문화예술 공연"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <span className="absolute top-2.5 left-2.5 sm:top-4 sm:left-4 bg-[#1F3D2B] text-[#FBFAF7] text-[11px] sm:text-xs md:text-sm font-semibold px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full shadow-md">
                  문화 예술 정서
                </span>
              </div>
              <div className="p-4 sm:p-7 flex flex-col flex-grow">
                <h3 className="font-serif-custom text-base sm:text-xl md:text-2xl font-bold text-[#1F3D2B] mb-1.5 sm:mb-3 leading-snug">
                  신명나는 국악과 춤사위, &apos;문화예술 위문 공연&apos;
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-[#555555] leading-relaxed mb-3.5 sm:mb-6 flex-grow">
                  전문 예술 단체를 초청하여 어르신들의 신명과 마음의 위로를 더해 드렸습니다. 다채로운 공연과 가락에 맞춰 어깨춤을 추시며 오랜만에 오감이 즐거운 시간을 가졌습니다.
                </p>
                <a
                  href="https://blog.naver.com/sarang8090/224207959814"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between bg-[#FBFAF7] text-[#1F3D2B] border border-[#E0E4DC] px-3.5 py-2 sm:px-5 sm:py-3 rounded-md text-xs sm:text-sm md:text-base font-semibold hover:bg-[#1F3D2B] hover:text-[#FBFAF7] hover:border-[#1F3D2B] transition-colors"
                >
                  <span>네이버 블로그에서 보기</span>
                  <span className="text-base sm:text-lg">→</span>
                </a>
              </div>
            </div>

            {/* News Item 4 */}
            <div className="bg-white border border-[#E0E4DC] rounded-lg overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[#7A9070]">
              <div className="relative w-full h-[170px] sm:h-[220px] md:h-[240px] bg-[#E8EDE4] overflow-hidden">
                <img
                  src="/images/생신체험.jpg"
                  alt="따뜻한 생신 축하 잔치"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <span className="absolute top-2.5 left-2.5 sm:top-4 sm:left-4 bg-[#1F3D2B] text-[#FBFAF7] text-[11px] sm:text-xs md:text-sm font-semibold px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full shadow-md">
                  더사랑 기념일
                </span>
              </div>
              <div className="p-4 sm:p-7 flex flex-col flex-grow">
                <h3 className="font-serif-custom text-base sm:text-xl md:text-2xl font-bold text-[#1F3D2B] mb-1.5 sm:mb-3 leading-snug">
                  어르신의 소중한 하루, &apos;따뜻한 생신 축하 잔치&apos;
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-[#555555] leading-relaxed mb-3.5 sm:mb-6 flex-grow">
                  사랑하는 어르신 한 분 한 분의 생신을 모시고 마음 모아 건강과 행복을 기원해 드렸습니다. 정성스럽게 차려진 케이크와 축하 무대로 잊지 못할 감동을 전했습니다.
                </p>
                <a
                  href="https://blog.naver.com/sarang8090/224201537675"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between bg-[#FBFAF7] text-[#1F3D2B] border border-[#E0E4DC] px-3.5 py-2 sm:px-5 sm:py-3 rounded-md text-xs sm:text-sm md:text-base font-semibold hover:bg-[#1F3D2B] hover:text-[#FBFAF7] hover:border-[#1F3D2B] transition-colors"
                >
                  <span>네이버 블로그에서 보기</span>
                  <span className="text-base sm:text-lg">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ⑩ FAQ Accordion */}
      <section className="py-8 sm:py-14 md:py-24 bg-[#E8EDE4]" id="faq">
        <div className="max-w-[1080px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-6 sm:mb-10 md:mb-12">
            <h2 className="font-serif-custom text-xl sm:text-2xl md:text-4xl font-bold text-[#1F3D2B] mb-2 sm:mb-3">
              자주 묻는 질문
            </h2>
            <p className="text-xs sm:text-base md:text-lg text-[#7A9070]">
              보호자분들께서 가장 자주 물으시는 핵심 질문들을 모았습니다.
            </p>
          </div>

          <div className="max-w-[880px] mx-auto space-y-2.5 sm:space-y-4">
            {/* FAQ Q1 */}
            <div className={`bg-white border rounded-lg overflow-hidden transition-all duration-200 ${openFaq === 1 ? "border-[#7A9070] shadow-md" : "border-[#E0E4DC]"}`}>
              <button
                onClick={() => toggleFaq(1)}
                className="w-full flex justify-between items-center p-3.5 sm:p-5 md:p-6 text-left text-xs sm:text-base md:text-lg font-bold text-[#1F3D2B] hover:bg-[#E8EDE4]/30 transition-colors"
              >
                <div className="flex items-center gap-2 sm:gap-3">
                  <span className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#E8EDE4] text-[#1F3D2B] flex items-center justify-center text-xs sm:text-sm font-bold flex-shrink-0">Q1</span>
                  <span>주간보호센터는 어떤 분이 이용하실 수 있나요?</span>
                </div>
                <span className={`text-base sm:text-xl transition-transform duration-300 ${openFaq === 1 ? "rotate-180 text-[#1F3D2B]" : "text-[#7A9070]"}`}>▼</span>
              </button>
              {openFaq === 1 && (
                <div className="p-3.5 sm:p-6 pt-2 bg-[#FAFBF8] border-t border-[#E0E4DC] text-xs sm:text-sm md:text-base leading-relaxed text-[#23291F]">
                  <p className="mb-2 sm:mb-3">
                    국민건강보험공단으로부터 <strong className="text-[#1F3D2B]">노인장기요양등급(1등급~5등급 및 인지지원등급)</strong>을 받으신 어르신이라면 누구나 이용하실 수 있습니다.
                  </p>
                  <div className="bg-[#E8EDE4] border-l-4 border-[#1F3D2B] p-2.5 sm:p-3.5 rounded-r text-[11px] sm:text-sm font-medium flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <span>💡 등급이 아직 없으신 어르신도 저희 센터에서 신청 절차부터 서류 준비까지 친절하게 무상으로 도움을 드립니다.</span>
                    <a href="tel:062-675-8090" className="inline-block px-2.5 py-1 bg-[#1F3D2B] text-white rounded text-xs font-bold text-center self-start sm:self-auto">전화 문의</a>
                  </div>
                </div>
              )}
            </div>

            {/* FAQ Q2 */}
            <div className={`bg-white border rounded-lg overflow-hidden transition-all duration-200 ${openFaq === 2 ? "border-[#7A9070] shadow-md" : "border-[#E0E4DC]"}`}>
              <button
                onClick={() => toggleFaq(2)}
                className="w-full flex justify-between items-center p-3.5 sm:p-5 md:p-6 text-left text-xs sm:text-base md:text-lg font-bold text-[#1F3D2B] hover:bg-[#E8EDE4]/30 transition-colors"
              >
                <div className="flex items-center gap-2 sm:gap-3">
                  <span className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#E8EDE4] text-[#1F3D2B] flex items-center justify-center text-xs sm:text-sm font-bold flex-shrink-0">Q2</span>
                  <span>이용 비용과 국가지원 혜택은 어떻게 되나요?</span>
                </div>
                <span className={`text-base sm:text-xl transition-transform duration-300 ${openFaq === 2 ? "rotate-180 text-[#1F3D2B]" : "text-[#7A9070]"}`}>▼</span>
              </button>
              {openFaq === 2 && (
                <div className="p-3.5 sm:p-6 pt-2 bg-[#FAFBF8] border-t border-[#E0E4DC] text-xs sm:text-sm md:text-base leading-relaxed text-[#23291F]">
                  <p className="mb-2">
                    노인장기요양보험 혜택을 받으시면 <strong className="text-[#1F3D2B]">국가에서 이용 금액의 85%~100%를 지원</strong>해 드립니다.
                  </p>
                  <p>
                    보호자분 본인부담금은 등급 및 수급 자격(일반 15%, 경감 6~9%, 기초수급자 0%)에 따라 결정되며, 식비/간식비는 별도 실비로 산정됩니다.
                  </p>
                </div>
              )}
            </div>

            {/* FAQ Q3 */}
            <div className={`bg-white border rounded-lg overflow-hidden transition-all duration-200 ${openFaq === 3 ? "border-[#7A9070] shadow-md" : "border-[#E0E4DC]"}`}>
              <button
                onClick={() => toggleFaq(3)}
                className="w-full flex justify-between items-center p-3.5 sm:p-5 md:p-6 text-left text-xs sm:text-base md:text-lg font-bold text-[#1F3D2B] hover:bg-[#E8EDE4]/30 transition-colors"
              >
                <div className="flex items-center gap-2 sm:gap-3">
                  <span className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#E8EDE4] text-[#1F3D2B] flex items-center justify-center text-xs sm:text-sm font-bold flex-shrink-0">Q3</span>
                  <span>집 앞까지 모시러 오는 송영 차량이 운행되나요?</span>
                </div>
                <span className={`text-base sm:text-xl transition-transform duration-300 ${openFaq === 3 ? "rotate-180 text-[#1F3D2B]" : "text-[#7A9070]"}`}>▼</span>
              </button>
              {openFaq === 3 && (
                <div className="p-3.5 sm:p-6 pt-2 bg-[#FAFBF8] border-t border-[#E0E4DC] text-xs sm:text-sm md:text-base leading-relaxed text-[#23291F]">
                  <p className="mb-2">
                    네, 안전요원과 전문 직원이 탑승하는 <strong className="text-[#1F3D2B]">더사랑 전용 송영 차량이 어르신 댁 앞까지 오르고 내리시는 과정을 안전하게 보살펴 드립니다.</strong>
                  </p>
                  <p>아침 등원 시각과 저녁 하원 시각에 맞춰 꼼꼼하게 운행하며 비용 부담은 전혀 없습니다.</p>
                </div>
              )}
            </div>

            {/* FAQ Q4 */}
            <div className={`bg-white border rounded-lg overflow-hidden transition-all duration-200 ${openFaq === 4 ? "border-[#7A9070] shadow-md" : "border-[#E0E4DC]"}`}>
              <button
                onClick={() => toggleFaq(4)}
                className="w-full flex justify-between items-center p-3.5 sm:p-5 md:p-6 text-left text-xs sm:text-base md:text-lg font-bold text-[#1F3D2B] hover:bg-[#E8EDE4]/30 transition-colors"
              >
                <div className="flex items-center gap-2 sm:gap-3">
                  <span className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#E8EDE4] text-[#1F3D2B] flex items-center justify-center text-xs sm:text-sm font-bold flex-shrink-0">Q4</span>
                  <span>주말(토요일)에도 센터를 이용할 수 있나요?</span>
                </div>
                <span className={`text-base sm:text-xl transition-transform duration-300 ${openFaq === 4 ? "rotate-180 text-[#1F3D2B]" : "text-[#7A9070]"}`}>▼</span>
              </button>
              {openFaq === 4 && (
                <div className="p-3.5 sm:p-6 pt-2 bg-[#FAFBF8] border-t border-[#E0E4DC] text-xs sm:text-sm md:text-base leading-relaxed text-[#23291F]">
                  <p className="mb-2">
                    네! 더사랑 주간보호센터는 <strong className="text-[#1F3D2B]">월요일부터 토요일까지</strong> 운영합니다.
                  </p>
                  <p>특히 토요일에는 주말 특화 야외 장보기 나들이(화순 토요시장 등)와 다채로운 특화 프로그램을 진행하여 어르신들께서 더욱 만족해하십니다.</p>
                </div>
              )}
            </div>

            {/* FAQ Q5 */}
            <div className={`bg-white border rounded-lg overflow-hidden transition-all duration-200 ${openFaq === 5 ? "border-[#7A9070] shadow-md" : "border-[#E0E4DC]"}`}>
              <button
                onClick={() => toggleFaq(5)}
                className="w-full flex justify-between items-center p-3.5 sm:p-5 md:p-6 text-left text-xs sm:text-base md:text-lg font-bold text-[#1F3D2B] hover:bg-[#E8EDE4]/30 transition-colors"
              >
                <div className="flex items-center gap-2 sm:gap-3">
                  <span className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#E8EDE4] text-[#1F3D2B] flex items-center justify-center text-xs sm:text-sm font-bold flex-shrink-0">Q5</span>
                  <span>라운딩(견학·체험) 신청은 어떻게 하나요?</span>
                </div>
                <span className={`text-base sm:text-xl transition-transform duration-300 ${openFaq === 5 ? "rotate-180 text-[#1F3D2B]" : "text-[#7A9070]"}`}>▼</span>
              </button>
              {openFaq === 5 && (
                <div className="p-3.5 sm:p-6 pt-2 bg-[#FAFBF8] border-t border-[#E0E4DC] text-xs sm:text-sm md:text-base leading-relaxed text-[#23291F]">
                  <p className="mb-2 sm:mb-3">
                    언제든 편하신 시간에 부담 없이 둘러보실 수 있도록 <strong className="text-[#1F3D2B]">라운딩을 정성껏 도와드립니다.</strong> 어르신과 보호자께서 직접 100m 실내 트랙과 200평 공간, 재활 기구와 일과를 편안하게 경험해 보실 수 있습니다.
                  </p>
                  <div className="bg-[#E8EDE4] border-l-4 border-[#1F3D2B] p-2.5 sm:p-3.5 rounded-r text-[11px] sm:text-sm font-medium flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <span>
                      👉 전화 <strong className="text-[#1F3D2B]">062-675-8090</strong>으로 문의하시면 무료 픽업과 맞춤형 상담을 함께 도와드립니다.
                    </span>
                    <a
                      href="tel:062-675-8090"
                      className="inline-block px-3 py-1.5 bg-[#1F3D2B] text-white rounded text-xs font-bold text-center self-start sm:self-auto"
                    >
                      전화 연결
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ⑪ Final Call To Action [8. 하단 문구 수정: 견학, 체험을 하실 수 있습니다.] */}
      <section className="py-10 sm:py-16 md:py-28 bg-[#1F3D2B] text-[#FBFAF7] text-center">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6">
          <div className="flex justify-center mb-3 sm:mb-6">
            <img
              src="/logo.png"
              alt="더사랑 주간보호센터 로고"
              className="h-14 sm:h-20 w-auto object-contain drop-shadow"
            />
          </div>
          <h2 className="font-serif-custom text-xl sm:text-3xl md:text-5xl font-bold mb-2 sm:mb-4 text-[#FBFAF7] leading-snug">
            궁금하시면 직접 오셔서 보세요
          </h2>
          <p className="text-base sm:text-xl md:text-2xl text-[#E4A93C] font-semibold mb-4 sm:mb-8 leading-relaxed">
            견학, 체험을 하실 수 있습니다.
          </p>
          <div className="mb-2 sm:mb-4">
            <a
              href="tel:062-675-8090"
              className="inline-block font-serif-custom text-2xl sm:text-4xl md:text-5xl font-bold text-[#E4A93C] hover:underline tracking-wide"
            >
              062-675-8090
            </a>
          </div>
          <p className="text-xs sm:text-base md:text-lg text-[#E8EDE4] mb-6 sm:mb-10">
            전남광주통합특별시 남구 서문대로749번다길 37
          </p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
            <a
              href="tel:062-675-8090"
              className="inline-flex items-center justify-center px-4 py-2.5 sm:px-8 sm:py-3.5 text-xs sm:text-base md:text-lg font-semibold bg-[#E4A93C] text-[#23291F] rounded hover:bg-[#d69b2d] transition-colors"
            >
              📞 전화 걸기 (견학 신청)
            </a>
            <a
              href="https://blog.naver.com/sarang8090"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-4 py-2.5 sm:px-8 sm:py-3.5 text-xs sm:text-base md:text-lg font-semibold border border-[#FBFAF7] text-[#FBFAF7] rounded hover:bg-[#FBFAF7]/10 transition-colors"
            >
              블로그 바로가기
            </a>
            <a
              href="https://map.naver.com/p/entry/place/1313104249?placePath=%2Fhome%3Fentry%3Dplt%26from%3Dmap%26fromPanelNum%3D1%26additionalHeight%3D76%26timestamp%3D202608061030%26locale%3Dko%26svcName%3Dmap_pcv5&searchType=place&lng=126.8951916&lat=35.1226735&c=15.00,0,0,0,dh"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-4 py-2.5 sm:px-8 sm:py-3.5 text-xs sm:text-base md:text-lg font-semibold border border-[#FBFAF7] text-[#FBFAF7] rounded hover:bg-[#FBFAF7]/10 transition-colors"
            >
              오시는 길
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#172e20] text-[#A3B59B] py-6 sm:py-12 pb-20 sm:pb-12 text-xs sm:text-base border-t border-[#284c35]">
        <div className="max-w-[1080px] mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center gap-3 sm:gap-4">
            <img
              src="/logo.png"
              alt="더사랑 주간보호센터 로고"
              className="h-10 sm:h-12 w-auto object-contain drop-shadow"
            />
            <div>
              <div className="font-serif-custom text-base sm:text-xl font-bold text-[#FBFAF7] mb-0.5 sm:mb-1">
                더사랑 주간보호센터
              </div>
              <p className="text-[#A3B59B] text-xs sm:text-sm">전남광주통합특별시 남구 서문대로749번다길 37</p>
              <p className="text-[#A3B59B] text-xs sm:text-sm">전화번호: 062-675-8090</p>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            <a
              href="tel:062-675-8090"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-semibold bg-[#E4A93C] text-[#23291F] rounded hover:bg-[#d69b2d] transition-colors shadow-sm"
            >
              전화상담
            </a>
            <a
              href="https://blog.naver.com/sarang8090"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-semibold bg-[#03CF5D] text-white rounded hover:bg-[#02b350] transition-colors shadow-sm"
            >
              블로그 바로가기
            </a>
            <a
              href="https://map.naver.com/p/entry/place/1313104249?placePath=%2Fhome%3Fentry%3Dplt%26from%3Dmap%26fromPanelNum%3D1%26additionalHeight%3D76%26timestamp%3D202608061030%26locale%3Dko%26svcName%3Dmap_pcv5&searchType=place&lng=126.8951916&lat=35.1226735&c=15.00,0,0,0,dh"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-semibold bg-[#0068FF] text-white rounded hover:bg-[#0052cc] transition-colors shadow-sm"
            >
              오시는 길
            </a>
          </div>
          <div className="text-[11px] sm:text-xs md:text-sm text-[#A3B59B]">
            © 더사랑 주간보호센터. All Rights Reserved.
          </div>
        </div>
      </footer>

      {/* Mobile Bottom Sticky Action Bar */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#1F3D2B] p-2 flex gap-2 border-t border-white/15 shadow-2xl">
        <a
          href="tel:062-675-8090"
          className="flex-1 h-11 flex items-center justify-center bg-[#E4A93C] text-[#23291F] font-bold text-xs rounded shadow"
        >
          📞 전화 062-675-8090
        </a>
        <a
          href="tel:062-675-8090"
          className="flex-1 h-11 flex items-center justify-center bg-[#FBFAF7] text-[#1F3D2B] font-bold text-xs rounded shadow"
        >
          견학 신청 (전화연결)
        </a>
      </div>

      {/* Reservation Modal */}
      {isModalOpen && (
        <div
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsModalOpen(false);
          }}
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <div className="bg-[#FBFAF7] rounded border border-[#E0E4DC] max-w-[500px] w-full p-8 relative shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-5 text-2xl text-[#7A9070] hover:text-[#1F3D2B] transition-colors"
            >
              &times;
            </button>
            <h3 className="font-serif-custom text-2xl font-bold text-[#1F3D2B] mb-2">
              견학 · 체험 신청
            </h3>
            <p className="text-sm text-[#7A9070] mb-6">
              비용 부담 없이 편안하게 오셔서 200평 숲세권 시설을 둘러보세요.
            </p>

            <form onSubmit={handleModalSubmit} className="space-y-4 text-left">
              <div>
                <label className="block text-sm font-semibold text-[#1F3D2B] mb-1">
                  어르신 성함
                </label>
                <input
                  type="text"
                  required
                  placeholder="예: 김OO 어르신"
                  value={formData.seniorName}
                  onChange={(e) => setFormData({ ...formData, seniorName: e.target.value })}
                  className="w-full px-4 py-2.5 border border-[#E0E4DC] rounded bg-white text-base focus:outline-none focus:border-[#7A9070]"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#1F3D2B] mb-1">
                  보호자 연락처
                </label>
                <input
                  type="tel"
                  required
                  placeholder="010-0000-0000"
                  value={formData.guardianPhone}
                  onChange={(e) => setFormData({ ...formData, guardianPhone: e.target.value })}
                  className="w-full px-4 py-2.5 border border-[#E0E4DC] rounded bg-white text-base focus:outline-none focus:border-[#7A9070]"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#1F3D2B] mb-1">
                  희망 견학 일시
                </label>
                <input
                  type="date"
                  required
                  value={formData.preferredDate}
                  onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                  className="w-full px-4 py-2.5 border border-[#E0E4DC] rounded bg-white text-base focus:outline-none focus:border-[#7A9070]"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#1F3D2B] mb-1">
                  궁금하신 사항 (선택)
                </label>
                <textarea
                  rows={3}
                  placeholder="어르신 건강 상태나 문의 사항을 편하게 적어주세요."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-4 py-2.5 border border-[#E0E4DC] rounded bg-white text-base focus:outline-none focus:border-[#7A9070]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 mt-2 bg-[#E4A93C] text-[#23291F] font-semibold text-base rounded hover:bg-[#d69b2d] transition-colors shadow"
              >
                신청하기
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
