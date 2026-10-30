import { FormEvent, useEffect, useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CarFront,
  Menu,
  Tag,
  X,
} from "lucide-react";
import {
  Brand,
  CampaignPanel,
  CarCard,
  CarGrid,
  CategoryCard,
  CategoryGrid,
  CategorySection,
  CompactMenu,
  DesktopLeadTab,
  DrawerBackdrop,
  DiscountTab,
  FinanceCard,
  Financing,
  HeaderMenuButton,
  HeaderRow,
  Hero,
  HeroArrow,
  HeroCopy,
  HeroDots,
  HeroLayout,
  HeroPhoto,
  LeadCard,
  MainLinks,
  RedButton,
  Section,
  SectionHeading,
  Shell,
  SiteFooter,
  SiteHeader,
  SocialLinks,
  VitrineVideo,
  WhatsAppLink,
  MockVehicleSection,
} from "./homeStyles";
import { LocalPage } from "./pages";
import { HomeGlobalStyle } from "./homeStyles";
import { vehicles } from "./data/vehicles";

interface HlsInstance {
  attachMedia: (media: HTMLMediaElement) => void;
  destroy: () => void;
  loadSource: (source: string) => void;
  on: (event: string, listener: (event: string, data: { fatal: boolean }) => void) => void;
}

interface HlsConstructor {
  new (): HlsInstance;
  Events: { ERROR: string };
  isSupported: () => boolean;
}

declare global {
  interface Window {
    Hls?: HlsConstructor;
  }
}

const officialSite = "https://lionsseminovos.com.br/";
const siteNavigation = [
  { label: "Financiamento", href: "/financiamento" },
  { label: "FIPE", href: "/fipe" },
  { label: "Lojas", href: "/lojas" },
  { label: "Pós-venda", href: "/pos-venda" },
  { label: "Catálogo", href: "/estoque?pagina=1" },
  { label: "Agende sua visita", href: "/agende-sua-visita" },
  { label: "Utilitários", href: "/utilitarios" },
];
const vitrineVideo =
  "https://dmmfmlu2mykln.cloudfront.net/site/home/videoTeste/04526e36ecca4c9aae4080a844028fc5.m3u8";
const hlsScriptUrl = "https://cdn.jsdelivr.net/npm/hls.js@1.5.18/dist/hls.min.js";
const formatPrice = (price: string | number) =>
  new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(Number(price));
const formatMileage = (mileage: number) =>
  `${new Intl.NumberFormat("pt-BR").format(mileage)} km`;

const campaigns = [
  {
    image:
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=2000&q=88",
    eyebrow: "Uma nova estrada começa aqui",
    title: ["Carros", "para sua", "história"],
    detail: "Encontre seu próximo seminovo com a experiência Lions.",
    label: "Seminovos",
  },
  {
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=2000&q=88",
    eyebrow: "A escolha certa para seguir em frente",
    title: ["Seu próximo", "capítulo", "começa aqui"],
    detail: "Diversas opções para você escolher com tranquilidade.",
    label: "Seu próximo carro",
  },
  {
    image:
      "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=2000&q=88",
    eyebrow: "Mais caminhos. Mais possibilidades.",
    title: ["Vem de", "Lions", "Seminovos"],
    detail: "Explore a vitrine demonstrativa e encontre um novo destino.",
    label: "Lions Seminovos",
  },
];

const categories = [
  {
    label: "Utilitários",
    className: "utility",
    image:
      "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1200&q=85",
  },
  {
    label: "SUV",
    image:
      "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=900&q=85",
  },
  {
    label: "Hatch",
    image:
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=900&q=85",
  },
  {
    label: "Sedan",
    className: "sedan",
    image:
      "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&w=1200&q=85",
  },
];

