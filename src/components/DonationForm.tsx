import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const DonationForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    amount: '',
    paymentMethod: 'card'
  });

  const [focusedField, setFocusedField] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.amount) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Thank You! 🎉",
      description: `Your donation of $${formData.amount} has been submitted successfully.`,
      className: "border-accent"
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      amount: '',
      paymentMethod: 'card'
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const predefinedAmounts = [25, 50, 100, 250, 500];

  return (
    <section id="donation-form" className="py-20 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Make Your <span className="text-neon-accent">Impact</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Every contribution brings us closer to our goal
            </p>
          </div>

          <form onSubmit={handleSubmit} className="card-neon space-y-6 animate-slide-up">
            {/* Personal Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className={`block text-sm font-medium transition-colors duration-300 ${
                  focusedField === 'name' ? 'text-primary' : 'text-foreground'
                }`}>
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField('')}
                  className="input-neon w-full"
                  placeholder="Enter your full name"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label className={`block text-sm font-medium transition-colors duration-300 ${
                  focusedField === 'email' ? 'text-primary' : 'text-foreground'
                }`}>
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField('')}
                  className="input-neon w-full"
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className={`block text-sm font-medium transition-colors duration-300 ${
                focusedField === 'phone' ? 'text-primary' : 'text-foreground'
              }`}>
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                onFocus={() => setFocusedField('phone')}
                onBlur={() => setFocusedField('')}
                className="input-neon w-full"
                placeholder="+1 (555) 000-0000"
              />
            </div>

            {/* Donation Amount */}
            <div className="space-y-4">
              <label className="block text-sm font-medium text-foreground">
                Donation Amount *
              </label>
              
              {/* Predefined amounts */}
              <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
                {predefinedAmounts.map(amount => (
                  <button
                    key={amount}
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, amount: amount.toString() }))}
                    className={`p-3 rounded-lg border-2 transition-all duration-300 ${
                      formData.amount === amount.toString()
                        ? 'border-primary bg-primary/10 text-primary shadow-[0_0_10px_hsl(var(--primary)/0.3)]'
                        : 'border-border hover:border-primary/50'
                    }`}
                  >
                    ${amount}
                  </button>
                ))}
              </div>

              {/* Custom amount */}
              <div className="space-y-2">
                <label className={`block text-sm font-medium transition-colors duration-300 ${
                  focusedField === 'amount' ? 'text-primary' : 'text-muted-foreground'
                }`}>
                  Or enter custom amount
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground">$</span>
                  <input
                    type="number"
                    name="amount"
                    value={formData.amount}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('amount')}
                    onBlur={() => setFocusedField('')}
                    className="input-neon w-full pl-8"
                    placeholder="0.00"
                    min="1"
                    step="0.01"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-foreground">
                Payment Method
              </label>
              <select
                name="paymentMethod"
                value={formData.paymentMethod}
                onChange={handleInputChange}
                className="input-neon w-full"
              >
                <option value="card">Credit/Debit Card</option>
                <option value="paypal">PayPal</option>
                <option value="bank">Bank Transfer</option>
              </select>
            </div>

            {/* Submit Button */}
            <Button 
              type="submit" 
              variant="neon-accent" 
              size="lg" 
              className="w-full animate-neon-glow"
            >
              Donate ${formData.amount || '0'} Now
            </Button>

            <p className="text-center text-sm text-muted-foreground">
              Your donation is secure and encrypted. You'll receive a confirmation email shortly.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default DonationForm;