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
      <header className="sticky top-0 z-50 bg-[#FBFAF7]/95 backdrop-blur-md border-b border-[#E0E4DC] py-4 transition-all">
        <div className="max-w-[1080px] mx-auto px-6 flex justify-between items-center">
          <a href="#" className="font-serif-custom text-xl md:text-2xl font-bold text-[#1F3D2B] tracking-tight">
            더사랑 주간보호센터
          </a>
          <div className="flex items-center gap-3">
            <a
              href="tel:062-675-8090"
              className="hidden sm:inline-flex items-center justify-center px-6 py-3 text-base md:text-lg font-semibold text-[#1F3D2B] border border-[#1F3D2B] rounded hover:bg-[#1F3D2B]/5 transition-colors"
            >
              062-675-8090
            </a>
            <a
              href="tel:062-675-8090"
              className="inline-flex items-center justify-center px-6 py-3 text-base md:text-lg font-semibold bg-[#E4A93C] text-[#23291F] rounded hover:bg-[#d69b2d] transition-colors shadow-sm"
            >
              견학 신청
            </a>
          </div>
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
      <section className="py-16 md:py-28 bg-[#FBFAF7]">
        <div className="max-w-[1080px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="bg-white border border-[#E0E4DC] rounded p-8 md:p-12 shadow-sm">
              <span className="inline-block text-base md:text-lg font-semibold text-[#7A9070] mb-3 tracking-tight">
                마음대로 걸을 수 있는 곳
              </span>
              <h1 className="font-serif-custom text-3xl md:text-5xl font-bold text-[#1F3D2B] mb-6 leading-tight tracking-tight">
                더사랑 주간보호센터
              </h1>
              <p className="text-lg md:text-xl text-[#4A5243] leading-relaxed mb-8">
                계단 없는 단층 200평, 창밖은 온통 산.<br />
                걷고 싶으실 때 언제든 걸으실 수 있습니다.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:062-675-8090"
                  className="inline-flex items-center justify-center px-7 py-3.5 text-base md:text-lg font-semibold bg-[#E4A93C] text-[#23291F] rounded hover:bg-[#d69b2d] transition-colors text-center"
                >
                  상담 문의 062-675-8090
                </a>
                <a
                  href="tel:062-675-8090"
                  className="inline-flex items-center justify-center px-7 py-3.5 text-base md:text-lg font-semibold text-[#1F3D2B] border border-[#1F3D2B] rounded hover:bg-[#1F3D2B]/5 transition-colors text-center"
                >
                  견학 신청
                </a>
              </div>
            </div>
            <div className="overflow-hidden rounded border border-[#E0E4DC] shadow-sm">
              <img
                src="/images/센터사진.jpg"
                alt="더사랑 주간보호센터 전경"
                className="w-full h-[280px] md:h-[480px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ② Special Features Grid */}
      <section className="py-16 md:py-28 bg-[#E8EDE4]">
        <div className="max-w-[1080px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-serif-custom text-2xl md:text-4xl font-bold text-[#1F3D2B] mb-3">
              더사랑 주간보호센터의 특별함
            </h2>
            <p className="text-base md:text-lg text-[#7A9070]">
              어르신이 안전하고 자유롭게 지내실 수 있는 최적의 환경
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-[#E0E4DC] rounded overflow-hidden shadow-sm">
              <img
                src="/images/실내산책.jpg"
                alt="실내 산책 공간"
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="p-6">
                <h3 className="font-serif-custom text-xl font-bold text-[#1F3D2B] mb-2">200평 단층</h3>
                <p className="text-base text-[#4A5243] leading-relaxed">
                  계단 없이 한 층. 부딪힘 없이 실내 산책이 가능합니다.
                </p>
              </div>
            </div>
            <div className="bg-white border border-[#E0E4DC] rounded overflow-hidden shadow-sm">
              <img
                src="/images/센터사진7.jpg"
                alt="숲 조망 전경"
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="p-6">
                <h3 className="font-serif-custom text-xl font-bold text-[#1F3D2B] mb-2">숲세권</h3>
                <p className="text-base text-[#4A5243] leading-relaxed">
                  앞뒤가 유리창. 앞은 제석산, 뒤는 금당산.
                </p>
              </div>
            </div>
            <div className="bg-white border border-[#E0E4DC] rounded overflow-hidden shadow-sm">
              <img
                src="/images/건강체크.jpg"
                alt="건강 상태 확인"
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="p-6">
                <h3 className="font-serif-custom text-xl font-bold text-[#1F3D2B] mb-2">오전 7시 개원</h3>
                <p className="text-base text-[#4A5243] leading-relaxed">
                  등원 즉시 노인전문간호사가 건강 상태를 확인합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ③ Director Greeting */}
      <section className="py-16 md:py-28 bg-[#FBFAF7]">
        <div className="max-w-[1080px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-[360px_1fr] gap-8 md:gap-12 items-start">
            <div className="overflow-hidden rounded border border-[#E0E4DC] shadow-sm">
              <img
                src="/images/대표원장 인삿말.jpg"
                alt="임의숙 원장"
                className="w-full h-[360px] md:h-[520px] object-cover"
              />
            </div>
            <div className="text-base md:text-lg leading-relaxed text-[#23291F] space-y-5">
              <p className="text-xl font-medium text-[#1F3D2B]">
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
                어린이집부터 요양병원까지 30여 년을 어르신들과 함께했습니다.
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
              <div className="pt-6 text-right font-serif-custom text-xl font-bold text-[#1F3D2B]">
                더사랑 주간보호센터 원장 임의숙
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ④ Senior Story */}
      <section className="py-16 md:py-28 bg-[#E8EDE4]">
        <div className="max-w-[1080px] mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="font-serif-custom text-2xl md:text-4xl font-bold text-[#1F3D2B] leading-snug">
              &quot;죽을 때까지 못 신을 줄 알았던 새 등산화를<br />숲체험에서 신었습니다&quot;
            </h2>
          </div>

          <div className="mb-12 overflow-hidden rounded border border-[#E0E4DC] shadow-sm">
            <img
              src="/images/사연자어르신숲체험사진.jpg"
              alt="숲체험에 참여하신 김OO 어르신"
              className="w-full h-[280px] md:h-[480px] object-cover"
            />
          </div>

          <div className="max-w-[840px] mx-auto text-base md:text-xl leading-relaxed text-[#23291F] space-y-6">
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
          <div className="my-10 max-w-[840px] mx-auto bg-[#1F3D2B] text-[#FBFAF7] p-8 md:p-12 rounded-lg text-center shadow-lg border border-white/10">
            <blockquote className="font-serif-custom text-xl md:text-3xl font-bold leading-relaxed">
              &quot;마음대로 운동할 수 있는 곳이 다 있다니.&quot;
            </blockquote>
          </div>

          <div className="max-w-[840px] mx-auto text-base md:text-xl leading-relaxed text-[#23291F] space-y-6">
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
          <div className="my-10 max-w-[840px] mx-auto bg-[#1F3D2B] text-[#FBFAF7] p-8 md:p-12 rounded-lg text-center shadow-lg border border-white/10">
            <blockquote className="font-serif-custom text-xl md:text-3xl font-bold leading-relaxed">
              &quot;나에게 이런 기적 같은 일이 있다니.&quot;
            </blockquote>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-10">
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

          <div className="max-w-[840px] mx-auto text-base md:text-xl leading-relaxed text-[#23291F] space-y-6">
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

      {/* ⑤ Programs */}
      <section className="py-16 md:py-28 bg-[#FBFAF7]">
        <div className="max-w-[1080px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif-custom text-2xl md:text-4xl font-bold text-[#1F3D2B] mb-3">
              프로그램
            </h2>
            <p className="text-base md:text-lg text-[#7A9070]">
              몸과 마음의 활력을 되찾는 다채로운 일상
            </p>
          </div>

          {/* 5-1. 바깥 나들이 */}
          <div className="mb-16">
            <div className="border-b-2 border-[#E8EDE4] pb-3 mb-6">
              <h3 className="font-serif-custom text-2xl md:text-3xl font-bold text-[#1F3D2B]">
                5-1. 바깥 나들이
              </h3>
            </div>
            <p className="text-base md:text-lg text-[#4A5243] mb-4">
              <strong className="text-[#1F3D2B]">숲체험</strong> — 월 2회 전용 버스로 이동. 숲해설가와 함께 숲길 1시간 걷기, 실내 체험 활동 1시간.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 md:gap-4 mb-8">
              <img src="/images/숲체험.jpg" alt="숲체험 1" className="w-full aspect-[4/3] object-cover rounded border border-[#E0E4DC]" />
              <img src="/images/숲체험2.jpg" alt="숲체험 2" className="w-full aspect-[4/3] object-cover rounded border border-[#E0E4DC]" />
              <img src="/images/숲체험4.jpg" alt="숲체험 3" className="w-full aspect-[4/3] object-cover rounded border border-[#E0E4DC]" />
              <img src="/images/무등산숲체험.jpg" alt="무등산 숲체험" className="w-full aspect-[4/3] object-cover rounded border border-[#E0E4DC]" />
              <img src="/images/가을숲체험.jpg" alt="가을 숲체험" className="w-full aspect-[4/3] object-cover rounded border border-[#E0E4DC]" />
            </div>

            <p className="text-base md:text-lg text-[#4A5243] mb-4">
              <strong className="text-[#1F3D2B]">맛집 탐방</strong> — 추어탕, 떡갈비, 오리탕, 쌈밥. 어르신들이 원하시는 메뉴로 정합니다.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 md:gap-4 mb-8">
              <img src="/images/맛집탐방.jpg" alt="맛집탐방 1" className="w-full aspect-[4/3] object-cover rounded border border-[#E0E4DC]" />
              <img src="/images/맛집탐방2.jpg" alt="맛집탐방 2" className="w-full aspect-[4/3] object-cover rounded border border-[#E0E4DC]" />
              <img src="/images/맛집탐방3.jpg" alt="맛집탐방 3" className="w-full aspect-[4/3] object-cover rounded border border-[#E0E4DC]" />
              <img src="/images/맛집탐방4.jpg" alt="맛집탐방 4" className="w-full aspect-[4/3] object-cover rounded border border-[#E0E4DC]" />
              <img src="/images/맛집탐방5.jpg" alt="맛집탐방 5" className="w-full aspect-[4/3] object-cover rounded border border-[#E0E4DC]" />
            </div>

            <p className="text-base md:text-lg text-[#4A5243] mb-4">
              <strong className="text-[#1F3D2B]">토요시장 구경</strong> — 장 보기와 물건값 계산으로 일상 감각을 유지합니다.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <img src="/images/토요시장체험.jpg" alt="토요시장 구경 1" className="w-full aspect-[4/3] object-cover rounded border border-[#E0E4DC]" />
              <img src="/images/토요시장체험2.jpg" alt="토요시장 구경 2" className="w-full aspect-[4/3] object-cover rounded border border-[#E0E4DC]" />
            </div>

            <p className="text-base md:text-lg text-[#4A5243] mb-4">
              <strong className="text-[#1F3D2B]">가족 참여 프로그램</strong> — 보호자와 함께 걷는 숲길, 꽃손수건 만들기, 포토북 만들기.
            </p>
            <div>
              <img src="/images/가족과함께참여하는프로그램.jpg" alt="가족 참여 프로그램" className="w-full aspect-[16/9] object-cover rounded border border-[#E0E4DC]" />
            </div>
          </div>

          {/* 5-2. 운동 · 재활 */}
          <div className="mb-16">
            <div className="border-b-2 border-[#E8EDE4] pb-3 mb-4">
              <h3 className="font-serif-custom text-2xl md:text-3xl font-bold text-[#1F3D2B]">
                5-2. 운동 · 재활
              </h3>
            </div>
            <p className="text-base md:text-lg text-[#4A5243] mb-4">근력 저하와 관절 굳음을 예방합니다.</p>
            <ul className="space-y-2 mb-6 text-base md:text-lg text-[#23291F]">
              <li className="flex items-center gap-2"><span className="text-[#7A9070] text-xl">•</span> 슬링, 바디스파이크 등 기구 운동</li>
              <li className="flex items-center gap-2"><span className="text-[#7A9070] text-xl">•</span> 스모비 운동 (파킨슨·치매 어르신용)</li>
              <li className="flex items-center gap-2"><span className="text-[#7A9070] text-xl">•</span> 맨손 근력 운동, 아침 체조</li>
              <li className="flex items-center gap-2"><span className="text-[#7A9070] text-xl">•</span> 족욕, 물리치료</li>
              <li className="flex items-center gap-2"><span className="text-[#7A9070] text-xl">•</span> 실내 산책 (상시)</li>
            </ul>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4">
              <img src="/images/슬링.jpg" alt="슬링 운동" className="w-full aspect-[4/3] object-cover rounded border border-[#E0E4DC]" />
              <img src="/images/바디스파이크2.jpg" alt="바디스파이크 운동" className="w-full aspect-[4/3] object-cover rounded border border-[#E0E4DC]" />
              <img src="/images/스모비운동기구.jpg" alt="스모비 운동" className="w-full aspect-[4/3] object-cover rounded border border-[#E0E4DC]" />
              <img src="/images/족욕.jpg" alt="족욕 체조" className="w-full aspect-[4/3] object-cover rounded border border-[#E0E4DC]" />
            </div>
          </div>

          {/* 5-3. 인지 활동 */}
          <div className="mb-16">
            <div className="border-b-2 border-[#E8EDE4] pb-3 mb-4">
              <h3 className="font-serif-custom text-2xl md:text-3xl font-bold text-[#1F3D2B]">
                5-3. 인지 활동
              </h3>
            </div>
            <p className="text-base md:text-lg text-[#4A5243] mb-4">치매 예방 프로그램입니다.</p>
            <ul className="space-y-2 mb-6 text-base md:text-lg text-[#23291F]">
              <li className="flex items-center gap-2"><span className="text-[#7A9070] text-xl">•</span> 팀별 게임, 블록 쌓기</li>
              <li className="flex items-center gap-2"><span className="text-[#7A9070] text-xl">•</span> 손을 쓰는 활동</li>
              <li className="flex items-center gap-2"><span className="text-[#7A9070] text-xl">•</span> 디지털 인지 프로그램</li>
            </ul>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4">
              <img src="/images/인지프로그램.jpg" alt="인지 프로그램 1" className="w-full aspect-[4/3] object-cover rounded border border-[#E0E4DC]" />
              <img src="/images/인지프로그램2.jpg" alt="인지 프로그램 2" className="w-full aspect-[4/3] object-cover rounded border border-[#E0E4DC]" />
              <img src="/images/팀대결.jpg" alt="팀대결 인지활동" className="w-full aspect-[4/3] object-cover rounded border border-[#E0E4DC]" />
              <img src="/images/딸기실내체험.jpg" alt="딸기 실내 체험" className="w-full aspect-[4/3] object-cover rounded border border-[#E0E4DC]" />
            </div>
          </div>

          {/* 5-4. 공연 */}
          <div>
            <div className="border-b-2 border-[#E8EDE4] pb-3 mb-4">
              <h3 className="font-serif-custom text-2xl md:text-3xl font-bold text-[#1F3D2B]">
                5-4. 공연
              </h3>
            </div>
            <p className="text-base md:text-lg text-[#4A5243] mb-4">어르신이 직접 무대에 서는 참여형 공연입니다.</p>
            <ul className="space-y-2 mb-6 text-base md:text-lg text-[#23291F]">
              <li className="flex items-center gap-2"><span className="text-[#7A9070] text-xl">•</span> 부채춤, 색소폰, 숟가락 난타</li>
              <li className="flex items-center gap-2"><span className="text-[#7A9070] text-xl">•</span> 생신 축하 공연, 연말 송년 공연</li>
            </ul>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 md:gap-4">
              <img src="/images/문화예술공연.jpg" alt="문화 예술 공연 1" className="w-full aspect-[4/3] object-cover rounded border border-[#E0E4DC]" />
              <img src="/images/문화예술공연2.jpg" alt="문화 예술 공연 2" className="w-full aspect-[4/3] object-cover rounded border border-[#E0E4DC]" />
              <img src="/images/문화예술공연3.jpg" alt="색소폰 공연" className="w-full aspect-[4/3] object-cover rounded border border-[#E0E4DC]" />
              <img src="/images/문화예술공연4.jpg" alt="연말 공연" className="w-full aspect-[4/3] object-cover rounded border border-[#E0E4DC]" />
              <img src="/images/어르신들이준비한송년공연2.jpg" alt="송년 공연 2" className="w-full aspect-[4/3] object-cover rounded border border-[#E0E4DC]" />
            </div>
          </div>
        </div>
      </section>

      {/* ⑥ Daily Schedule */}
      <section className="py-16 md:py-28 bg-[#E8EDE4]">
        <div className="max-w-[1080px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-serif-custom text-2xl md:text-4xl font-bold text-[#1F3D2B] mb-3">
              하루 일과
            </h2>
            <p className="text-base md:text-lg text-[#7A9070]">
              규칙적이고 세심한 케어로 채워지는 안전한 하루
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-8 md:gap-12 items-start">
            <div className="overflow-x-auto rounded border border-[#E0E4DC] bg-white shadow-sm">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="bg-[#E8EDE4] font-serif-custom text-[#1F3D2B]">
                    <th className="p-3.5 md:p-4 w-[90px] md:w-[100px] text-base md:text-lg font-bold border-b border-[#E0E4DC]">시간</th>
                    <th className="p-3.5 md:p-4 text-base md:text-lg font-bold border-b border-[#E0E4DC]">내용</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E0E4DC] text-sm md:text-base text-[#23291F]">
                  <tr><td className="p-3.5 md:p-4 font-bold">07:00</td><td className="p-3.5 md:p-4">등원 · 건강 확인 (노인전문간호사)</td></tr>
                  <tr><td className="p-3.5 md:p-4 font-bold">07:30</td><td className="p-3.5 md:p-4">아침 산책</td></tr>
                  <tr><td className="p-3.5 md:p-4 font-bold">08:00</td><td className="p-3.5 md:p-4">아침 식사 — 죽, 제철 과일, 요구르트, 계란, 순두부</td></tr>
                  <tr><td className="p-3.5 md:p-4 font-bold">09:00</td><td className="p-3.5 md:p-4">노래 체조 2곡, 다 함께 걷기</td></tr>
                  <tr><td className="p-3.5 md:p-4 font-bold">09:30</td><td className="p-3.5 md:p-4">바디스파이크 · 인지 활동 · 물리치료 · 개인 운동</td></tr>
                  <tr><td className="p-3.5 md:p-4 font-bold">10:30</td><td className="p-3.5 md:p-4">전문 강사 프로그램</td></tr>
                  <tr><td className="p-3.5 md:p-4 font-bold">11:30</td><td className="p-3.5 md:p-4">입 운동</td></tr>
                  <tr><td className="p-3.5 md:p-4 font-bold">12:00</td><td className="p-3.5 md:p-4">점심 식사 — 노인전문 영양사 식단, 반찬 5가지</td></tr>
                  <tr><td className="p-3.5 md:p-4 font-bold">12:30</td><td className="p-3.5 md:p-4">휴식</td></tr>
                  <tr><td className="p-3.5 md:p-4 font-bold">13:00</td><td className="p-3.5 md:p-4">스모비 운동</td></tr>
                  <tr><td className="p-3.5 md:p-4 font-bold">14:00</td><td className="p-3.5 md:p-4">요일별 프로그램 — 치매예방체조, 슬링, 족욕, 노래 교실, 악단 공연</td></tr>
                  <tr><td className="p-3.5 md:p-4 font-bold">15:00</td><td className="p-3.5 md:p-4">종례 · 간식 · 하원</td></tr>
                  <tr><td className="p-3.5 md:p-4 font-bold">15:40</td><td className="p-3.5 md:p-4">관절 운동 (저녁 이용 어르신)</td></tr>
                </tbody>
              </table>
            </div>

            <div className="flex flex-col gap-4">
              <img src="/images/건강체크1.jpg" alt="등원 후 건강 체크" className="w-full h-[180px] object-cover rounded border border-[#E0E4DC]" />
              <img src="/images/아침체조.jpg" alt="아침 체조 시간" className="w-full h-[180px] object-cover rounded border border-[#E0E4DC]" />
              <img src="/images/실내산책.jpg" alt="실내 자율 산책" className="w-full h-[180px] object-cover rounded border border-[#E0E4DC]" />
            </div>
          </div>

          {/* Meals Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 mt-12">
            <div className="bg-white border border-[#E0E4DC] rounded p-4 text-center shadow-sm">
              <img src="/images/아침죽과일부추김치요플레.jpg" alt="아침 죽 식단" className="w-full aspect-[4/3] object-cover rounded mb-3" />
              <div className="font-semibold text-[#1F3D2B] text-base md:text-lg">아침 — 죽과 제철 반찬</div>
            </div>
            <div className="bg-white border border-[#E0E4DC] rounded p-4 text-center shadow-sm">
              <img src="/images/아침.jpg" alt="아침 식단" className="w-full aspect-[4/3] object-cover rounded mb-3" />
              <div className="font-semibold text-[#1F3D2B] text-base md:text-lg">아침 식사 차림</div>
            </div>
            <div className="bg-white border border-[#E0E4DC] rounded p-4 text-center shadow-sm">
              <img src="/images/점심저녁.jpg" alt="점심 저녁 식단 1" className="w-full aspect-[4/3] object-cover rounded mb-3" />
              <div className="font-semibold text-[#1F3D2B] text-base md:text-lg">점심 · 저녁 영양 식단 1</div>
            </div>
            <div className="bg-white border border-[#E0E4DC] rounded p-4 text-center shadow-sm">
              <img src="/images/점심저녁2.jpg" alt="점심 저녁 식단 2" className="w-full aspect-[4/3] object-cover rounded mb-3" />
              <div className="font-semibold text-[#1F3D2B] text-base md:text-lg">점심 · 저녁 영양 식단 2</div>
            </div>
            <div className="bg-white border border-[#E0E4DC] rounded p-4 text-center shadow-sm col-span-2 sm:col-span-4 max-w-sm mx-auto w-full">
              <img src="/images/오후간식떡케이크주스.jpg" alt="오후 간식" className="w-full aspect-[4/3] object-cover rounded mb-3" />
              <div className="font-semibold text-[#1F3D2B] text-base md:text-lg">오후 간식 — 떡·케이크·생과일주스</div>
            </div>
          </div>
        </div>
      </section>

      {/* ⑦ Promises */}
      <section className="py-16 md:py-28 bg-[#FBFAF7]">
        <div className="max-w-[1080px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-serif-custom text-2xl md:text-4xl font-bold text-[#1F3D2B] mb-3">
              우리의 약속
            </h2>
            <p className="text-base md:text-lg text-[#7A9070]">
              1991년 UN 「노인을 위한 원칙」을 이렇게 지킵니다.
            </p>
          </div>

          <div className="border-l-2 border-[#7A9070] pl-6 md:pl-10 space-y-8 max-w-[800px] mx-auto">
            <div>
              <h3 className="font-serif-custom text-xl md:text-2xl font-bold text-[#1F3D2B] mb-2">
                살던 집에서 오래오래
              </h3>
              <p className="text-base md:text-lg text-[#4A5243]">
                평생 살아오신 집에서 오래 지내실 수 있도록 돕습니다.
              </p>
            </div>
            <div>
              <h3 className="font-serif-custom text-xl md:text-2xl font-bold text-[#1F3D2B] mb-2">
                센터 안에만 머물지 않게
              </h3>
              <p className="text-base md:text-lg text-[#4A5243]">
                매달, 해마다 바깥 나들이 프로그램을 진행합니다.
              </p>
            </div>
            <div>
              <h3 className="font-serif-custom text-xl md:text-2xl font-bold text-[#1F3D2B] mb-2">
                아픈 곳을 그냥 지나치지 않게
              </h3>
              <p className="text-base md:text-lg text-[#4A5243]">
                세심하게 살피고 따뜻하게 돌봅니다.
              </p>
            </div>
            <div>
              <h3 className="font-serif-custom text-xl md:text-2xl font-bold text-[#1F3D2B] mb-2">
                배움은 나이와 상관없이
              </h3>
              <p className="text-base md:text-lg text-[#4A5243]">
                새로 배우실 수 있는 프로그램을 마련합니다.
              </p>
            </div>
            <div>
              <h3 className="font-serif-custom text-xl md:text-2xl font-bold text-[#1F3D2B] mb-2">
                한 분도 소외되지 않게
              </h3>
              <p className="text-base md:text-lg text-[#4A5243]">
                한 분 한 분의 목소리에 귀 기울입니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ⑧ Center Facilities Gallery */}
      <section className="py-16 md:py-28 bg-[#E8EDE4]">
        <div className="max-w-[1080px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-serif-custom text-2xl md:text-4xl font-bold text-[#1F3D2B] mb-3">
              센터 둘러보기
            </h2>
            <p className="text-base md:text-lg text-[#7A9070]">
              계단 없는 단층 200평. 앞뒤 창으로 제석산과 금당산이 보입니다.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-5">
            <div className="rounded overflow-hidden border border-[#E0E4DC] bg-white shadow-sm">
              <img src="/images/센터사진2.jpg" alt="센터 내부 1" className="w-full aspect-[4/3] object-cover" />
            </div>
            <div className="rounded overflow-hidden border border-[#E0E4DC] bg-white shadow-sm">
              <img src="/images/센터사진3.jpg" alt="센터 내부 2" className="w-full aspect-[4/3] object-cover" />
            </div>
            <div className="rounded overflow-hidden border border-[#E0E4DC] bg-white shadow-sm">
              <img src="/images/센터사진5.jpg" alt="센터 내부 3" className="w-full aspect-[4/3] object-cover" />
            </div>
            <div className="rounded overflow-hidden border border-[#E0E4DC] bg-white shadow-sm">
              <img src="/images/센터사진6.jpg" alt="센터 내부 4" className="w-full aspect-[4/3] object-cover" />
            </div>
            <div className="rounded overflow-hidden border border-[#E0E4DC] bg-white shadow-sm">
              <img src="/images/센터사진7.jpg" alt="센터 내부 5" className="w-full aspect-[4/3] object-cover" />
            </div>
            <div className="rounded overflow-hidden border border-[#E0E4DC] bg-white shadow-sm">
              <img src="/images/센터사진43.jpg" alt="센터 내부 6" className="w-full aspect-[4/3] object-cover" />
            </div>
            <div className="rounded overflow-hidden border border-[#E0E4DC] bg-white shadow-sm">
              <img src="/images/센터사진8카페테리아.jpg" alt="카페테리아" className="w-full aspect-[4/3] object-cover" />
              <div className="p-2.5 text-center text-sm md:text-base font-semibold text-[#1F3D2B] bg-white border-t border-[#E0E4DC]">
                카페테리아
              </div>
            </div>
            <div className="rounded overflow-hidden border border-[#E0E4DC] bg-white shadow-sm">
              <img src="/images/센터사진.jpg" alt="센터 전경" className="w-full aspect-[4/3] object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ⑨ Blog News Section */}
      <section className="py-16 md:py-28 bg-[#FBFAF7]" id="blog-news">
        <div className="max-w-[1080px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-serif-custom text-2xl md:text-4xl font-bold text-[#1F3D2B] mb-3">
              더사랑 생생 소식
            </h2>
            <p className="text-base md:text-lg text-[#7A9070]">
              어르신들과 함께 만들어가는 매일매일의 따뜻하고 행복한 일상입니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {/* News Item 1 */}
            <div className="bg-white border border-[#E0E4DC] rounded-lg overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[#7A9070]">
              <div className="relative w-full h-[240px] bg-[#E8EDE4] overflow-hidden">
                <img
                  src="/images/토요시장체험.jpg"
                  alt="화순 토요시장 나들이"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <span className="absolute top-4 left-4 bg-[#1F3D2B] text-[#FBFAF7] text-xs md:text-sm font-semibold px-3 py-1 rounded-full shadow-md">
                  야외 체험 나들이
                </span>
              </div>
              <div className="p-7 flex flex-col flex-grow">
                <h3 className="font-serif-custom text-xl md:text-2xl font-bold text-[#1F3D2B] mb-3 leading-snug">
                  어르신들과 함께한 정겨운 &apos;화순 토요 시장&apos; 나들이
                </h3>
                <p className="text-sm md:text-base text-[#555555] leading-relaxed mb-6 flex-grow">
                  시골 장터의 정겨운 온기와 싱싱한 먹거리를 함께 둘러보며 소중한 추억을 만들었습니다. 오랜만에 전통시장을 자유롭게 거니시며 밝게 웃으시는 어르신들의 모습을 확인해 보세요.
                </p>
                <a
                  href="https://blog.naver.com/sarang8090/224281421743"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between bg-[#FBFAF7] text-[#1F3D2B] border border-[#E0E4DC] px-5 py-3 rounded-md text-sm md:text-base font-semibold hover:bg-[#1F3D2B] hover:text-[#FBFAF7] hover:border-[#1F3D2B] transition-colors"
                >
                  <span>네이버 블로그에서 보기</span>
                  <span className="text-lg">→</span>
                </a>
              </div>
            </div>

            {/* News Item 2 */}
            <div className="bg-white border border-[#E0E4DC] rounded-lg overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[#7A9070]">
              <div className="relative w-full h-[240px] bg-[#E8EDE4] overflow-hidden">
                <img
                  src="/images/어르신들송년공연.jpg"
                  alt="어르신 열창 노래자랑"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <span className="absolute top-4 left-4 bg-[#1F3D2B] text-[#FBFAF7] text-xs md:text-sm font-semibold px-3 py-1 rounded-full shadow-md">
                  특별 행사
                </span>
              </div>
              <div className="p-7 flex flex-col flex-grow">
                <h3 className="font-serif-custom text-xl md:text-2xl font-bold text-[#1F3D2B] mb-3 leading-snug">
                  박수와 웃음이 가득한 &apos;더사랑 어르신 노래자랑&apos; 현장
                </h3>
                <p className="text-sm md:text-base text-[#555555] leading-relaxed mb-6 flex-grow">
                  한 달 동안 어르신들께서 정성스레 연습하신 애창곡을 멋지게 선보여 주셨습니다. 마음껏 노래하시고 서로 응원하며 센터 전체가 흥겨운 축제의 장이 되었습니다.
                </p>
                <a
                  href="https://blog.naver.com/sarang8090/224237441626"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between bg-[#FBFAF7] text-[#1F3D2B] border border-[#E0E4DC] px-5 py-3 rounded-md text-sm md:text-base font-semibold hover:bg-[#1F3D2B] hover:text-[#FBFAF7] hover:border-[#1F3D2B] transition-colors"
                >
                  <span>네이버 블로그에서 보기</span>
                  <span className="text-lg">→</span>
                </a>
              </div>
            </div>

            {/* News Item 3 */}
            <div className="bg-white border border-[#E0E4DC] rounded-lg overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[#7A9070]">
              <div className="relative w-full h-[240px] bg-[#E8EDE4] overflow-hidden">
                <img
                  src="/images/문화예술공연.jpg"
                  alt="문화예술 공연"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <span className="absolute top-4 left-4 bg-[#1F3D2B] text-[#FBFAF7] text-xs md:text-sm font-semibold px-3 py-1 rounded-full shadow-md">
                  문화 예술 정서
                </span>
              </div>
              <div className="p-7 flex flex-col flex-grow">
                <h3 className="font-serif-custom text-xl md:text-2xl font-bold text-[#1F3D2B] mb-3 leading-snug">
                  신명나는 국악과 춤사위, &apos;문화예술 위문 공연&apos;
                </h3>
                <p className="text-sm md:text-base text-[#555555] leading-relaxed mb-6 flex-grow">
                  전문 예술 단체를 초청하여 어르신들의 신명과 마음의 위로를 더해 드렸습니다. 다채로운 공연과 가락에 맞춰 어깨춤을 추시며 오랜만에 오감이 즐거운 시간을 가졌습니다.
                </p>
                <a
                  href="https://blog.naver.com/sarang8090/224207959814"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between bg-[#FBFAF7] text-[#1F3D2B] border border-[#E0E4DC] px-5 py-3 rounded-md text-sm md:text-base font-semibold hover:bg-[#1F3D2B] hover:text-[#FBFAF7] hover:border-[#1F3D2B] transition-colors"
                >
                  <span>네이버 블로그에서 보기</span>
                  <span className="text-lg">→</span>
                </a>
              </div>
            </div>

            {/* News Item 4 */}
            <div className="bg-white border border-[#E0E4DC] rounded-lg overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[#7A9070]">
              <div className="relative w-full h-[240px] bg-[#E8EDE4] overflow-hidden">
                <img
                  src="/images/생신체험.jpg"
                  alt="따뜻한 생신 축하 잔치"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <span className="absolute top-4 left-4 bg-[#1F3D2B] text-[#FBFAF7] text-xs md:text-sm font-semibold px-3 py-1 rounded-full shadow-md">
                  더사랑 기념일
                </span>
              </div>
              <div className="p-7 flex flex-col flex-grow">
                <h3 className="font-serif-custom text-xl md:text-2xl font-bold text-[#1F3D2B] mb-3 leading-snug">
                  어르신의 소중한 하루, &apos;따뜻한 생신 축하 잔치&apos;
                </h3>
                <p className="text-sm md:text-base text-[#555555] leading-relaxed mb-6 flex-grow">
                  사랑하는 어르신 한 분 한 분의 생신을 모시고 마음 모아 건강과 행복을 기원해 드렸습니다. 정성스럽게 차려진 케이크와 축하 무대로 잊지 못할 감동을 전했습니다.
                </p>
                <a
                  href="https://blog.naver.com/sarang8090/224201537675"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between bg-[#FBFAF7] text-[#1F3D2B] border border-[#E0E4DC] px-5 py-3 rounded-md text-sm md:text-base font-semibold hover:bg-[#1F3D2B] hover:text-[#FBFAF7] hover:border-[#1F3D2B] transition-colors"
                >
                  <span>네이버 블로그에서 보기</span>
                  <span className="text-lg">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ⑩ FAQ Accordion */}
      <section className="py-16 md:py-28 bg-[#E8EDE4]" id="faq">
        <div className="max-w-[1080px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-serif-custom text-2xl md:text-4xl font-bold text-[#1F3D2B] mb-3">
              자주 묻는 질문
            </h2>
            <p className="text-base md:text-lg text-[#7A9070]">
              보호자분들께서 가장 자주 물으시는 핵심 질문들을 모았습니다.
            </p>
          </div>

          <div className="max-w-[880px] mx-auto space-y-4">
            {/* FAQ Q1 */}
            <div className={`bg-white border rounded-lg overflow-hidden transition-all duration-200 ${openFaq === 1 ? "border-[#7A9070] shadow-md" : "border-[#E0E4DC]"}`}>
              <button
                onClick={() => toggleFaq(1)}
                className="w-full flex justify-between items-center p-5 md:p-6 text-left text-base md:text-lg font-bold text-[#1F3D2B] hover:bg-[#E8EDE4]/30 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-[#E8EDE4] text-[#1F3D2B] flex items-center justify-center text-sm font-bold flex-shrink-0">Q1</span>
                  <span>주간보호센터는 어떤 분이 이용하실 수 있나요?</span>
                </div>
                <span className={`text-xl transition-transform duration-300 ${openFaq === 1 ? "rotate-180 text-[#1F3D2B]" : "text-[#7A9070]"}`}>▼</span>
              </button>
              {openFaq === 1 && (
                <div className="p-6 pt-2 bg-[#FAFBF8] border-t border-[#E0E4DC] text-sm md:text-base leading-relaxed text-[#23291F]">
                  <p className="mb-3">
                    국민건강보험공단으로부터 <strong className="text-[#1F3D2B]">노인장기요양등급(1등급~5등급 및 인지지원등급)</strong>을 받으신 어르신이라면 누구나 이용하실 수 있습니다.
                  </p>
                  <div className="bg-[#E8EDE4] border-l-4 border-[#1F3D2B] p-3.5 rounded-r text-sm font-medium">
                    💡 등급이 아직 없으신 어르신도 저희 센터에서 신청 절차부터 서류 준비까지 친절하게 무상으로 도움을 드립니다. (문의: 062-675-8090)
                  </div>
                </div>
              )}
            </div>

            {/* FAQ Q2 */}
            <div className={`bg-white border rounded-lg overflow-hidden transition-all duration-200 ${openFaq === 2 ? "border-[#7A9070] shadow-md" : "border-[#E0E4DC]"}`}>
              <button
                onClick={() => toggleFaq(2)}
                className="w-full flex justify-between items-center p-5 md:p-6 text-left text-base md:text-lg font-bold text-[#1F3D2B] hover:bg-[#E8EDE4]/30 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-[#E8EDE4] text-[#1F3D2B] flex items-center justify-center text-sm font-bold flex-shrink-0">Q2</span>
                  <span>이용 비용과 국가지원 혜택은 어떻게 되나요?</span>
                </div>
                <span className={`text-xl transition-transform duration-300 ${openFaq === 2 ? "rotate-180 text-[#1F3D2B]" : "text-[#7A9070]"}`}>▼</span>
              </button>
              {openFaq === 2 && (
                <div className="p-6 pt-2 bg-[#FAFBF8] border-t border-[#E0E4DC] text-sm md:text-base leading-relaxed text-[#23291F]">
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
                className="w-full flex justify-between items-center p-5 md:p-6 text-left text-base md:text-lg font-bold text-[#1F3D2B] hover:bg-[#E8EDE4]/30 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-[#E8EDE4] text-[#1F3D2B] flex items-center justify-center text-sm font-bold flex-shrink-0">Q3</span>
                  <span>집 앞까지 모시러 오는 송영 차량이 운행되나요?</span>
                </div>
                <span className={`text-xl transition-transform duration-300 ${openFaq === 3 ? "rotate-180 text-[#1F3D2B]" : "text-[#7A9070]"}`}>▼</span>
              </button>
              {openFaq === 3 && (
                <div className="p-6 pt-2 bg-[#FAFBF8] border-t border-[#E0E4DC] text-sm md:text-base leading-relaxed text-[#23291F]">
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
                className="w-full flex justify-between items-center p-5 md:p-6 text-left text-base md:text-lg font-bold text-[#1F3D2B] hover:bg-[#E8EDE4]/30 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-[#E8EDE4] text-[#1F3D2B] flex items-center justify-center text-sm font-bold flex-shrink-0">Q4</span>
                  <span>주말(토요일)에도 센터를 이용할 수 있나요?</span>
                </div>
                <span className={`text-xl transition-transform duration-300 ${openFaq === 4 ? "rotate-180 text-[#1F3D2B]" : "text-[#7A9070]"}`}>▼</span>
              </button>
              {openFaq === 4 && (
                <div className="p-6 pt-2 bg-[#FAFBF8] border-t border-[#E0E4DC] text-sm md:text-base leading-relaxed text-[#23291F]">
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
                className="w-full flex justify-between items-center p-5 md:p-6 text-left text-base md:text-lg font-bold text-[#1F3D2B] hover:bg-[#E8EDE4]/30 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-[#E8EDE4] text-[#1F3D2B] flex items-center justify-center text-sm font-bold flex-shrink-0">Q5</span>
                  <span>견학이나 무료 체험 이용이 가능한가요?</span>
                </div>
                <span className={`text-xl transition-transform duration-300 ${openFaq === 5 ? "rotate-180 text-[#1F3D2B]" : "text-[#7A9070]"}`}>▼</span>
              </button>
              {openFaq === 5 && (
                <div className="p-6 pt-2 bg-[#FAFBF8] border-t border-[#E0E4DC] text-sm md:text-base leading-relaxed text-[#23291F]">
                  <p className="mb-3">
                    언제든 편하신 시간에 부담 없이 둘러보실 수 있습니다. 어르신과 보호자께서 직접 계단 없는 200평 숲세권 시설과 일과 프로그램을 <strong className="text-[#1F3D2B]">비용 부담 없이 직접 무료로 경험</strong>해 보실 수 있습니다.
                  </p>
                  <div className="bg-[#E8EDE4] border-l-4 border-[#1F3D2B] p-3.5 rounded-r text-sm font-medium">
                    👉 웹사이트 상단의 &apos;견학 신청&apos; 버튼을 누르시거나 <strong className="text-[#1F3D2B]">062-675-8090</strong>으로 전화해 주시면 원하는 일시에 안내해 드립니다.
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ⑪ Final Call To Action */}
      <section className="py-20 md:py-32 bg-[#1F3D2B] text-[#FBFAF7] text-center">
        <div className="max-w-[800px] mx-auto px-6">
          <h2 className="font-serif-custom text-3xl md:text-5xl font-bold mb-4 text-[#FBFAF7] leading-snug">
            궁금하시면 직접 오셔서 보세요
          </h2>
          <p className="text-lg md:text-xl text-[#D4E0D1] mb-8 leading-relaxed">
            견학과 체험을 비용 없이 제공합니다.<br />
            국민건강보험공단 법령을 준수하는 범위에서 안내해 드립니다.
          </p>
          <div className="mb-4">
            <a
              href="tel:062-675-8090"
              className="inline-block font-serif-custom text-3xl md:text-5xl font-bold text-[#E4A93C] hover:underline tracking-wide"
            >
              062-675-8090
            </a>
          </div>
          <p className="text-base md:text-lg text-[#E8EDE4] mb-10">
            전남광주통합특별시 남구 서문대로749번다길 37
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="tel:062-675-8090"
              className="inline-flex items-center justify-center px-8 py-3.5 text-base md:text-lg font-semibold bg-[#E4A93C] text-[#23291F] rounded hover:bg-[#d69b2d] transition-colors"
            >
              전화 걸기 062-675-8090
            </a>
            <a
              href="https://blog.naver.com/sarang8090"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3.5 text-base md:text-lg font-semibold border border-[#FBFAF7] text-[#FBFAF7] rounded hover:bg-[#FBFAF7]/10 transition-colors"
            >
              블로그 바로가기
            </a>
            <a
              href="https://map.naver.com/p/entry/place/1313104249?placePath=%2Fhome%3Fentry%3Dplt%26from%3Dmap%26fromPanelNum%3D1%26additionalHeight%3D76%26timestamp%3D202608061030%26locale%3Dko%26svcName%3Dmap_pcv5&searchType=place&lng=126.8951916&lat=35.1226735&c=15.00,0,0,0,dh"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3.5 text-base md:text-lg font-semibold border border-[#FBFAF7] text-[#FBFAF7] rounded hover:bg-[#FBFAF7]/10 transition-colors"
            >
              오시는 길
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#172e20] text-[#A3B59B] py-12 text-sm md:text-base border-t border-[#284c35]">
        <div className="max-w-[1080px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <div>
            <div className="font-serif-custom text-xl font-bold text-[#FBFAF7] mb-2">
              더사랑 주간보호센터
            </div>
            <p className="text-[#A3B59B] text-sm">전남광주통합특별시 남구 서문대로749번다길 37</p>
            <p className="text-[#A3B59B] text-sm">전화번호: 062-675-8090</p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://blog.naver.com/sarang8090"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold bg-[#03CF5D] text-white rounded hover:bg-[#02b350] transition-colors shadow-sm"
            >
              블로그 바로가기
            </a>
            <a
              href="https://map.naver.com/p/entry/place/1313104249?placePath=%2Fhome%3Fentry%3Dplt%26from%3Dmap%26fromPanelNum%3D1%26additionalHeight%3D76%26timestamp%3D202608061030%26locale%3Dko%26svcName%3Dmap_pcv5&searchType=place&lng=126.8951916&lat=35.1226735&c=15.00,0,0,0,dh"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold bg-[#0068FF] text-white rounded hover:bg-[#0052cc] transition-colors shadow-sm"
            >
              오시는 길 (네이버 지도)
            </a>
          </div>
          <div className="text-xs md:text-sm text-[#A3B59B]">
            © 더사랑 주간보호센터. All Rights Reserved.
          </div>
        </div>
      </footer>

      {/* Mobile Bottom Sticky Action Bar */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#1F3D2B] p-2.5 flex gap-2 border-t border-white/15 shadow-2xl">
        <a
          href="tel:062-675-8090"
          className="flex-1 h-12 flex items-center justify-center bg-[#E4A93C] text-[#23291F] font-bold text-sm rounded shadow"
        >
          전화 상담 062-675-8090
        </a>
        <a
          href="tel:062-675-8090"
          className="flex-1 h-12 flex items-center justify-center bg-[#FBFAF7] text-[#1F3D2B] font-bold text-sm rounded shadow"
        >
          견학 신청
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
