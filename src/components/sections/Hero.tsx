import { FC } from 'react';

const Hero: FC = () => {
  return (
    <section id="home" className="pt-20 pb-16 md:pt-28 md:pb-24 bg-gradient-to-br from-primary/10 to-secondary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Smart Pension Planning with AI
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            Transform your retirement planning with cutting-edge artificial intelligence technology.
          </p>
          <button className="bg-primary text-white px-8 py-3 rounded-lg text-lg hover:bg-secondary transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
