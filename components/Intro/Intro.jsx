import { useRef } from "react";
import { useInViewport } from 'react-in-viewport';
import { useTranslation } from "next-export-i18n";


function Intro() {
    const introRef = useRef();
    const { inViewport } = useInViewport(introRef);
    const { t } = useTranslation();

    return (
        <section ref={introRef} className="section-intro" id="home"
        >
            <div className={inViewport ? 'section-intro-wrap animate__animated animate__bounceInLeft animate__delay-0.5s' : 'section-intro-wrap-none'}>
                <h1 className="section-intro-title">{t('intro.title')}</h1>
                <p className="section-intro-subtitle">{t('intro.subtitle-p1')}</p>
                <p className="section-intro-subtitle">{t('intro.subtitle-p2')}</p>
            </div>
        </section>
    )
}

export default Intro;