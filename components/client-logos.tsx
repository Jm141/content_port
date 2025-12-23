'use client';

import { useEffect, useState } from 'react';

export function ClientLogos() {
  const [isMounted, setIsMounted] = useState(false);
  
  // Base URL for production
  const baseUrl = process.env.NODE_ENV === 'production' 
    ? 'https://cp-r416.onrender.com' 
    : '';

  const clients = [
    { id: 1, name: 'Accounitn', logo: `${baseUrl}/logos/accounitn.png` },
    { id: 2, name: 'Cloud2', logo: `${baseUrl}/logos/cloud2.png` },
    { id: 3, name: 'LGU V2', logo: `${baseUrl}/logos/lguv23.png` },
    { id: 4, name: 'Payroll V2', logo: `${baseUrl}/logos/payrolv2.png` },
    { id: 5, name: 'Server AP', logo: `${baseUrl}/logos/serverap.png` },
  ];

  useEffect(() => {
    setIsMounted(true);
    console.log('Base URL:', baseUrl);
    console.log('Image paths:', clients.map(c => c.logo));
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="py-8">
      <h3 className="text-sm font-semibold mb-6 text-muted-foreground uppercase tracking-wide text-center">
        Trusted By Industry Leaders
      </h3>
      
      <div className="relative w-full overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...clients, ...clients].map((client, index) => (
            <div 
              key={`${client.id}-${index}`} 
              className="flex-shrink-0 mx-6 w-32 h-24 bg-muted/20 rounded-lg flex items-center justify-center p-2"
            >
              <img 
                src={client.logo}
                alt={client.name}
                className="max-h-16 max-w-full object-contain opacity-90 hover:opacity-100 transition-opacity"
                onError={(e) => {
                  console.error(`Failed to load: ${client.logo}`);
                  e.currentTarget.style.display = 'none';
                }}
                onLoad={() => console.log(`Loaded: ${client.logo}`)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}