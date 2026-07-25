import { useTypingEffect } from '../../hooks/userTypingEffect';
import style from './style.module.css';

export function LandingPage() {
  const typedText = useTypingEffect(
    `I'm Wallace de Freitas, also known as Baku-Stark!`,
    60,
    true
  );

  return (
    <section className={`${style.landing_bg} relative w-full h-screen bg-cover bg-center bg-fixed`}>
      <div className="absolute inset-0 w-full h-full bg-(--bg)/75 backdrop-blur-md flex flex-col items-center justify-center gap-6 px-4">
        
        <h1 
          data-text="Welcome to My Portfolio"
          className={`
            ${style.glitch_title} 
            text-4xl md:text-6xl 
            font-(--title-font)
            text-white 
            text-center 
            tracking-wider 
            drop-shadow-[0_0_25px_var(--cyan-glow,#38bdf840)]
          `}
        >
          Welcome to My Portfolio
        </h1>

        <div className="min-h-[56px] flex items-center justify-center max-w-2xl">
          <p className="text-zinc-300 text-lg md:text-xl text-center opacity-75">
            {typedText}
            <span className="inline-block w-[2px] h-5 bg-(--cyan-primary) ml-1 animate-pulse" />
          </p>
        </div>

      </div>
    </section>
  );
}