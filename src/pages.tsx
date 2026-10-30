import { FormEvent, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  CircleHelp,
  Clock3,
  MapPin,
  Search,
  Wrench,
} from "lucide-react";
import {
  SiAudi,
  SiBmw,
  SiChevrolet,
  SiCitroen,
  SiDaf,
  SiDucati,
  SiFiat,
  SiFord,
  SiHonda,
  SiHusqvarna,
  SiHyundai,
  SiIveco,
  SiJeep,
  SiKia,
  SiKtm,
  SiMan,
  SiMazda,
  SiMitsubishi,
  SiNissan,
  SiPeugeot,
  SiRenault,
  SiScania,
  SiSubaru,
  SiSuzuki,
  SiToyota,
  SiVolkswagen,
  SiVolvo,
  SiYamahamotorcorporation,
  type IconType,
} from "@icons-pack/react-simple-icons";
import { vehicles } from "./data/vehicles";
import {
  DemoCard,
  DemoForm,
  DemoGrid,
  DemoPanel,
  CatalogEmptyState,
  CatalogFilters,
  CatalogIntro,
  CatalogLayout,
  CatalogPageMain,
  CatalogResults,
  CatalogSearch,
  CatalogVehicleCard,
  CatalogVehicleGrid,
  AppointmentPageMain,
  FipeBrandGrid,
  FipeBrandSection,
  FipeCategories,
  FipePageMain,
  FipeSearch,
  FipeTabs,
  FinancingPageMain,
  PageBody,
  PageHero,
  PageMain,
  PageSection,
  StoreCard,
  StoreGrid,
  StoresPageMain,
  TextLink,
  UtilitiesAccordion,
  UtilitiesPageMain,
  UtilitiesSearch,
} from "./pagesStyles";

const officialSite = "https://lionsseminovos.com.br/";

const rioStores = [
  {
    name: "Lions Seminovos Nova Iguaçu",
    address: "Av. Carlos Marques Rollo, 137 - Imperador, Nova Iguaçu - RJ, 26225-290",
    image: "photo-1486406146926-c627a92ad1ab",
  },
  {
    name: "Lions Seminovos Nova Iguaçu - Dutra",
    address: "Rod. Pres. Dutra, 12900 - Jardim Tropical, Nova Iguaçu - RJ, 26010-700",
    image: "photo-1487958449943-2429e8be8625",
  },
  {
    name: "Lions Seminovos Intendente Magalhães",
    address: "Estrada Intendente Magalhães, 462 - Madureira, Rio de Janeiro - RJ, 21331-720",
    image: "photo-1511818966892-d7d671e672a2",
  },
  {
    name: "Lions Seminovos Niterói",
    address: "RJ-104, 2620 - Baldeador, Niterói - RJ, 24140-005",
    image: "photo-1486406146926-c627a92ad1ab",
  },
  {
    name: "Lions Seminovos Barra Mansa",
    address: "Consulte o endereço atualizado no site oficial.",
    image: "photo-1497366754035-f200968a6e72",
  },
  {
    name: "Lions Seminovos Campo Grande",
    address: "Estr. Rio do A, 2211 - Campo Grande, Rio de Janeiro - RJ, 23080-300",
    image: "photo-1497366811353-6870744d04b2",
  },
];

const saoPauloStores = [
  { name: "Lions Seminovos Vila Prudente", address: "Consulte endereço e horários no site oficial.", image: "photo-1486406146926-c627a92ad1ab" },
  { name: "Lions Seminovos Osasco", address: "Consulte endereço e horários no site oficial.", image: "photo-1487958449943-2429e8be8625" },
  { name: "Lions Seminovos Santo Amaro", address: "Consulte endereço e horários no site oficial.", image: "photo-1511818966892-d7d671e672a2" },
  { name: "Lions Seminovos São Bernardo do Campo", address: "Consulte endereço e horários no site oficial.", image: "photo-1497366754035-f200968a6e72" },
  { name: "Lions Seminovos São Miguel", address: "Consulte endereço e horários no site oficial.", image: "photo-1497366811353-6870744d04b2" },
  { name: "Lions Seminovos Mogi das Cruzes", address: "Unidade em breve.", image: "photo-1486406146926-c627a92ad1ab", comingSoon: true },
  { name: "Lions Seminovos Limeira", address: "Consulte endereço e horários no site oficial.", image: "photo-1487958449943-2429e8be8625" },
  { name: "Lions Seminovos Piracicaba", address: "Consulte endereço e horários no site oficial.", image: "photo-1511818966892-d7d671e672a2" },
  { name: "Lions Seminovos Campinas", address: "Consulte endereço e horários no site oficial.", image: "photo-1497366754035-f200968a6e72" },
  { name: "Lions Seminovos Indaiatuba", address: "Consulte endereço e horários no site oficial.", image: "photo-1497366811353-6870744d04b2" },
];

