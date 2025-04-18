
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { ArrowLeft, Mail } from "lucide-react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success("Password reset link has been sent to your email");
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <main className="min-h-screen py-16">
      <div className="container max-w-md mx-auto px-4">
        <div className="mb-6">
          <Link to="/login" className="inline-flex items-center text-sm text-gray-600 hover:text-eco-green-DEFAULT">
            <ArrowLeft size={16} className="mr-1" />
            Back to Login
          </Link>
        </div>

        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold font-heading mb-2">Reset Password</h1>
          <p className="text-gray-600">We'll send you instructions to reset your password</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-input"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-eco-green-DEFAULT hover:bg-eco-green-dark text-white"
                >
                  {isSubmitting ? "Sending..." : "Send Reset Link"}
                </Button>
              </div>
            </form>
          ) : (
            <div className="text-center py-4">
              <div className="bg-eco-green-light p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Mail className="text-eco-green-DEFAULT" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Check Your Email</h3>
              <p className="text-gray-600 mb-6">
                We've sent a password reset link to <strong>{email}</strong>
              </p>
              <div className="space-y-4">
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => setIsSubmitted(false)}
                >
                  Resend Email
                </Button>
                <Link to="/login">
                  <Button className="w-full">
                    Back to Login
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default ForgotPassword;
