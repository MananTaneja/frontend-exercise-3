import { useState } from 'react';
import PricingCard from './PricingCard';

interface PricingData {
  monthly: {
    collab: number;
    dev: number;
    full: number;
  };
  annual: {
    collab: number;
    dev: number;
    full: number;
  };
}

interface Prices {
  collab: number;
  dev: number;
  full: number;
}

interface PricingCardProps {
  professionalPrices: PricingData;
  organizationPrices: Prices;
  enterprisePrices: Prices;
}

export default function PricingCards({ professionalPrices, organizationPrices, enterprisePrices }: PricingCardProps) {
  const [isAnnual, setIsAnnual] = useState(true);
  const currentProfessionalPrices = isAnnual ? professionalPrices.annual : professionalPrices.monthly;

  return (
    <section className="py-8 px-8 max-w-[1440px] mx-auto">
      <p className="text-right text-gray-500 text-sm mr-2">Prices in USD</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
        {/* Starter Card */}
        <PricingCard
          title="Starter"
          price="Free"
          description="For individuals or teams just getting started"
          buttons={[
            { text: "Select plan", variant: "outline" }
          ]}
          features={[]}
          whyChooseFeatures={[
            "Unlimited files in shared team libraries",
            "Up to 2 editors on drafts",
            "Community support"
          ]}
        />

        {/* Professional Card */}
        <PricingCard
          title="Professional"
          hasToggle={true}
          professionalPrices={professionalPrices}
          currentProfessionalPrices={currentProfessionalPrices}
          isAnnual={isAnnual}
          setIsAnnual={setIsAnnual}
          buttons={[
            { text: "Select plan", variant: "primary" }
          ]}
          features={[]}
          whyChooseFeatures={[
            "Everything in Starter, plus:",
            "Unlimited projects",
            "Design and prototyping",
            "Shared team libraries",
            "Advanced prototyping tools",
            "Easier dev handoff",
            "Advanced Dev Mode inspection",
            "3,000 AI credits/mo for Full seat",
            "MCP Server"
          ]}
        />

        {/* Organization Card */}
        <PricingCard
          title="Organization"
          showBillingNote={true}
          prices={organizationPrices}
          buttons={[
            { text: "Select plan", variant: "outline" },
            { text: "Contact sales", variant: "secondary" }
          ]}
          features={[]}
          whyChooseFeatures={[
            "Everything in Professional, plus:",
            "Enterprise-grade SSO",
            "Advanced admin controls",
            "Dedicated customer success",
            "3,500 AI credits/mo for Full seat"
          ]}
        />

        {/* Enterprise Card */}
        <PricingCard
          title="Enterprise"
          showBillingNote={true}
          prices={enterprisePrices}
          buttons={[
            { text: "Contact sales", variant: "secondary" },
            { text: "Learn more", variant: "outline" }
          ]}
          features={[]}
          whyChooseFeatures={[
            "Everything in Organization, plus:",
            "Advanced security & compliance",
            "Custom integrations",
            "24/7 premium support",
            "SCIM seat management",
            "4,250 AI credits/mo for Full seat"
          ]}
        />
      </div>
    </section>
  );
}