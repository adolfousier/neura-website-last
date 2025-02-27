"use client"

import { useEffect } from "react"
import Image from "next/image"
import styles from "./Companies.module.scss"

export const Companies = () => {
  useEffect(() => {
    // This ensures the component is mounted before any DOM operations
  }, [])

  return (
    <div className={styles.companies}>
      <div className={`${styles.companies__container} ${styles.desc}`}>
        <div className={styles.companies__flex}>
          <Image src="/logo01.svg" width={244} height={42} alt="Finery Markets" />
          <Image src="/logo02.png" width={175} height={30} alt="Thakaa Med" />
          <Image src="/logo05.svg" width={203} height={64} alt="Legacis Advogados" />
          <Image src="/logo04.png" width={170} height={30} alt="Design Corner" />
          <Image src="/logo03.svg" width={220} height={90} alt="Diáspora Lusa Magazine" />
          <Image src="/logo09.png" width={170} height={42} alt="Ancore Strategy" />
        </div>
      </div>
      <div className={`${styles.companies__container} ${styles.mob}`}>
        <div className={styles.companies__flex}>
          <Image src="/logo01.svg" width={122} height={21} alt="Finery Markets" />
          <Image src="/logo02.png" width={87} height={15} alt="Thakaa Med" />
        </div>
        <div className={styles.companies__flex}>
          <Image src="/logo05.svg" width={101} height={32} alt="Legacis Advogados" />
          <Image src="/logo04.png" width={85} height={15} alt="Design Corner" />
        </div>
        <div className={styles.companies__flex}>
          <Image src="/logo03.svg" width={110} height={45} alt="Diáspora Lusa Magazine" />
          <Image src="/logo09.png" width={85} height={21} alt="Ancore Strategy" />
        </div>
      </div>
    </div>
  )
}

