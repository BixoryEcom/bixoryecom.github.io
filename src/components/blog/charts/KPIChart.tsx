import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Conversion Rate', value: 3.2 },
  { name: 'AOV', value: 85 },
  { name: 'Customer LTV', value: 250 },
  { name: 'Cart Abandonment', value: 69.8 },
  { name: 'Return Rate', value: 8.9 },
];

export const KPIChart = () => {
  return (
    <div className="w-full h-[300px] bg-white p-4 rounded-lg">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" angle={-45} textAnchor="end" height={60} />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#6366f1" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};