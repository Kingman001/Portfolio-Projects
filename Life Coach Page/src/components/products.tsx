
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Users, TrendingUp } from "lucide-react";

const products = [
  {
    icon: Briefcase,
    title: "Executive Leadership Package",
    description: "One-on-one coaching for C-suite executives to enhance leadership skills, strategic thinking, and personal growth.",
    price: "$5,000/mo",
  },
  {
    icon: Users,
    title: "Team Cohesion Workshop",
    description: "A comprehensive workshop for teams to improve communication, collaboration, and overall productivity.",
    price: "$10,000",
  },
  {
    icon: TrendingUp,
    title: "C-Suite Strategic Alliance",
    description: "A retainer-based service for ongoing strategic advice and coaching for your entire leadership team.",
    price: "Contact Us",
  },
];

export function Products() {
  return (
    <section id="products" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Our Premium Offerings</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Tailored programs designed to elevate performance at every level of your organization.
          </p>
        </div>
        <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
          {products.map((product, index) => (
            <Card key={index} className="flex flex-col h-full">
              <CardHeader className="items-center">
                <div className="bg-primary/10 p-3 rounded-full">
                  <product.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-headline text-center">{product.title}</CardTitle>
                <CardDescription className="text-center">{product.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="text-4xl font-bold text-center text-primary">{product.price}</div>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant={product.price === "Contact Us" ? "secondary" : "default"}>
                  {product.price === "Contact Us" ? "Contact Us" : "Book Now"}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
