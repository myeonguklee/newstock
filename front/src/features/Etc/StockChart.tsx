import ReactApexChart from 'react-apexcharts';
import { useTheme } from 'styled-components'; // theme을 가져오기 위해 useTheme 사용

const StockChart = () => {
  const theme = useTheme(); // styled-components에서 theme 가져오기
  const series = [
    {
      name: 'Stock Price',
      data: [
        31.7, 32.3, 30.8, 31.1, 31.5, 32.2, 33.1, 32.9, 34.1, 35.2, 36.1, 37.0,
        38.2,
      ], // 예시 데이터
    },
  ];

  const options = {
    chart: {
      type: 'area' as const, // 문자열을 'area'로 고정
      height: 350,
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth' as const, // 문자열을 'smooth'로 고정
    },
    xaxis: {
      categories: [
        '09:00',
        '10:00',
        '11:00',
        '12:00',
        '13:00',
        '14:00',
        '15:00',
        '16:00',
      ], // x축 시간 데이터
      labels: {
        style: {
          colors: theme.textColor, // theme에서 가져온 textColor를 적용
        },
      },
    },
    yaxis: {
      min: 26,
      max: 43,
      labels: {
        style: {
          colors: theme.textColor, // y축 레이블에 theme.textColor 적용
        },
      },
    },
    fill: {
      gradient: {
        enabled: true,
        opacityFrom: 0.4,
        opacityTo: 0.8,
      },
    },
    tooltip: {
      x: {
        format: 'HH:mm',
      },
    },
  };

  return (
    <div>
      <ReactApexChart
        options={options}
        series={series}
        type="area"
        height={350}
      />
    </div>
  );
};

export default StockChart;
