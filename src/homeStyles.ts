import styled, { createGlobalStyle } from "styled-components";

export const HomeGlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=Anton&family=Montserrat:wght@400;500;600;700;800;900&display=swap");

  :root {
    font-family: Montserrat, Arial, sans-serif;
    color: #141414;
    background: #fff;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    --lions-red: #c6f36b;
    --lions-dark: #11120f;
    --lions-yellow: #c6f36b;
  }

  * { box-sizing: border-box; }
  html { min-height: 100%; scroll-behavior: smooth; background: #11120f; }
  body { min-width: 320px; min-height: 100vh; margin: 0; overflow-x: clip; background: #11120f; }
  #root { min-height: 100vh; display: flex; flex-direction: column; }
  #root > main { flex: 1 0 auto; }
  img, video { max-width: 100%; }
  button, input, select { font: inherit; }
  button, a { -webkit-tap-highlight-color: transparent; }
  a { color: inherit; text-decoration: none; }
  button:focus-visible, a:focus-visible, input:focus-visible, select:focus-visible {
    outline: 3px solid #c6f36b;
    outline-offset: 3px;
  }
  ::selection { background: #c6f36b; color: #11120f; }

  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      scroll-behavior: auto !important;
      animation-duration: .01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: .01ms !important;
    }
  }
`;

export const Shell = styled.div`
  width: min(100% - 32px, 560px);
  margin: 0 auto;
  @media (min-width: 701px) { width: min(100% - 48px, 1240px); }
`;

export const SiteHeader = styled.header<{ $scrolled: boolean; $menuOpen?: boolean }>`
  position: sticky;
  top: 0;
  z-index: ${({ $menuOpen }) => ($menuOpen ? 20 : 8)};
  color: #fff;
  background: #11120f;
  transition: background .2s ease;
  @media (min-width: 701px) {
    margin-bottom: -67px;
    background: ${({ $scrolled }) =>
      $scrolled ? "#11120f" : "linear-gradient(180deg, rgba(17,18,15,.57), transparent)"};
  }
`;

export const HeaderRow = styled.nav`
  width: calc(100% - 32px);
  min-height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  margin: auto;

  @media (min-width: 701px) {
    width: min(100% - 48px, 1210px);
    min-height: 67px;
  }
`;

export const Brand = styled.a`
  flex: 0 0 auto;
  display: inline-flex;
  align-items: center;
  line-height: 0;
  img {
    display: block;
    width: 72px;
    height: 22px;
  }
`;

export const MainLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: clamp(13px, 2vw, 29px);
  margin-left: auto;

  a {
    white-space: nowrap;
    font-size: 12px;
    font-weight: 700;
    text-shadow: 0 1px 4px rgba(0,0,0,.5);
    transition: color .18s ease;
  }
  a:hover { color: var(--lions-yellow); }

  display: none;
  @media (min-width: 1100px) { display: flex; }
`;

export const SocialLinks = styled.div`
  display: none;
  flex: 0 0 auto;
  align-items: center;
  gap: 9px;
  a {
    width: 28px;
    height: 28px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: #fff;
    color: #111;
    font-size: 17px;
    font-weight: 800;
  }
  @media (min-width: 701px) { display: flex; }
`;

export const HeaderMenuButton = styled.button`
  display: grid;
  place-items: center;
  min-width: 44px;
  min-height: 44px;
  padding: 8px;
  border: 0;
  background: rgba(0,0,0,.32);
  color: #fff;
  cursor: pointer;
  @media (min-width: 1100px) { display: none; }
`;

export const CompactMenu = styled.div<{ $open: boolean }>`
  display: block;
  padding: 7px 16px 14px;
  background: #11120f;
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  visibility: ${({ $open }) => ($open ? "visible" : "hidden")};
  pointer-events: ${({ $open }) => ($open ? "auto" : "none")};
  transition: opacity .25s ease, transform .25s ease, visibility .25s;

  .menu-head { display: none; }
  nav a {
    display: block;
    padding: 13px 0;
    color: #fff;
    font-size: 14px;
    font-weight: 600;
  }

  @media (max-width: 700px) {
    position: fixed;
    z-index: 21;
    inset: 20px 20px 0;
    overflow-y: auto;
    padding: 16px 0 24px;
    box-shadow: 0 0 0 100vmax #11120f;
    transform: ${({ $open }) => ($open ? "translateY(0) scale(1)" : "translateY(-12px) scale(.98)")};
    transition: opacity .25s ease, transform .25s ease, visibility .25s;

    .menu-head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 16px 14px;
    }
    .menu-head > a img { width: 72px; height: 22px; }
    .menu-close {
      width: 30px;
      height: 30px;
      display: grid;
      place-items: center;
      padding: 0;
      border: 1px solid #c6f36b;
      border-radius: 4px;
      background: transparent;
      color: #fff;
      cursor: pointer;
    }
    nav a {
      padding: 13px 8px;
      border-bottom: 1px solid #373737;
      text-align: center;
      font-size: 16px;
      font-weight: 500;
    }
    & .menu-social {
      display: flex;
      justify-content: center;
      margin-top: 16px;
    }
  }

  @media (min-width: 701px) and (max-width: 1099px) {
    position: absolute;
    top: 100%;
    right: 0;
    left: 0;
  }

  @media (min-width: 1100px) { display: none; }
`;

export const Hero = styled.section`
  position: relative;
  isolation: isolate;
  overflow: hidden;
  height: auto;
  min-height: 0;
  padding-bottom: 24px;
  background: #f5f5f5;
  color: #111;

  @media (min-width: 701px) {
    height: min(790px, max(650px, 100svh));
    min-height: 650px;
    padding-bottom: 0;
    background: #25231e;
    color: #fff;
  }
`;

export const HeroPhoto = styled.div<{ $image: string }>`
  position: absolute;
  z-index: -1;
  inset: 0;
  height: 505px;
  overflow: hidden;
  background: linear-gradient(90deg, rgba(0,0,0,.18), transparent 58%, rgba(0,0,0,.1));

  &::before {
    position: absolute;
    inset: 0;
    content: "";
    background: #3a3831 url("${({ $image }) => $image}") center 53% / cover no-repeat;
    animation: hero-zoom 8s ease-out both;
  }
  @keyframes hero-zoom { from { transform: scale(1.035); } to { transform: scale(1); } }

  &::after {
    position: absolute;
    inset: 0;
    content: "";
    background: linear-gradient(90deg, rgba(0,0,0,.08), transparent 58%, rgba(0,0,0,.1));
    pointer-events: none;
  }
  &::before { background-position: center; }
  &::after { background: linear-gradient(180deg, rgba(0,0,0,.3), transparent 65%); }
  @media (min-width: 701px) {
    height: 100%;
    &::after { background: linear-gradient(90deg, rgba(0,0,0,.08), transparent 58%, rgba(0,0,0,.1)); }
  }
`;

export const HeroLayout = styled(Shell)`
  min-height: 0;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 0;
  padding-top: 348px;
  padding-bottom: 0;

  @media (min-width: 701px) {
    min-height: 100%;
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    align-items: center;
    gap: clamp(20px, 3vw, 44px);
    padding-top: 68px;
    padding-bottom: 62px;
  }
  @media (min-width: 901px) {
    grid-template-columns: minmax(0, 1fr) minmax(330px, 38%);
  }
`;

export const LeadCard = styled.form<{ $open: boolean }>`
  position: fixed;
  z-index: 10;
  top: 50%;
  left: 5px;
  width: min(320px, calc(100vw - 10px));
  max-height: calc(100dvh - 16px);
  overflow-y: auto;
  transform: ${({ $open }) => ($open ? "translate(0, -50%)" : "translate(calc(-100% - 12px), -50%)")};
  transition: transform .3s ease;
  padding: 58px 16px 15px;
  border-radius: 0 16px 16px 0;
  background: var(--lions-red);
  box-shadow: 0 8px 26px rgba(0,0,0,.2);
  color: var(--lions-dark);

  .drawer-close {
    position: absolute;
    top: 9px;
    right: 9px;
    width: 44px;
    min-height: 44px;
    margin: 0;
    padding: 0;
    border-radius: 50%;
    background: #fff;
    color: #171717;
    cursor: pointer;
  }

  h2 {
    margin: 3px 0 13px;
    text-align: center;
    font-size: 24px;
    font-weight: 900;
    line-height: 1.05;
    text-transform: uppercase;
  }
  h2 strong { display: block; color: var(--lions-dark); }
  .demo-label {
    margin: -4px 3px 8px;
    color: rgba(17,18,15,.82);
    font-size: 10px;
    line-height: 1.45;
    text-align: center;
  }
  .lead-cars {
    height: 100px;
    display: grid;
    place-items: center;
    margin: 0 0 7px;
    color: var(--lions-dark);
    font-family: Anton, Impact, sans-serif;
    font-size: 29px;
    letter-spacing: .03em;
  }
  .lead-cars span { font-size: 18px; font-family: Montserrat, sans-serif; font-weight: 800; }
  .fields { display: grid; gap: 6px; }
  input, select {
    width: 100%;
    min-height: 44px;
    padding: 0 12px;
    border: 0;
    border-radius: 3px;
    background: rgba(255,255,255,.93);
    color: #333;
    font-size: 14px;
  }
  input::placeholder { color: #626262; }
  button {
    width: 58%;
    min-height: 44px;
    display: block;
    margin: 8px auto 0;
    border: 0;
    border-radius: 3px;
    background: var(--lions-yellow);
    color: #16120a;
    cursor: pointer;
    font-size: 12px;
    font-weight: 900;
    letter-spacing: .04em;
    text-transform: uppercase;
  }
  button:hover { background: #b2df5d; }
  .notice { margin: 8px 3px 0; font-size: 9px; line-height: 1.45; }
  .notice a { text-decoration: underline; font-weight: 700; }

  @media (max-width: 700px) {
    z-index: 12;
    top: 50%;
    left: 50%;
    width: min(400px, calc(100vw - 32px));
    max-height: calc(100dvh - 16px);
    padding: 48px 16px 18px;
    border-radius: 16px;
    transform: ${({ $open }) => ($open ? "translate(-50%, -50%)" : "translate(-50%, calc(-50% - 24px))")};
    opacity: ${({ $open }) => ($open ? 1 : 0)};
    visibility: ${({ $open }) => ($open ? "visible" : "hidden")};
    pointer-events: ${({ $open }) => ($open ? "auto" : "none")};
    box-shadow: 0 7px 25px rgba(0,0,0,.18);
  }
`;

export const DrawerBackdrop = styled.button`
  display: none;

  @media (max-width: 700px) {
    position: fixed;
    z-index: 11;
    inset: 0;
    display: block;
    width: 100%;
    height: 100%;
    padding: 0;
    border: 0;
    background: rgba(0,0,0,.68);
    cursor: default;
  }
`;

export const HeroCopy = styled.div`
  max-width: 440px;
  align-self: center;
  text-shadow: 0 2px 12px rgba(0,0,0,.58);
  .eyebrow { margin: 0 0 12px; font-size: 11px; font-weight: 800; letter-spacing: .14em; text-transform: uppercase; }
  h1 {
    margin: 0;
    font-family: Anton, Impact, sans-serif;
    font-size: clamp(40px, 5vw, 68px);
    font-weight: 400;
    line-height: .96;
    text-transform: uppercase;
  }
  p { max-width: 350px; margin: 15px 0 0; font-size: 13px; font-weight: 600; line-height: 1.55; }
  a {
    display: inline-flex;
    align-items: center;
    gap: 9px;
    margin-top: 18px;
    padding: 11px 16px;
    background: var(--lions-red);
    font-size: 11px;
    font-weight: 800;
    text-transform: uppercase;
    text-shadow: none;
  }
  display: none;
  @media (min-width: 901px) { display: block; }
`;

export const CampaignPanel = styled.div`
  min-height: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 12px;
  margin: 0;
  border-radius: 0 0 8px 8px;
  background: rgba(255,255,255,.82);
  color: #171717;
  text-align: center;

  .small { margin: 0 0 4px; font-size: 15px; font-weight: 700; letter-spacing: .24em; text-transform: uppercase; }
  h2 {
    margin: 0;
    color: #e5380c;
    font-family: Anton, Impact, sans-serif;
    font-size: clamp(51px, 6vw, 88px);
    font-weight: 400;
    line-height: .92;
    text-transform: uppercase;
  }
  .details { margin: 17px 0 0; font-size: 12px; font-weight: 700; line-height: 1.5; }
  .tags { display: flex; flex-wrap: wrap; justify-content: center; gap: 7px; margin-top: 17px; }
  .tags span { padding: 8px 10px; border-radius: 20px; background: #c6f36b; color: #11120f; font-size: 9px; font-weight: 900; }
  .tags span:nth-child(2) { background: #c6f36b; color: #11120f; }
  .disclaimer { margin: 15px 0 0; font-size: 10px; letter-spacing: .05em; }
  .small { font-size: 11px; }
  h2 { font-size: clamp(44px, 14vw, 68px); }
  .details { margin-top: 10px; }
  @media (min-width: 701px) {
    min-height: 330px;
    padding: 26px clamp(18px, 2vw, 35px);
    border-radius: 0;
    .small { font-size: 15px; }
    h2 { font-size: clamp(51px, 6vw, 88px); }
    .details { margin-top: 17px; }
  }
  @media (min-width: 901px) {
    min-height: 410px;
    margin-top: -68px;
    margin-bottom: -62px;
  }
`;

export const HeroArrow = styled.button<{ $side: "left" | "right" }>`
  position: absolute;
  z-index: 4;
  top: 165px;
  ${({ $side }) => $side}: 18px;
  width: 44px;
  height: 44px;
  display: grid;
  place-items: center;
  transform: translateY(-50%);
  border: 0;
  border-radius: 4px;
  background: rgba(0,0,0,.27);
  color: #fff;
  cursor: pointer;
  &:hover { background: var(--lions-red); color: var(--lions-dark); }
  @media (min-width: 701px) {
    top: 50%;
    width: 44px;
    height: 44px;
  }
`;

export const HeroDots = styled.div`
  position: absolute;
  z-index: 4;
  right: 0;
  bottom: 12px;
  left: 0;
  display: flex;
  justify-content: center;
  gap: 9px;
  button {
    width: 44px;
    height: 44px;
    padding: 0;
    border: 0;
    display: grid;
    place-items: center;
    background: transparent;
    cursor: pointer;
  }
  button::before {
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: rgba(255,255,255,.8);
    content: "";
  }
  button[aria-current="true"]::before { background: var(--lions-red); }
  @media (min-width: 701px) { bottom: 17px; }
`;

export const CategorySection = styled.section`
  padding: 10px 12px 32px;
  background: #11120f;
  color: #fff;
  @media (min-width: 701px) { padding-bottom: 54px; }
`;

export const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-auto-rows: 180px;
  gap: 8px;
  .category-card:last-child { grid-column: 1 / -1; }
  @media (min-width: 701px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    grid-template-rows: repeat(2, minmax(230px, 19vw));
    .utility { grid-row: auto; }
    .sedan { grid-column: 3; grid-row: 1 / 3; }
    .category-card:last-child { grid-column: auto; }
  }
`;

export const CategoryCard = styled.a<{ $image: string }>`
  position: relative;
  min-width: 0;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  overflow: hidden;
  background: #333;
  isolation: isolate;
  text-align: center;
  &::before {
    position: absolute;
    z-index: -1;
    inset: 0;
    content: "";
    background: url("${({ $image }) => $image}") center / cover no-repeat;
    transition: transform .35s ease;
  }
  &::after {
    position: absolute;
    z-index: 0;
    inset: 25% 0 0;
    content: "";
    background: linear-gradient(transparent, rgba(0,0,0,.9));
    pointer-events: none;
  }
  &:hover::before { transform: scale(1.05); }
  .content { position: relative; z-index: 1; padding: 20px; }
  h3 { margin: 0 0 13px; font-size: clamp(17px, 2vw, 24px); font-weight: 800; }
  span {
    min-width: 122px;
    min-height: 40px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 9px 16px;
    border: 1px solid #fff;
    color: #fff;
    font-size: 12px;
    font-weight: 800;
  }
  &:hover span { background: var(--lions-red); border-color: var(--lions-red); }
`;

export const Section = styled.section`
  padding: 0;
  background: #11120f;
  scroll-margin-top: 20px;
`;

export const SectionHeading = styled.div`
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 22px;
  .eyebrow { margin: 0 0 7px; color: var(--lions-red); font-size: 10px; font-weight: 800; letter-spacing: .14em; text-transform: uppercase; }
  h2 { margin: 0; font-size: clamp(25px, 4vw, 37px); font-weight: 800; letter-spacing: -.05em; }
  p { max-width: 350px; margin: 0; color: #686868; font-size: 11px; line-height: 1.6; }
  @media (max-width: 600px) { align-items: flex-start; flex-direction: column; }
`;

export const MockVehicleSection = styled.section`
  padding: 38px 0 42px;
  background: #11120f;
  color: #fff;

  .catalog-link {
    width: fit-content;
    min-height: 42px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 9px;
    margin: 26px auto 0;
    padding: 0 18px;
    border: 1px solid rgba(255,255,255,.65);
    color: #fff;
    font-size: 12px;
    font-weight: 800;
    transition: background .2s ease, border-color .2s ease;
  }

  .catalog-link:hover {
    border-color: var(--lions-red);
    background: var(--lions-red);
  }

  @media (min-width: 701px) {
    padding: 48px 0 56px;
  }

  @media (max-width: 520px) {
    padding: 30px 0 36px;
  }
`;

export const Filters = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  margin-bottom: 22px;
  .chips { display: flex; flex-wrap: wrap; gap: 7px; }
  input {
    width: 215px;
    height: 38px;
    padding: 0 12px;
    border: 1px solid #ddd;
    background: #fff;
    font-size: 11px;
  }
  @media (max-width: 600px) {
    align-items: stretch;
    flex-direction: column-reverse;
    input { width: 100%; }
  }
`;

export const FilterButton = styled.button<{ $active: boolean }>`
  min-height: 34px;
  padding: 0 13px;
  border: 1px solid ${({ $active }) => ($active ? "var(--lions-red)" : "#d3d3d3")};
  background: ${({ $active }) => ($active ? "var(--lions-red)" : "#fff")};
  color: ${({ $active }) => ($active ? "var(--lions-dark)" : "#333")};
  cursor: pointer;
  font-size: 10px;
  font-weight: 700;
`;

export const CarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0,1fr));
  gap: 14px;
  @media (max-width: 820px) { grid-template-columns: repeat(2,minmax(0,1fr)); }
  @media (max-width: 520px) { grid-template-columns: 1fr; }
