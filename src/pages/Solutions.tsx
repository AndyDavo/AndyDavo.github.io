const solutions = [
  {
    id: 'logic-etl',
    title: 'Logic ETL',
    description: 'Intelligent interpretation and processing of scheme rules',
    features: [
      'Automated rule extraction',
      'Natural language processing',
      'Rule validation and verification',
      'Version control and audit trail',
    ],
  },
  {
    id: 'data-etl',
    title: 'Data ETL',
    description: 'Efficient data extraction, transformation, and loading',
    features: [
      'Automated data extraction',
      'Smart data transformation',
      'Quality validation',
      'Secure data loading',
    ],
  },
  {
    id: 'analytics',
    title: 'Analytics',
    description: 'Comprehensive insights and reporting capabilities',
    features: [
      'Real-time analytics',
      'Custom report generation',
      'Trend analysis',
      'Predictive modeling',
    ],
  },
  {
    id: 'integration',
    title: 'Integration',
    description: 'Seamless API and system connections',
    features: [
      'RESTful API support',
      'Legacy system integration',
      'Real-time synchronization',
      'Secure data exchange',
    ],
  },
  {
    id: 'consulting',
    title: 'Consulting',
    description: 'Expert professional services and guidance',
    features: [
      'Implementation support',
      'Custom solution design',
      'Training and workshops',
      'Ongoing maintenance',
    ],
  },
];

const Solutions = () => {
  return (
    <div>
      {/* Overview Section */}
      <section className="section bg-gradient-light">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Solutions
            </h1>
            <p className="text-xl text-grey">
              Comprehensive capabilities designed to transform pension management through intelligent automation
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="section">
        <div className="container">
          <div className="space-y-16">
            {solutions.map((solution) => (
              <div
                key={solution.id}
                id={solution.id}
                className="scroll-mt-20"
              >
                <div className="grid md:grid-cols-2 gap-12 items-start">
                  <div>
                    <h2 className="text-3xl font-bold mb-4">{solution.title}</h2>
                    <p className="text-xl text-grey mb-8">
                      {solution.description}
                    </p>
                    <div className="bg-white rounded-lg shadow-card p-8">
                      <h3 className="text-xl font-bold mb-6">Key Features</h3>
                      <ul className="space-y-4">
                        {solution.features.map((feature) => (
                          <li key={feature} className="flex items-start">
                            <span className="text-purple mr-3">•</span>
                            <p className="text-grey">{feature}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="bg-gradient-light rounded-lg p-8">
                    <div className="aspect-w-4 aspect-h-3 bg-white rounded-lg shadow-card">
                      {/* Placeholder for solution-specific illustration/screenshot */}
                      <div className="flex items-center justify-center text-grey">
                        [Illustration for {solution.title}]
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-brand text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to explore our solutions?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Contact us to learn more about how pensionable.ai can transform your pension management
          </p>
          <a href="/contact" className="btn bg-white text-navy hover:bg-white/90">
            Get Started
          </a>
        </div>
      </section>
    </div>
  );
};

export default Solutions;
