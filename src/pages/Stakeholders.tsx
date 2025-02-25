const stakeholders = [
  {
    id: 'stakeholder-1',
    title: 'Stakeholder Perspective 1',
    challenges: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      'Sed do eiusmod tempor incididunt ut labore',
      'Ut enim ad minim veniam, quis nostrud exercitation',
      'Duis aute irure dolor in reprehenderit',
    ],
    solutions: [
      {
        title: 'Automated Processing',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        title: 'Real-time Analytics',
        description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      },
      {
        title: 'Compliance Automation',
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      },
    ],
    benefits: [
      'Improved efficiency and accuracy',
      'Reduced operational costs',
      'Enhanced compliance',
      'Better decision making',
    ],
    useCases: ['Use Case 1', 'Use Case 2'],
    faq: [
      {
        question: 'How does pensionable.ai ensure data security?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        question: 'What is the implementation process?',
        answer: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      },
    ],
  },
  {
    id: 'stakeholder-2',
    title: 'Stakeholder Perspective 2',
    challenges: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      'Sed do eiusmod tempor incididunt ut labore',
      'Ut enim ad minim veniam, quis nostrud exercitation',
      'Duis aute irure dolor in reprehenderit',
    ],
    solutions: [
      {
        title: 'Intelligent Automation',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        title: 'Data Integration',
        description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      },
      {
        title: 'Risk Management',
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      },
    ],
    benefits: [
      'Streamlined operations',
      'Enhanced data quality',
      'Risk reduction',
      'Improved scalability',
    ],
    useCases: ['Use Case 2', 'Use Case 3'],
    faq: [
      {
        question: 'How does the system handle complex rules?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        question: 'What training is provided?',
        answer: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      },
    ],
  },
  {
    id: 'stakeholder-3',
    title: 'Stakeholder Perspective 3',
    challenges: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      'Sed do eiusmod tempor incididunt ut labore',
      'Ut enim ad minim veniam, quis nostrud exercitation',
      'Duis aute irure dolor in reprehenderit',
    ],
    solutions: [
      {
        title: 'Advanced Analytics',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        title: 'Process Optimization',
        description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      },
      {
        title: 'Reporting Automation',
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      },
    ],
    benefits: [
      'Better insights',
      'Faster processing',
      'Reduced errors',
      'Cost savings',
    ],
    useCases: ['Use Case 1', 'Use Case 3'],
    faq: [
      {
        question: 'How customizable is the solution?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        question: 'What support is available?',
        answer: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      },
    ],
  },
];

const Stakeholders = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="section bg-gradient-light">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              For Stakeholders
            </h1>
            <p className="text-xl text-grey">
              Discover how pensionable.ai addresses the unique needs of different stakeholders
            </p>
          </div>
        </div>
      </section>

      {/* Stakeholder Perspectives */}
      <section className="section">
        <div className="container">
          <div className="space-y-16">
            {stakeholders.map((stakeholder) => (
              <div key={stakeholder.id} id={stakeholder.id} className="scroll-mt-20">
                <div className="card">
                  <h2 className="text-3xl font-bold mb-8">{stakeholder.title}</h2>

                  {/* Challenges */}
                  <div className="mb-12">
                    <h3 className="text-xl font-bold mb-6">Key Challenges</h3>
                    <ul className="space-y-4">
                      {stakeholder.challenges.map((challenge) => (
                        <li key={challenge} className="flex items-start">
                          <span className="text-purple mr-3">•</span>
                          <p className="text-grey">{challenge}</p>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Solutions */}
                  <div className="mb-12">
                    <h3 className="text-xl font-bold mb-6">How pensionable.ai Helps</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                      {stakeholder.solutions.map((solution) => (
                        <div key={solution.title} className="bg-gradient-light rounded-lg p-6">
                          <h4 className="text-lg font-bold mb-3">{solution.title}</h4>
                          <p className="text-grey">{solution.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Benefits & Use Cases */}
                  <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div>
                      <h3 className="text-xl font-bold mb-4">Key Benefits</h3>
                      <ul className="space-y-3">
                        {stakeholder.benefits.map((benefit) => (
                          <li key={benefit} className="flex items-start">
                            <span className="text-purple mr-3">•</span>
                            <p className="text-grey">{benefit}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-4">Relevant Use Cases</h3>
                      <ul className="space-y-3">
                        {stakeholder.useCases.map((useCase) => (
                          <li key={useCase} className="flex items-start">
                            <span className="text-purple mr-3">•</span>
                            <p className="text-grey">{useCase}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* FAQ */}
                  <div>
                    <h3 className="text-xl font-bold mb-6">Frequently Asked Questions</h3>
                    <div className="space-y-6">
                      {stakeholder.faq.map((item) => (
                        <div key={item.question}>
                          <h4 className="font-bold mb-2">{item.question}</h4>
                          <p className="text-grey">{item.answer}</p>
                        </div>
                      ))}
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
            Ready to learn more?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Contact us to discuss how pensionable.ai can address your specific needs
          </p>
          <a href="/contact" className="btn bg-white text-navy hover:bg-white/90">
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
};

export default Stakeholders;
