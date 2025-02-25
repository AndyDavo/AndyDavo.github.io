const agents = [
  {
    id: 'rca',
    name: 'Scheme Rule Encoding Agents (RCA)',
    description: 'Specialized agents that interpret and encode pension scheme rules into a mathematically precise format',
    capabilities: [
      'Natural language processing of scheme documentation',
      'Rule pattern recognition and classification',
      'Mathematical rule formalization',
      'Consistency checking and validation',
    ],
  },
  {
    id: 'raa',
    name: 'Scheme Rule Assurance Agent (RAA)',
    description: 'Verification agents that ensure the accuracy and completeness of encoded rules',
    capabilities: [
      'Automated rule testing and verification',
      'Edge case detection',
      'Compliance validation',
      'Rule conflict detection',
    ],
  },
  {
    id: 'rea',
    name: 'Scheme Rule Execution Agent (REA)',
    description: 'Execution agents that apply encoded rules to pension calculations and processing',
    capabilities: [
      'High-performance rule execution',
      'Real-time calculation processing',
      'Audit trail generation',
      'Result validation and verification',
    ],
  },
  {
    id: 'dta',
    name: 'Scheme Data Transport Agent (DTA)',
    description: 'Data handling agents that manage secure information flow between system components',
    capabilities: [
      'Secure data transmission',
      'Format transformation and validation',
      'Data integrity checking',
      'Audit logging',
    ],
  },
];

const aiCapabilities = [
  {
    title: 'Automated Reasoning',
    description: 'Advanced logical processing for complex pension calculations',
    features: [
      'Formal verification of calculations',
      'Logical consistency checking',
      'Automated problem solving',
      'Decision support systems',
    ],
  },
  {
    title: 'Machine Learning',
    description: 'Intelligent pattern recognition and prediction capabilities',
    features: [
      'Pattern recognition in scheme rules',
      'Anomaly detection',
      'Predictive analytics',
      'Continuous learning and improvement',
    ],
  },
  {
    title: 'Natural Language Processing',
    description: 'Sophisticated text analysis and understanding',
    features: [
      'Document understanding',
      'Context-aware interpretation',
      'Semantic analysis',
      'Multi-document correlation',
    ],
  },
  {
    title: 'Data Extraction',
    description: 'Intelligent data capture and processing',
    features: [
      'Automated document processing',
      'Structured data extraction',
      'Format recognition',
      'Quality assurance',
    ],
  },
];

const Technology = () => {
  return (
    <div>
      {/* Overview Section */}
      <section className="section bg-gradient-light">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Technology
            </h1>
            <p className="text-xl text-grey">
              Advanced AI and agent-based architecture delivering precision and reliability in pension management
            </p>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section id="approach" className="section">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              Our Approach
            </h2>
            <div className="prose max-w-none text-grey">
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Agent Fleet */}
      <section id="agent-fleet" className="section bg-gradient-light">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">
            Agent Fleet
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {agents.map((agent) => (
              <div key={agent.id} className="card">
                <h3 className="text-2xl font-bold mb-4">{agent.name}</h3>
                <p className="text-grey mb-6">{agent.description}</p>
                <ul className="space-y-3">
                  {agent.capabilities.map((capability) => (
                    <li key={capability} className="flex items-start">
                      <span className="text-purple mr-3">•</span>
                      <p className="text-grey">{capability}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Capabilities */}
      <section id="ai-capabilities" className="section">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">
            AI Capabilities
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {aiCapabilities.map((capability) => (
              <div key={capability.title} className="card">
                <h3 className="text-2xl font-bold mb-4">{capability.title}</h3>
                <p className="text-grey mb-6">{capability.description}</p>
                <ul className="space-y-3">
                  {capability.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <span className="text-purple mr-3">•</span>
                      <p className="text-grey">{feature}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section id="partners" className="section bg-gradient-light">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">
            Technology Partners
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-w-3 aspect-h-2 bg-white rounded-lg shadow-card">
                <div className="flex items-center justify-center text-grey">
                  [Partner Logo {i}]
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section id="security" className="section">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              Security & Compliance
            </h2>
            <div className="card">
              <p className="text-grey mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-bold mb-4">Data Protection</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-purple mr-3">•</span>
                      <p className="text-grey">End-to-end encryption</p>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple mr-3">•</span>
                      <p className="text-grey">Secure data storage</p>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple mr-3">•</span>
                      <p className="text-grey">Access control</p>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">Compliance</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-purple mr-3">•</span>
                      <p className="text-grey">GDPR compliance</p>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple mr-3">•</span>
                      <p className="text-grey">Industry standards</p>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple mr-3">•</span>
                      <p className="text-grey">Regular audits</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Technology;
