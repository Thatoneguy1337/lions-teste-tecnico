import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    font-family: "DM Sans", sans-serif;
    color: #181a15;
    background: #f5f5f0;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-optical-sizing: auto;
    scroll-behavior: smooth;
    --ink: #181a15;
    --dark: #11120f;
    --muted: #73766c;
    --lime: #c6f36b;
    --paper: #f5f5f0;
  }

  * { box-sizing: border-box; }
  body { min-width: 320px; margin: 0; }
  button, input, select, textarea { font: inherit; }
  button, a { -webkit-tap-highlight-color: transparent; }
  a { color: inherit; text-decoration: none; }
  button:focus-visible, a:focus-visible, input:focus-visible, select:focus-visible, textarea:focus-visible {
    outline: 3px solid #85b737;
    outline-offset: 3px;
  }
  ::selection { background: #c6f36b; color: #11120f; }

  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      scroll-behavior: auto !important;
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }
`;

export const Container = styled.div`
  width: min(100% - 80px, 1240px);
  margin: 0 auto;

  @media (max-width: 720px) {
    width: min(100% - 40px, 560px);
  }
`;

export const PageHeader = styled.header`
  position: absolute;
  z-index: 5;
  inset: 0 0 auto;
  color: #fff;
`;

export const MainNav = styled.nav`
  min-height: 88px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(255, 255, 255, 0.13);
`;

export const Logo = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  flex: 0 0 auto;
`;

export const LogoMark = styled.span`
  width: 39px;
  height: 39px;
  display: grid;
  place-items: center;
  overflow: hidden;
  border-radius: 12px;
  background: var(--lime);
  color: var(--dark);
  font-family: Manrope, sans-serif;
  font-size: 24px;
  font-weight: 800;
  letter-spacing: -.08em;
`;

export const LogoText = styled.span`
  display: grid;
  gap: 1px;
  line-height: 1;

  strong {
    font-family: Manrope, sans-serif;
    font-size: 19px;
    font-weight: 800;
    letter-spacing: 0.14em;
  }

  span {
    color: var(--lime);
    font-size: 9px;
    font-weight: 700;
    letter-spacing: 0.25em;
  }
`;

export const NavActions = styled.div`
  display: flex;
  align-items: center;
  gap: clamp(24px, 4vw, 55px);

  @media (max-width: 850px) {
    display: none;
  }
`;

export const NavLink = styled.a`
  color: rgba(255, 255, 255, 0.76);
  font-size: 13px;
  transition: color 160ms ease;

  &:hover { color: var(--lime); }
`;

export const BookButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 11px;
  padding: 12px 16px;
  border: 1px solid rgba(255, 255, 255, 0.24);
  border-radius: 3px;
  font-size: 12px;
  font-weight: 600;
  transition: background 160ms ease, color 160ms ease;

  &:hover { background: var(--lime); border-color: var(--lime); color: var(--dark); }

  @media (max-width: 850px) { display: none; }
`;

export const MenuButton = styled.button`
  display: none;
  color: #fff;
  background: transparent;
  border: 0;
  padding: 9px;
  cursor: pointer;

  @media (max-width: 850px) { display: grid; place-items: center; }
`;

export const MobileNav = styled.div`
  display: grid;
  gap: 2px;
  padding: 10px;
  border: 1px solid rgba(255,255,255,.1);
  background: #1b1d18;

  a { padding: 13px; font-size: 14px; }
  a:hover { color: var(--lime); }
`;

export const Hero = styled.section`
  min-height: 745px;
  position: relative;
  display: flex;
  align-items: center;
  overflow: hidden;
  isolation: isolate;
  color: #fff;
  background: #10110e;

  @media (max-width: 720px) {
    min-height: 780px;
    align-items: flex-start;
  }