`;

export const VitrineVideo = styled.div`
  overflow: hidden;
  width: 100%;
  background: #11120f;

  video {
    width: 100%;
    display: block;
    aspect-ratio: 16 / 9;
    background: #11120f;
    object-fit: cover;
    @media (max-width: 700px) {
      height: auto;
      max-height: calc(100svh - 60px);
      aspect-ratio: 9 / 16;
    }
  }

  p {
    margin: 0;
    padding: 12px 16px;
    color: #fff;
    font-size: 13px;
    text-align: center;
  }
`;

export const CarCard = styled.article`
  overflow: hidden;
  border: 1px solid #e6e6e6;
  background: #fff;
  transition: box-shadow .18s ease, transform .18s ease;
  &:hover { transform: translateY(-3px); box-shadow: 0 10px 25px rgba(0,0,0,.11); }
  .photo { height: 190px; position: relative; background: #e7e7e7; }
  .photo img { width: 100%; height: 100%; display: block; object-fit: cover; }
  .tag { position: absolute; top: 10px; left: 10px; padding: 6px 8px; background: var(--lions-red); color: var(--lions-dark); font-size: 9px; font-weight: 800; text-transform: uppercase; }
  .body { padding: 15px; }
  .meta { display: flex; justify-content: space-between; gap: 8px; color: #666; font-size: 10px; }
  h3 { margin: 8px 0 3px; font-size: 17px; }
  .version { margin: 0; color: #626262; font-size: 11px; }
  .price { margin-top: 15px; padding-top: 12px; border-top: 1px solid #eee; font-size: 19px; font-weight: 800; }
  .price small { display: block; margin-bottom: 4px; color: #777; font-size: 9px; font-weight: 500; }
`;

export const Financing = styled.section<{ $image: string }>`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  align-items: center;
  gap: 25px;
  padding: 40px 16px;
  background:
    linear-gradient(90deg, rgba(0,0,0,.64), rgba(0,0,0,.08)),
    url("${({ $image }) => $image}") center 44% / cover no-repeat;
  color: #fff;
  .copy { max-width: 520px; }
  .copy > span { font-size: 11px; font-weight: 800; letter-spacing: .12em; text-transform: uppercase; }
  h2 { margin: 12px 0 0; font-size: clamp(32px, 9vw, 42px); font-weight: 800; line-height: 1.06; }
  p { margin: 12px 0 0; font-size: 14px; line-height: 1.65; }
  @media (min-width: 701px) {
    min-height: 450px;
    padding: 55px max(24px, calc((100vw - 1200px) / 2));
    h2 { font-size: clamp(33px, 5vw, 54px); }
  }
  @media (min-width: 901px) {
    grid-template-columns: minmax(0, 1fr) 315px;
    gap: 42px;
  }
`;

export const FinanceCard = styled.form`
  padding: 23px;
  border-radius: 12px;
  background: #fff;
  color: #141414;
  box-shadow: 0 8px 26px rgba(0,0,0,.16);
  h3 { margin: 0; font-size: 19px; font-weight: 800; line-height: 1.2; }
  p { margin: 8px 0 17px; color: #666; font-size: 10px; }
  label { display: block; margin-bottom: 6px; font-size: 10px; font-weight: 700; }
  input {
    width: 100%;
    height: 44px;
    padding: 0 12px;
    border: 0;
    border-radius: 7px;
    background: #e8edf4;
    font-size: 12px;
  }
  button {
    width: 100%;
    height: 42px;
    margin-top: 12px;
    border: 0;
    border-radius: 7px;
    background: var(--lions-red);
    color: var(--lions-dark);
    cursor: pointer;
    font-size: 11px;
    font-weight: 800;
  }
  button:hover { background: #b2df5d; color: var(--lions-dark); }
  .notice { margin: 12px 0 0; color: #555; font-size: 10px; line-height: 1.5; }
  .notice a { color: var(--lions-red); font-weight: 800; text-decoration: underline; }
`;

export const RedButton = styled.a`
  min-height: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  padding: 0 19px;
  background: var(--lions-red);
  color: var(--lions-dark);
  font-size: 11px;
  font-weight: 800;
  text-transform: uppercase;
  &:hover { background: #b2df5d; }
`;

export const SiteFooter = styled.footer`
  padding: 34px 16px 18px;
  background: #11120f;
  color: #fff;
  text-align: center;

  nav {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 12px 24px;
  }
  nav a {
    color: #fff;
    font-size: 14px;
    line-height: 1.5;
    text-underline-offset: 4px;
  }
  nav a:hover { text-decoration: underline; }
  .company { margin: 14px 0 0; font-size: 13px; line-height: 1.5; }
  .credit {
    margin: 18px 0 0;
    padding-top: 12px;
    border-top: 1px solid #252525;
    color: rgba(255,255,255,.72);
    font-size: 12px;
  }
`;

export const WhatsAppLink = styled.a`
  position: fixed;
  z-index: 9;
  right: 20px;
  bottom: 16px;
  width: 52px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 10px;
  overflow: hidden;
  border-radius: 32px;
  background: #19c66a;
  color: #fff;
  box-shadow: 0 4px 14px rgba(0,0,0,.3);
  text-decoration: none;
  transition: width .25s ease, background-color .25s ease, color .25s ease;

  svg {
    position: relative;
    z-index: 1;
    flex: 0 0 32px;
    width: 32px;
    height: 32px;
    padding: 2px;
    border-radius: 50%;
    transition: background-color .25s ease;
  }
  span {
    max-width: 0;
    margin-left: 0;
    overflow: hidden;
    color: #19c66a;
    font-size: 15px;
    font-weight: 800;
    white-space: nowrap;
    opacity: 0;
    transition: max-width .25s ease, margin-left .25s ease, opacity .2s ease;
  }
  svg path:first-child {
    fill: none;
    stroke: currentColor;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
  }
  svg path:last-child { fill: currentColor; }

  @media (hover: hover) {
    &:hover,
    &:focus-visible {
      width: 208px;
      background: #ddf8c7;
      color: #19c66a;
      outline: none;
    }
    &:hover svg,
    &:focus-visible svg { background: #fff; }
    &:hover span,
    &:focus-visible span {
      max-width: 140px;
      margin-left: 10px;
      opacity: 1;
    }
  }

  &:focus-visible {
    outline: 3px solid #111;
    outline-offset: 3px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
    svg, span { transition: none; }
  }
`;

export const DiscountTab = styled.button<{ $open: boolean }>`
  position: fixed;
  z-index: 9;
  bottom: 16px;
  left: 26px;
  min-height: 64px;
  display: ${({ $open }) => ($open ? "none" : "flex")};
  align-items: center;
  gap: 0;
  padding: 0 0 0 64px;
  border: 0;
  border-radius: 36px;
  background: transparent;
  color: #fff;
  cursor: pointer;
  box-shadow: none;
  text-align: left;

  .badge-icon {
    position: absolute;
    left: 0;
    width: 64px;
    height: 64px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: var(--lions-red);
    box-shadow: 0 3px 12px rgba(0,0,0,.3);
  }
  .car-icon { position: absolute; bottom: 11px; left: 10px; }
  .tag-icon { position: absolute; top: 10px; right: 9px; fill: #fff; color: #fff; }
  .offer-label {
    min-height: 42px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 4px 12px 4px 8px;
    border-radius: 0 24px 24px 0;
    background: #292929;
    font-size: 9px;
    font-weight: 700;
    line-height: 1.12;
    text-transform: uppercase;
    white-space: nowrap;
  }
  .offer-label strong { font-size: 13px; font-weight: 900; }
`;

export const DesktopLeadTab = styled.button`
  position: fixed;
  z-index: 9;
  top: 50%;
  left: 0;
  width: 42px;
  height: 240px;
  display: grid;
  place-items: center;
  padding: 12px 0;
  border: 0;
  border-radius: 16px 0 0 16px;
  background: var(--lions-red);
  color: var(--lions-dark);
  cursor: pointer;
  font-size: 12px;
  font-weight: 900;
  text-transform: uppercase;
  writing-mode: vertical-rl;
  transform: translateY(-50%) rotate(180deg);
  transition: width .2s ease, background-color .2s ease;

  &:hover { width: 48px; background: #b2df5d; }
  &:focus-visible { outline-offset: -4px; }
`;
