export interface NavItem {
	text: string;
	link: string;
	sectionId: string;
	iconName: string;
	pageTitle: string;
	pageDescription?: string;
	linkVariant?: "primary" | "secondary" | "cta";
}

export interface NavGroup {
	header?: string;
	items: NavItem[];
}

export const enterpriseNavItemsData: NavGroup[] = [
	{
		items: [
			{
				text: "Overview",
				link: "/enterprise",
				sectionId: "overview",
				iconName: "Buildings",
				pageTitle: "Overview",
				pageDescription:
					"Budibase Enterprise delivers the security, control, and dedicated support that large organizations need. Deploy on your infrastructure, meet compliance requirements, and scale with confidence.",
			},
			{
				text: "Security",
				link: "/enterprise/security",
				sectionId: "security",
				iconName: "ShieldCheck",
				pageTitle: "Security",
				pageDescription:
					"Enterprise-grade security features to protect your data, meet compliance requirements, and maintain full control over your infrastructure.",
			},
			{
				text: "Support",
				link: "/enterprise/support",
				sectionId: "support",
				iconName: "Headset",
				pageTitle: "Support",
				pageDescription:
					"Dedicated enterprise support with priority response times, account management, and expert guidance to ensure your success.",
			},
			{
				text: "Contact sales",
				link: "/enterprise/contact-sales",
				sectionId: "contact-sales",
				iconName: "EnvelopeSimple",
				pageTitle: "Contact Sales",
				pageDescription:
					"Talk to our enterprise team about security, deployment, pricing, and rollout for your organization.",
				linkVariant: "cta",
			},
		],
	},
	{
		header: "CASE STUDIES",
		items: [
			{
				text: "Pays Basque",
				link: "/enterprise/pays-basque",
				sectionId: "pays-basque",
				iconName: "MapPin",
				pageTitle: "Pays Basque",
			},
			{
				text: "Knights Brown",
				link: "/enterprise/knights-brown",
				sectionId: "knights-brown",
				iconName: "HardHat",
				pageTitle: "Knights Brown",
			},
			{
				text: "Ströer-x",
				link: "/enterprise/stroer-x",
				sectionId: "stroer-x",
				iconName: "Broadcast",
				pageTitle: "Ströer-x",
			},
			{
				text: "Reworld",
				link: "/enterprise/reworld",
				sectionId: "reworld",
				iconName: "Recycle",
				pageTitle: "Reworld",
			},
			{
				text: "Schnellecke",
				link: "/enterprise/schnellecke",
				sectionId: "schnellecke",
				iconName: "Truck",
				pageTitle: "Schnellecke",
			},
			{
				text: "Bulgarian Government",
				link: "/enterprise/bulgarian-government",
				sectionId: "bulgarian-government",
				iconName: "Bank",
				pageTitle: "Bulgarian Government",
			},
			{
				text: "Herrenknecht",
				link: "/enterprise/herrenknecht",
				sectionId: "herrenknecht",
				iconName: "Gear",
				pageTitle: "Herrenknecht",
			},
			{
				text: "Geis",
				link: "/enterprise/geis",
				sectionId: "geis",
				iconName: "Package",
				pageTitle: "Geis",
			},
			{
				text: "Minitab",
				link: "/enterprise/minitab",
				sectionId: "minitab",
				iconName: "ChartBar",
				pageTitle: "Minitab",
			},
		],
	},
];
