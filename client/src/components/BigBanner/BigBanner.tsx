import React, {CSSProperties} from 'react';
import s from './BigBanner.module.scss'

interface BigBannerProps {
    imgUri: CSSProperties | undefined | string;
}

export const BigBanner: React.FC<BigBannerProps> = ({imgUri}) => {

    return (
        <div style={{backgroundImage: "url(" + imgUri + ")"}} className={s.bigBanner}>

        </div>
    );
}


/*import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const slider = (
  <AwesomeSlider>
    <div data-src="/path/to/image-0.png" />
    <div data-src="/path/to/image-1.png" />
    <div data-src="/path/to/image-2.jpg" />
  </AwesomeSlider>
);*/