const floridaStores = [
  { name: "Lions Seminovos Orlando", address: "Consulte endereço e horários no site oficial.", image: "photo-1486406146926-c627a92ad1ab" },
  { name: "Lions Seminovos Miami", address: "Consulte endereço e horários no site oficial.", image: "photo-1487958449943-2429e8be8625" },
];

const pageDetails: Record<string, { title: string; summary: string }> = {
  "/financiamento": {
    title: "Financiamento",
    summary: "Uma página demonstrativa para conhecer a área de financiamento. Nenhuma proposta ou análise de crédito é feita aqui.",
  },
  "/fipe": {
    title: "Consulta FIPE",
    summary: "Veja como seria a área de consulta. Esta demonstração não consulta nem exibe valores FIPE.",
  },
  "/lojas": {
    title: "Lojas",
    summary: "Encontre uma unidade Lions Seminovos no Rio de Janeiro.",
  },
  "/pos-venda": {
    title: "Pós-venda",
    summary: "Área demonstrativa de pós-venda, sem abertura de solicitações ou acesso a dados de atendimento.",
  },
  "/estoque": {
    title: "Nosso Catálogo",
    summary: "Veículos de exemplo para avaliação da interface. A lista não representa o estoque disponível da loja.",
  },
  "/agende-sua-visita": {
    title: "Agende sua visita",
    summary: "Formulário de demonstração. Nenhuma visita será marcada e nenhum dado será enviado ou armazenado.",
  },
};

function DemoFormPage({
  onSubmit,
}: {
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}) {
  const [submitted, setSubmitted] = useState(false);
  const finishDemo = (event: FormEvent<HTMLFormElement>) => {
    onSubmit(event);
    setSubmitted(true);
  };

  return (
    <>
      <PageSection>
        <h2>Pedido de visita demonstrativo</h2>
        <p>
          Os campos existem apenas para demonstrar a interface. Não informe dados reais:
          não há envio, confirmação, agendamento ou armazenamento.
        </p>
      </PageSection>
      <PageSection>
        <DemoPanel>
          <DemoForm onSubmit={finishDemo}>
            <label>
              Nome para demonstração
              <input name="name" autoComplete="off" placeholder="Nome de exemplo" required />
            </label>
            <label>
              Veículo de interesse (opcional)
              <input name="vehicle" autoComplete="off" placeholder="Modelo de exemplo" />
            </label>
            <label>
              E-mail de exemplo
              <input name="email" type="email" autoComplete="off" placeholder="exemplo@email.com" required />
            </label>
            <label>
              Telefone de exemplo
              <input name="phone" type="tel" autoComplete="off" placeholder="(00) 00000-0000" required />
            </label>
            <button type="submit"><CalendarDays size={16} aria-hidden="true" /> Testar formulário</button>
            {submitted && (
              <p className="form-status" role="status">
                Demonstração local: nenhuma visita foi agendada e nenhum dado foi enviado ou salvo.
              </p>
            )}
          </DemoForm>
        </DemoPanel>
        <TextLink href={officialSite} target="_blank" rel="noreferrer">
          Consulte os canais oficiais <ArrowUpRight size={16} aria-hidden="true" />
        </TextLink>
      </PageSection>
    </>
  );
}

