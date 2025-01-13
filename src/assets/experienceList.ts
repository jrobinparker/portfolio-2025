import tailwindLogo from '$lib/tailwind-logo.svg';
import typeScriptLogo from '$lib/ts-logo.svg';
import jiraLogo from '$lib/jira-logo.svg';
import sentryLogo from '$lib/sentry-logo.svg';
import emberLogo from '$lib/ember-logo.svg';
import appleLogo from '$lib/apple-logo.png';
import jsLogo from '$lib/js-logo.png';
import phpLogo from '$lib/php-logo.svg';
import railsLogo from '$lib/rails-logo.png';
import jdLogo from '$lib/jd-logo.svg';
import reactLogo from '$lib/react-logo.svg';
import pythonLogo from '$lib/python-logo.svg';

export default [
	{
		title: 'Frontend Software Engineer (contract)',
		company: 'Apple',
		years: '11/2023 - present',
		link: 'https://www.apple.com',
		tech: [jsLogo, typeScriptLogo, emberLogo, tailwindLogo, phpLogo, sentryLogo, appleLogo],
		about: `I'm currently a frontend software engineer with Apple's Global Security Tools team, where we build and maintain apps that manage security, secrecy, and compliance for project teams throughout Apple.`,
		accomplishments: [
			'Successfully completed extensive upgrades to five apps used by Apple employees worldwide to manage security, secrecy, and compliance',
			'Developed native solutions to replace outdated fetch and modal packages, improving functionality, speed, and error handling',
			'Increased test coverage in product management frontend repo by 20% with detailed acceptance and integration tests to prevent unexpected bugs and regressions',
			'Co-developed a feature to strengthen access controls for non-US employees to confidential projects, maintaining compliance with US export controls'
		]
	},
	{
		title: 'Team Lead - Web UI',
		years: '7/2022 - 11/2023',
		titleTwo: 'Software Engineer',
		yearsTwo: '7/2021 - 7/2022',
		company: 'Agrian by Telus Agronomy',
		link: 'https://www.telus.com/agcg/products/agronomy',
		tech: [jsLogo, typeScriptLogo, emberLogo, tailwindLogo, jiraLogo, railsLogo, jdLogo],
		about: `At Telus Agronomy, I developed and maintained data-driven user interfaces for the company's next-gen and legacy apps, which are used daily by over 225,000 large-scale agricultural companies and food distributors to grow and distribute the food we eat every day.`,
		accomplishments: [
            `Built new features for Telus' suite of compliance tools, which have processed 1 billion+ acres of land across the US to ensure that pesticides and fertilizers are used in compliance with state regulations`,
            `Developed and maintained mapping features in John Deere's MyJohnDeere UI`,
            `Helped build a custom agricultural product dashboard for the largest agriculture cooperative in Canada and significantly improved the performance, reducing creation time from over a minutes to 5 seconds`,
		]
	},
	{
		title: 'L&D Tech Specialist/Software Developer',
		company: 'Analysis Group',
		years: '4/2020 - 7/2021',
		link: 'https://www.analysisgroup.com',
		tech: [jsLogo, reactLogo, pythonLogo],
		about: `Although I joined Analysis Group as a research assistant, I started teaching myself how to program in 2018 and, in my final year with the company, used my self-taught skills to build tools that improved internal business processes.`,
        accomplishments: [
            'Developed a daily automated report of experience data from all staff profiles in Python, which optimized case staffing turn-around times by 50%',
            'Automated analysis of staff resumes using Pandas and Natural Language Toolkit in Python, giving managers the ability to quickly build project teams',
            `Built an event app usage data dashboard with React and Python that provided actionable insights into app usage, reducing the following year's app cost by 25%`,
            `Created a course content download app for the firm's LMS using React and axios which helped reduce course creation times by 50%.`
        ]
	}
];
