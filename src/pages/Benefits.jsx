import { 
  BarChart, 
  Shield, 
  Heart,
  DollarSign,
  Clock,
  Users,
  Leaf,
  Award
} from 'lucide-react'

const benefits = [
  {
  icon: Shield,
  title: "Quality Guaranteed",
  description: "All crops are verified for quality and sourced directly from trusted local farmers"
},
{
  icon: Heart,
  title: "Support Local Farmers",
  description: "Every purchase helps farming families and strengthens sustainable agriculture in Sri Lanka"
},
{
  icon: DollarSign,
  title: "Fair Prices",
  description: "Transparent pricing ensures farmers earn fairly while buyers get value for money"
},
{
  icon: Clock,
  title: "Timely Harvest Insights",
  description: "Farmers receive guidance on when and what to cultivate to avoid surplus or deficit"
},
{
  icon: Users,
  title: "Community Driven",
  description: "A platform that connects farmers, buyers, and experts to build a resilient food system"
},
{
  icon: Leaf,
  title: "Sustainable Farming",
  description: "Encouraging organic methods, eco-friendly practices, and long-term soil health"
},
{
  icon: Award,
  title: "Trusted Network",
  description: "All farmers and buyers are verified, ensuring reliability and accountability"
},
{
  icon: BarChart,
  title: "Data-Driven Decisions",
  description: "Market trends and crop data help farmers plan cultivation and maximize profits"
}
]

export default function Benefits() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
            Why Choose FreshMarket?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the difference of buying directly from local farmers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon
            return (
              <div 
                key={index}
                className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg bg-gradient-to-br from-white to-gray-50 text-center rounded-lg p-6"
              >
                <div className="pb-4">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-r from-green-100 to-emerald-100 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 group-hover:text-green-600 transition-colors duration-300">
                    {benefit.title}
                  </h3>
                </div>
                <div>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}