function FinancingPage() {
  const [mode, setMode] = useState<"fipe" | "values">("fipe");
  const [vehicleId, setVehicleId] = useState("");
  const [brand, setBrand] = useState("");
  const [term, setTerm] = useState(60);
  const [submitted, setSubmitted] = useState(false);
  const selectedVehicle = vehicles.find((vehicle) => String(vehicle.id) === vehicleId);
  const uniqueValues = (values: string[]) =>
    [...new Set(values)].sort((first, second) => first.localeCompare(second, "pt-BR"));
  const brands = uniqueValues(vehicles.map((vehicle) => vehicle.brand));

  return (
    <FinancingPageMain>
      <div className="financing-content">
        <h1>Simule seu financiamento</h1>
        <div className="mode-switch" role="group" aria-label="Escolha como simular">
          <span>Simular por:</span>
          <button type="button" className={mode === "values" ? "active" : ""} aria-pressed={mode === "values"} onClick={() => { setMode("values"); setSubmitted(false); }}>
            Valores
          </button>
          <button type="button" className={mode === "fipe" ? "active" : ""} aria-pressed={mode === "fipe"} onClick={() => { setMode("fipe"); setSubmitted(false); }}>
            FIPE
          </button>
        </div>

        <div className="financing-card">
          <form onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }}>
            <strong>Dados para simulação demonstrativa</strong>
            <div className="field-grid two-columns">
              <label>
                <span className="visually-hidden">Nome</span>
                <input name="name" autoComplete="off" placeholder="Seu nome (não informe dados reais)" required />
              </label>
              <label>
                <span className="visually-hidden">Telefone</span>
                <input name="phone" type="tel" autoComplete="off" placeholder="Telefone demonstrativo" required />
              </label>
              <label>
                <span className="visually-hidden">E-mail</span>
                <input name="email" type="email" autoComplete="off" placeholder="Email demonstrativo" required />
              </label>
              <label>
                <span className="visually-hidden">Loja</span>
                <select name="store" defaultValue="" required>
                  <option value="" disabled>Selecione uma loja</option>
                  {[...rioStores, ...saoPauloStores, ...floridaStores].map((store) => (
                    <option key={store.name} value={store.name}>{store.name}</option>
                  ))}
                </select>
              </label>
            </div>

            <strong>Simulador de financiamento</strong>
            {mode === "fipe" ? (
              <>
                <div className="field-grid two-columns">
                  <label>
                    <span className="visually-hidden">Tipo de veículo</span>
                    <select aria-label="Tipo de veículo" defaultValue="car">
                      <option value="car">Carro</option>
                    </select>
                  </label>
                  <label>
                    <span className="visually-hidden">Marca</span>
                    <select aria-label="Marca" value={brand || selectedVehicle?.brand || ""} onChange={(event) => {
                      setBrand(event.target.value);
                      const firstMatch = vehicles.find((vehicle) => vehicle.brand === event.target.value);
                      setVehicleId(firstMatch ? String(firstMatch.id) : "");
                    }}>
                      <option value="" disabled>Marca</option>
                      {brands.map((brand) => <option key={brand} value={brand}>{brand}</option>)}
                    </select>
                  </label>
                </div>
                <div className="field-grid three-columns">
                  <label>
                    <span className="visually-hidden">Modelo</span>
                    <select aria-label="Modelo" value={selectedVehicle?.id ?? ""} onChange={(event) => {
                      const nextVehicle = vehicles.find((vehicle) => String(vehicle.id) === event.target.value);
                      setVehicleId(event.target.value);
                      if (nextVehicle) setBrand(nextVehicle.brand);
                    }} required>
                      <option value="" disabled>Modelo</option>
                      {vehicles
                        .filter((vehicle) => !brand && !selectedVehicle || vehicle.brand === (brand || selectedVehicle?.brand))
                        .map((vehicle) => <option key={vehicle.id} value={vehicle.id}>{vehicle.model}</option>)}
                    </select>
                  </label>
                  <label>
                    <span className="visually-hidden">Ano</span>
                    <select aria-label="Ano" value={selectedVehicle?.year ?? ""} disabled={!selectedVehicle}>
                      <option value="" disabled>Ano</option>
                      {selectedVehicle && <option value={selectedVehicle.year}>{selectedVehicle.year}</option>}
                    </select>
                  </label>
                  <label>
                    <span className="visually-hidden">Versão</span>
                    <select aria-label="Versão" value={selectedVehicle?.version ?? ""} disabled={!selectedVehicle}>
                      <option value="" disabled>Versão</option>
                      {selectedVehicle && <option value={selectedVehicle.version}>{selectedVehicle.version}</option>}
                    </select>
                  </label>
                </div>
                <div className="vehicle-value">
                  {selectedVehicle
                    ? `Valor de referência do mock: ${new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(Number(selectedVehicle.price))}`
                    : "Escolha um veículo do mock"}
                </div>
              </>
            ) : (
              <div className="field-grid two-columns">
                <label>
                  <span className="visually-hidden">Valor a financiar</span>
                  <input type="number" name="amount" min="1" step="1000" placeholder="Valor a ser financiado" required />
                </label>
                <label>
                  <span className="visually-hidden">Valor de entrada</span>
                  <input type="number" name="downPayment" min="0" step="1000" placeholder="Valor de entrada" required />
                </label>
              </div>
            )}

            <strong>Quantidade de parcelas</strong>
            <div className="installments" role="group" aria-label="Quantidade de parcelas">
              {[12, 24, 36, 48, 60].map((count) => (
                <button key={count} type="button" className={term === count ? "active" : ""} aria-pressed={term === count} onClick={() => setTerm(count)}>
                  {count}x
                </button>
              ))}
            </div>

            <button className="submit-button" type="submit">Ver demonstração</button>
            <p className="disclaimer">
              Protótipo local: não consulta a Tabela FIPE, não calcula parcelas nem analisa crédito.
              Não informe dados pessoais; nada é enviado ou armazenado.
            </p>
            {submitted && (
              <p className="form-status" role="status">
                Demonstração local concluída. Para uma simulação real, acesse os canais oficiais da Lions.
              </p>
            )}
          </form>
        </div>
      </div>
    </FinancingPageMain>
  );
}

