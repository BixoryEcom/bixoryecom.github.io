import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { time: '00:00', visitors: 120 },
  { time: '04:00', visitors: 80 },
  { time: '08:00', visitors: 150 },
  { time: '12:00', visitors: 280 },
  { time: '16:00', visitors: 350 },
  { time: '20:00', visitors: 290 },
  { time: '23:59', visitors: 200 },
];

export const RealtimeChart = () => {
  return (
    <div className="w-full h-[300px] bg-white p-4 rounded-lg">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="visitors" stroke="#6366f1" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};