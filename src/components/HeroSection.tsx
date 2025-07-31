import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const scrollToDonationForm = () => {
    const formSection = document.getElementById('donation-form');
    formSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(34, 40, 49, 0.8), rgba(34, 40, 49, 0.8)), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-secondary/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-3/4 w-20 h-20 bg-accent/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10 animate-slide-up">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Make a <span className="text-neon-primary">Difference</span> Today
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
          Join thousands of changemakers supporting causes that matter. 
          Your <span className="text-neon-secondary">contribution</span> creates lasting impact.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            variant="neon" 
            size="lg" 
            onClick={scrollToDonationForm}
            className="animate-neon-pulse min-w-[200px]"
          >
            Start Donating
          </Button>
          
          <Button 
            variant="neon-outline" 
            size="lg"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="min-w-[200px]"
          >
            Learn More
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
          <div className="card-neon text-center">
            <div className="text-3xl font-bold text-neon-primary mb-2">50K+</div>
            <div className="text-muted-foreground">Active Donors</div>
          </div>
          <div className="card-neon text-center">
            <div className="text-3xl font-bold text-neon-secondary mb-2">$2.5M</div>
            <div className="text-muted-foreground">Funds Raised</div>
          </div>
          <div className="card-neon text-center">
            <div className="text-3xl font-bold text-neon-accent mb-2">100+</div>
            <div className="text-muted-foreground">Projects Funded</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;