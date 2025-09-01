import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: "Nimali Perera",
    role: "Organic Farm Owner",
    location: "Kandy, Sri Lanka",
    content: "FreshMarket has revolutionized how I connect with customers. The platform makes it easy to showcase my organic produce and reach health-conscious buyers directly.",
    rating: 5,
    initials: "NP"
  },
  {
    name: "Chathu Fernando",
    role: "Home Chef",
    location: "Colombo, Sri Lanka",
    content: "The quality of produce I get from FreshMarket is unmatched. Everything is so fresh and flavorful - it's completely transformed my cooking.",
    rating: 5,
    initials: "CF"
  },
  {
    name: "Maria Silva",
    role: "Busy Mom",
    location: "Galle, Sri Lanka",
    content: "I love that I can support local farmers while getting the freshest ingredients for my family. The delivery is always on time and the produce lasts so much longer.",
    rating: 5,
    initials: "MS"
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how FreshMarket is connecting communities with fresh, local produce
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg bg-gradient-to-br from-white to-gray-50 relative overflow-hidden rounded-lg"
            >
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                <Quote className="w-12 h-12 text-green-600" />
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold">
                      {testimonial.initials}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                    <div className="text-sm text-green-600">{testimonial.location}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-green-50 rounded-full px-6 py-3">
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <span className="text-gray-700 font-semibold">4.9/5 average rating from 10,000+ customers</span>
          </div>
        </div>
      </div>
    </section>
  )
}