import Head from "next/head"
import Link from "next/link"
import utilStyles from '../styles/utils.module.css'
import styles from '../styles/Layout.module.css'
import Image from "next/image"

const name = 'Picky'

export default function Layout({children, title, description, home}) {
    return (
        <div className={styles.container}>
            <Head>
                <title>{title}</title>
                <meta name='description' content={description}></meta>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header className={styles.header}>
                    {home ? (
                    <>
                        <Image
                        priority
                        src="/img/1.jpg"
                        className={utilStyles.borderCircle}
                        height={144}
                        width={144}
                        alt={name}
                        />
                        <h1 className={utilStyles.heading2Xl}>{name}</h1>
                    </>
                    ) : (
                    <>
                        <Link href="/">
                        <a>
                            <Image
                            priority
                            src="/img/1.jpg"
                            className={utilStyles.borderCircle}
                            height={108}
                            width={108}
                            alt={name}
                            />
                        </a>
                        </Link>
                        <h2 className={utilStyles.headingLg}>
                        <Link href="/">
                            <a className={utilStyles.colorInherit}>{name}</a>
                        </Link>
                        </h2>
                    </>
                    )}
            </header>
            <nav>
                Navbar
            </nav>
            <main>
                {children}
            </main>
            <footer>
                Footer
            </footer>
        </div>
    )
}
Layout.defaultProps = {
    title: 'Mi sitio Web - Next JS',
    description: 'Descripcion del sitio web'
}
