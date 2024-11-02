import Header from '../components/header';
import { Button } from '../components/ui/button';

/* eslint-disable react/no-unescaped-entities */
export default function HomePage() {
  return (
    <div>
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className='bg-white py-20 text-center'>
        <div className='max-w-4xl mx-auto'>
          <h2 className='text-5xl font-bold text-gray-800'>The modern finance platform.</h2>
          <p className='text-xl mt-4 text-gray-600'>All your business in one app. Manage everything easily.</p>
          <div className='mt-8'>
            <Button className='bg-green-600 text-white px-8 py-3'>Discover our offer</Button>
            <Button className='ml-4 bg-gray-200 text-gray-800 px-8 py-3'>Learn More</Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className='bg-gray-50 py-16'>
        <div className='text-center mb-10'>
          <h3 className='text-4xl font-semibold'>All your finance modules in one app</h3>
        </div>
        <div className='max-w-6xl mx-auto grid grid-cols-3 gap-8'>
          <div className='bg-white p-6 rounded-lg shadow'>
            <h4 className='text-2xl font-semibold'>Business IBAN Account</h4>
            <p className='mt-2 text-gray-600'>Open a business account in less than 5 minutes.</p>
          </div>
          <div className='bg-white p-6 rounded-lg shadow'>
            <h4 className='text-2xl font-semibold'>Multi-currency transfers</h4>
            <p className='mt-2 text-gray-600'>Send and receive money in 18 currencies globally.</p>
          </div>
          <div className='bg-white p-6 rounded-lg shadow'>
            <h4 className='text-2xl font-semibold'>Financial Reporting</h4>
            <p className='mt-2 text-gray-600'>Get detailed financial reports and analytics.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className='bg-green-100 py-16'>
        <div className='text-center mb-10'>
          <h3 className='text-4xl font-semibold'>Loved by industry leaders</h3>
          <p className='text-lg mt-2'>See what our customers are saying</p>
        </div>
        <div className='max-w-6xl mx-auto grid grid-cols-2 gap-8'>
          <div className='bg-white p-6 rounded-lg shadow'>
            <p className='italic'>"Excellent service! We were able to manage our finances seamlessly."</p>
            <h4 className='mt-4 text-lg font-semibold'>Customer 1</h4>
          </div>
          <div className='bg-white p-6 rounded-lg shadow'>
            <p className='italic'>"Helped our company streamline international payments."</p>
            <h4 className='mt-4 text-lg font-semibold'>Customer 2</h4>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className='bg-white py-16'>
        <div className='text-center mb-10'>
          <h3 className='text-4xl font-semibold'>Pricing Plans</h3>
        </div>
        <div className='max-w-6xl mx-auto grid grid-cols-2 gap-8'>
          <div className='bg-gray-50 p-6 rounded-lg shadow'>
            <h4 className='text-2xl font-semibold'>Starter Plan</h4>
            <p className='mt-4'>$50 per month</p>
            <Button className='mt-6 bg-green-500 text-white'>Get Started</Button>
          </div>
          <div className='bg-gray-50 p-6 rounded-lg shadow'>
            <h4 className='text-2xl font-semibold'>Premium Plan</h4>
            <p className='mt-4'>$200 per month</p>
            <Button className='mt-6 bg-green-500 text-white'>Get Started</Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='bg-green-900 py-8 text-white'>
        <div className='max-w-7xl mx-auto text-center'>
          <p>&copy; 2024 Momento. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
