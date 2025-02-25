const useCases = [
  {
    id: 'case-1',
    title: 'Use Case 1',
    problem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    approach: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    architecture: [
      'Component 1: Lorem ipsum dolor sit amet',
      'Component 2: Consectetur adipiscing elit',
      'Component 3: Sed do eiusmod tempor',
    ],
    benefits: [
      'Improved accuracy by 99%',
      'Reduced processing time by 75%',
      'Eliminated manual errors',
      'Enhanced compliance',
    ],
    stakeholders: ['Pension Administrators', 'IT Teams', 'Finance Departments'],
  },
  {
    id: 'case-2',
    title: 'Use Case 2',
    problem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    approach: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    architecture: [
      'Component 1: Lorem ipsum dolor sit amet',
      'Component 2: Consectetur adipiscing elit',
      'Component 3: Sed do eiusmod tempor',
    ],
    benefits: [
      'Streamlined operations',
      'Real-time processing',
      'Automated validation',
      'Cost reduction',
    ],
    stakeholders: ['HR Managers', 'Compliance Officers', 'System Administrators'],
  },
  {
    id: 'case-3',
    title: 'Use Case 3',
    problem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    approach: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    architecture: [
      'Component 1: Lorem ipsum dolor sit amet',
      'Component 2: Consectetur adipiscing elit',
      'Component 3: Sed do eiusmod tempor',
    ],
    benefits: [
      'Enhanced data quality',
      'Improved decision making',
      'Reduced risk',
      'Better scalability',
    ],
    stakeholders: ['Business Analysts', 'Risk Managers', 'Operations Teams'],
  },
];

const UseCases = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="section bg-gradient-light">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Use Cases
            </h1>
            <p className="text-xl text-grey">
              Real-world applications of pensionable.ai's intelligent pension management solutions
            </p>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="section">
        <div className="container">
          <div className="space-y-16">
            {useCases.map((useCase) => (
              <div key={useCase.id} id={useCase.id} className="scroll-mt-20">
                <div className="card">
                  <h2 className="text-3xl font-bold mb-8">{useCase.title}</h2>

                  {/* Problem & Approach */}
                  <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div>
                      <h3 className="text-xl font-bold mb-4">The Problem</h3>
                      <p className="text-grey">{useCase.problem}</p>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-4">Our Approach</h3>
                      <p className="text-grey">{useCase.approach}</p>
                    </div>
                  </div>

                  {/* Solution Architecture */}
                  <div className="mb-12">
                    <h3 className="text-xl font-bold mb-6">Solution Architecture</h3>
                    <div className="bg-gradient-light rounded-lg p-6">
                      <ul className="space-y-4">
                        {useCase.architecture.map((component) => (
                          <li key={component} className="flex items-start">
                            <span className="text-purple mr-3">•</span>
                            <p className="text-grey">{component}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Benefits & Stakeholders */}
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-bold mb-4">Key Benefits</h3>
                      <ul className="space-y-3">
                        {useCase.benefits.map((benefit) => (
                          <li key={benefit} className="flex items-start">
                            <span className="text-purple mr-3">•</span>
                            <p className="text-grey">{benefit}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-4">Relevant Stakeholders</h3>
                      <ul className="space-y-3">
                        {useCase.stakeholders.map((stakeholder) => (
                          <li key={stakeholder} className="flex items-start">
                            <span className="text-purple mr-3">•</span>
                            <p className="text-grey">{stakeholder}</p>
                          </li>
                        ))}
                      </ul>
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
            Ready to transform your pension management?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Contact us to learn how pensionable.ai can help solve your specific challenges
          </p>
          <a href="/contact" className="btn bg-white text-navy hover:bg-white/90">
            Get Started
          </a>
        </div>
      </section>
    </div>
  );
};

export default UseCases;
