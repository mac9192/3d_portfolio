import Link from 'next/link'
import Image from 'next/image'
import { arrow } from '../assets-3d/icons/arrow.svg'

// Define InfoBox as a separate component
const InfoBox = ({ text, link, btnText }) => (
    <div className="info-box">
        <p className="font-medium sm:text-xl text-center">{text}</p>
        <Link className="neo-brutalism-white neo-btn" href={link}>
            {btnText}
            <Image className="w-4 h-4 object-contain " src='/arrow.svg' height={100} width={100} alt='Next Image'/>

        </Link>
    </div>
)

export default InfoBox