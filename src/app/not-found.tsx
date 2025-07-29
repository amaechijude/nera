"use client"
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

export default function NotFound() {
    const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8">Sorry, we couldn&apos;t find the page you&apos;re looking for.</p>
    
        {/* Return to dashboard button */}
          <Button 
          onClick={() => router.push('/')}
          className="bg-green-600 text-white hover:bg-green-700 transition-colors">
            Return to Dashboard
          </Button>
        {/* Go back button */}
        <Button
        onClick={() => router.back()}
        >
            Go Back
        </Button>
      </div>
    </div>
  );
}
