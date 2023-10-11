import {logo} from '../assets';

const Hero = () => {
  return (
    <Header className="w-full flex  justify-center items-center flex-col">
      <nav className="flex justify-between items-center flex-row w-full">
        <img src={logo} className="w-28 object-contain"/>
        
      </nav>
    </Header>
  )
}

export default Hero