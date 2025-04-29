import BlogViewsChart from '@/components/dashboards/BlogViewsChart';

export default function VisualizationsShowcasePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Data Visualizations Showcase</h1>
      <p className="mb-8 text-lg text-gray-700 max-w-2xl">
        Explore interactive data visualizations built with modern React charting libraries. These examples demonstrate analytics and insights you can add to your portfolio or projects.
      </p>
      <div className="mb-12">
        <BlogViewsChart />
      </div>
      {/* Add more visualization components here as you build them */}
    </div>
  );
}