function AppointmentPage() {
  const [submitted, setSubmitted] = useState(false);
  const stores = [...rioStores, ...saoPauloStores, ...floridaStores];
  const photoWall = [
    "photo-1552519507-da3b142c6e3d",
    "photo-1503376780353-7e6692767b70",
    "photo-1519641471654-76ce0107ad1b",
    "photo-1606611013016-969c19ba27bb",
    "photo-1621007947382-bb3c3994e3fb",
    "photo-1511919884226-fd3cad34687c",
  ];

  return (
    <AppointmentPageMain className="visit-appointment">
      <section className="appointment-form-panel">
        <p className="appointment-eyebrow">Atendimento personalizado</p>
        <h1>Agende sua visita</h1>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            setSubmitted(true);
          }}
        >
          <fieldset>
            <legend>Dados pessoais</legend>
            <div className="form-row">
              <label>
                <span className="visually-hidden">Nome completo</span>
                <input name="name" autoComplete="off" placeholder="Nome completo" required />
              </label>
              <label>
                <span className="visually-hidden">Telefone</span>
                <input name="phone" type="tel" autoComplete="off" placeholder="Telefone" required />
              </label>
            </div>
            <label>
              <span className="visually-hidden">E-mail</span>
              <input name="email" type="email" autoComplete="off" placeholder="E-mail" required />
            </label>
          </fieldset>

          <fieldset>
            <legend>Loja</legend>
            <label className="icon-field">
              <MapPin size={19} aria-hidden="true" />
              <span className="visually-hidden">Selecione uma loja</span>
              <select name="store" defaultValue="" required>
                <option value="" disabled>Loja mais próxima</option>
                {stores.map((store) => <option key={store.name} value={store.name}>{store.name}</option>)}
              </select>
            </label>
            <div className="form-row">
              <label className="icon-field">
                <CalendarDays size={18} aria-hidden="true" />
                <span className="visually-hidden">Data</span>
                <input name="date" type="date" aria-label="Data" required />
              </label>
              <label className="icon-field">
                <Clock3 size={18} aria-hidden="true" />
                <span className="visually-hidden">Horário</span>
                <select name="time" defaultValue="" required aria-label="Horário">
                  <option value="" disabled>Horário</option>
                  {["09:00", "10:00", "11:00", "13:00", "14:00", "15:00", "16:00", "17:00"].map((time) => (
                    <option key={time} value={time}>{time}</option>
                  ))}
                </select>
              </label>
            </div>
          </fieldset>

          <button type="submit">
            Agendar visita <ArrowRight size={18} aria-hidden="true" />
          </button>
          <p className="demo-disclaimer">
            Demonstração local: os dados não são enviados nem armazenados e nenhuma visita será agendada.
          </p>
          {submitted && (
            <p className="form-status" role="status">
              Este formulário é apenas demonstrativo. Para agendar uma visita real, acesse os canais oficiais.
            </p>
          )}
        </form>
      </section>
      <section className="appointment-story" aria-labelledby="appointment-story-title">
        <div className="photo-wall" aria-hidden="true">
          {photoWall.map((photo) => (
            <img
              key={photo}
              src={`https://images.unsplash.com/${photo}?auto=format&fit=crop&w=800&q=80`}
              alt=""
              loading="lazy"
            />
          ))}
        </div>
        <div className="story-copy">
          <p className="story-eyebrow">Sua próxima história começa aqui</p>
          <h2 id="appointment-story-title">A Lions está com você<br />em cada encontro</h2>
          <p>
            Na Lions, cada visita é pensada para você. Um momento exclusivo, com atendimento
            humano e atenção aos detalhes que realmente importam. Agende quando for melhor
            para você. Estamos prontos para receber, ouvir e ajudar no que for preciso.
          </p>
        </div>
      </section>
    </AppointmentPageMain>
  );
}

function PostSalePage() {
  const [submitted, setSubmitted] = useState(false);
  const workshopPhotos = [
    "photo-1519641471654-76ce0107ad1b",
    "photo-1606611013016-969c19ba27bb",
    "photo-1552519507-da3b142c6e3d",
    "photo-1621007947382-bb3c3994e3fb",
    "photo-1511919884226-fd3cad34687c",
    "photo-1503376780353-7e6692767b70",
  ];

  return (
    <AppointmentPageMain>
      <section className="appointment-form-panel">
        <h1>Agende seu pós-venda</h1>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            setSubmitted(true);
          }}
        >
          <fieldset>
            <legend>Dados do proprietário</legend>
            <label>
              <span className="visually-hidden">CPF ou CNPJ</span>
              <input
                name="document"
                type="text"
                inputMode="numeric"
                autoComplete="off"
                placeholder="CPF / CNPJ"
                aria-label="CPF ou CNPJ demonstrativo"
                required
              />
            </label>
          </fieldset>
          <button type="submit">
            Continuar <ArrowRight size={18} aria-hidden="true" />
          </button>
          <p className="demo-disclaimer">
            Demonstração local: não informe um documento real. Nenhuma consulta será realizada.
          </p>
          {submitted && (
            <p className="form-status" role="status">
              A consulta de pós-venda não está disponível nesta demonstração. Acesse os canais oficiais da Lions.
            </p>
          )}
        </form>
      </section>
      <section className="appointment-story" aria-labelledby="post-sale-story-title">
        <div className="photo-wall" aria-hidden="true">
          {workshopPhotos.map((photo, index) => (
            <img
              key={`${photo}-${index}`}
              src={`https://images.unsplash.com/${photo}?auto=format&fit=crop&w=800&q=80`}
              alt=""
              loading="lazy"
            />
          ))}
        </div>
        <div className="story-copy">
          <h2 id="post-sale-story-title">Sua jornada com a Lions não termina na entrega</h2>
          <p>
            A compra de um carro é apenas o começo da sua jornada. O pós-venda Lions foi pensado
            para estar ao seu lado no dia a dia, com atenção aos detalhes e suporte quando você precisar.
          </p>
        </div>
      </section>
    </AppointmentPageMain>
  );
}

