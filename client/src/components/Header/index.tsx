import styles from './styles.module.scss';

function Header(){
    return(
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <div className={styles.headerLogo}>Cloud<span>opss</span></div>
            </div>
        </header>
    )
}


export { Header }