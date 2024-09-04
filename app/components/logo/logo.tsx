import { Montserrat } from "next/font/google";
import logo from './logo.module.css'

const montserrat = Montserrat({
  weight: '400',
  subsets: ['latin']
})
const Logo = () => <span className={`${logo.main} ${montserrat.className}`}>Parkway</span>
export default Logo;

