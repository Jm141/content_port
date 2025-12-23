// components/client-logos.tsx
'use client';

import { useEffect, useState } from 'react';

export function ClientLogos() {
  const [isMounted, setIsMounted] = useState(false);
  
  const clients = [
    { id: 1, name: 'Accounitn', logo: '/logos/accounitn.png' },
    { id: 2, name: 'Cloud2', logo: '/logos/cloud2.png' },
    { id: 3, name: 'LGU V2', logo: '/logos/lguv23.png' },
    { id: 4, name: 'Payroll V2', logo: '/logos/payrolv2.png' },
    { id: 5, name: 'Server AP', logo: '/logos/serverap.png' },
  ];

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="py-12 bg-gradient-to-r from-background to-muted/20">
        <div className="h-32 animate-pulse rounded-lg bg-muted/30" />
      </div>
    );
  }

  return (
    <div className="py-16 bg-gradient-to-r from-background to-muted/10 relative overflow-hidden">
      {/* Gradient overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Logos Designed for Products</h2>
          <p className="mt-2 text-muted-foreground">A collection of logos created for various products.</p>
        </div>
        
        <div className="relative">
          <div className="flex animate-marquee whitespace-nowrap group">
            {[...clients, ...clients].map((client, index) => (
              <div 
                key={`${client.id}-${index}`} 
                className="flex-shrink-0 mx-8 w-48 h-36 bg-background rounded-xl shadow-sm border border-border/50 hover:border-primary/50 transition-all duration-300 flex items-center justify-center p-6 group-hover:opacity-80 hover:!opacity-100 hover:shadow-md hover:-translate-y-1"
              >
                <img 
                  src={client.logo}
                  alt={client.name}
                  className="max-h-24 max-w-full object-contain grayscale hover:grayscale-0 transition-all duration-500"
                  onError={(e) => {
                    console.error(`Failed to load: ${client.logo}`);
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}