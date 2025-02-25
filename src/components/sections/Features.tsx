import { FC } from 'react';

const Features: FC = () => {
  const features = [
    {
      title: "AI-Powered Analysis",
      description: "Advanced algorithms analyze your financial data for optimal retirement planning."
    },
    {
      title: "Smart Recommendations",
      description: "Personalized investment and savings recommendations based on your goals."
    },
    {
      title: "Real-time Tracking",
      description: "Monitor your retirement progress with real-time updates and adjustments."
    },
    {
      title: "Secure Platform",
      description: "Bank-level security to protect your sensitive financial information."
    }
  ];

  return (
    <section id="features" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Why Choose Pensionable.ai?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-primary">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
