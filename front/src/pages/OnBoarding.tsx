import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import SectionFirst from '@features/Onboading/SectionFirst';
import SectionSecond from '@features/Onboading/SectionSecond';
import SectionThird from '@features/Onboading/SectionThird';
import SectionFourth from '@features/Onboading/SectionFourth';
import SectionFifth from '@features/Onboading/SectionFifth';
import SectionSixth from '@features/Onboading/SectionSixth';
import SectionLast from '@features/Onboading/SectionLast';
import { UpIcon } from '@features/News/UpIcon';

// 위로 가기 버튼 스타일
const ScrollToTopButton = styled.div`
  position: fixed;
  bottom: 1.5rem;
  right: 6rem;
  background-color: ${({ theme }) => theme.backgroundColor};
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  width: 3.5rem;
  height: 3.5rem;
  &:hover {
    transform: scale(1.1);
  }
  svg {
    fill: ${({ theme }) => theme.highlightColor};
  }
`;

// 스크롤 컨테이너 스타일: 스크롤이 발생하고 각 섹션이 스냅되는 스타일
const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: scroll; // 스크롤 활성화
  scroll-snap-type: y mandatory; // 스냅 방식 지정
  &::-webkit-scrollbar {
    width: 0;
    height: 0; // 스크롤바 숨김 처리
  }
`;

// 각 섹션을 스냅 대상 요소로 설정
const SectionContainer = styled.div`
  scroll-snap-align: start; // 섹션이 화면 시작에 맞춰 스냅됨
  width: 100%;
  height: 100vh; // 섹션이 화면 크기에 맞도록 설정
`;

const OnBoardingPage: React.FC = () => {
  const navigate = useNavigate();
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  // 각 섹션의 가시성 상태를 관리하는 상태 (섹션별로 true/false 설정)
  const [isSectionVisible, setIsSectionVisible] = useState({
    SectionFirst: false,
    SectionSecond: false,
    SectionThird: false,
    SectionFourth: false,
    SectionFifth: false,
    SectionSixth: false,
    SectionLast: false,
  });

  // 각 섹션의 ref를 생성해 DOM 참조
  const sectionRefs = {
    SectionFirst: useRef<HTMLDivElement | null>(null),
    SectionSecond: useRef<HTMLDivElement | null>(null),
    SectionThird: useRef<HTMLDivElement | null>(null),
    SectionFourth: useRef<HTMLDivElement | null>(null),
    SectionFifth: useRef<HTMLDivElement | null>(null),
    SectionSixth: useRef<HTMLDivElement | null>(null),
    SectionLast: useRef<HTMLDivElement | null>(null),
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const section = entry.target.getAttribute('data-section')!;

          // 첫 번째 섹션 가시성 체크
          if (section === 'SectionFirst') {
            setShowScrollToTop(!entry.isIntersecting);
          }

          // 각 섹션 가시성 상태 업데이트
          if (entry.isIntersecting) {
            setIsSectionVisible((prev) => ({ ...prev, [section]: true }));
          } else {
            setIsSectionVisible((prev) => ({ ...prev, [section]: false }));
          }
        });
      },
      { threshold: 0.5 } // 50% 이상 보일 때 "보임"으로 처리
    );

    // 각 섹션을 옵저버에 등록
    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    // 컴포넌트가 언마운트 될 때 옵저버 해제
    return () => {
      Object.values(sectionRefs).forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  const scrollToTop = () => {
    sectionRefs.SectionFirst.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // 특정 섹션으로 스크롤 이동하는 함수
  const scrollToSection = (section: keyof typeof sectionRefs) => {
    sectionRefs[section].current?.scrollIntoView({ behavior: 'smooth' });
  };

  // 마지막 섹션에서 "시작하기" 버튼을 클릭할 때 처리
  const handleStart = () => {
    navigate('/home');
  };

  return (
    <Container>
      {/* 첫 번째 섹션 */}
      <SectionContainer
        ref={sectionRefs.SectionFirst}
        data-section="SectionFirst" // data-section 속성을 사용하여 구분
      >
        <SectionFirst
          $isVisible={isSectionVisible.SectionFirst} // 현재 섹션이 화면에 보이는지 여부 전달
          sectionRef={sectionRefs.SectionFirst}
          scrollToSectionSecond={() => scrollToSection('SectionSecond')}
        />
      </SectionContainer>

      {/* 두 번째 섹션 - 기능 소개*/}
      <SectionContainer
        ref={sectionRefs.SectionSecond}
        data-section="SectionSecond"
      >
        <SectionSecond
          $isVisible={isSectionVisible.SectionSecond}
          sectionRef={sectionRefs.SectionSecond}
          scrollToSectionFourth={() => scrollToSection('SectionFourth')}
          scrollToSectionFifth={() => scrollToSection('SectionFifth')}
          scrollToSectionSixth={() => scrollToSection('SectionSixth')}
        />
      </SectionContainer>

      {/* 세 번째 섹션 - 이런거 했어요 */}
      <SectionContainer
        ref={sectionRefs.SectionThird}
        data-section="SectionThird"
      >
        <SectionThird
          $isVisible={isSectionVisible.SectionThird}
          sectionRef={sectionRefs.SectionThird}
          scrollToSectionFourth={() => scrollToSection('SectionFourth')}
          scrollToSectionFifth={() => scrollToSection('SectionFifth')}
        />
      </SectionContainer>

      {/* 네 번째 섹션 - 뉴스 기능 소개*/}
      <SectionContainer
        ref={sectionRefs.SectionFourth}
        data-section="SectionFourth"
      >
        <SectionFourth
          $isVisible={isSectionVisible.SectionFourth}
          sectionRef={sectionRefs.SectionFourth}
        />
      </SectionContainer>

      {/* 다섯 번째 섹션 - 주식 기능 소개*/}
      <SectionContainer
        ref={sectionRefs.SectionFifth}
        data-section="SectionFifth"
      >
        <SectionFifth
          $isVisible={isSectionVisible.SectionFifth}
          sectionRef={sectionRefs.SectionFifth}
        />
      </SectionContainer>

      {/* 여섯 번째 섹션 - 부가 기능 기능 소개*/}
      <SectionContainer
        ref={sectionRefs.SectionSixth}
        data-section="SectionSixth"
      >
        <SectionSixth
          $isVisible={isSectionVisible.SectionSixth}
          sectionRef={sectionRefs.SectionSixth}
        />
      </SectionContainer>

      {/* 마지막 섹션 - 시작하기 */}
      <SectionContainer
        ref={sectionRefs.SectionLast}
        data-section="SectionLast"
      >
        <SectionLast
          $isVisible={isSectionVisible.SectionLast}
          sectionRef={sectionRefs.SectionLast}
          onStart={handleStart} // 시작하기 버튼에 이벤트 추가
        />
      </SectionContainer>
      {showScrollToTop && (
        <ScrollToTopButton onClick={scrollToTop}>
          <UpIcon />
        </ScrollToTopButton>
      )}
    </Container>
  );
};

export default OnBoardingPage;
