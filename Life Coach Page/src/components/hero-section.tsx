
"use client";

import { useState, useEffect } from 'react';
import { getHeadlineAction } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Skeleton } from '@/components/ui/skeleton';
import { useToast } from "@/hooks/use-toast"


const industries = ["Technology", "Finance", "Healthcare", "Manufacturing", "Retail"];
const valueProposition = "A life coach for enterprise businesses, focusing on elevating leadership and team performance for enterprise success.";

export function HeroSection() {
  const [selectedIndustry, setSelectedIndustry] = useState(industries[0]);
  const [headline, setHeadline] = useState("Unlock Your Team's Potential");
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const fetchHeadline = async () => {
      if (!selectedIndustry) return;
      setIsLoading(true);
      try {
        const result = await getHeadlineAction({
          industry: selectedIndustry,
          valueProposition,
        });
        setHeadline(result.headline);
      } catch (error) {
        console.error("Failed to generate headline:", error);
        toast({
          title: "Error",
          description: "Could not generate a personalized headline. Please try again.",
          variant: "destructive",
        })
        setHeadline("Unlock Your Team's Potential"); // Fallback
      } finally {
        setIsLoading(false);
      }
    };
    fetchHeadline();
  }, [selectedIndustry, toast]);

  return (
    <section className="w-full py-20 md:py-32 lg:py-40 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-6 text-center">
          <div className="max-w-md w-full space-y-2">
            <Label htmlFor="industry-select" className="text-sm font-medium">Customize for your industry:</Label>
            <Select onValueChange={setSelectedIndustry} defaultValue={selectedIndustry}>
              <SelectTrigger id="industry-select" className="w-full">
                <SelectValue placeholder="Select an industry" />
              </SelectTrigger>
              <SelectContent>
                {industries.map((industry) => (
                  <SelectItem key={industry} value={industry}>{industry}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-4">
             {isLoading ? (
              <div className="space-y-4">
                <Skeleton className="h-12 w-[300px] md:h-16 md:w-[600px] mx-auto" />
                <Skeleton className="h-12 w-[250px] md:h-16 md:w-[500px] mx-auto" />
              </div>
            ) : (
                <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none text-foreground">
                  {headline}
                </h1>
            )}
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              We empower leaders and teams in enterprise settings to achieve peak performance, fostering a culture of growth and resilience.
            </p>
          </div>
          <Button size="lg">
            Book an Appointment
          </Button>
        </div>
      </div>
    </section>
  );
}