`;

export const HeroVideoBackground = styled.div<{ $poster: string }>`
  position: absolute;
  z-index: -1;
  inset: 0;
  overflow: hidden;
  background: #10110e url("${({ $poster }) => $poster}") center 58% / cover no-repeat;

  &::after {
    position: absolute;
    inset: 0;
    content: "";
    background:
      linear-gradient(90deg, #11120f 2%, rgba(17, 18, 15, .91) 27%, rgba(17, 18, 15, .58) 55%, rgba(17, 18, 15, .18) 100%),
      linear-gradient(0deg, rgba(17, 18, 15, .73), transparent 42%);
    pointer-events: none;
  }

  video {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    opacity: .76;
  }

  video::-webkit-media-controls-panel { background-image: linear-gradient(transparent, rgba(0,0,0,.7)); }

  @media (max-width: 720px) {
    &::after {
      background:
        linear-gradient(90deg, rgba(17, 18, 15, .88), rgba(17, 18, 15, .43)),
        linear-gradient(0deg, #11120f 1%, transparent 58%);
    }
  }
`;

export const HeroContent = styled.div`
  width: min(100%, 620px);
  padding-top: 89px;
  padding-bottom: 24px;

  h1 {
    margin: 23px 0 18px;
    font-family: Manrope, sans-serif;
    font-size: clamp(52px, 6.6vw, 82px);
    font-weight: 600;
    letter-spacing: -0.075em;
    line-height: .99;
  }

  h1 em, em { color: var(--lime); font-style: normal; }

  > p {
    max-width: 420px;
    margin: 0;
    color: rgba(255, 255, 255, .67);
    font-size: 15px;
    line-height: 1.8;
  }

  @media (max-width: 720px) {
    padding-top: 165px;
    h1 { font-size: clamp(52px, 12vw, 72px); }
    > p { max-width: 360px; font-size: 14px; }
  }
`;

export const HeroKicker = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--lime);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: .13em;
  text-transform: uppercase;

  span { width: 24px; height: 1px; background: var(--lime); }
`;

export const HeroActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 23px;
  margin-top: 30px;
`;

export const ButtonLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  min-height: 50px;
  padding: 0 19px;
  background: var(--lime);
  color: var(--dark);
  font-size: 12px;
  font-weight: 700;
  transition: background 160ms ease, transform 160ms ease;

  &:hover { background: #d7ff8c; transform: translateY(-2px); }
`;

export const InlineLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 9px;
  color: rgba(255,255,255,.82);
  font-size: 12px;

  &:hover { color: var(--lime); }
`;

export const HeroStats = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 34px;
  margin-top: 58px;
  padding-top: 22px;
  border-top: 1px solid rgba(255, 255, 255, .17);

  @media (max-width: 720px) { gap: 20px; margin-top: 40px; }
`;

export const HeroStat = styled.div`
  display: grid;
  gap: 5px;
  strong { font-family: Manrope, sans-serif; font-size: 15px; font-weight: 700; }
  span { color: rgba(255,255,255,.52); font-size: 10px; }
`;

export const HeroImageLabel = styled.div`
  position: absolute;
  right: 0;
  bottom: 40px;
  display: flex;
  align-items: center;
  gap: 9px;
  color: rgba(255,255,255,.75);
  font-size: 11px;

  span { width: 7px; height: 7px; border-radius: 50%; background: var(--lime); }

  @media (max-width: 720px) { display: none; }
`;

export const FeatureStrip = styled.section`
  background: #e9ebdf;

  > div {
    min-height: 84px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 18px 30px;
  }

  @media (max-width: 720px) { padding: 18px 0; }
`;

export const CarouselSection = styled.section`
  overflow: hidden;
  padding: 75px 0 78px;
  background: #11120f;
  color: #fff;
  scroll-margin-top: 20px;

  @media (max-width: 720px) { padding: 54px 0 58px; }
`;

export const CarouselHeader = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 25px;
  margin-bottom: 27px;

  h2 {
    margin: 0;
    font-family: Manrope, sans-serif;
    font-size: clamp(32px, 4vw, 46px);
    font-weight: 600;
    letter-spacing: -.06em;
  }

  h2 em { color: var(--lime); font-style: normal; }
  p { max-width: 430px; margin: 10px 0 0; color: rgba(255,255,255,.55); font-size: 12px; line-height: 1.7; }
  > div > span { color: var(--lime); }

  @media (max-width: 580px) {
    align-items: flex-end;
    h2 { font-size: clamp(29px, 8vw, 36px); }
  }
`;

export const CarouselControls = styled.div`
  display: flex;
  flex: 0 0 auto;
  gap: 9px;
`;

export const CarouselButton = styled.button`
  width: 43px;
  height: 43px;
  display: grid;
  place-items: center;
  border: 1px solid rgba(255,255,255,.3);
  background: transparent;
  color: #fff;
  cursor: pointer;
  transition: background 150ms ease, color 150ms ease, border-color 150ms ease;
  &:hover { border-color: var(--lime); background: var(--lime); color: var(--dark); }
  &:focus-visible { outline-color: var(--lime); }
  @media (max-width: 580px) { width: 37px; height: 37px; }
`;

export const CarouselViewport = styled.div`
  overflow-x: auto;
  overscroll-behavior-inline: contain;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
  scrollbar-width: thin;
  scrollbar-color: #66734d #252720;

  &::-webkit-scrollbar { height: 5px; }
  &::-webkit-scrollbar-track { background: #252720; }
  &::-webkit-scrollbar-thumb { background: #66734d; }

  &:focus-visible { outline-color: var(--lime); }
`;

export const CarouselTrack = styled.div`
  display: flex;
  align-items: stretch;
  gap: 18px;
  width: max-content;
  padding: 0 0 17px;

  > div {
    width: clamp(275px, 29vw, 360px);
    scroll-snap-align: start;
  }

  > div > article { height: 100%; }

  @media (max-width: 580px) {
    gap: 12px;
    > div { width: min(82vw, 340px); }
  }
`;

export const CheckLine = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: #41443a;
  font-size: 12px;
  font-weight: 600;
  svg { color: #778a4e; }
`;

export const CatalogSection = styled.section`
  padding: 112px 0 96px;
  background: var(--paper);
  scroll-margin-top: 24px;

  @media (max-width: 720px) { padding: 74px 0 65px; }
`;

export const CatalogHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 40px;
  margin-bottom: 43px;

  > p {
    width: 270px;
    margin: 0 0 6px;
    color: var(--muted);
    font-size: 13px;
    line-height: 1.8;
  }

  @media (max-width: 720px) {
    display: block;
    margin-bottom: 30px;
    > p { width: auto; margin-top: 18px; }
  }
`;

export const SectionIntro = styled.div``;

export const SectionEyebrow = styled.span`
  display: block;
  margin-bottom: 15px;
  color: #718748;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: .15em;
  text-transform: uppercase;
`;

export const SectionTitle = styled.h2`
  margin: 0;
  font-family: Manrope, sans-serif;
  font-size: clamp(36px, 5vw, 56px);
  font-weight: 600;
  letter-spacing: -.065em;
  line-height: 1.08;
  em { color: #858b79; font-style: normal; }
`;

export const FilterRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  margin-bottom: 27px;

  .categories { display: flex; flex-wrap: wrap; gap: 8px; }
  .search {
    width: 238px;
    display: flex;
    align-items: center;
    gap: 9px;
    padding: 0 12px;
    border-bottom: 1px solid #d5d7ce;
    color: #73766c;
  }
  .search input {
    width: 100%;
    padding: 11px 0;
    border: 0;
    outline: 0;
    background: transparent;
    color: var(--ink);
    font-size: 11px;
  }
  .search input:focus-visible { outline: 0; }

  @media (max-width: 720px) {
    align-items: stretch;
    flex-direction: column-reverse;
    .search { width: 100%; }
  }
`;

export const CategoryChip = styled.button<{ $active: boolean }>`
  min-height: 35px;
  padding: 0 14px;
  border: 1px solid ${({ $active }) => ($active ? "var(--dark)" : "#dedfd7")};
  border-radius: 99px;
  background: ${({ $active }) => ($active ? "var(--dark)" : "transparent")};
  color: ${({ $active }) => ($active ? "#fff" : "#6e7168")};
  cursor: pointer;
  font-size: 11px;
  transition: background 140ms ease, color 140ms ease;
  &:hover { border-color: var(--dark); color: ${({ $active }) => ($active ? "#fff" : "var(--dark)")}; }
`;

export const VehicleGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;

  @media (max-width: 900px) { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  @media (max-width: 580px) { grid-template-columns: 1fr; gap: 13px; }
`;

export const VehicleCard = styled.article`
  overflow: hidden;
  background: #fff;
  border: 1px solid #e8e9e2;
  transition: box-shadow 180ms ease, transform 180ms ease;
  &:hover { box-shadow: 0 16px 35px rgba(38,42,29,.09); transform: translateY(-3px); }
`;

export const CardImage = styled.div`
  height: 205px;
  position: relative;
  overflow: hidden;
  background: #e5e6e1;
  > img { width: 100%; height: 100%; display: block; object-fit: cover; transition: transform 350ms ease; }
  ${VehicleCard}:hover & > img { transform: scale(1.035); }
  .category {
    position: absolute;
    right: 12px;
    bottom: 12px;
    padding: 6px 9px;
    background: rgba(255,255,255,.91);
    color: #363930;
    font-size: 9px;
    font-weight: 600;
  }
`;

export const Badge = styled.span`
  position: absolute;
  top: 13px;
  left: 13px;
  padding: 7px 9px;
  background: var(--lime);
  color: #22261c;
  font-size: 9px;
  font-weight: 700;
`;

export const VehicleInfo = styled.div`
  padding: 18px 18px 16px;
  .year { color: #777a71; font-size: 10px; }
  .version { margin: 4px 0 0; color: #777a71; font-size: 11px; }
  .price-row { display: flex; align-items: flex-end; justify-content: space-between; margin-top: 17px; }
  .price-row small { display: block; margin-bottom: 3px; color: #777a71; font-size: 9px; }
  .price-row > a {
    width: 34px;
    height: 34px;
    display: grid;
    place-items: center;
    border: 1px solid #e2e4dc;
    transition: background 150ms ease;
  }
  .price-row > a:hover { background: var(--lime); border-color: var(--lime); }
`;

export const VehicleTitle = styled.h3`
  margin: 6px 0 0;
  font-family: Manrope, sans-serif;
  font-size: 17px;
  font-weight: 700;
  letter-spacing: -.04em;
`;

export const CardMeta = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 15px;
  padding-bottom: 14px;
  border-bottom: 1px solid #eeefe9;
  color: #64675e;
  font-size: 10px;
  span { display: inline-flex; align-items: center; gap: 6px; }
  svg { color: #858b79; }
`;

export const Price = styled.strong`
  font-family: Manrope, sans-serif;
  font-size: 19px;
  letter-spacing: -.045em;
`;

export const EmptyState = styled.div`
  padding: 42px 24px;
  border: 1px solid #e3e5dc;
  color: #5e6256;
  text-align: center;
  font-size: 13px;
  line-height: 1.6;
`;

export const CatalogFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  margin-top: 27px;
  color: #777a71;
  font-size: 11px;
  a { display: inline-flex; align-items: center; gap: 8px; color: #393c33; font-weight: 600; }
  a:hover { color: #778a4e; }

  @media (max-width: 580px) { align-items: flex-start; flex-direction: column; }
`;

export const AboutSection = styled.section`
  padding: 105px 0;
  background: #e9ebdf;
  > div { display: grid; grid-template-columns: 1.02fr .98fr; align-items: center; gap: clamp(45px, 8vw, 105px); }

  @media (max-width: 760px) {
    padding: 70px 0;
    > div { grid-template-columns: 1fr; gap: 38px; }
  }
`;

export const AboutImage = styled.div`
  position: relative;
  height: 525px;
  background: #d1d3c8;
  img { width: 100%; height: 100%; display: block; object-fit: cover; }
  .image-note {
    position: absolute;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 16px 19px;
    background: var(--lime);
    color: #20231a;
    font-family: Manrope, sans-serif;
    font-size: 13px;
    font-weight: 700;
  }
  .image-note span { font-size: 9px; font-weight: 600; letter-spacing: .1em; }

  @media (max-width: 760px) { height: min(440px, 100vw); }
`;

export const AboutCopy = styled.div`
  > p { max-width: 450px; margin: 21px 0 26px; color: #686b62; font-size: 13px; line-height: 1.9; }
  .official-link {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    margin-top: 29px;
    padding-bottom: 7px;
    border-bottom: 1px solid #aeb39f;
    font-size: 12px;
    font-weight: 700;
  }
  .official-link:hover { border-color: #667841; color: #667841; }
`;

export const SectionHeading = styled.h2`
  max-width: 560px;
  margin: 0;
  font-family: Manrope, sans-serif;
  font-size: clamp(35px, 4.5vw, 52px);
  font-weight: 600;
  letter-spacing: -.065em;
  line-height: 1.11;
  em { color: #858b79; font-style: normal; }
`;

export const TrustGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 23px;
`;

export const TrustItem = styled.div`
  display: grid;
  gap: 8px;
  padding-top: 15px;
  border-top: 1px solid #cdd0c2;
  span { color: #87956b; font-size: 9px; font-weight: 700; letter-spacing: .1em; }
  strong { font-size: 12px; }
  small { color: #777a71; font-size: 10px; line-height: 1.6; }
`;

export const AppointmentSection = styled.section`
  padding: 110px 0;
  background: var(--dark);
  color: #fff;
  scroll-margin-top: 0;

  @media (max-width: 720px) { padding: 72px 0; }
`;

export const AppointmentGrid = styled.div`
  display: grid;
  grid-template-columns: .85fr 1.15fr;
  align-items: start;
  gap: clamp(44px, 9vw, 125px);

  .appointment-copy { padding-top: 38px; }
  .appointment-copy > p { max-width: 390px; margin: 20px 0 37px; color: rgba(255,255,255,.56); font-size: 13px; line-height: 1.9; }
  .appointment-copy ${SectionHeading} { font-size: clamp(38px, 4.6vw, 56px); }
  @media (max-width: 820px) { grid-template-columns: 1fr; gap: 39px; .appointment-copy { padding-top: 0; } }
`;

export const ServiceNote = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  margin: 19px 0;
  .icon { width: 42px; height: 42px; display: grid; place-items: center; flex: 0 0 auto; border: 1px solid rgba(255,255,255,.13); color: var(--lime); }
  strong, span { display: block; }
  strong { margin-bottom: 4px; font-size: 12px; }
  span { color: rgba(255,255,255,.5); font-size: 10px; }
`;

export const AppointmentCard = styled.div`
  padding: clamp(22px, 4vw, 39px);
  background: #f5f5f0;
  color: var(--ink);
  .form-heading > span { color: #718748; font-size: 9px; font-weight: 700; letter-spacing: .16em; text-transform: uppercase; }
  .form-heading h3 { margin: 9px 0 5px; font-family: Manrope, sans-serif; font-size: 27px; letter-spacing: -.05em; }
  .form-heading p { margin: 0 0 23px; color: #777a71; font-size: 11px; }
`;

export const Form = styled.form`
  .privacy { margin: 12px 0 0; color: #898c82; font-size: 9px; line-height: 1.6; }
  .privacy a { color: #4a6031; font-weight: 700; text-decoration: underline; text-underline-offset: 2px; }
`;

export const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px 13px;
  @media (max-width: 500px) { grid-template-columns: 1fr; }
`;

export const FormField = styled.div<{ $full?: boolean }>`
  min-width: 0;
  ${({ $full }) => $full && "grid-column: 1 / -1;"}

  @media (max-width: 500px) { grid-column: auto; }
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 7px;
  color: #4a4d44;
  font-size: 10px;
  font-weight: 600;
  span { margin-left: 4px; color: #96998f; font-size: 9px; font-weight: 400; }
`;

export const TextInput = styled.input`
  width: 100%;
  min-height: 43px;
  padding: 0 12px;
  border: 1px solid #dfe1d7;
  border-radius: 0;
  background: #fff;
  color: var(--ink);
  font-size: 11px;
  &::placeholder { color: #a4a69e; }
`;

export const SelectWrap = styled.div`
  position: relative;
  svg { position: absolute; top: 13px; right: 11px; pointer-events: none; color: #7e8178; }
`;

export const TextSelect = styled.select`
  width: 100%;
  min-height: 43px;
  padding: 0 34px 0 12px;
  border: 1px solid #dfe1d7;
  border-radius: 0;
  appearance: none;
  background: #fff;
  color: #44473e;
  font-size: 11px;
`;

export const Textarea = styled.textarea`
  width: 100%;
  min-height: 72px;
  padding: 11px 12px;
  border: 1px solid #dfe1d7;
  border-radius: 0;
  resize: vertical;
  background: #fff;
  color: var(--ink);
  font-size: 11px;
  &::placeholder { color: #a4a69e; }
`;

export const SubmitButton = styled.button`
  width: 100%;
  min-height: 47px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 18px;
  padding: 0 15px;
  border: 0;
  background: var(--lime);
  color: #22261c;
  cursor: pointer;
  font-size: 11px;
  font-weight: 700;
  transition: background 150ms ease;
  &:hover:not(:disabled) { background: #d6ff8c; }
  &:disabled { cursor: wait; opacity: .75; }
`;

export const FormSuccess = styled.p`
  display: flex;
  align-items: center;
  gap: 7px;
  margin: 12px 0 0;
  color: #426322;
  font-size: 11px;
`;

export const Footer = styled.footer`
  padding: 49px 0 22px;
  background: #0c0d0b;
  color: #fff;
  .footer-main { display: flex; align-items: flex-start; justify-content: space-between; gap: 30px; padding-bottom: 39px; }
  .footer-brand p { max-width: 210px; margin: 14px 0 0; color: rgba(255,255,255,.46); font-size: 11px; line-height: 1.7; }
  .back-top { display: inline-flex; align-items: center; gap: 7px; color: rgba(255,255,255,.65); font-size: 10px; }
  .back-top:hover { color: var(--lime); }
  @media (max-width: 720px) {
    .footer-main { flex-wrap: wrap; }
    .back-top { width: 100%; }
  }
`;

export const FooterLinks = styled.nav`
  display: flex;
  flex-wrap: wrap;
  gap: 13px 22px;
  padding-top: 12px;
  a { display: inline-flex; align-items: center; gap: 4px; color: rgba(255,255,255,.62); font-size: 10px; }
  a:hover { color: var(--lime); }
  @media (max-width: 720px) { order: 1; width: 100%; }
`;

export const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  padding-top: 17px;
  border-top: 1px solid rgba(255,255,255,.11);
  color: rgba(255,255,255,.38);
  font-size: 9px;
  @media (max-width: 580px) { flex-direction: column; gap: 8px; }
`;
