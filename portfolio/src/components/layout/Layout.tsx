import { Footer } from './Footer';

import style from './style.module.css';

export function Layout({ children }: { children: React.ReactNode }){
  return(
    <section className={style.containerLayout}>
        <main className="flex-1">{children}</main>
        <Footer />
    </section>
  )
};