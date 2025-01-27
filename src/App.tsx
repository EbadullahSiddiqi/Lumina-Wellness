import React, { useEffect, useRef } from 'react';
import {
  Leaf,
  Heart,
  Users,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Star,
  ArrowRight,
  Play,
  Clock,
  MapPin,
  CheckCircle2,
  ArrowUpRight,
} from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'Yoga Enthusiast',
    content:
      'Lumina Wellness transformed my approach to mindfulness. The instructors are exceptional!',
    rating: 5,
    image:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200&h=200',
  },
  {
    name: 'David Chen',
    role: 'Business Professional',
    content:
      'The meditation workshops helped me find balance in my hectic schedule. Highly recommended!',
    rating: 5,
    image:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200',
  },
  {
    name: 'Emma Thompson',
    role: 'Wellness Journey',
    content:
      'The retreats are life-changing experiences. I found my inner peace here.',
    rating: 5,
    image:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200&h=200',
  },
];

const retreats = [
  {
    title: 'Mountain Serenity Retreat',
    image:
      'https://images.unsplash.com/photo-1587559045816-8b0a54d5c80d?auto=format&fit=crop&w=800',
    date: 'June 15-20, 2024',
    location: 'Swiss Alps',
  },
  {
    title: 'Coastal Wellness Journey',
    image:
      'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800',
    date: 'July 8-13, 2024',
    location: 'Bali, Indonesia',
  },
  {
    title: 'Forest Meditation Escape',
    image:
      'https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=800',
    date: 'August 22-27, 2024',
    location: 'Kyoto, Japan',
  },
];

const classes = [
  {
    title: 'Morning Flow Yoga',
    time: '7:00 AM - 8:30 AM',
    instructor: 'Maya Patel',
    level: 'All Levels',
    image:
      'https://images.unsplash.com/photo-1599447421416-3414500d18a5?auto=format&fit=crop&w=800',
  },
  {
    title: 'Mindful Meditation',
    time: '12:00 PM - 1:00 PM',
    instructor: 'David Kim',
    level: 'Beginner',
    image:
      'https://images.unsplash.com/photo-1591228127791-8e2eaef098d3?auto=format&fit=crop&w=800',
  },
  {
    title: 'Power Vinyasa',
    time: '5:30 PM - 7:00 PM',
    instructor: 'Sarah Johnson',
    level: 'Intermediate',
    image:
      'https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?auto=format&fit=crop&w=800',
  },
];

const benefits = [
  'Personalized wellness plans',
  'Expert-led workshops',
  'Mindfulness training',
  'Nutrition guidance',
  'Community support',
  'Holistic healing',
];

