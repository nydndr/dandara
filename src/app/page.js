import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans max-w-4xl my-24 mx-auto">
      
      <section className="space-y-4">
        <h1 className="font-bold text-3xl md:text-6xl tracking-tighter md:leading-16">Dandara is a brazilian product designer far too comfortable with code and niche problems.</h1>
        <h2 className="font-medium text-xl md:text-3xl md:leading-10 text-gray-700">Taking care of all <Link href="/" className="textmarker-effect-auto">POS&nbsp;design&nbsp;at&nbsp;Stone</Link>, mapping the field of design at <Link href="/" className="textmarker-effect-auto">Design Map</Link> and curating content at Amarelo Dandara.</h2>
      </section>

      <section className="md:flex md:grid-cols-2 justify-between my-12 font-medium space-y-12 md:space-x-12">
        <div className="w-full">
          <div className="flex justify-between border-b-3 border-dotted py-1.5">
            <h3 className="font-mono uppercase font-bold text-3xl tracking-wide">Experience</h3>
            <button  className="opacity-50 hover:text-(--foreground) hover:opacity-100 hover:bg-(--dandara) rounded-md px-4 mr-2 transition-all ease-in-out duration-300"><Link target="_blank" href="https://drive.google.com/file/d/1K8dhryLe11a8_9aTGQfGifM8EKzTH6_S/view?usp=sharing">Get my CV ⤓</Link></button>
          </div>
          <div className="py-4 space-y-6">
          <article className="">
            <p className="text-lg">Product Designer II @ <a className="underline underline-offset-3 " href="https://www.stone.com.br/">Stone Co.</a></p>
            <p className="text-sm">2024 ━ Now</p>
          </article>
                    <article className="">
            <p className="text-lg">Product Designer I @ <a className="underline underline-offset-3 " href="https://www.stone.com.br/">Stone Co.</a></p>
            <p className="text-sm">2022 ━ 2024</p>
          </article>
                    <article className="">
            <p className="text-lg">Product Designer I @ <a className="underline underline-offset-3 " href="https://grupoquintoandar.com/pt/">QuintoAndar</a></p>
            <p className="text-sm">2021 ━ 2022</p>
          </article>
          </div>

          <Link href="/career" className="float-right opacity-50 hover:text-(--foreground) hover:opacity-100 hover:bg-(--dandara) rounded-md px-4 py-2 transition-all ease-in-out duration-300">Read more about my career →</Link>
        </div>
          
        <div className="w-full">
          <div className="flex justify-between border-b-3 border-dotted py-1.5">
            <h3 className="font-mono uppercase font-bold text-3xl tracking-wide">Projects</h3>
          </div>
          <div className="py-4 space-y-6">
          <article className="space-y-1">
            <a className="text-2xl font-bold hover:underline hover:underline-offset-2">Design Map ↗</a>
            <p className="w-10/12">The field of design and all its super specific subfields, visualized.</p>
          </article>
          <article className="space-y-1">
            <Link target="_blank" href="https://nydndr.substack.com/"className="text-2xl font-bold hover:underline hover:underline-offset-2">Amarelo Dandara ↗</Link>
            <p className="w-10/12">Monthly newsletter with the best I find around the web & world.</p>
          </article>
          <article className="space-y-1">
            <Link target="_blank" href="https://www.behance.net/gallery/123564241/Fin-Financas-Jovem"className="text-2xl font-bold hover:underline hover:underline-offset-2">Fin. → <span className="text-lg font-mono uppercase text-gray-500/50 font-medium">Awarded design</span></Link>
            <p className="w-10/12">Personal finance application for the new generation, #1 at UI/UX Jr. Competition. </p>
          </article>
          </div>

          {
            // <Link href="/career" className="float-right opacity-50 hover:text-(--foreground) hover:opacity-100 hover:bg-(--dandara) rounded-md px-4 py-2 transition-all ease-in-out duration-300">See all projects →</Link>
          }
        </div>
      </section>
    </div>
  );
}
