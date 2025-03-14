// import { useNavigate } from 'react-router-dom';
import { useState, useRef, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import StockNewsBody from '@features/News/StockNews/StockNewsBody';
import EconSubNewsBody from '@features/News/EconNews/EconSubNewsBody';
import axios, { AxiosResponse } from 'axios';
import StockNewsSkeleton from '@features/News/skeleton/StockNewsSkeleton';
import { UpIcon, UpIconWrapper } from '@features/News/UpIcon';

const ScrollToTopButton = styled(UpIconWrapper)`
  position: fixed;
  bottom: 1.5rem;
  right: 6rem;
  /* background-color: ${({ theme }) => theme.backgroundColor}; */
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;

  &:hover {
    transform: scale(1.1);
  }
`;

const SubCenter = styled.div`
  display: flex;
  padding: 1rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-self: stretch;
  max-width: 100rem;
  min-width: 50rem;
  width: 100%;
  gap: 2rem;
`;

const StockNewsWrapper = styled.div<{ $showSummary: boolean }>`
  display: flex;
  /* margin: 0 1.25rem; */
  align-items: center;
  /* justify-content: space-between; */
  align-self: stretch;
  border-radius: 2rem;
  /* background-color: ${({ theme }) => theme.newsBackgroundColor}; */
  /* box-shadow: 0 0.25rem 0.25rem rgba(0, 0, 0, 0.1); */
  width: 100%;
  gap: 1rem;


  transition: ${({ $showSummary }) =>
    $showSummary ? 'none' : 'transform 0.3s ease'};

  &:hover {
    transform: ${({ $showSummary }) => ($showSummary ? 'none' : 'scale(1.02)')};
  }
`;

const ObserverTrigger = styled.div`
  height: 0.0625rem;
`;

const LoadingIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 1rem;
  /* font-size: 1.5rem; */
`;

// 도넛 모양의 로딩 스피너
const LoadingSpinner = styled.div`
  display: inline-block;
  width: 3rem;
  height: 3rem;
  border: 0.4rem solid rgba(0, 0, 0, 0.1);
  border-top: 0.4rem solid #3498db;
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

interface NewsItem {
  id: string;
  title: string;
  article: string;
  content: string;
  media: string;
  sentiment: string;
  uploadDatetime: string;
  thumbnail?: string;
  stockKeywords: string[];
  newsId: string;
  imageUrl?: string;
  stockNewsStockCodes?: string[];
}

// 이미지 URL과 나머지 기사 내용을 분리하는 함수
const processArticle = (
  article: string
): { imageUrl: string; content: string } => {
  const imageTagRegex = /<ImageTag>(.*?)<\/ImageTag>/;
  const match = imageTagRegex.exec(article);

  let imageUrl = '';
  let content = article;

  if (match && match[1]) {
    imageUrl = match[1]; // 이미지 URL 추출
    content = article.replace(imageTagRegex, '').trim(); // 이미지 태그 제거 후 남은 기사 내용
  }

  return { imageUrl, content };
};

// 주식 뉴스 데이터를 가져오는 함수
export const fetchStockNewsData = async (page: number): Promise<NewsItem[]> => {
  try {
    console.log(`Fetching news for page ${page}`); // 페이지 정보를 출력
    const response: AxiosResponse<{ data: NewsItem[] }> = await axios.get(
      `https://newstock.info/api/news/stock`,
      {
        params: {
          page,
        },
      }
    );

    console.log('Fetched Stock data:', response.data); // 가져온 데이터를 출력
    const newsData = response.data.data.map((newsItem: NewsItem) => {
      const { imageUrl, content } = processArticle(newsItem.article);
      return { ...newsItem, content, imageUrl };
    });

    return newsData;
  } catch (error) {
    console.error('Failed to fetch stock news', error);
    throw new Error('Failed to fetch stock news');
  }
};

const StockNewsPage: React.FC = () => {
  const [newsList, setNewsList] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false); // 로딩 상태
  const [showSummary, setShowSummary] = useState<boolean>(false); // 모달 상태 관리
  const [page, setPage] = useState<number>(1); // API 페이지 번호
  const [initialLoadComplete, setInitialLoadComplete] =
    useState<boolean>(false);
  const observerRef = useRef<HTMLDivElement | null>(null);
  // const navigate = useNavigate();
  const firstNewsRef = useRef<HTMLDivElement | null>(null);

  const fetchNews = useCallback(async () => {
    setLoading(true);
    try {
      const newNews = await fetchStockNewsData(page);
      console.log('New news added:', newNews); // 새로 추가된 뉴스 데이터를 출력
      setNewsList((prevNewsList) => [...prevNewsList, ...newNews]);
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      setInitialLoadComplete(true); // 첫 페이지 로드가 완료된 상태 설정
    }
  }, [page]);

  useEffect(() => {
    console.log('Initial data fetch'); // 초기 데이터 로드 로그 출력
    if (!initialLoadComplete) {
      fetchNews(); // 초기 데이터 로드
    }
  }, [fetchNews, initialLoadComplete]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !loading && initialLoadComplete) {
        console.log('Observer triggered, fetching more news'); // 스크롤 감지 로그 출력
        fetchNews(); // 스크롤 감지 시 더 많은 데이터를 로드
      }
    });

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, [fetchNews, loading, initialLoadComplete]);

  // const handleNewsClick = (id: string) => {
  //   console.log(`Navigating to: /subnews-main/stock-news/${id}`);
  //   navigate(`/subnews-main/stock-news/${id}`);
  // };

  const handleShowSummaryChange = (newShowSummary: boolean) => {
    setShowSummary(newShowSummary);
  };

  // 첫 번째 뉴스 항목으로 스크롤 이동
  const handleScrollToTop = () => {
    if (firstNewsRef.current) {
      firstNewsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {loading && <StockNewsSkeleton />}
      <SubCenter>
        {newsList.length > 0
          ? newsList.map((news, index) => {
              return (
                <StockNewsWrapper
                  key={index}
                  ref={index === 0 ? firstNewsRef : null}
                  $showSummary={showSummary}
                >
                  <EconSubNewsBody thumbnail={news.thumbnail} />
                  <StockNewsBody
                    id={news.id}
                    title={news.title}
                    content={news.content}
                    media={news.media}
                    date={news.uploadDatetime}
                    keywords={news.stockKeywords}
                    sentiment={news.sentiment}
                    onShowSummaryChange={handleShowSummaryChange}
                    stockNewsStockCodes={news.stockNewsStockCodes || []}
                  />
                </StockNewsWrapper>
              );
            })
          : !loading && <p>No news available</p>}
        {loading && (
          <LoadingIcon>
            <LoadingSpinner />
          </LoadingIcon>
        )}
        <ObserverTrigger ref={observerRef} />
      </SubCenter>

      <ScrollToTopButton onClick={handleScrollToTop}>
        <UpIcon />
      </ScrollToTopButton>
    </>
  );
};

export default StockNewsPage;
