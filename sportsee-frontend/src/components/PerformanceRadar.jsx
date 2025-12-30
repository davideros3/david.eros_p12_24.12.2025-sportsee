import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';

// #region Sample data
const data = [
  {
    subject: 'Math',
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: 'Chinese',
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'English',
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'Geography',
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    subject: 'Physics',
    A: 85,
    B: 90,
    fullMark: 150,
  },
  {
    subject: 'History',
    A: 65,
    B: 85,
    fullMark: 150,
  },
];

// #endregion
const PerformanceRadar = () => {
  return (
    <div style={{ backgroundColor: '#282D30', padding: '15px', borderRadius: '5px' }}>
      <RadarChart
        width={300}
        height={250}
        outerRadius="80%"
        data={data}
      >
        <PolarGrid stroke="#FFFFFF"   radialLines={false}  />
        <PolarAngleAxis
          dataKey="subject"
          tick={{ fontSize: 10, fill: '#FFFFFF' }}
        />
        <PolarRadiusAxis tick={false} axisLine={false} />
        <Radar
          dataKey="A"
          stroke="#FF0101"
          fill="#FF0101"
          fillOpacity={0.7}
        />
      </RadarChart>
    </div>
  );
}

export default PerformanceRadar;