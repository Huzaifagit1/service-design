export type DesignStyle = {
  id: string
  name: string
  description: string
  example?: string
}

export const designInspirationExamples: DesignStyle[] = [
  {
    id: "modern",
    name: "Modern & Minimal",
    description: "Clean lines, minimal design, focus on typography and whitespace",
    example: "https://example.com/modern-design"
  },
  {
    id: "professional",
    name: "Professional & Corporate",
    description: "Traditional business layout with a focus on trust and reliability",
    example: "https://example.com/professional-design"
  },
  {
    id: "bold",
    name: "Bold & Creative",
    description: "Eye-catching design with strong colors and unique layouts",
    example: "https://example.com/bold-design"
  },
  {
    id: "elegant",
    name: "Elegant & Sophisticated",
    description: "Refined design with attention to detail and subtle animations",
    example: "https://example.com/elegant-design"
  }
] 