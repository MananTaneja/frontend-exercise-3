
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
  title: string;
  price?: string;
  description?: string;
  hasToggle?: boolean;
  professionalPrices?: PricingData;
  currentProfessionalPrices?: Prices;
  prices?: Prices;
  isAnnual?: boolean;
  setIsAnnual?: (value: boolean) => void;
  showBillingNote?: boolean;
  buttons: Array<{
    text: string;
    variant: 'primary' | 'secondary' | 'outline';
  }>;
  features: string[];
  whyChooseFeatures: string[];
}

export default function PricingCard({
  title,
  price,
  description,
  hasToggle = false,
  professionalPrices,
  currentProfessionalPrices,
  prices,
  isAnnual,
  setIsAnnual,
  showBillingNote = false,
  buttons,
  features,
  whyChooseFeatures
}: PricingCardProps) {
  const isProfessional = title === 'Professional';

  return (
    <div className="border-l border-l-gray-200 p-6 px-8 flex flex-col relative">

      <h2 className="text-2xl font-bold mb-2">{title}</h2>

      {hasToggle && isAnnual !== undefined && setIsAnnual && professionalPrices && (
        <>
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
        </>
      )}

      {price && !isProfessional && (
        <p className="text-4xl font-bold mb-4">{price}</p>
      )}

      {showBillingNote && (
        <p className="text-sm text-gray-500 mb-4">Billed annually</p>
      )}

      {description && (
        <p className="text-gray-600 mb-6">{description}</p>
      )}

      {isProfessional && currentProfessionalPrices && (
        <>
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
        </>
      )}

      {prices && !isProfessional && (
        <>
          <div className="mb-4">
            <p className="text-4xl font-bold">${prices.collab}<span className="text-lg text-gray-500">/editor</span></p>
            <p className="text-gray-600">Collab seat</p>
          </div>

          <div className="mb-4">
            <p className="text-2xl font-bold">${prices.dev}<span className="text-base text-gray-500">/editor</span></p>
            <p className="text-gray-600">Dev seat</p>
          </div>

          <div className="mb-6">
            <p className="text-2xl font-bold">${prices.full}<span className="text-base text-gray-500">/editor</span></p>
            <p className="text-gray-600">Full seat</p>
          </div>
        </>
      )}

      <div className={`${buttons.length > 1 ? 'space-x-3 mt-auto flex' : 'mt-auto w-full'}`}>
        {buttons.map((button, index) => {
          let buttonClasses = '';
          switch (button.variant) {
            case 'primary':
              buttonClasses = 'bg-gray-900 text-white hover:bg-gray-800';
              break;
            case 'secondary':
              buttonClasses = 'bg-gray-900 text-white hover:bg-gray-800';
              break;
            case 'outline':
              buttonClasses = 'bg-gray-100 text-gray-900 hover:bg-gray-200';
              break;
          }

          return (
            <button
              key={index}
              className={`${buttons.length > 1 ? 'flex-1' : 'w-full'} py-3 rounded-lg font-medium transition-colors ${buttonClasses}`}
            >
              {button.text}
            </button>
          );
        })}
      </div>

      <div className="mt-6 pt-6 border-t">
        <h3 className="font-bold mb-2">Why choose {title}?</h3>
        <ul className="space-y-2">
          {whyChooseFeatures.map((feature, index) => (
            <li key={index} className="flex items-start">
              <svg className="w-3 h-3 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span><p className='text-xs'>{feature}</p></span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}