import * as React from "react"
import * as styles from "../styles/Home.module.css";
import logo from "../images/logo.png";
import mascot from "../images/white.png";
import Arrow from "../images/right-arrow.png";

const IndexPage = () => {
  return (
      <main className={styles.main}>
        <title>Welcome to Lyrid</title>
        <div className={styles.container}>
          <div className={styles.left}>
            <div className={styles.atas}>
              <img src={logo} alt='logo'/>
              <br/>
              <h1 className={styles.title}>Welcome to Lyrid</h1>
              <p className={styles.subtitle}>Get started by editing your Gatsby.JS Application.
                <br/>
                <a href="https://www.gatsbyjs.com/docs/">Documentation</a>
              </p>
            </div>
            <div>
              <img src={mascot} alt='mascot putih'/>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.docsEx}>
              <a href="https://docs.lyrid.io" className={styles.boxRight}>
                <div>
                  <div className={styles.boxTitle}>
                    <h5 className={styles.docs}>Documentation</h5>
                    <img className={styles.arrow} src={Arrow} width={20} height={20} alt='right-arrow'/>
                  </div>
                  <p className={styles.ex}>Find in-depth information about Lyrid features and API.</p>
                </div>
              </a>
              <a href="https://github.com/LyridInc" className={styles.boxRight}>
                <div>
                  <div className={styles.boxTitle}>
                    <h5 className={styles.docs}>Examples</h5>
                    <img className={styles.arrow} src={Arrow} width={20} height={20} alt='right-arrow'/>
                  </div>
                  <p className={styles.ex}>Discover and deploy boilerplate example Gatsby.js projects.</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </main>
  )
}

export default IndexPage
