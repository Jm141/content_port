'use client';

import { cn } from "@/lib/utils"

export function ClientLogos() {
  const clients = [
    { id: 1, name: 'Client 1', logo: '/logos/client-1.png' },
    { id: 2, name: 'Client 2', logo: '/logos/client-2.png' },
    { id: 3, name: 'Client 3', logo: '/logos/client-3.png' },
    { id: 4, name: 'Client 4', logo: '/logos/client-4.png' },
    { id: 5, name: 'Client 5', logo: '/logos/client-5.png' },
  ]

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
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
