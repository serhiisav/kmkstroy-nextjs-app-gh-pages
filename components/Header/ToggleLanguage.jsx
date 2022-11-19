import { useState, useEffect } from 'react';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router'

export default function ToggleLanguage() {
    const [isChecked, setIsChecked] = useState(false);
    const { i18n } = useTranslation();
    const router = useRouter();

    const setLanguage = (e) => {
        setIsChecked(!isChecked);
        if (e.target.checked) {
            router.push('/en', '/en', { locale: 'en' })
        } else {
            router.push('/', '/', { locale: 'ua' })
        }
    }

    useEffect(() => {
        if (i18n.resolvedLanguage === 'en') {
            setIsChecked(true);
        }
    }, []);


    return (
        <>
            <label className='switch'>
                <input
                    type='checkbox'
                    checked={isChecked}
                    onChange={setLanguage}
                />
                <span className='slider' />
            </label>
        </>
    );
}