function CatalogPage() {
  const minModelYear = 2014;
  const maxModelYear = 2026;
  const [search, setSearch] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [fuel, setFuel] = useState("");
  const [yearFrom, setYearFrom] = useState(minModelYear);
  const [yearTo, setYearTo] = useState(maxModelYear);
  const [category, setCategory] = useState("");

  const uniqueValues = (values: string[]) =>
    [...new Set(values)].sort((first, second) => first.localeCompare(second, "pt-BR"));
  const brands = uniqueValues(vehicles.map((vehicle) => vehicle.brand));
  const models = uniqueValues(vehicles.map((vehicle) => vehicle.model));
  const fuels = uniqueValues(vehicles.map((vehicle) => vehicle.fuel));
  const categories = uniqueValues(vehicles.map((vehicle) => vehicle.category));
  const normalizedSearch = search.trim().toLocaleLowerCase("pt-BR");
  const yearRange = maxModelYear - minModelYear;
  const selectedYearStart = ((yearFrom - minModelYear) / yearRange) * 100;
  const selectedYearEnd = ((yearTo - minModelYear) / yearRange) * 100;

  const filteredVehicles = vehicles.filter((vehicle) => {
    const searchText = `${vehicle.brand} ${vehicle.model} ${vehicle.version}`.toLocaleLowerCase("pt-BR");
    return (
      (!normalizedSearch || searchText.includes(normalizedSearch)) &&
      (!brand || vehicle.brand === brand) &&
      (!model || vehicle.model === model) &&
      (!fuel || vehicle.fuel === fuel) &&
      vehicle.year >= yearFrom &&
      vehicle.year <= yearTo &&
      (!category || vehicle.category === category)
    );
  });
  const hasFilters = Boolean(
    search || brand || model || fuel || yearFrom > minModelYear || yearTo < maxModelYear || category,
  );

  const clearFilters = () => {
    setSearch("");
    setBrand("");
    setModel("");
    setFuel("");
    setYearFrom(minModelYear);
    setYearTo(maxModelYear);
    setCategory("");
  };

  return (
    <CatalogPageMain>
      <CatalogIntro>
        <div className="catalog-intro-content">
          <p className="eyebrow">Lions Seminovos <span /></p>
          <h1>Encontre seu <em>próximo carro</em></h1>
          <p className="summary">
            Explore nosso catálogo demonstrativo e encontre o modelo ideal para sua próxima jornada.
          </p>
          <CatalogSearch role="search" aria-label="Buscar veículos">
            <Search size={20} aria-hidden="true" />
            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Busque por marca, modelo ou versão"
              aria-label="Buscar por marca, modelo ou versão"
            />
            <span className="search-hint">Buscar</span>
          </CatalogSearch>
        </div>
      </CatalogIntro>

      <CatalogLayout>
        <CatalogFilters aria-label="Filtros de veículos">
          <div className="filter-heading">
            <h2>Filtros</h2>
            <button type="button" onClick={clearFilters} disabled={!hasFilters}>Limpar filtros</button>
          </div>
          <label>
            Marca
            <select value={brand} onChange={(event) => setBrand(event.target.value)}>
              <option value="">Todas as marcas</option>
              {brands.map((value) => <option key={value} value={value}>{value}</option>)}
            </select>
          </label>
          <label>
            Modelo
            <select value={model} onChange={(event) => setModel(event.target.value)}>
              <option value="">Todos os modelos</option>
              {models.map((value) => <option key={value} value={value}>{value}</option>)}
            </select>
          </label>
          <label>
            Combustível
            <select value={fuel} onChange={(event) => setFuel(event.target.value)}>
              <option value="">Todos</option>
              {fuels.map((value) => <option key={value} value={value}>{value}</option>)}
            </select>
          </label>
          <fieldset className="model-year-filter">
            <legend>Ano modelo - {yearFrom} / {yearTo}</legend>
            <div className="year-slider" aria-label="Intervalo de ano modelo">
              <div className="year-track" aria-hidden="true">
                <span style={{ left: `${selectedYearStart}%`, right: `${100 - selectedYearEnd}%` }} />
              </div>
              <input
                type="range"
                min={minModelYear}
                max={maxModelYear}
                value={yearFrom}
                aria-label="Ano modelo inicial"
                onChange={(event) => setYearFrom(Math.min(Number(event.target.value), yearTo))}
              />
              <input
                type="range"
                min={minModelYear}
                max={maxModelYear}
                value={yearTo}
                aria-label="Ano modelo final"
                onChange={(event) => setYearTo(Math.max(Number(event.target.value), yearFrom))}
              />
            </div>
            <div className="year-slider-labels" aria-hidden="true">
              <span>{minModelYear}</span>
              <span>{maxModelYear}</span>
            </div>
          </fieldset>
          <label>
            Carroceria
            <select value={category} onChange={(event) => setCategory(event.target.value)}>
              <option value="">Todas</option>
              {categories.map((value) => <option key={value} value={value}>{value}</option>)}
            </select>
          </label>
        </CatalogFilters>

        <CatalogResults aria-live="polite">
          <div className="results-heading">
            <div>
              <p className="eyebrow">Seleção Lions</p>
              <h2>Veículos do catálogo</h2>
            </div>
            <p className="result-count">
              <strong>{filteredVehicles.length}</strong>
              {filteredVehicles.length === 1 ? " veículo" : " veículos"}
            </p>
          </div>
          {filteredVehicles.length ? (
            <CatalogVehicleGrid>
              {filteredVehicles.map((vehicle) => (
                <CatalogVehicleCard key={vehicle.id}>
                  <div className="vehicle-image">
                    <img
                      src={vehicle.imageUrl}
                      alt={`Imagem ilustrativa de ${vehicle.brand} ${vehicle.model}`}
                      loading="lazy"
                    />
                    <span className="demo-badge">Veículo exemplo</span>
                    <span className="year-badge">{vehicle.year}</span>
                  </div>
                  <div className="details">
                    <p className="eyebrow">{vehicle.brand}</p>
                    <h2>{vehicle.model}</h2>
                    <p className="version">{vehicle.version}</p>
                    <div className="specs">
                      <span>{vehicle.mileage.toLocaleString("pt-BR")} km</span>
                      <span>{vehicle.fuel}</span>
                      <span>{vehicle.transmission}</span>
                    </div>
                    <p className="price">
                      <small>Preço de exemplo — não é oferta</small>
                      {Number(vehicle.price).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
                    </p>
                    <a className="vehicle-cta" href="/agende-sua-visita">
                      Agendar visita <ArrowUpRight size={16} aria-hidden="true" />
                    </a>
                  </div>
                </CatalogVehicleCard>
              ))}
            </CatalogVehicleGrid>
          ) : (
            <CatalogEmptyState role="status">
              <h2>Nenhum veículo encontrado</h2>
              <p>Tente ajustar ou limpar os filtros para ver os exemplos disponíveis.</p>
              <button type="button" onClick={clearFilters}>Limpar filtros</button>
            </CatalogEmptyState>
          )}
          <p className="catalog-disclaimer">
            Demonstração com dados locais. Veículos, características e preços são fictícios e não representam
            disponibilidade, oferta ou venda real. Nenhum contato ou agendamento é enviado por esta página.
          </p>
        </CatalogResults>
      </CatalogLayout>
    </CatalogPageMain>
  );
}

function UtilitiesPage() {
  const [search, setSearch] = useState("");
  const normalize = (value: string) =>
    value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase("pt-BR");
  const normalizedSearch = normalize(search.trim());
  const matchingVehicles = vehicles.filter((vehicle) =>
    normalize(`${vehicle.brand} ${vehicle.model} ${vehicle.version} ${vehicle.year}`).includes(normalizedSearch),
  );
  const brands = [...new Set(matchingVehicles.map((vehicle) => vehicle.brand))]
    .sort((first, second) => first.localeCompare(second, "pt-BR"));

  return (
    <UtilitiesPageMain>
      <header className="utilities-intro">
        <h1>VEJA TODAS AS CATEGORIAS DE UBER DISPONÍVEIS</h1>
        <p>
          Aqui você encontra todos os carros que podem ser cadastrados no app da Uber de
          acordo com a categoria. Aproveite e confira a melhor opção para o seu custo benefício.
        </p>
        <UtilitiesSearch role="search" aria-label="Pesquisar veículos">
          <input
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Pesquisar por marca, ou modelo ou ano"
            aria-label="Pesquisar por marca, modelo ou ano"
          />
          <Search size={20} aria-hidden="true" />
        </UtilitiesSearch>
      </header>

      <UtilitiesAccordion aria-live="polite">
        <details className="category" open>
          <summary>
            <span>Black</span>
            <span className="chevron" aria-hidden="true" />
          </summary>
          <div className="brands">
            {brands.length > 0 ? brands.map((brand) => {
              const brandVehicles = matchingVehicles.filter((vehicle) => vehicle.brand === brand);
              const models = [...new Set(brandVehicles.map((vehicle) => vehicle.model))]
                .sort((first, second) => first.localeCompare(second, "pt-BR"));

              return (
                <details className="brand" key={brand}>
                  <summary>
                    <span>{brand}</span>
                    <span className="chevron" aria-hidden="true" />
                  </summary>
                  <div className="models">
                    {models.map((model) => {
                      const modelVehicles = brandVehicles
                        .filter((vehicle) => vehicle.model === model)
                        .sort((first, second) => second.year - first.year);
                      return (
                        <details className="model" key={model}>
                          <summary>
                            <span>{model}</span>
                            <span className="chevron" aria-hidden="true" />
                          </summary>
                          <ul>
                            {modelVehicles.map((vehicle) => (
                              <li key={vehicle.id}>
                                <span>{vehicle.version}</span>
                                <span>{vehicle.year}</span>
                              </li>
                            ))}
                          </ul>
                        </details>
                      );
                    })}
                  </div>
                </details>
              );
            }) : (
              <p className="empty-state">Nenhum veículo encontrado. Tente outra marca, modelo ou ano.</p>
            )}
          </div>
        </details>
        <p className="disclaimer">
          Os veículos exibidos são exemplos do catálogo demonstrativo. Confirme diretamente com a Uber
          a elegibilidade de cada modelo e ano antes de se cadastrar.
        </p>
      </UtilitiesAccordion>
    </UtilitiesPageMain>
  );
}

const fipeCategories = [
  {
    id: "carros",
    label: "Carros",
    title: "Principais marcas de carros",
    popular: [
      "Fiat", "Peugeot", "Renault", "Citroën", "Volkswagen", "Chevrolet", "Kia", "Honda", "Toyota",
      "Hyundai", "JAC", "Mitsubishi", "Audi", "BMW", "Ford", "Chery", "BYD",
    ],
    other: ["Nissan", "Jeep", "Volvo", "Subaru", "Suzuki"],
  },
  {
    id: "motos",
    label: "Motos",
    title: "Principais marcas de motos",
    popular: ["BMW", "Yamaha", "Suzuki", "Honda", "Ducati"],
    other: ["Kawasaki", "KTM", "Husqvarna", "Dafra", "Shineray"],
  },
  {
    id: "caminhoes",
    label: "Caminhões",
    title: "Principais marcas de caminhões",
    popular: ["Volvo", "Scania", "Volkswagen", "Iveco", "Ford", "DAF", "MAN"],
    other: ["Agrale", "International", "Sinotruk"],
  },
];

const brandIcons: Partial<Record<string, IconType>> = {
  Audi: SiAudi,
  BMW: SiBmw,
  Chevrolet: SiChevrolet,
  Citroën: SiCitroen,
  DAF: SiDaf,
  Ducati: SiDucati,
  Fiat: SiFiat,
  Ford: SiFord,
  Honda: SiHonda,
  Husqvarna: SiHusqvarna,
  Hyundai: SiHyundai,
  Iveco: SiIveco,
  Jeep: SiJeep,
  Kia: SiKia,
  KTM: SiKtm,
  MAN: SiMan,
  Mazda: SiMazda,
  Mitsubishi: SiMitsubishi,
  Nissan: SiNissan,
  Peugeot: SiPeugeot,
  Renault: SiRenault,
  Scania: SiScania,
  Subaru: SiSubaru,
  Suzuki: SiSuzuki,
  Toyota: SiToyota,
  Volkswagen: SiVolkswagen,
  Volvo: SiVolvo,
  Yamaha: SiYamahamotorcorporation,
};

function FipePage() {
  const [activeCategory, setActiveCategory] = useState("carros");
  const [search, setSearch] = useState("");
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);
  const normalizedSearch = search.trim().normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase("pt-BR");

  const setCategory = (categoryId: string) => {
    setActiveCategory(categoryId);
    document.getElementById(`fipe-${categoryId}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const toggleOtherBrands = (categoryId: string) => {
    setExpandedCategories((current) =>
      current.includes(categoryId)
        ? current.filter((category) => category !== categoryId)
        : [...current, categoryId],
    );
  };

  const isBrandMatch = (brand: string) => {
    if (!normalizedSearch) return true;
    const localModels = vehicles
      .filter((vehicle) => vehicle.brand === brand)
      .map((vehicle) => `${vehicle.model} ${vehicle.version} ${vehicle.year}`);
    return [brand, ...localModels].some((value) =>
      value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase("pt-BR")
        .includes(normalizedSearch),
    );
  };

  return (
    <FipePageMain>
      <header className="fipe-header">
        <h1>TABELA FIPE</h1>
        <FipeTabs aria-label="Categorias da tabela FIPE">
          {fipeCategories.map((category) => (
            <button
              key={category.id}
              type="button"
              className={activeCategory === category.id ? "active" : ""}
              aria-pressed={activeCategory === category.id}
              onClick={() => setCategory(category.id)}
            >
              {category.label}
            </button>
          ))}
        </FipeTabs>
        <FipeSearch role="search" aria-label="Pesquisar marcas e modelos">
          <span aria-hidden="true">
            <Search size={19} aria-hidden="true" />
          </span>
          <input
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="PESQUISE POR MARCA OU MODELO"
            aria-label="Pesquise por marca ou modelo"
          />
        </FipeSearch>
      </header>

      <FipeCategories>
        {fipeCategories.map((category) => {
          const visibleBrands = [
            ...category.popular,
            ...(expandedCategories.includes(category.id) ? category.other : []),
          ].filter((brand) => brandIcons[brand] !== undefined && isBrandMatch(brand));
          const hasOtherBrands = category.other.some((brand) => brandIcons[brand] !== undefined);
          return (
            <FipeBrandSection id={`fipe-${category.id}`} key={category.id}>
              <h2>{category.title}</h2>
              <div className="brand-row">
                <FipeBrandGrid aria-label={category.title}>
                  {visibleBrands.map((brand) => {
                    const BrandIcon = brandIcons[brand];
                    return BrandIcon ? (
                      <button
                        type="button"
                        key={brand}
                        aria-label={`Pesquisar ${brand}`}
                        title={brand}
                        onClick={() => setSearch(brand)}
                      >
                        <BrandIcon className="brand-icon" color="white" aria-hidden="true" />
                      </button>
                    ) : null;
                  })}
                  {visibleBrands.length === 0 && (
                    <p className="empty-brands">Nenhuma marca ou modelo encontrado.</p>
                  )}
                </FipeBrandGrid>
                {hasOtherBrands && (
                  <button
                    type="button"
                    className="other-brands"
                    aria-expanded={expandedCategories.includes(category.id)}
                    onClick={() => toggleOtherBrands(category.id)}
                  >
                    {expandedCategories.includes(category.id) ? "Menos marcas" : "Outras marcas"}
                  </button>
                )}
              </div>
            </FipeBrandSection>
          );
        })}
      </FipeCategories>
      <p className="fipe-disclaimer">
        Demonstração visual: a busca não consulta a Tabela FIPE nem retorna valores.
      </p>
    </FipePageMain>
  );
}

function LocalContent({ path }: { path: string }) {
  if (path === "/agende-sua-visita") {
    return <DemoFormPage onSubmit={(event) => event.preventDefault()} />;
  }

  return (
    <PageSection>
      <DemoGrid>
        <DemoCard>
          <div className="icon"><Wrench size={20} aria-hidden="true" /></div>
          <h3>Informações de pós-venda</h3>
          <p>Não há solicitação de atendimento, consulta de serviço ou acompanhamento de protocolo nesta página demonstrativa.</p>
          <TextLink href={officialSite} target="_blank" rel="noreferrer">Acessar o canal oficial <ArrowUpRight size={16} aria-hidden="true" /></TextLink>
        </DemoCard>
        <DemoCard>
          <div className="icon"><CircleHelp size={20} aria-hidden="true" /></div>
          <h3>Sem integração de atendimento</h3>
          <p>Este protótipo não se conecta a sistemas, registros ou equipes de pós-venda.</p>
        </DemoCard>
      </DemoGrid>
    </PageSection>
  );
}

function StoresPage() {
  const regions = [
    { name: "Rio de Janeiro", stores: rioStores },
    { name: "São Paulo", stores: saoPauloStores },
    { name: "Flórida", stores: floridaStores },
  ];

  return (
    <StoresPageMain>
      <div className="stores-content">
        <p className="stores-note">Imagens ilustrativas. Confirme endereços e horários no site oficial.</p>
        {regions.map((region, index) => (
          <section className="store-region" key={region.name} aria-labelledby={`region-${index}`}>
            {index === 0
              ? <h1 id={`region-${index}`}>{region.name}</h1>
              : <h2 className="region-title" id={`region-${index}`}>{region.name}</h2>}
            <StoreGrid>
              {region.stores.map((store) => (
                <StoreCard className={"comingSoon" in store && store.comingSoon ? "coming-soon" : undefined} key={store.name}>
                  {"comingSoon" in store && store.comingSoon ? (
                    <div className="coming-soon-art" aria-label="Unidade em breve">
                      <strong>EM BREVE</strong>
                      <span>Lions Seminovos</span>
                    </div>
                  ) : (
                    <img
                      src={`https://images.unsplash.com/${store.image}?auto=format&fit=crop&w=900&q=80`}
                      alt={`Imagem ilustrativa de uma unidade ${store.name}`}
                      loading="lazy"
                    />
                  )}
                  <div className="store-details">
                    <h3>{store.name}</h3>
                    <p>{store.address}</p>
                  </div>
                </StoreCard>
              ))}
            </StoreGrid>
          </section>
        ))}
      </div>
    </StoresPageMain>
  );
}

export function LocalPage({ path }: { path: string }) {
  if (path === "/estoque") return <CatalogPage />;
  if (path === "/utilitarios") return <UtilitiesPage />;
  if (path === "/fipe") return <FipePage />;
  if (path === "/lojas") return <StoresPage />;
  if (path === "/financiamento") return <FinancingPage />;
  if (path === "/agende-sua-visita") return <AppointmentPage />;
  if (path === "/pos-venda") return <PostSalePage />;

  const page = pageDetails[path] ?? pageDetails["/estoque"];
  return (
    <PageMain>
      <PageHero>
        <div>
          <p className="eyebrow">Lions Seminovos</p>
          <h1>{page.title}</h1>
          <p className="summary">{page.summary}</p>
        </div>
      </PageHero>
      <PageBody>
        <LocalContent path={path} />
      </PageBody>
    </PageMain>
  );
}