function App() {
  const [activeCampaign, setActiveCampaign] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [leadSent, setLeadSent] = useState(false);
  const [headerScrolled, setHeaderScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined" && window.matchMedia("(max-width: 700px)").matches,
  );
  const [leadDrawerOpen, setLeadDrawerOpen] = useState(() =>
    typeof window === "undefined" || !window.matchMedia("(max-width: 700px)").matches,
  );
  const [financeChecked, setFinanceChecked] = useState(false);
  const [vitrineVideoError, setVitrineVideoError] = useState(false);
  const leadCardRef = useRef<HTMLFormElement>(null);
  const leadCloseRef = useRef<HTMLButtonElement>(null);
  const discountTabRef = useRef<HTMLButtonElement>(null);
  const desktopLeadTabRef = useRef<HTMLButtonElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const menuCloseRef = useRef<HTMLButtonElement>(null);
  const vitrineVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => {
      setActiveCampaign((current) => (current + 1) % campaigns.length);
    }, 6500);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 700px)");
    const handleViewportChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
      setLeadDrawerOpen(!event.matches);
    };

    mobileQuery.addEventListener("change", handleViewportChange);
    return () => mobileQuery.removeEventListener("change", handleViewportChange);
  }, []);

  useEffect(() => {
    const handleScroll = () => setHeaderScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen || !isMobile) return;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);
    menuCloseRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      menuButtonRef.current?.focus();
    };
  }, [isMobile, menuOpen]);

  useEffect(() => {
    if (leadCardRef.current) {
      leadCardRef.current.inert = !leadDrawerOpen;
    }
  }, [leadDrawerOpen]);

  useEffect(() => {
    if (!isMobile || !leadDrawerOpen) return;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeLeadDrawer();
    };
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);
    leadCloseRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMobile, leadDrawerOpen]);

  useEffect(() => {
    const video = vitrineVideoRef.current;
    if (!video) return;

    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = vitrineVideo;
      return;
    }

    let disposed = false;
    let hls: HlsInstance | undefined;
    const startHls = () => {
      const Hls = window.Hls;
      if (!Hls || !Hls.isSupported()) {
        setVitrineVideoError(true);
        return;
      }

      hls = new Hls();
      hls.loadSource(vitrineVideo);
      hls.attachMedia(video);
      hls.on(Hls.Events.ERROR, (_event, data) => {
        if (data.fatal && !disposed) setVitrineVideoError(true);
      });
    };

    if (window.Hls) {
      startHls();
    } else {
      const script = document.createElement("script");
      script.src = hlsScriptUrl;
      script.async = true;
      script.onload = () => {
        if (!disposed) startHls();
      };
      script.onerror = () => {
        if (!disposed) setVitrineVideoError(true);
      };
      document.head.appendChild(script);
    }

    return () => {
      disposed = true;
      hls?.destroy();
    };
  }, []);

  function changeCampaign(direction: -1 | 1) {
    setActiveCampaign((current) => (current + direction + campaigns.length) % campaigns.length);
  }

  function submitLead(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLeadSent(true);
  }

  function closeLeadDrawer() {
    setLeadDrawerOpen(false);
    window.requestAnimationFrame(() => {
      (isMobile ? discountTabRef.current : desktopLeadTabRef.current)?.focus();
    });
  }

  const campaign = campaigns[activeCampaign];
  const routePath = window.location.pathname.replace(/\/+$/, "") || "/";
  const isHomePage = routePath === "/";

  return (
    <>
      <HomeGlobalStyle />
      <SiteHeader $scrolled={headerScrolled} $menuOpen={menuOpen}>
        <HeaderRow aria-label="Navegação principal">
          <Brand href="/" aria-label="Lions - início">
            <img src="/lions-logo.svg" alt="" />
          </Brand>
          <MainLinks>
            {siteNavigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
          </MainLinks>
          <SocialLinks aria-label="Redes sociais">
            <a href="https://www.instagram.com/lionsseminovos" target="_blank" rel="noreferrer" aria-label="Instagram">◎</a>
            <a href="https://www.facebook.com/lionsseminovos" target="_blank" rel="noreferrer" aria-label="Facebook">f</a>
          </SocialLinks>
          <HeaderMenuButton
            ref={menuButtonRef}
            type="button"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </HeaderMenuButton>
        </HeaderRow>
        <CompactMenu
          $open={menuOpen}
          aria-hidden={!menuOpen}
          role="dialog"
          aria-modal={isMobile && menuOpen ? true : undefined}
          aria-label="Menu principal"
        >
          <div className="menu-head">
            <Brand href="/" onClick={() => setMenuOpen(false)} aria-label="Lions - início">
              <img src="/lions-logo.svg" alt="" />
            </Brand>
            <button
              ref={menuCloseRef}
              className="menu-close"
              type="button"
              aria-label="Fechar menu"
              onClick={() => setMenuOpen(false)}
            >
              <X size={21} />
            </button>
          </div>
          <nav aria-label="Menu principal">
            {siteNavigation.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>
            ))}
          </nav>
          <SocialLinks className="menu-social" aria-label="Redes sociais">
            <a href="https://www.instagram.com/lionsseminovos" target="_blank" rel="noreferrer" aria-label="Instagram">◎</a>
            <a href="https://www.facebook.com/lionsseminovos" target="_blank" rel="noreferrer" aria-label="Facebook">f</a>
          </SocialLinks>
        </CompactMenu>
      </SiteHeader>

      {isHomePage ? <main>
        <Hero id="inicio">
          <HeroPhoto $image={campaign.image} />
          <HeroLayout>
            <HeroCopy>
              <p className="eyebrow">{campaign.eyebrow}</p>
              <h1>{campaign.label}</h1>
              <p>{campaign.detail}</p>
              <a href="/estoque?pagina=1">Ver seminovos <ArrowRight size={15} /></a>
            </HeroCopy>

            <CampaignPanel aria-live="polite">
              <p className="small">{campaign.title[0]}</p>
              <h2>{campaign.title.slice(1).map((line) => <span key={line}>{line}<br /></span>)}</h2>
              <p className="details">{campaign.detail}</p>
              <div className="tags"><span>SEMINOVOS</span><span>PROCEDÊNCIA</span></div>
              <p className="disclaimer">*CONSULTE O ESTOQUE NO SITE OFICIAL</p>
            </CampaignPanel>
          </HeroLayout>

          <HeroArrow type="button" $side="left" aria-label="Campanha anterior" onClick={() => changeCampaign(-1)}>
            <ArrowLeft size={20} />
          </HeroArrow>
          <HeroArrow type="button" $side="right" aria-label="Próxima campanha" onClick={() => changeCampaign(1)}>
            <ArrowRight size={20} />
          </HeroArrow>
          <HeroDots aria-label="Selecionar campanha">
            {campaigns.map((item, index) => (
              <button
                type="button"
                key={item.label}
                aria-label={`Mostrar campanha ${index + 1}`}
                aria-current={activeCampaign === index}
                onClick={() => setActiveCampaign(index)}
              />
            ))}
          </HeroDots>
        </Hero>

        <CategorySection id="categorias">
          <CategoryGrid>
            {categories.map((item) => (
              <CategoryCard
                key={item.label}
                href={item.label === "Utilitários" ? "/utilitarios" : "/estoque?pagina=1"}
                className={`category-card ${item.className ?? ""}`}
                $image={item.image}
              >
                <div className="content"><h3>{item.label}</h3><span>Conferir</span></div>
              </CategoryCard>
            ))}
          </CategoryGrid>
        </CategorySection>

        <MockVehicleSection>
          <Shell>
            <SectionHeading>
              <div>
                <p className="eyebrow">Vitrine Lions</p>
                <h2>Encontre seu próximo carro</h2>
              </div>
              <p>Veículos de demonstração preenchidos com os dados mock do projeto.</p>
            </SectionHeading>
            <CarGrid>
              {vehicles.map((vehicle) => (
                <CarCard key={vehicle.id}>
                  <div className="photo">
                    <img src={vehicle.imageUrl} alt={`${vehicle.brand} ${vehicle.model}`} loading="lazy" />
                    {vehicle.featured && <span className="tag">Destaque</span>}
                  </div>
                  <div className="body">
                    <div className="meta">
                      <span>{vehicle.year}</span>
                      <span>{formatMileage(vehicle.mileage)}</span>
                    </div>
                    <h3>{vehicle.brand} {vehicle.model}</h3>
                    <p className="version">{vehicle.version} · {vehicle.transmission}</p>
                    <div className="price">
                      <small>Preço demonstrativo</small>
                      {formatPrice(vehicle.price)}
                    </div>
                  </div>
                </CarCard>
              ))}
            </CarGrid>
            <a className="catalog-link" href="/estoque?pagina=1">
              Ver catálogo completo <ArrowRight size={16} aria-hidden="true" />
            </a>
          </Shell>
        </MockVehicleSection>

        <Section id="catalogo">
          <VitrineVideo>
            <video
              ref={vitrineVideoRef}
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              onError={() => setVitrineVideoError(true)}
              aria-label="Vídeo da vitrine Lions Seminovos"
            >
              Seu navegador não consegue reproduzir este vídeo.
            </video>
            {vitrineVideoError && (
              <p role="status">
                Não foi possível reproduzir o vídeo neste navegador.
              </p>
            )}
          </VitrineVideo>
        </Section>

        <Financing
          id="financiamento"
          $image="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1800&q=85"
        >
          <div className="copy">
            <span>Financiamento Lions</span>
            <h2>Seu próximo carro começa com uma boa escolha.</h2>
            <p>Veja como funciona a jornada de financiamento e fale com a loja para conhecer as condições.</p>
            <RedButton href="/financiamento">
              Saiba mais <ArrowUpRight size={15} />
            </RedButton>
          </div>
          <FinanceCard
            onSubmit={(event) => {
              event.preventDefault();
              setFinanceChecked(true);
            }}
          >
            <h3>Faça uma simulação demonstrativa</h3>
            <p>Etapa visual apenas. Não informe dados pessoais: não há consulta, aprovação ou envio.</p>
            <label htmlFor="finance-demo">Etapa demonstrativa</label>
            <input id="finance-demo" name="finance-demo" value="Sem consulta de crédito" readOnly />
            <button type="submit">{financeChecked ? "Demonstração visualizada" : "Ver demonstração"}</button>
            {financeChecked && (
              <p className="notice" role="status">
                Não consultamos crédito nesta demonstração. Para uma análise real, acesse o{" "}
                <a href={officialSite} target="_blank" rel="noreferrer">site oficial da Lions</a>.
              </p>
            )}
          </FinanceCard>
        </Financing>

      </main> : <LocalPage path={routePath} />}

      {isHomePage && isMobile && leadDrawerOpen && (
        <DrawerBackdrop
          type="button"
          aria-label="Fechar formulário de desconto"
          onClick={closeLeadDrawer}
        />
      )}
      {isHomePage && <LeadCard
        id="lead-drawer"
        ref={leadCardRef}
        $open={leadDrawerOpen}
        aria-hidden={!leadDrawerOpen}
        role="dialog"
        aria-modal={isMobile && leadDrawerOpen ? true : undefined}
        aria-labelledby="lead-drawer-title"
        onSubmit={submitLead}
      >
        <button
          ref={leadCloseRef}
          className="drawer-close"
          type="button"
          aria-label={isMobile ? "Fechar formulário de desconto" : "Recolher formulário de desconto"}
          onClick={closeLeadDrawer}
        >
          <X size={14} />
        </button>
        <h2 id="lead-drawer-title">Ganhe um desconto de até <strong>R$ 3.000,00</strong></h2>
        <p className="demo-label">Protótipo para avaliação: oferta ilustrativa, não envie dados reais. Nada será enviado ou salvo.</p>
        <div className="lead-cars" aria-hidden="true">LIONS <span>SEMINOVOS</span></div>
        <div className="fields">
          <input aria-label="Seu nome" name="name" placeholder="Seu nome" autoComplete="name" required />
          <input aria-label="Telefone" name="phone" type="tel" placeholder="Telefone" autoComplete="tel" required />
          <input aria-label="E-mail" name="email" type="email" placeholder="Email" autoComplete="email" required />
          <select aria-label="Loja demonstrativa" name="store" defaultValue="demo">
            <option value="demo">Sem unidade real cadastrada (demonstração)</option>
          </select>
        </div>
        <button type="submit">{leadSent ? "Demonstração visualizada" : "Solicitar"}</button>
        <p className="notice" role={leadSent ? "status" : undefined}>
          {leadSent
            ? <>Demonstração local: nada foi enviado ou salvo. Para contato real, acesse o <a href={officialSite} target="_blank" rel="noreferrer">site oficial</a>.</>
            : <>Formulário demonstrativo: nada será enviado ou salvo. <a href={officialSite} target="_blank" rel="noreferrer">Consulte o site oficial</a>.</>}
        </p>
      </LeadCard>}
      {isHomePage && !isMobile && !leadDrawerOpen && (
        <DesktopLeadTab
          ref={desktopLeadTabRef}
          type="button"
          aria-label="Abrir formulário de desconto"
          aria-controls="lead-drawer"
          aria-expanded={false}
          onClick={() => setLeadDrawerOpen(true)}
        >
          Seu desconto está aqui!
        </DesktopLeadTab>
      )}

      <SiteFooter>
        <nav aria-label="Links institucionais">
          {siteNavigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
          <a href={`${officialSite}trabalhe_conosco`}>Trabalhe conosco</a>
          <a href={`${officialSite}parceiro`}>Parceiro de negócio</a>
          <a href={`${officialSite}termos-de-uso`}>Termos de uso</a>
        </nav>
        <p className="company">LIONS PRE-OWNED S. A. - 19.826.203/0001-60</p>
        <p className="credit">Feito por Victor Guterres</p>
      </SiteFooter>

      {isHomePage && isMobile && (
        <DiscountTab
          ref={discountTabRef}
          type="button"
          aria-label="Abrir promoção de desconto de R$ 3.000"
          $open={leadDrawerOpen}
          aria-controls="lead-drawer"
          aria-expanded={leadDrawerOpen}
          onClick={() => setLeadDrawerOpen(true)}
        >
          <span className="badge-icon" aria-hidden="true">
            <CarFront className="car-icon" size={29} strokeWidth={2.6} />
            <Tag className="tag-icon" size={22} strokeWidth={2.8} />
          </span>
          <span className="offer-label"><span>Voucher de</span><strong>R$ 3.000</strong></span>
        </DiscountTab>
      )}
      {isHomePage && <WhatsAppLink href={officialSite} target="_blank" rel="noreferrer" aria-label="Fale com a Lions pelo site oficial">
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <path d="M16 3.5a12.1 12.1 0 0 0-10.4 18.3L4 28l6.4-1.6A12.1 12.1 0 1 0 16 3.5Z" />
          <path d="M12.1 10.1c.3-.6.6-.6 1-.6h.7c.2 0 .5.1.6.5l1 2.4c.1.3.1.5-.1.7l-.8 1c-.2.2-.3.4-.1.7.3.6 1.1 1.8 2.4 2.8 1.6 1.2 2.8 1.6 3.3 1.8.4.2.6.1.8-.2l1.1-1.3c.2-.3.5-.3.8-.2l2.2 1.1c.3.2.5.3.5.5 0 .3-.2 1.6-1.2 2.4-.8.8-1.9 1.1-3.1.9-1.1-.2-2.6-.7-4.5-1.8-2.4-1.4-4.2-3.5-5.2-5.1-.9-1.5-1.4-3-1.3-4.1.1-1 .6-1.8 1.1-2.4Z" />
        </svg>
        <span>Quero comprar</span>
      </WhatsAppLink>}
    </>
  );
}

export default App;
