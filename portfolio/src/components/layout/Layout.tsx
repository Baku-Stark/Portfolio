import { Navbar } from './Sidebar';
import { Footer } from './Footer';

import style from './style.css';

export function Layout({ children }: { children: React.ReactNode }){
  return(
    <section className={style.containerLayout}>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
    </section>
  )
};