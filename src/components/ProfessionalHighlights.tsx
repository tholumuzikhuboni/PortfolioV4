import { Card, CardContent } from '@/components/ui/card';
import { Calendar, MapPin, Users, Mic } from 'lucide-react';

const ProfessionalHighlights = () => {
  const gallery = [
    { 
      type: 'video', 
      src: 'https://www.youtube.com/embed/dACYKyzafUc', 
      alt: 'GDG Johannesburg Build with AI Event - Featured Talk',
      title: 'Build With AI Johannesburg Recap'
    }, 
    { type: 'image', src: '/lovable-uploads/IMG_2381.JPG', alt: 'Tholumuzi & Simphiwe - Speakers' },
    { type: 'image', src: '/lovable-uploads/IMG_2365.JPG', alt: 'At Build with AI Event' },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-none mb-6">
              <span className="block text-foreground">My</span>
              <span className="block text-foreground">Professional</span>
              <span className="block text-primary italic">Highlights</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Sharing knowledge and inspiring the next generation of developers through speaking 
              engagements and community involvement at leading tech events.
            </p>
          </div>

          {/* Featured Speaking Engagement */}
          <div className="mb-16">
            <div className="border-l-4 border-primary pl-6">
              <div className="flex items-center space-x-2 mb-2">
                <Mic className="w-5 h-5 text-primary" />
                <span className="text-sm font-mono text-primary">Featured Speaking Engagement</span>
              </div>
              <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-none mb-4">
                <span className="block text-foreground">From Localhost to</span>
                <span className="block text-foreground">Getting Hired:</span>
                <span className="block text-primary italic">Shipping Projects</span>
                <span className="block text-foreground">that Actually Matter</span>
              </h3>
              <div className="space-y-2 mb-6">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">July 26th, 2025</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Build With AI - GDG Johannesburg</span>
                </div>
              </div>
              <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
                Encouraged attendees to deploy their projects and stop creating a 
                <span className="text-foreground font-semibold"> "Localhost Graveyard"</span> - 
                a place where brilliant ideas are laid to rest. The talk focused on transforming 
                local projects into deployed solutions that demonstrate real impact to potential employers.
              </p>
            </div>
          </div>

          {/* Photo Gallery */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold font-mono text-foreground mb-6 flex items-center">
              <Users className="w-6 h-6 text-primary mr-3" />
              Event Gallery
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gallery.map((item, index) => (
              <div key={index} className="group relative overflow-hidden border-2 border-border hover:border-primary/50 transition-all duration-300">
                {/* Container for aspect ratio. Using `relative` here for absolute positioning of iframe. */}
                <div className="relative pt-[56.25%] bg-black flex items-center justify-center"> {/* pt-[56.25%] creates a 16:9 aspect ratio (9/16 * 100%) */}
                  {item.type === 'video' ? (
                    <iframe
                      src={item.src}
                      title={item.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      // Position iframe absolutely to fill the padded parent
                      className="absolute top-0 left-0 w-full h-full" 
                    ></iframe>
                  ) : (
                    <img 
                      src={item.src} 
                      alt={item.alt}
                      className="absolute top-0 left-0 w-full h-full object-cover" // Also apply absolute positioning for images
                    />
                  )}
                </div>
                {/* Overlay that darkens on hover, but doesn't block clicks by default */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 pointer-events-none"></div>
                
                {/* Caption that appears on hover, also with pointer-events-none */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <p className="text-white text-sm font-mono">{item.alt}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProfessionalHighlights;
