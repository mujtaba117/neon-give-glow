const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Tech Entrepreneur",
      content: "The transparency and real-time updates make me confident my donations are creating real impact. The neon interface is so intuitive!",
      amount: "$2,500",
    },
    {
      name: "Marcus Rodriguez",
      role: "College Student",
      content: "Even as a student, I can make a difference. The platform makes it easy to contribute what I can and see exactly where it goes.",
      amount: "$50",
    },
    {
      name: "Dr. Aisha Patel",
      role: "Healthcare Professional",
      content: "I've been donating for years, but this platform's innovative approach and community focus is unmatched. The UI is beautiful too!",
      amount: "$1,200",
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5"></div>
      
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/6 w-24 h-24 bg-primary/20 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/6 w-32 h-32 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Voices of <span className="text-neon-primary">Change</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hear from our community of changemakers about their experience making a difference
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="card-neon group hover:scale-105 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Quote content */}
              <div className="mb-6">
                <div className="text-4xl text-primary/30 mb-4">"</div>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  {testimonial.content}
                </p>
              </div>

              {/* Author info */}
              <div className="flex items-center justify-between pt-6 border-t border-border">
                <div>
                  <h4 className="font-semibold text-lg text-neon-secondary">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-sm text-muted-foreground">Total Donated</div>
                  <div className="text-xl font-bold text-neon-accent">
                    {testimonial.amount}
                  </div>
                </div>
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16 animate-slide-up">
          <div className="card-neon max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Join Our <span className="text-neon-accent">Community</span>
            </h3>
            <p className="text-muted-foreground mb-6">
              Become part of a movement that's reshaping how we create positive change in the world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="text-center">
                <div className="text-2xl font-bold text-neon-primary">50,000+</div>
                <div className="text-sm text-muted-foreground">Active Members</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-neon-secondary">95%</div>
                <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-neon-accent">4.9/5</div>
                <div className="text-sm text-muted-foreground">Community Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;