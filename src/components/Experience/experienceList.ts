import tsLogo from '../../assets/ts-logo.svg';
import jsLogo from '../../assets/js-logo.png';
import emberLogo from '../../assets/ember-logo.svg';
import phpLogo from '../../assets/php-logo.svg';
import tailwindLogo from '../../assets/tailwind-logo.svg';
import swiftLogo from '../../assets/swift-logo.svg';
import jiraLogo from '../../assets/jira-logo.svg';
import jdLogo from '../../assets/jd-logo.svg';
import reactLogo from '../../assets/react-logo.svg';
import pythonLogo from '../../assets/python-logo.svg';
import pandasLogo from '../../assets/pandas-logo.svg';
import flaskLogo from '../../assets/flask-logo.svg';
import sharepointLogo from '../../assets/sharepoint-logo.png';

export default [
	{
		title: 'Frontend Software Engineer (contract)',
		company: 'Apple',
		years: '11/2023 - present',
		link: 'https://www.apple.com',
		tech: [jsLogo, swiftLogo, tailwindLogo, tsLogo, emberLogo, phpLogo],
		about: `I'm a software engineer with Apple's Global Security Tools team, where we build and maintain apps that manage security, secrecy, and compliance for project teams throughout Apple.`,
		accomplishments: [
			'Develop robust confidentiality and project disclosure features in Ember, JavaScript, and TypeScript to ensure Apple maintains critical US government compliance',
			`Co-developed a modern iOS app to replace Apple's legacy prototype management software using Swift, Swift UI, and Composable Architecture, increasing usage by 10%`,
			'Successfully completed extensive upgrades to five legacy apps used by thousands of Apple employees worldwide to manage security, secrecy, and compliance',
			'Developed native solutions to replace outdated packages, improving functionality, speed, and error handling',
			'Increased test coverage in frontend repos by 20% with detailed acceptance and integration tests to prevent unexpected bugs and regressions'
		]
	},
	{
		title: 'Team Lead - Web UI',
		years: '7/2022 - 11/2023',
		titleTwo: 'Software Engineer',
		yearsTwo: '7/2021 - 7/2022',
		company: 'Agrian by Telus Agronomy',
		link: 'https://www.telus.com/agcg/products/agronomy',
		tech: [jsLogo, tailwindLogo, jiraLogo, tsLogo, emberLogo, jdLogo],
		about: `In my second year at Telus Agronomy, I oversaw development of new features for Agrian’s agricultural compliance tools and led daily standups, monthly retros and sprint plannings for an agile team of four frontend engineers.`,
		accomplishments: [
            `Led the frontend team through the first phase of the compliance feature initiative, with a successful demo at California Association of Pest Control Advisers (CAPCA) resulting in a 10% increase in customers`,
            `Managed porting of legacy apps into Agrian's next-gen web UI, leading to higher retention rates for long-term customers`,
            `Reduced sprint plannings from 3+ hours to 1 hour with frequent backlog refinement sessions`,
			'Held weekly mentoring sessions for two junior developers, covering all aspects of frontend software development'
		]
	},
	{
		title: 'Software Engineer - Web UI',
		years: '7/2021 - 7/2022',
		company: 'Agrian by Telus Agronomy',
		link: 'https://www.telus.com/agcg/products/agronomy',
		tech: [jsLogo, tailwindLogo, jiraLogo, tsLogo, emberLogo, jdLogo],
		about: `At Telus Agronomy, I developed and maintained data-driven user interfaces for the company's next-gen and legacy apps, which are used daily by over 225,000 large-scale agricultural companies and food distributors to grow and distribute the food we eat every day.`,
		accomplishments: [
            `Built new features for Telus' suite of compliance tools, which have processed 1 billion+ acres of land across the US to ensure that pesticides and fertilizers are used in compliance with state regulations`,
            `Developed and maintained mapping features in John Deere's MyJohnDeere UI`,
            `Built a custom agricultural product dashboard for the largest agriculture cooperative in Canada and significantly improved the performance, reducing creation time from over a minutes to 5 seconds`,
			'Created a tool for state permit holders to set names for each field within their permit based on the commodity or location of the field, significantly reducing time spent re-entering detailed farm permit data'
		]
	},
	{
		title: 'Software Developer',
		company: 'Analysis Group',
		years: '5/2020 - 7/2021',
		link: 'https://www.analysisgroup.com',
		tech: [jsLogo, sharepointLogo, pandasLogo, reactLogo, pythonLogo, flaskLogo],
		about: 'Although I joined Analysis Group as a research assistant, I started teaching myself how to program in 2017 and, in my final year with the company, used my self-taught skills to build tools that improved internal business processes.',
        accomplishments: [
            'Developed a daily automated report of experience data from all staff profiles in Python using Selenium and Pandas, which optimized case staffing turn-around times by 50%',
            'Automated analysis of staff resumes using Pandas and Natural Language Toolkit in Python, giving managers the ability to quickly build project teams',
            `Built an event app usage data dashboard with a React frontend and a backend powered by Flask and Bokeh that provided actionable insights into app usage, reducing the following year's app cost by 25%`,
            `Created a course content download app for the firm's LMS using React and axios which helped reduce course creation times by 50%`,
			'Built course program pages, email templates, and custom styling in training portal using HTML, CSS, and JavaScript',
			'Developed collaborative SharePoint sites for administrative teams using HTML, CSS, JavaScript, and jQuery'
        ]
	}
];
