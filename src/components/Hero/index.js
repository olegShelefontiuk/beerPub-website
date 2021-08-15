import React, { useState } from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';

import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroP,
  HeroBtn
} from './HeroElements';

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

        function visitPage(){
        window.open("https://www.google.com.ua/maps/place/Beer+mug/@48.6310927,24.5619937,18.95z/data=!4m13!1m7!3m6!1s0x4737328891413d4d:0x65ef1dbd8d1edfe8!2z0J3QsNC00LLQvtGA0L3QsNGPLCDQmNCy0LDQvdC-LdCk0YDQsNC90LrQvtCy0YHQutCw0Y8g0L7QsdC70LDRgdGC0YwsIDc4NDAw!3b1!8m2!3d48.6211999!4d24.5759679!3m4!1s0x473732f7bf02e59f:0x3d3b5bfeb2902c68!8m2!3d48.6311876!4d24.5620831?hl=ru"
        , "_blank")
        }

  return (
    <HeroContainer>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <HeroContent>
        <HeroItems>
          <HeroH1>Живе Пиво</HeroH1>
          <HeroP>З натурального хмелю</HeroP>
            <div>
                    <HeroBtn  onClick={()=>visitPage()}> вул.Грушевського</HeroBtn>
            </div>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
