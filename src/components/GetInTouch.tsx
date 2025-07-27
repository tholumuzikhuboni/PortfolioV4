import { Mail, Phone, MapPin } from 'lucide-react';

const GetInTouch = () => {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-none mb-6">
            <span className="block text-foreground">Get</span>
            <span className="block text-foreground">In</span>
            <span className="block text-primary italic">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Ready to collaborate or discuss opportunities? Let's connect and build something amazing together.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-primary/10 border border-primary/20 flex items-center justify-center">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-foreground">Email</h3>
                <p className="text-muted-foreground">contact@tholumuzi.co.za</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-primary/10 border border-primary/20 flex items-center justify-center">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-foreground">Phone</h3>
                <p className="text-muted-foreground">+27 68 882 2288</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-primary/10 border border-primary/20 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-foreground">Location</h3>
                <p className="text-muted-foreground">Johannesburg</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;