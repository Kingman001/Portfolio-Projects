
import Image from 'next/image';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "Working with Elevate Enterprises transformed our leadership team. Their approach is both insightful and practical, leading to tangible results in team performance and morale.",
    name: "Jane Doe",
    title: "CEO, Tech Innovators Inc.",
    logoUrl: "https://placehold.co/100x100/3F51B5/FFFFFF.png",
    logoHint: "tech company logo"
  },
  {
    quote: "The strategic coaching we received was a game-changer for our market expansion. I cannot recommend their services highly enough for any enterprise looking to scale.",
    name: "John Smith",
    title: "COO, Global Solutions Ltd.",
    logoUrl: "https://placehold.co/100x100/FF9800/FFFFFF.png",
    logoHint: "global logistics logo"
  }
]

export function Testimonials() {
  return (
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">What Our Clients Say</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Discover the impact we've made on leading enterprise businesses.
          </p>
        </div>
        <div className="mx-auto grid items-start gap-8 sm:max-w-4xl md:grid-cols-2 md:gap-12 lg:max-w-5xl">
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex items-start gap-4">
                  <Avatar className="h-14 w-14 border">
                    <AvatarImage src={testimonial.logoUrl} alt={testimonial.name} data-ai-hint={testimonial.logoHint} />
                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="grid gap-1">
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.title}</div>
                    <div className="flex items-center gap-0.5 text-accent">
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <blockquote className="text-lg leading-relaxed">
                  “{testimonial.quote}”
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