function App() {
  const [currentTestimonial, setCurrentTestimonial] = React.useState(0);

  // Intersection Observer for reveal animations
  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    };

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );
    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#d8dde5]">
      {/* Hero Section */}
      <div className="relative h-screen overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover scale-105"
        >
          <source
            src="https://player.vimeo.com/external/454527103.sd.mp4?s=8d2a8c96c5887a3c2b0b967c1952b72750e5c15e&profile_id=164&oauth2_token_id=57447761"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-transparent animate-shine" />

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#88C0D0]/20 rounded-full blur-3xl animate-pulse animate-float" />
        <div
          className="absolute bottom-20 right-10 w-40 h-40 bg-[#EBCB8B]/20 rounded-full blur-3xl animate-pulse delay-1000 animate-float"
          style={{ animationDelay: '-3s' }}
        />

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center px-4">
          <div className="space-y-8 max-w-4xl stagger-children">
            {/* Pre-heading */}
            <div className="inline-block px-4 py-1 rounded-full border border-white/30 backdrop-blur-sm text-sm font-medium">
              Begin Your Wellness Journey Today
            </div>

            {/* Main Heading */}
            <h1 className="font-['Playfair_Display'] text-6xl md:text-8xl mb-6 leading-tight">
              Find Your{' '}
              <span className="text-[#88C0D0] animate-shine">Inner Glow</span>
            </h1>

            {/* Description */}
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-white/90">
              Begin your journey to wellness through mindfulness, movement, and
              meaningful connection
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="group bg-[#88C0D0] hover:bg-[#7AB0C0] text-white px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center gap-2 w-full sm:w-auto animate-soft-pulse">
                <span>Start Your Journey</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
              <button className="group bg-white/10 backdrop-blur-sm hover:bg-white/20 border-2 border-white/30 text-white px-8 py-4 rounded-full transition-all duration-300 flex items-center gap-2 w-full sm:w-auto">
                <Play className="w-4 h-4" />
                <span>Watch Our Story</span>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-16">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">1000+</div>
                <div className="text-sm text-white/70">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">50+</div>
                <div className="text-sm text-white/70">Expert Instructors</div>
              </div>
              <div className="text-center hidden md:block">
                <div className="text-4xl font-bold mb-2">100%</div>
                <div className="text-sm text-white/70">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/70">
          <div className="w-0.5 h-16 bg-white/20 relative overflow-hidden">
            <div className="w-full h-1/2 bg-white absolute top-0 animate-scroll" />
          </div>
          <span className="text-sm">Scroll to explore</span>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 px-4 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#88C0D0]/5 to-transparent" />
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16 reveal">
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl mb-6">
              Our Approach to Wellness
            </h2>
            <p className="text-[#4C566A] max-w-2xl mx-auto text-lg">
              Discover a holistic journey that nurtures your mind, body, and
              spirit through our comprehensive wellness programs
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-12 reveal">
            <div className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-16 h-16 mb-6 flex items-center justify-center bg-[#88C0D0]/10 rounded-2xl group-hover:scale-110 transition-transform">
                <Leaf className="w-8 h-8 text-[#88C0D0]" />
              </div>
              <h3 className="font-['Playfair_Display'] text-2xl mb-4">
                Holistic Approach
              </h3>
              <p className="text-[#4C566A]">
                Comprehensive wellness programs tailored to mind, body, and
                spirit
              </p>
            </div>
            <div className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-16 h-16 mb-6 flex items-center justify-center bg-[#EBCB8B]/10 rounded-2xl group-hover:scale-110 transition-transform">
                <Heart className="w-8 h-8 text-[#EBCB8B]" />
              </div>
              <h3 className="font-['Playfair_Display'] text-2xl mb-4">
                Expert Guidance
              </h3>
              <p className="text-[#4C566A]">
                Learn from certified instructors passionate about your wellness
                journey
              </p>
            </div>
            <div className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-16 h-16 mb-6 flex items-center justify-center bg-[#A3BE8C]/10 rounded-2xl group-hover:scale-110 transition-transform">
                <Users className="w-8 h-8 text-[#A3BE8C]" />
              </div>
              <h3 className="font-['Playfair_Display'] text-2xl mb-4">
                Community Focus
              </h3>
              <p className="text-[#4C566A]">
                Join a supportive community dedicated to growth and wellness
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-20 px-4 bg-[#88C0D0]/5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="reveal">
            <h2 className="font-['Playfair_Display'] text-4xl mb-6">
              Transform Your Life with Lumina
            </h2>
            <p className="text-[#4C566A] mb-8 text-lg">
              Experience the transformative power of our holistic wellness
              programs, designed to nurture your mind, body, and spirit.
            </p>
            <div className="grid grid-cols-2 gap-4 stagger-children">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#88C0D0]" />
                  <span className="text-[#4C566A]">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative reveal">
            <img
              src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=800"
              alt="Wellness Benefits"
              className="rounded-2xl shadow-lg"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg animate-float">
              <div className="text-3xl font-bold text-[#88C0D0] mb-1">96%</div>
              <div className="text-sm text-[#4C566A]">Client satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Classes Section */}
      <div className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal">
            <h2 className="font-['Playfair_Display'] text-4xl mb-6">
              Featured Classes
            </h2>
            <p className="text-[#4C566A] max-w-2xl mx-auto">
              Join our expert-led classes designed to help you achieve balance
              and inner peace
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 reveal stagger-children">
            {classes.map((class_, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={class_.image}
                    alt={class_.title}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-['Playfair_Display'] text-xl mb-2">
                    {class_.title}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-[#4C566A] mb-2">
                    <Clock className="w-4 h-4" />
                    <span>{class_.time}</span>
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-sm text-[#4C566A]">
                      {class_.instructor}
                    </span>
                    <span className="text-xs px-3 py-1 bg-[#88C0D0]/10 text-[#88C0D0] rounded-full">
                      {class_.level}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-20 px-4 bg-[#88C0D0]/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-['Playfair_Display'] text-4xl text-center mb-12 reveal">
            What Our Community Says
          </h2>
          <div className="relative reveal">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <div className="flex gap-1 mb-1">
                    {[...Array(testimonials[currentTestimonial].rating)].map(
                      (_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-[#EBCB8B] text-[#EBCB8B]"
                        />
                      )
                    )}
                  </div>
                  <p className="font-semibold">
                    {testimonials[currentTestimonial].name}
                  </p>
                  <p className="text-sm text-gray-600">
                    {testimonials[currentTestimonial].role}
                  </p>
                </div>
              </div>
              <p className="text-lg italic">
                {testimonials[currentTestimonial].content}
              </p>
            </div>
            <button
              onClick={() =>
                setCurrentTestimonial((prev) =>
                  prev === 0 ? testimonials.length - 1 : prev - 1
                )
              }
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-[#88C0D0] hover:text-white transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() =>
                setCurrentTestimonial((prev) =>
                  prev === testimonials.length - 1 ? 0 : prev + 1
                )
              }
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-[#88C0D0] hover:text-white transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Retreats Section */}
      <div className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-['Playfair_Display'] text-4xl text-center mb-4 reveal">
            Upcoming Retreats
          </h2>
          <p className="text-center text-[#4C566A] mb-12 max-w-2xl mx-auto reveal">
            Immerse yourself in transformative experiences designed to
            rejuvenate your mind, body, and spirit
          </p>
          <div className="grid md:grid-cols-3 gap-8 reveal stagger-children">
            {retreats.map((retreat, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-sm hover:shadow-lg transition-all"
              >
                <img
                  src={retreat.image}
                  alt={retreat.title}
                  className="w-full h-80 object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex flex-col justify-end p-6 text-white">
                  <h3 className="font-['Playfair_Display'] text-2xl mb-4">
                    {retreat.title}
                  </h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-white/90">
                      <Calendar className="w-4 h-4" />
                      <p>{retreat.date}</p>
                    </div>
                    <div className="flex items-center gap-2 text-white/90">
                      <MapPin className="w-4 h-4" />
                      <p>{retreat.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button className="group inline-flex items-center gap-2 text-[#88C0D0] font-semibold hover:text-[#7AB0C0] transition">
              View All Retreats
              <ArrowRight className="w-4 h-4 transition group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative py-20 px-4 bg-[#88C0D0] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[#88C0D0] mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#88C0D0] via-[#88C0D0]/90 to-[#EBCB8B]/30 animate-shine" />
        </div>
        <div className="relative max-w-4xl mx-auto text-center text-white reveal">
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl mb-6">
            Begin Your Wellness Journey Today
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Take the first step towards a more balanced and fulfilling life
          </p>
          <button className="bg-white text-[#88C0D0] px-8 py-4 rounded-full font-semibold hover:bg-white/90 transition-colors animate-soft-pulse">
            Schedule Your Free Consultation
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
