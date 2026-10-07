export const cloudPackages = [
  {
    id: "team",
    optionName: "Team",
    pricePerMonth: 299,
    creators: 2,
    endUsers: 20,
    monthlyActions: 250_000,
    monthlyAiCredits: 50_000,
  },
  {
    id: "department",
    optionName: "Dept",
    pricePerMonth: 599,
    creators: 4,
    endUsers: 40,
    monthlyActions: 500_000,
    monthlyAiCredits: 100_000,
  },
  {
    id: "business",
    optionName: "Business",
    pricePerMonth: 1_199,
    creators: 8,
    endUsers: 80,
    monthlyActions: 1_000_000,
    monthlyAiCredits: 200_000,
  },
] as const;
