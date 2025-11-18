import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import SEO from '../components/SEO';

const Register = () => {
  const navigate = useNavigate();
  const { register } = useAuth();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    password2: '',
    phone: '',
    is_host: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: undefined });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});

    const result = await register(formData);

    if (result.success) {
      alert('Registration successful! Please log in.');
      navigate('/auth/login');
    } else {
      setErrors(result.errors);
    }

    setLoading(false);
  };

  return (
    <>
      <SEO 
        title="Sign Up - BomaniHosts"
        description="Create your BomaniHosts account to start booking or listing properties"
      />

      <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full">
          <div className="bg-white rounded-lg shadow-xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-bomani-accent">Create Account</h2>
              <p className="text-gray-600 mt-2">Join BomaniHosts today</p>
            </div>

            {errors.detail && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
                {errors.detail}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-bomani-accent mb-2">
                  Username *
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  required
                  value={formData.username}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-bomani-primary ${
                    errors.username ? 'border-red-500' : 'border-bomani-peach'
                  }`}
                />
                {errors.username && (
                  <p className="mt-1 text-sm text-red-600">{errors.username[0]}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-bomani-accent mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-bomani-primary ${
                    errors.email ? 'border-red-500' : 'border-bomani-peach'
                  }`}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email[0]}</p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-bomani-accent mb-2">
                  Phone (Optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+254712345678"
                  className="w-full px-4 py-2 border border-bomani-peach rounded-lg focus:outline-none focus:ring-2 focus:ring-bomani-primary"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-bomani-accent mb-2">
                  Password *
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-bomani-primary ${
                    errors.password ? 'border-red-500' : 'border-bomani-peach'
                  }`}
                />
                {errors.password && (
                  <p className="mt-1 text-sm text-red-600">{errors.password[0]}</p>
                )}
              </div>

              <div>
                <label htmlFor="password2" className="block text-sm font-medium text-bomani-accent mb-2">
                  Confirm Password *
                </label>
                <input
                  type="password"
                  id="password2"
                  name="password2"
                  required
                  value={formData.password2}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-bomani-primary ${
                    errors.password2 ? 'border-red-500' : 'border-bomani-peach'
                  }`}
                />
                {errors.password2 && (
                  <p className="mt-1 text-sm text-red-600">{errors.password2[0]}</p>
                )}
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="is_host"
                  name="is_host"
                  checked={formData.is_host}
                  onChange={handleChange}
                  className="h-4 w-4 text-bomani-primary focus:ring-bomani-primary border-bomani-peach rounded"
                />
                <label htmlFor="is_host" className="ml-2 block text-sm text-bomani-accent">
                  I want to list properties as a host
                </label>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-bomani-primary text-white py-3 px-6 rounded-lg hover:bg-opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed font-semibold"
              >
                {loading ? 'Creating Account...' : 'Sign Up'}
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-gray-600">
              Already have an account?{' '}
              <Link to="/auth/login" className="text-bomani-primary hover:underline font-medium">
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;