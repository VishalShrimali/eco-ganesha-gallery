
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate authentication process
    setTimeout(() => {
      // This is just for demonstration
      if (email && password) {
        toast.success("Login successful!");
        // In a real app, you would redirect or update authentication state
      } else {
        toast.error("Invalid email or password");
      }
      setIsLoading(false);
    }, 1500);
  };

  return (
    <main className="min-h-screen py-16">
      <div className="container max-w-md mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold font-heading mb-2">Welcome Back</h1>
          <p className="text-gray-600">Log in to your EcoGanesha account</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <form onSubmit={handleLogin}>
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

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="block text-sm font-medium" htmlFor="password">
                    Password
                  </label>
                  <Link 
                    to="/forgot-password" 
                    className="text-sm text-eco-purple-DEFAULT hover:text-eco-purple-dark"
                  >
                    Forgot password?
                  </Link>
                </div>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-input"
                  placeholder="Enter your password"
                  required
                />
              </div>

              <div className="flex items-center">
                <input
                  id="remember"
                  type="checkbox"
                  className="rounded text-eco-green-DEFAULT focus:ring-eco-green-DEFAULT h-4 w-4"
                />
                <label htmlFor="remember" className="ml-2 text-sm text-gray-600">
                  Remember me
                </label>
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-eco-green-DEFAULT hover:bg-eco-green-dark text-white"
              >
                {isLoading ? "Logging in..." : "Log In"}
              </Button>
            </div>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Don't have an account?{" "}
              <Link to="/register" className="text-eco-purple-DEFAULT hover:text-eco-purple-dark font-medium">
                Sign up
              </Link>
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-center text-sm text-gray-500 mb-4">Or continue with</p>
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

export default Login;
