import styled from 'styled-components';

import bgImgD from '../../images/cat-d.png';
import bgImgD2 from '../../images/cat-d@2x.png';
import bgImgM from '../../images/cat-m.png';
import bgImgM2 from '../../images/cat-m@2x.png';
import bgImgT from '../../images/cat-t.png';
import bgImgT2 from '../../images/cat-m@2x.png';

export const CardWrapper = styled.div`
    
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 280px;
    height: 458px;
    padding: 0 0 24px;
    background-color: var(--white);
    border-radius: 0 0 40px 40px;
    box-shadow: var(-shadow-default);
    transition: all 0.4s ease;

    &:hover,
    &:focus {
        box-shadow: var(-shadow-hover); 
        scale: 1.01;
        outline: none;
    }

    &>button{
        height: 38px;
        width: 240px;
        align-self: center;
    }

`
export const ImgWrapper = styled.div`
    width: 280px;
    height: 288px;
    padding: 16px 0;

    background-image: url("${bgImgM}");
 

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url('${bgImgM2}');
  }
  @media screen and (min-width: 768px) {
   
    
    background-image: url('${bgImgT}');

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url('${bgImgT2}');
    }
}
@media screen and (min-width: 1280px) {
  
    
    background-image: url('${bgImgD}');

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url('${bgImgD2}');
    }
  }
`
export const CardTitle = styled.div`
    font-size: 24px;
    font-weight: 700;
    padding: 0 20px;
`