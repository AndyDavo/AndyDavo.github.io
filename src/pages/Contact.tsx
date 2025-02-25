import { useState, FormEvent } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    message: '',
    type: 'demo', // or 'general'
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="section bg-gradient-light">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-grey">
              Schedule a demo or reach out to learn more about pensionable.ai
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <div className="card">
              {/* Form Type Selection */}
              <div className="flex gap-4 mb-8">
                <button
                  className={`flex-1 py-3 px-6 rounded-button text-center font-medium transition-colors ${
                    formData.type === 'demo'
                      ? 'bg-teal text-white'
                      : 'bg-gradient-light text-grey hover:text-navy'
                  }`}
                  onClick={() => setFormData({ ...formData, type: 'demo' })}
                >
                  Request Demo
                </button>
                <button
                  className={`flex-1 py-3 px-6 rounded-button text-center font-medium transition-colors ${
                    formData.type === 'general'
                      ? 'bg-teal text-white'
                      : 'bg-gradient-light text-grey hover:text-navy'
                  }`}
                  onClick={() => setFormData({ ...formData, type: 'general' })}
                >
                  General Inquiry
                </button>
              </div>

              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block font-medium text-navy mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2 rounded-button border border-grey/20 focus:outline-none focus:border-teal"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block font-medium text-navy mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2 rounded-button border border-grey/20 focus:outline-none focus:border-teal"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block font-medium text-navy mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-2 rounded-button border border-grey/20 focus:outline-none focus:border-teal"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="role" className="block font-medium text-navy mb-2">
                      Role
                    </label>
                    <input
                      type="text"
                      id="role"
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="w-full px-4 py-2 rounded-button border border-grey/20 focus:outline-none focus:border-teal"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block font-medium text-navy mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-2 rounded-button border border-grey/20 focus:outline-none focus:border-teal"
                    required
                  />
                </div>

                <button type="submit" className="btn btn-primary w-full">
                  {formData.type === 'demo' ? 'Request Demo' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Contact Info */}
      <section className="section bg-gradient-light">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="card text-center">
                <div className="text-purple text-4xl mb-4">•</div>
                <h3 className="text-xl font-bold mb-2">Email</h3>
                <p className="text-grey">
                  info@pensionable.ai
                </p>
              </div>
              <div className="card text-center">
                <div className="text-purple text-4xl mb-4">•</div>
                <h3 className="text-xl font-bold mb-2">Phone</h3>
                <p className="text-grey">
                  +44 (0) 123 456 7890
                </p>
              </div>
              <div className="card text-center">
                <div className="text-purple text-4xl mb-4">•</div>
                <h3 className="text-xl font-bold mb-2">Location</h3>
                <p className="text-grey">
                  London, United Kingdom
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
