import { logo } from '../assets';

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img
          src={logo}
          alt="sumz_logo"
          className="w-28 object-contain"
        />
        
        <button
          type="button"
          onClick={() => window.open('https://github.com/VincentSechi')}
          className="black_btn">
            GitHub
        </button>
      </nav>

      <h1 className="head_text">
        Résumer des articles avec <br className="max-md:hidden"/>
        <span className="orange_gradient">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">
        Simplifiez vos recherches avec Summize, un résumé d'articles open source qui transforme les articles longs en résumés clairs et concis
      </h2>
    </header>
  )
}

export default Hero