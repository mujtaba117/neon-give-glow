const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-40 h-40 bg-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-32 h-32 bg-accent/10 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About Our <span className="text-neon-secondary">Mission</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We're dedicated to creating positive change in communities worldwide through 
              technology-driven solutions and grassroots initiatives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-6 animate-slide-up">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-neon-primary">Our Impact</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Since our founding, we've empowered over 50,000 individuals through education, 
                  healthcare, and technology access programs. Our community-first approach ensures 
                  every dollar creates lasting change.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-neon-accent">Why We're Different</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We leverage cutting-edge technology and data analytics to maximize impact. 
                  Our transparent reporting and real-time updates keep donors connected to 
                  the change they're creating.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-neon-primary mb-2">98%</div>
                  <div className="text-sm text-muted-foreground">Funds to Programs</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-neon-secondary mb-2">24/7</div>
                  <div className="text-sm text-muted-foreground">Community Support</div>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-6 animate-slide-up">
              <div className="card-neon">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className="w-6 h-6 bg-primary rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-neon-primary">Transparent Funding</h4>
                    <p className="text-muted-foreground">
                      Track every dollar with real-time reporting and blockchain-verified transactions.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card-neon">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className="w-6 h-6 bg-secondary rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-neon-secondary">Global Reach</h4>
                    <p className="text-muted-foreground">
                      Operating in 50+ countries with local partnerships for maximum impact.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card-neon">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className="w-6 h-6 bg-accent rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-neon-accent">Tech Innovation</h4>
                    <p className="text-muted-foreground">
                      AI-powered matching ensures your donation reaches the most impactful projects.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;