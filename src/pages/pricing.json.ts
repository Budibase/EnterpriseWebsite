import pricingData from "./pricing/_components/pricing.json";
import featureMatrix from "./pricing/_components/feature-matrix.json";

export const prerender = true;

export function GET() {
  const pricing = {
    plans: pricingData,
    features: featureMatrix,
  };

  return new Response(JSON.stringify(pricing, null, 2), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  });
}
