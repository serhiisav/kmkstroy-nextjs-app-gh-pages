import styles from '../styles/ErrorPage/errorPage.module.scss'
import Link from "next/link";


export default function ErrorPage() {

    return (
        <>
            <div className={styles["error-page"]}>
                <div className={styles['error-page-wrapper']}>
                    <p>:(</p>
                    <h1>Error 404 - Page Not Found</h1>
                    <Link href={'/'}>Go to homepage</Link>
                </div>
            </div>
        </>
    )
}