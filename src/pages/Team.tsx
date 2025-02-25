const teamMembers = [
  {
    name: 'Dr. Sarah Chen',
    role: 'Chief Executive Officer',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Expert in AI and pension systems with over 15 years of industry experience.',
    image: '/src/assets/images/team/placeholder.jpg',
    expertise: ['Artificial Intelligence', 'Pension Systems', 'Enterprise Strategy'],
  },
  {
    name: 'James Wilson',
    role: 'Chief Technology Officer',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pioneering advanced AI solutions for pension management.',
    image: '/src/assets/images/team/placeholder.jpg',
    expertise: ['Machine Learning', 'System Architecture', 'Data Security'],
  },
  {
    name: 'Dr. Maria Rodriguez',
    role: 'Head of AI Research',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Leading research in automated reasoning and pension rule processing.',
    image: '/src/assets/images/team/placeholder.jpg',
    expertise: ['Automated Reasoning', 'Natural Language Processing', 'Machine Learning'],
  },
  {
    name: 'David Thompson',
    role: 'Head of Product',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Focused on delivering intuitive solutions for complex pension challenges.',
    image: '/src/assets/images/team/placeholder.jpg',
    expertise: ['Product Strategy', 'UX Design', 'Pension Technology'],
  },
];

const Team = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="section bg-gradient-light">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Team
            </h1>
            <p className="text-xl text-grey">
              Meet the experts behind pensionable.ai's innovative pension management solutions
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="section">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
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

      {/* Team Grid */}
      <section className="section bg-gradient-light">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="card">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <div className="aspect-w-1 aspect-h-1 bg-gradient-light rounded-lg">
                      <div className="flex items-center justify-center text-grey">
                        [Photo]
                      </div>
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                    <p className="text-purple font-medium mb-4">{member.role}</p>
                    <p className="text-grey mb-4">{member.bio}</p>
                    <div>
                      <h4 className="font-bold mb-2">Areas of Expertise:</h4>
                      <div className="flex flex-wrap gap-2">
                        {member.expertise.map((skill) => (
                          <span
                            key={skill}
                            className="bg-gradient-light px-3 py-1 rounded-full text-sm text-grey"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="text-purple text-4xl mb-4">•</div>
              <h3 className="text-xl font-bold mb-4">Precision</h3>
              <p className="text-grey">
                Delivering mathematical accuracy and eliminating ambiguity in pension management
              </p>
            </div>
            <div className="card text-center">
              <div className="text-purple text-4xl mb-4">•</div>
              <h3 className="text-xl font-bold mb-4">Innovation</h3>
              <p className="text-grey">
                Pushing boundaries with advanced AI and automated reasoning technology
              </p>
            </div>
            <div className="card text-center">
              <div className="text-purple text-4xl mb-4">•</div>
              <h3 className="text-xl font-bold mb-4">Trust</h3>
              <p className="text-grey">
                Building reliable, secure solutions for enterprise-grade pension management
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="section bg-gradient-brand text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">
            Join Our Team
          </h2>
          <p className="text-xl mb-8 opacity-90">
            We're always looking for talented individuals to help us transform pension management
          </p>
          <a href="/contact" className="btn bg-white text-navy hover:bg-white/90">
            View Open Positions
          </a>
        </div>
      </section>
    </div>
  );
};

export default Team;
