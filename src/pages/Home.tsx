import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="section bg-gradient-light">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Bringing mathematical certainty to pension management
            </h1>
            <p className="text-xl text-grey mb-8">
              Transform complex pension schemes into actionable intelligence with our advanced AI tool stack
            </p>
            <Link to="/contact" className="btn btn-primary">
              Request Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Problem Statement Section */}
      <section className="section">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Pension Industry Challenges
              </h2>
              <div className="space-y-4">
                <p className="text-grey">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p className="text-grey">
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-card p-8">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-purple mr-3">•</span>
                  <p className="text-grey">Complex scheme rules interpretation</p>
                </li>
                <li className="flex items-start">
                  <span className="text-purple mr-3">•</span>
                  <p className="text-grey">Manual data processing bottlenecks</p>
                </li>
                <li className="flex items-start">
                  <span className="text-purple mr-3">•</span>
                  <p className="text-grey">Risk of calculation errors</p>
                </li>
                <li className="flex items-start">
                  <span className="text-purple mr-3">•</span>
                  <p className="text-grey">Limited scalability</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Overview */}
      <section className="section bg-gradient-light">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">
            How pensionable.ai Addresses These Challenges
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card">
              <h3 className="text-xl font-bold mb-4">Automated Reasoning</h3>
              <p className="text-grey">
                Our AI interprets complex pension rules with mathematical precision
              </p>
            </div>
            <div className="card">
              <h3 className="text-xl font-bold mb-4">Intelligent Processing</h3>
              <p className="text-grey">
                Streamlined data handling with advanced ETL capabilities
              </p>
            </div>
            <div className="card">
              <h3 className="text-xl font-bold mb-4">Enterprise Security</h3>
              <p className="text-grey">
                Bank-grade security and compliance built into every process
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Use Cases */}
      <section className="section">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">
            Featured Use Cases
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="card">
                <h3 className="text-xl font-bold mb-4">Use Case {i}</h3>
                <p className="text-grey mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
                </p>
                <Link
                  to={`/use-cases#case-${i}`}
                  className="text-teal hover:text-teal/80 font-medium inline-flex items-center"
                >
                  Learn More
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
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
            Get in touch to schedule a demo and see pensionable.ai in action
          </p>
          <Link to="/contact" className="btn bg-white text-navy hover:bg-white/90">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
