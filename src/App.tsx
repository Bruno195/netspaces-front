import './App.css'
import LogoWithName from './assets/logo_with_name.svg'
import IconNetspace from './assets/Group 398.svg'
import InfoIcon from './assets/Group 397.svg'
import PersonImage from './assets/image 23.svg'
import Card from './assets/Group409.png'
import FistGroup from './assets/Group434(1).png'
import PersonEconomy from './assets/mobileEconomy.svg'
import IconMobile from './assets/mobile-Economy1.svg'
import HeroImgaMobile from './assets/image-hero-mobile.png'
import SecondGroup from './assets/Group433.png'
import ThirdGroup from './assets/Group432(1).png'
function App() {
  return (
    <main>
      {/* First screen */}
      <section className="hero">
        <div className="hero-content">
          <img src={LogoWithName} alt="Logo com nome" />
          <h1>A primeira assinatura de patrimônio imobiliário</h1>
          <div className="container-paragraph">
            <h3>
              Acumule frações de imóveis reais mensalmente e veja seu patrimônio
              crescer. Aproveite os descontos exclusivos de lançamento com
              planos de R$ 5,90 até R$ 1999,00.{' '}
            </h3>
            <img
              id="container-paragraph-image"
              src={HeroImgaMobile}
              alt=""
              loading="lazy"
              srcSet={`${HeroImgaMobile} 1x, ./assets/image-hero-mobile@2x.png 2x`}
            />
          </div>
          <button>Registrar meu lugar na fila</button>
        </div>
        <div className="img-hero-id-desktop">
          <div id="hero-img"></div>
        </div>
      </section>

      {/* Second screen */}
      <section className="feature">
        <div className="features-wrapper">
          <img
            src={Card}
            alt=""
            loading="lazy"
            srcSet={`${Card} 1x, ./assets/Group409@2x.png 2x`}
          />
        </div>

        <div className="features-content">
          <div className="feature-container">
            <h3 className="feature-item-1">Exclusivo no lançamento</h3>
            <h2 className="feature-item-2">
              Até 35% Off na compra do primeiro imóvel*
            </h2>
            <p className="feature-item-3">
              Reserve sua assinatura antes do lançamento e todas as frações do
              primeiro imóvel, adquiridas mensalmente, serão compradas por um
              valor muito abaixo do valor de mercado. O bom negócio imobiliário
              se faz na compra, e a gente sabe disso.
            </p>
            <p className="feature-item-4">
              De: R$ 250.000,00 <span id="span-text">Por:</span>
              <span id="span-price"> R$ 162.500,00</span>
            </p>

            <div className="feature-item-5-desktop">
              <div className="container-image-icon">
                <img src={IconNetspace} alt="" loading="lazy" />
                <img src={InfoIcon} alt="" loading="lazy" />
              </div>
              <img
                src={PersonImage}
                alt=""
                loading="lazy"
                srcSet={`${PersonImage} 1x, ./assets/image 23@2x.svg 2x`}
              />
            </div>

            <div className="feature-item-5-mobile">
              <div className="container-image-icon">
                <img src={IconMobile} alt="" loading="lazy" />
                <img src={PersonEconomy} alt="" loading="lazy" />
              </div>
            </div>
            <p className="feature-item-6">
              * os descontos são limitados às reservas de planos de R$ 49,00 ou
              mais, e até que se esgotem as frações do primeiro imóvel deste
              plano de assinatura.{' '}
            </p>
          </div>
        </div>
      </section>
      {/* third screen */}
      <section className="footer">
        <div className="footer-wrapper">
          <h3>Descubra o poder do grupo!</h3>
          <h2>
            Milhares de assinantes, juntos, compram imóveis à vista com preços
            melhores.
          </h2>
          <div className="footer-container">
            <div>
              <img
                src={FistGroup}
                alt=""
                loading="lazy"
                srcSet={`${FistGroup} 1x, ./assets/Group434(1)@2x.png 2x`}
              />
              <h4>Juntos, mais fortes.</h4>
              <p>
                Somando o dinheiro de milhares de assinantes, todos os meses o
                grupo ganha o poder de pagar à vista por novos imóveis, o que
                permite negociar melhor o valor e aproveitar oportunidades.{' '}
              </p>
            </div>
            <div>
              <img
                src={SecondGroup}
                alt=""
                loading="lazy"
                srcSet={`${SecondGroup} 1x, ./assets/Group433@2x.png 2x`}
              />
              <h4>Os melhores imóveis, seus.</h4>
              <p>
                Experts do mercado imobiliário estão atentos às oportunidades de
                compra em todo o Brasil e escolhem as melhores administradoras
                de imóveis para cuidar das locações e do bem.
              </p>
            </div>
            <div>
              <img
                src={ThirdGroup}
                alt=""
                loading="lazy"
                srcSet={`${ThirdGroup} 1x, ./assets/Group432(1)@2x.png 2x`}
              />
              <h4>Hiper diluição de risco.</h4>
              <p>
                Os riscos de vacância ou inadimplência, típicos de imóveis, são
                diluídos, pois você será dono de apenas uma fração de cada
                imóvel e o aluguel dos seus outros imóveis pode cobrir os
                custos.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
