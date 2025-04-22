// BlogViewsChart.tsx
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

// Mock data for demonstration; replace with real analytics as needed
const data = [
  { title: 'Getting Started with Next.js', views: 120 },
  { title: 'Web Development Tips', views: 95 },
  { title: 'Unlocking Strategic HR Analytics', views: 80 },
  { title: 'Risks in International Trade', views: 60 },
  { title: 'SDG 17: Partnerships', views: 45 },
];

export default function BlogViewsChart() {
  return (
    <div className="w-full h-96 bg-white rounded-lg shadow p-4">
      <h2 className="text-xl font-bold mb-4">Blog Post Views</h2>
      <ResponsiveContainer width="100%" height="80%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="title" tick={{ fontSize: 12 }} interval={0} angle={-20} textAnchor="end" height={60} />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Bar dataKey="views" fill="#6366f1" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
