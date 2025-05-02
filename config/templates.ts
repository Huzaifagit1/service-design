export interface Template {
  id: string
  name: string
  description: string
  image: string
  price: number
  industry: string
  features: string[]
  demoUrl: string
}

export const templates: Template[] = [
  {
    id: "home-services",
    name: "Home Services Pro",
    description: "A professional template designed for home service businesses including cleaning, maintenance, and repairs.",
    image: "/templates/home-services.jpg",
    price: 199,
    industry: "Home Services",
    features: [
      "Online booking system",
      "Service package builder",
      "Customer dashboard",
      "Review management",
      "Team scheduling",
      "Payment processing"
    ],
    demoUrl: "https://home-services.servicepro.com"
  },
  {
    id: "wellness-spa",
    name: "Wellness & Spa",
    description: "Perfect for spas, wellness centers, and beauty salons with integrated booking and service management.",
    image: "/templates/wellness-spa.jpg",
    price: 249,
    industry: "Wellness",
    features: [
      "Appointment scheduling",
      "Staff management",
      "Gift cards",
      "Membership system",
      "Product sales",
      "Client profiles"
    ],
    demoUrl: "https://wellness-spa.servicepro.com"
  },
  {
    id: "fitness-trainer",
    name: "Fitness Pro",
    description: "Designed for personal trainers and fitness studios with class scheduling and membership management.",
    image: "/templates/fitness-trainer.jpg",
    price: 199,
    industry: "Fitness",
    features: [
      "Class scheduling",
      "Membership management",
      "Workout tracking",
      "Nutrition plans",
      "Progress tracking",
      "Online payments"
    ],
    demoUrl: "https://fitness-pro.servicepro.com"
  }
] 