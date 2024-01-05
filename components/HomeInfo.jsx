import { Link } from 'next/link'
import InfoBox from '../components/InfoBox'

// Define InfoBox as a separate component
 

const renderContent = {
    1: (
        <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
            Hi, I am <span className="font-semibold">Miguel</span> 👋
            <br />
            A Software Engineer in Atlanta, GA.
        </h1>
    ),
    2: (
        // Use InfoBox component here with appropriate props
        <InfoBox text="I Have freelanced with small companies and have learned valuable skills in thr process." link="/about" btnText="Learn More" />
    ),
    3: (
        // Use InfoBox component here with appropriate props
        <InfoBox text="Have led multiple project successfully during my career. Take a look!" link="/projects" btnText="Visit my portfolio" />
    ),
    4: (
        // Use InfoBox component here with appropriate props
        <InfoBox text="Are you thinking of a new or existing project to work on? Reach Out!" link="/contact" btnText="Let's Talk" /> 
    )
}

const HomeInfo = ({ currentStage }) => {
    return renderContent[currentStage] || null;
}

export default HomeInfo;
