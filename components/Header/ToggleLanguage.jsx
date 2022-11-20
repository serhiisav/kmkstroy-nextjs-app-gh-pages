import { useTranslation, LanguageSwitcher } from 'next-export-i18n';

export default function ToggleLanguage() {

    return (
        <>
            <nav className='langSwitcher'>
                <LanguageSwitcher lang="ua">ua</LanguageSwitcher> |{' '}
                <LanguageSwitcher lang="en">en</LanguageSwitcher>
            </nav>
        </>
    );
}