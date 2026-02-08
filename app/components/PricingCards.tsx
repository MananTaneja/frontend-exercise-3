import { useState } from 'react';

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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Starter Card */}
        <div className="border rounded-xl p-6 flex flex-col">
          <h2 className="text-2xl font-bold mb-2">Starter</h2>
          <p className="text-4xl font-bold mb-4">Free</p>
          <p className="text-gray-600 mb-6">For individuals or teams just getting started</p>

          <button className="mt-auto w-full bg-gray-100 text-gray-900 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors">
            Select plan
          </button>

          <div className="mt-6 pt-6 border-t">
            <h3 className="font-bold mb-3">Why choose Starter?</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Unlimited files in shared team libraries</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Up to 2 editors on drafts</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Community support</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Professional Card */}
        <div className="border-2 border-blue-600 rounded-xl p-6 flex flex-col relative">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
            Most popular
          </div>

          <h2 className="text-2xl font-bold mb-2">Professional</h2>

          {/* Toggle for Monthly/Annual */}
          <div className="flex items-center justify-center mb-4">
            <span className={`mr-3 ${!isAnnual ? 'font-semibold' : 'text-gray-500'}`}>Monthly</span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative rounded-full w-12 h-6 bg-gray-300 transition-colors focus:outline-none"
            >
              <div className={`absolute w-4 h-4 bg-white rounded-full top-1 transition-transform ${isAnnual ? 'transform translate-x-7' : 'transform translate-x-1'}`}></div>
            </button>
            <span className={`ml-3 ${isAnnual ? 'font-semibold' : 'text-gray-500'}`}>Annual</span>
          </div>

          <div className="mb-4">
            <p className="text-4xl font-bold">${currentProfessionalPrices.collab}<span className="text-lg text-gray-500">/editor</span></p>
            <p className="text-gray-600">Collab seat</p>
          </div>

          <div className="mb-4">
            <p className="text-2xl font-bold">${currentProfessionalPrices.dev}<span className="text-base text-gray-500">/editor</span></p>
            <p className="text-gray-600">Dev seat</p>
          </div>

          <div className="mb-6">
            <p className="text-2xl font-bold">${currentProfessionalPrices.full}<span className="text-base text-gray-500">/editor</span></p>
            <p className="text-gray-600">Full seat</p>
          </div>

          <button className="mt-auto w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
            Select plan
          </button>

          <div className="mt-6 pt-6 border-t">
            <h3 className="font-bold mb-3">Why choose Professional?</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Everything in Starter, plus:</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Unlimited projects</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Design and prototyping</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Shared team libraries</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Advanced prototyping tools</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Easier dev handoff</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Advanced Dev Mode inspection</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>3,000 AI credits/mo for Full seat</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>MCP Server</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Organization Card */}
        <div className="border rounded-xl p-6 flex flex-col">
          <h2 className="text-2xl font-bold mb-2">Organization</h2>
          <p className="text-sm text-gray-500 mb-4">Billed annually</p>

          <div className="mb-4">
            <p className="text-4xl font-bold">${organizationPrices.collab}<span className="text-lg text-gray-500">/editor</span></p>
            <p className="text-gray-600">Collab seat</p>
          </div>

          <div className="mb-4">
            <p className="text-2xl font-bold">${organizationPrices.dev}<span className="text-base text-gray-500">/editor</span></p>
            <p className="text-gray-600">Dev seat</p>
          </div>

          <div className="mb-6">
            <p className="text-2xl font-bold">${organizationPrices.full}<span className="text-base text-gray-500">/editor</span></p>
            <p className="text-gray-600">Full seat</p>
          </div>

          <div className="flex space-x-3 mt-auto">
            <button className="flex-1 bg-gray-100 text-gray-900 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors">
              Select plan
            </button>
            <button className="flex-1 bg-gray-900 text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">
              Contact sales
            </button>
          </div>

          <div className="mt-6 pt-6 border-t">
            <h3 className="font-bold mb-3">Why choose Organization?</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Everything in Professional, plus:</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Enterprise-grade SSO</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Advanced admin controls</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Dedicated customer success</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>3,500 AI credits/mo for Full seat</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Enterprise Card */}
        <div className="border rounded-xl p-6 flex flex-col">
          <h2 className="text-2xl font-bold mb-2">Enterprise</h2>
          <p className="text-sm text-gray-500 mb-4">Billed annually</p>

          <div className="mb-4">
            <p className="text-4xl font-bold">${enterprisePrices.collab}<span className="text-lg text-gray-500">/editor</span></p>
            <p className="text-gray-600">Collab seat</p>
          </div>

          <div className="mb-4">
            <p className="text-2xl font-bold">${enterprisePrices.dev}<span className="text-base text-gray-500">/editor</span></p>
            <p className="text-gray-600">Dev seat</p>
          </div>

          <div className="mb-6">
            <p className="text-2xl font-bold">${enterprisePrices.full}<span className="text-base text-gray-500">/editor</span></p>
            <p className="text-gray-600">Full seat</p>
          </div>

          <div className="flex space-x-3 mt-auto">
            <button className="flex-1 bg-gray-900 text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">
              Contact sales
            </button>
            <button className="flex-1 bg-gray-100 text-gray-900 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors">
              Learn more
            </button>
          </div>

          <div className="mt-6 pt-6 border-t">
            <h3 className="font-bold mb-3">Why choose Enterprise?</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Everything in Organization, plus:</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Advanced security & compliance</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Custom integrations</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>24/7 premium support</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>SCIM seat management</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>4,250 AI credits/mo for Full seat</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}