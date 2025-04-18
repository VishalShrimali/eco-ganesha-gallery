
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate password match
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    
    setIsLoading(true);
    
    // Simulate registration process
    setTimeout(() => {
      toast.success("Registration successful! Please check your email to verify your account.");
      setIsLoading(false);
      
      // In a real app, you would redirect or update authentication state
    }, 1500);
  };

  return (
    <main className="min-h-screen py-16">
      <div className="container max-w-lg mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold font-heading mb-2">Create an Account</h1>
          <p className="text-gray-600">Join EcoGanesha for a sustainable celebration</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <form onSubmit={handleRegister}>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2" htmlFor="firstName">
                    First Name
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Enter your first name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2" htmlFor="lastName">
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Enter your last name"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="email">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="password">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Create a password"
                  minLength={8}
                  required
                />
                <p className="text-xs text-gray-500 mt-1">
                  Password must be at least 8 characters
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="confirmPassword">
                  Confirm Password
                </label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Confirm your password"
                  required
                />
              </div>

              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="agreeTerms"
                    name="agreeTerms"
                    type="checkbox"
                    checked={formData.agreeTerms}
                    onChange={handleChange}
                    className="rounded text-eco-green-DEFAULT focus:ring-eco-green-DEFAULT h-4 w-4"
                    required
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="agreeTerms" className="text-gray-600">
                    I agree to the{" "}
                    <Link to="/terms" className="text-eco-purple-DEFAULT hover:text-eco-purple-dark">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link to="/privacy" className="text-eco-purple-DEFAULT hover:text-eco-purple-dark">
                      Privacy Policy
                    </Link>
                  </label>
                </div>
              </div>

              <Button
                type="submit"
                disabled={isLoading || !formData.agreeTerms}
                className="w-full bg-eco-green-DEFAULT hover:bg-eco-green-dark text-white"
              >
                {isLoading ? "Creating account..." : "Create Account"}
              </Button>
            </div>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Already have an account?{" "}
              <Link to="/login" className="text-eco-purple-DEFAULT hover:text-eco-purple-dark font-medium">
                Log in
              </Link>
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-center text-sm text-gray-500 mb-4">Or sign up with</p>
            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white hover:bg-gray-50">
                <span>Google</span>
              </button>
              <button className="flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white hover:bg-gray-50">
                <span>Facebook</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Register;
