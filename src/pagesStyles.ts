import styled from "styled-components";

export const PageMain = styled.main`
  min-height: 65vh;
  background: #f7f7f7;
`;

export const PageHero = styled.section`
  padding: 48px 16px 42px;
  background:
    radial-gradient(ellipse at 85% 20%, rgba(198, 243, 107, .22), transparent 38%),
    #11120f;
  color: #fff;

  > div {
    width: min(100%, 1120px);
    margin: 0 auto;
  }

  .eyebrow {
    margin: 0 0 10px;
    color: #c6f36b;
    font-size: 11px;
    font-weight: 800;
    letter-spacing: .12em;
    text-transform: uppercase;
  }

  h1 {
    max-width: 780px;
    margin: 0;
    font-size: clamp(32px, 8vw, 58px);
    font-weight: 800;
    letter-spacing: -.045em;
    line-height: 1.05;
  }

  .summary {
    max-width: 680px;
    margin: 16px 0 0;
    color: rgba(255,255,255,.82);
    font-size: 15px;
    line-height: 1.7;
  }

  @media (min-width: 701px) {
    padding: 92px 24px 64px;
  }
`;

export const PageBody = styled.div`
  width: min(100% - 32px, 1120px);
  margin: 0 auto;
  padding: 24px 0 56px;

  @media (min-width: 701px) {
    width: min(100% - 48px, 1120px);
    padding: 38px 0 72px;
  }
`;

export const PageSection = styled.section`
  margin-top: 30px;

  h2 {
    margin: 0;
    font-size: clamp(22px, 5vw, 30px);
    font-weight: 800;
    letter-spacing: -.035em;
  }

  > p {
    max-width: 760px;
    margin: 10px 0 0;
    color: #5e5e5e;
    font-size: 14px;
    line-height: 1.7;
  }
`;

export const FinancingPageMain = styled.main`
  min-height: calc(100vh - 60px);
  padding: 38px 16px 64px;
  background:
    radial-gradient(ellipse at 90% 0, rgba(198, 243, 107, .16), transparent 34%),
    #11120f;
  color: #fff;

  .financing-content {
    width: min(100%, 1120px);
    margin: 0 auto;
  }

  h1 {
    margin: 0;
    color: #fff;
    font-size: clamp(26px, 5vw, 36px);
    font-weight: 900;
    letter-spacing: -.035em;
    text-align: center;
  }

  .mode-switch {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 14px;
    margin: 24px auto 16px;
  }

  .mode-switch span {
    font-size: 15px;
    font-weight: 600;
  }

  .mode-switch button {
    min-width: 92px;
    min-height: 42px;
    padding: 0 15px;
    border: 2px solid #fff;
    border-radius: 7px;
    background: transparent;
    color: #fff;
    cursor: pointer;
    font-size: 13px;
    font-weight: 800;
    transition: background .18s ease, color .18s ease;
  }

  .mode-switch button.active {
    background: #fff;
    color: #111;
  }

  .financing-card {
    width: min(100%, 780px);
    margin: 0 auto;
    padding: 20px;
    border-radius: 9px;
    background: #fff;
    color: #111;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  form > strong {
    padding: 7px 0 2px;
    font-size: 15px;
    font-weight: 800;
    text-align: center;
  }

  .field-grid {
    display: grid;
    gap: 10px;
  }

  .two-columns {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .three-columns {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  label {
    min-width: 0;
    position: relative;
    display: block;
  }

  input,
  select {
    width: 100%;
    min-width: 0;
    min-height: 44px;
    padding: 10px 12px;
    border: 2px solid #d8d8d8;
    border-radius: 7px;
    background: #fff;
    color: #111;
    font: inherit;
    font-size: 12px;
  }

  input::placeholder,
  select:invalid {
    color: #777;
    font-weight: 600;
  }

  input:focus,
  select:focus,
  button:focus-visible {
    outline: 2px solid #c6f36b;
    outline-offset: 2px;
  }

  .vehicle-value {
    padding: 12px;
    border-radius: 7px;
    background: #111;
    color: #fff;
    font-size: 13px;
    font-weight: 700;
    line-height: 1.4;
    text-align: center;
  }

  .installments {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
  }

  .installments button {
    width: 64px;
    min-height: 38px;
    border: 2px solid #d8d8d8;
    border-radius: 7px;
    background: #fff;
    color: #111;
    cursor: pointer;
    font-size: 13px;
    font-weight: 800;
  }

  .installments button.active {
    border-color: #111;
    background: #111;
    color: #fff;
  }

  .submit-button {
    min-height: 48px;
    border: 0;
    border-radius: 7px;
    background: #111;
    color: #fff;
    cursor: pointer;
    font: inherit;
    font-size: 14px;
    font-weight: 900;
  }

  .submit-button:hover {
    background: #c6f36b;
    color: #11120f;
  }

  .disclaimer,
  .form-status {
    margin: 0;
    color: #777;
    font-size: 10px;
    line-height: 1.55;
    text-align: center;
  }

  .form-status {
    padding: 10px;
    border-radius: 6px;
    background: #f0f0f0;
    color: #222;
    font-size: 12px;
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    clip-path: inset(50%);
  }

  @media (min-width: 720px) {
    padding-top: 54px;

    h1 {
      font-size: 38px;
    }

    .financing-card {
      padding: 24px;
    }

    form > strong {
      font-size: 17px;
    }
  }

  @media (max-width: 520px) {
    padding: 30px 12px 48px;

    .financing-card {
      padding: 14px;
    }

    .two-columns,
    .three-columns {
      grid-template-columns: minmax(0, 1fr);
    }

    .mode-switch {
      gap: 8px;
    }

    .mode-switch button {
      min-width: 76px;
    }
  }
`;

export const DemoPanel = styled.div`
  padding: 20px;
  border: 1px solid #e5e5e5;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0 8px 24px rgba(0,0,0,.04);

  @media (min-width: 701px) { padding: 28px; }
`;

export const DemoForm = styled.form`
  display: grid;
  gap: 15px;

  @media (min-width: 700px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  label {
    display: grid;
    gap: 7px;
    color: #333;
    font-size: 12px;
    font-weight: 700;
  }

  input, select, textarea {
    width: 100%;
    min-height: 46px;
    padding: 11px 12px;
    border: 1px solid #cfcfcf;
    border-radius: 5px;
    background: #fff;
    color: #171717;
    font-size: 14px;
  }

  textarea { min-height: 100px; resize: vertical; }
  .wide { grid-column: 1 / -1; }

  button, .button-link {
    width: fit-content;
    min-height: 46px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 9px;
    padding: 0 18px;
    border: 0;
    border-radius: 5px;
    background: #c6f36b;
    color: #11120f;
    cursor: pointer;
    font-size: 13px;
    font-weight: 800;
  }

  button:hover, .button-link:hover { background: #b2df5d; }

  .form-status {
    grid-column: 1 / -1;
    margin: 0;
    padding: 12px;
    border-radius: 5px;
    background: #f1f1f1;
    color: #333;
    font-size: 13px;
    line-height: 1.6;
  }
`;

export const DemoGrid = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: 1fr;

  @media (min-width: 620px) { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  @media (min-width: 950px) { grid-template-columns: repeat(3, minmax(0, 1fr)); }
`;

export const DemoCard = styled.article`
  padding: 20px;
  border: 1px solid #e5e5e5;
  border-radius: 9px;
  background: #fff;

  .icon {
    width: 40px;
    height: 40px;
    display: grid;
    place-items: center;
    margin-bottom: 15px;
    border-radius: 50%;
    background: rgba(198, 243, 107, .18);
    color: #11120f;
  }

  h3 { margin: 0; font-size: 16px; }
  p { margin: 8px 0 0; color: #626262; font-size: 13px; line-height: 1.6; }
`;

export const StoresPageMain = styled.main`
  min-height: 65vh;
  padding: 36px 16px 56px;
  background: #11120f;
  color: #fff;

  .stores-content {
    width: min(100%, 1012px);
    margin: 0 auto;
  }

  h1 {
    margin: 0;
    text-align: center;
    font-size: clamp(22px, 4vw, 30px);
    font-weight: 800;
    letter-spacing: -.02em;
    line-height: 1.2;
    text-transform: uppercase;
  }

  .stores-note {
    margin: 0 0 20px;
    color: #aaa;
    font-size: 11px;
    line-height: 1.5;
    text-align: center;
  }

  .store-region + .store-region {
    margin-top: 42px;
  }

  h1,
  .region-title {
    margin: 0 0 14px;
    text-align: center;
    font-size: clamp(18px, 3vw, 24px);
    font-weight: 800;
    letter-spacing: -.02em;
    line-height: 1.2;
    text-transform: uppercase;
  }

  @media (min-width: 701px) {
    padding: 56px 24px 72px;

    .stores-note {
      margin-bottom: 20px;
    }

    .store-region + .store-region {
      margin-top: 48px;
    }
  }
`;

export const AppointmentPageMain = styled.main`
  min-height: min(820px, calc(100vh - 72px));
  display: grid;
  grid-template-columns: minmax(390px, .92fr) minmax(0, 1.08fr);
  overflow: hidden;
  background: #11120f;
  color: #fff;

  .appointment-form-panel {
    width: min(100% - 48px, 368px);
    align-self: center;
    justify-self: end;
    margin: 30px 12% 30px 24px;
  }

  h1 {
    margin: 0 0 22px;
    font-size: clamp(26px, 3vw, 32px);
    font-weight: 800;
    letter-spacing: -.035em;
    line-height: 1.15;
  }

  form {
    display: grid;
    gap: 16px;
  }

  fieldset {
    min-width: 0;
    display: grid;
    gap: 8px;
    margin: 0;
    padding: 0;
    border: 0;
  }

  legend {
    margin-bottom: 4px;
    padding: 0;
    font-size: 14px;
    font-weight: 500;
  }

  .form-row {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 7px;
  }

  label {
    min-width: 0;
    position: relative;
    display: block;
  }

  input,
  select {
    width: 100%;
    height: 38px;
    padding: 0 10px;
    border: 1px solid #2e2e2e;
    border-radius: 5px;
    outline: none;
    background: #1b1b1b;
    color: #f7f7f7;
    font: inherit;
    font-size: 12px;
  }

  input::placeholder,
  select:invalid {
    color: #777;
  }

  input:focus,
  select:focus {
    border-color: #aaa;
  }

  select {
    appearance: auto;
  }

  .icon-field {
    display: flex;
    align-items: center;
    gap: 8px;
    padding-left: 9px;
    border-radius: 5px;
    background: #1b1b1b;
    color: #ddd;
  }

  .icon-field svg {
    flex: 0 0 auto;
  }

  .icon-field input,
  .icon-field select {
    min-width: 0;
    border-color: #555;
    background: transparent;
  }

  button {
    min-height: 39px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    border: 0;
    border-radius: 6px;
    background: #fff;
    color: #171717;
    cursor: pointer;
    font: inherit;
    font-size: 14px;
    transition: background .2s ease, transform .2s ease;
  }

  button:hover {
    transform: translateY(-1px);
    background: #e8e8e8;
  }

  .demo-disclaimer {
    margin: -7px 0 0;
    color: #929292;
    font-size: 10px;
    line-height: 1.5;
  }

  .form-status {
    margin: -6px 0 0;
    color: #fff;
    font-size: 12px;
    line-height: 1.5;
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    clip-path: inset(50%);
  }

  .appointment-story {
    min-height: 100%;
    position: relative;
    display: flex;
    align-items: center;
    overflow: hidden;
    padding: 54px 7%;
    isolation: isolate;
  }

  .photo-wall,
  .photo-wall::after {
    position: absolute;
    inset: 0;
  }

  .photo-wall {
    z-index: -1;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 10px;
    transform: scale(1.03);
  }

  .photo-wall::after {
    content: "";
    background: rgba(0, 0, 0, .78);
  }

  .photo-wall img {
    width: 100%;
    height: 100%;
    min-height: 0;
    object-fit: cover;
    filter: grayscale(1);
  }

  .story-copy {
    position: relative;
    z-index: 1;
    width: min(100%, 620px);
    margin: 0 auto;
  }

  .story-copy h2 {
    margin: 0;
    font-size: clamp(30px, 4vw, 48px);
    font-weight: 800;
    letter-spacing: -.045em;
    line-height: 1.08;
    text-transform: uppercase;
  }

  .story-copy p {
    margin: 24px 0 0;
    color: rgba(255,255,255,.9);
    font-size: 15px;
    line-height: 1.55;
  }

  &.visit-appointment {
    grid-template-columns: minmax(390px, .82fr) minmax(0, 1.18fr);
  }

  &.visit-appointment .appointment-form-panel {
    width: min(100% - 56px, 420px);
    justify-self: center;
    margin: 32px auto;
    padding: 30px;
    border: 1px solid rgba(198, 243, 107, .22);
    border-top: 3px solid #c6f36b;
    border-radius: 12px;
    background: #181a15;
    box-shadow: 0 18px 48px rgba(0, 0, 0, .28);
  }

  &.visit-appointment .appointment-eyebrow,
  &.visit-appointment .story-eyebrow {
    margin: 0 0 9px;
    color: #c6f36b;
    font-size: 10px;
    font-weight: 800;
    letter-spacing: .14em;
    text-transform: uppercase;
  }

  &.visit-appointment h1 {
    margin-bottom: 24px;
    font-size: clamp(28px, 3vw, 36px);
  }

  &.visit-appointment legend {
    color: #c6f36b;
    font-weight: 700;
  }

  &.visit-appointment input,
  &.visit-appointment select {
    height: 44px;
    border-color: #363a30;
    background-color: #11120f;
  }

  &.visit-appointment input:focus,
  &.visit-appointment select:focus {
    border-color: #c6f36b;
  }

  &.visit-appointment .icon-field {
    background: #11120f;
    color: #c6f36b;
  }

  &.visit-appointment .icon-field input,
  &.visit-appointment .icon-field select {
    border-color: #363a30;
  }

  &.visit-appointment button {
    min-height: 46px;
    background: #c6f36b;
    color: #11120f;
    font-weight: 800;
  }

  &.visit-appointment button:hover {
    background: #b2df5d;
  }

  &.visit-appointment .story-copy {
    padding: 32px;
    border-left: 3px solid #c6f36b;
    border-radius: 0 10px 10px 0;
    background: rgba(17, 18, 15, .76);
    backdrop-filter: blur(5px);
  }

  &.visit-appointment .story-copy .story-eyebrow {
    margin-bottom: 14px;
  }

  @media (max-width: 900px) {
    min-height: 0;
    grid-template-columns: minmax(0, 1fr);

    .appointment-form-panel {
      width: min(100% - 40px, 430px);
      margin: 48px auto;
    }

    .appointment-story {
      min-height: 390px;
      padding: 56px 24px;
    }
  }

  @media (max-width: 480px) {
    .appointment-form-panel {
      margin: 38px auto;
    }

    &.visit-appointment .appointment-form-panel {
      width: min(100% - 32px, 420px);
      padding: 22px;
    }

    &.visit-appointment .form-row {
      grid-template-columns: minmax(0, 1fr);
    }

    &.visit-appointment .story-copy {
      padding: 22px;
    }

    .appointment-story {
      min-height: 340px;
    }

    .story-copy p {
      font-size: 14px;
    }
  }

  @media (max-width: 700px) {
    .appointment-story {
      display: none;
    }
  }
`;

export const StoreGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 18px;

  @media (min-width: 620px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 20px;
  }

  @media (min-width: 980px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 24px;

    > :last-child:nth-child(3n + 1) {
      grid-column: 2;
    }
  }
`;

export const StoreCard = styled.article`
  overflow: hidden;
  border-radius: 10px;
  background: #fff;
  color: #111;

  img {
    width: calc(100% - 28px);
    height: 164px;
    display: block;
    margin: 14px auto 0;
    border-radius: 7px;
    background: #d7d7d7;
    filter: grayscale(1);
    object-fit: cover;
  }

  .coming-soon-art {
    width: calc(100% - 28px);
    height: 164px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
    margin: 14px auto 0;
    border-radius: 7px;
    background: #111;
    color: #fff;
    text-align: center;
    text-transform: uppercase;
  }

  .coming-soon-art strong {
    font-size: clamp(24px, 4vw, 34px);
    font-weight: 900;
    line-height: 1;
  }

  .coming-soon-art span {
    font-size: 9px;
    letter-spacing: .08em;
  }

  .store-details {
    min-height: 126px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px 16px 16px;
    text-align: center;
  }

  h3 {
    margin: 0;
    font-size: 16px;
    font-weight: 800;
    line-height: 1.15;
    text-transform: uppercase;
  }

  p {
    margin: 18px 0 0;
    color: #383838;
    font-size: 11px;
    line-height: 1.35;
    text-transform: uppercase;
  }
`;

export const VehicleGrid = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: 1fr;
  @media (min-width: 600px) { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  @media (min-width: 950px) { grid-template-columns: repeat(3, minmax(0, 1fr)); }
`;

export const VehicleCard = styled.article`
  overflow: hidden;
  border: 1px solid #e3e3e3;
  border-radius: 9px;
  background: #fff;

  img {
    width: 100%;
    height: 190px;
    display: block;
    object-fit: cover;
    background: #e6e6e6;
  }

  .details { padding: 15px; }
  .label {
    display: inline-block;
    padding: 5px 7px;
    border-radius: 3px;
    background: #fff0c2;
    color: #493c13;
    font-size: 9px;
    font-weight: 800;
    letter-spacing: .04em;
    text-transform: uppercase;
  }
  h3 { margin: 10px 0 3px; font-size: 17px; }
  p { margin: 5px 0 0; color: #626262; font-size: 12px; line-height: 1.55; }
  .price { margin-top: 12px; color: #111; font-size: 17px; font-weight: 800; }
  .price small { display: block; margin-bottom: 3px; color: #666; font-size: 10px; font-weight: 500; }
`;

export const TextLink = styled.a`
  min-height: 44px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 16px;
  color: #a00007;
  font-size: 13px;
  font-weight: 800;
  text-decoration: underline;
  text-underline-offset: 3px;
`;

export const EmptyState = styled.p`
  margin: 0;
  padding: 18px;
  border: 1px dashed #aaa;
  border-radius: 8px;
  color: #555;
  font-size: 14px;
  line-height: 1.6;
`;

export const CatalogPageMain = styled.main`
  min-height: 70vh;
  padding-bottom: 80px;
  background: #11120f;
  color: #fff;
`;

export const CatalogIntro = styled.section`
  position: relative;
  overflow: hidden;
  padding: 60px 16px 52px;
  background:
    radial-gradient(ellipse at 82% 0, rgba(198, 243, 107, .14), transparent 38%),
    linear-gradient(135deg, #171a13, #11120f 65%);

  &::after {
    position: absolute;
    right: -70px;
    bottom: -180px;
    width: 360px;
    height: 360px;
    border: 1px solid rgba(198, 243, 107, .1);
    border-radius: 50%;
    content: "";
    pointer-events: none;
  }

  .catalog-intro-content {
    position: relative;
    z-index: 1;
    width: min(100%, 1240px);
    margin: 0 auto;
  }

  .eyebrow {
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 0 0 14px;
    color: #c6f36b;
    font-size: 11px;
    font-weight: 800;
    letter-spacing: .14em;
    text-transform: uppercase;
  }

  .eyebrow span {
    width: 34px;
    height: 1px;
    background: #c6f36b;
  }

  h1 {
    max-width: 760px;
    margin: 0;
    font-size: clamp(36px, 7vw, 64px);
    font-weight: 800;
    letter-spacing: -.055em;
    line-height: 1;
  }

  h1 em {
    color: #c6f36b;
    font-style: normal;
  }

  .summary {
    max-width: 560px;
    margin: 16px 0 0;
    color: #b9bcb2;
    font-size: 14px;
    line-height: 1.7;
  }

  @media (min-width: 701px) {
    padding: 84px 24px 58px;
  }

  @media (max-width: 480px) {
    padding: 48px 20px 38px;
    h1 { font-size: clamp(36px, 11vw, 48px); }
  }
`;

export const CatalogSearch = styled.div`
  width: min(100%, 650px);
  min-height: 58px;
  display: flex;
  align-items: center;
  gap: 14px;
  margin: 28px 0 0;
  padding: 0 8px 0 18px;
  border: 1px solid #34382f;
  border-radius: 8px;
  background: rgba(17, 18, 15, .84);
  color: #c6f36b;
  box-shadow: 0 12px 30px rgba(0, 0, 0, .18);

  input {
    width: 100%;
    min-width: 0;
    border: 0;
    outline: 0;
    background: transparent;
    color: #fff;
    font-size: 14px;
  }

  input::placeholder { color: #92958b; }
  input:focus-visible { outline: 0; }
  &:focus-within { border-color: rgba(198, 243, 107, .75); }

  .search-hint {
    flex: 0 0 auto;
    display: grid;
    min-height: 42px;
    place-items: center;
    padding: 0 17px;
    border-radius: 6px;
    background: #c6f36b;
    color: #11120f;
    font-size: 11px;
    font-weight: 800;
  }

  @media (max-width: 420px) {
    min-height: 54px;
    gap: 9px;
    padding-left: 13px;
    .search-hint { min-height: 38px; padding: 0 11px; }
  }
`;

export const CatalogLayout = styled.div`
  width: min(100% - 32px, 1240px);
  display: grid;
  gap: 28px;
  margin: 0 auto;
  padding-top: 32px;

  @media (min-width: 701px) {
    width: min(100% - 48px, 1240px);
    grid-template-columns: 260px minmax(0, 1fr);
    align-items: start;
    gap: 32px;
  }
`;

export const CatalogFilters = styled.aside`
  display: grid;
  align-content: start;
  gap: 20px;
  padding: 22px;
  border: 1px solid #30342b;
  border-radius: 10px;
  background: linear-gradient(145deg, #191b16, #141510);
  box-shadow: 0 14px 36px rgba(0, 0, 0, .16);

  @media (min-width: 701px) {
    position: sticky;
    top: 88px;
  }

  .filter-heading {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    padding-bottom: 16px;
    border-bottom: 1px solid #30342b;
  }

  h2 {
    margin: 0;
    font-size: 17px;
    font-weight: 800;
  }

  .filter-heading button {
    padding: 4px 0;
    border: 0;
    background: transparent;
    color: #c6f36b;
    cursor: pointer;
    font-size: 11px;
    font-weight: 700;
    white-space: nowrap;
  }

  .filter-heading button:disabled {
    color: #777;
    cursor: default;
  }

  > label, fieldset label {
    display: grid;
    gap: 8px;
    color: #e7e7e7;
    font-size: 12px;
    font-weight: 700;
  }

  select {
    width: 100%;
    min-height: 42px;
    padding: 0 10px;
    border: 1px solid #383b33;
    border-radius: 6px;
    background: #11120f;
    color: #fff;
    font-size: 12px;
  }

  select:focus-visible {
    border-color: #c6f36b;
    outline-color: #c6f36b;
  }

  fieldset {
    min-width: 0;
    margin: 0;
    padding: 0;
    border: 0;
  }

  legend {
    margin-bottom: 8px;
    color: #e7e7e7;
    font-size: 12px;
    font-weight: 700;
  }

  .model-year-filter legend {
    margin-bottom: 5px;
  }

  .year-slider {
    position: relative;
    height: 22px;
    display: flex;
    align-items: center;
  }

  .year-track {
    position: absolute;
    right: 7px;
    left: 7px;
    height: 3px;
    background: #414141;
  }

  .year-track span {
    position: absolute;
    top: 0;
    bottom: 0;
    background: #c6f36b;
  }

  .year-slider input {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 22px;
    margin: 0;
    padding: 0;
    appearance: none;
    border: 0;
    background: transparent;
    pointer-events: none;
    cursor: pointer;
  }

  .year-slider input::-webkit-slider-runnable-track {
    height: 3px;
    background: transparent;
  }

  .year-slider input::-moz-range-track {
    height: 3px;
    background: transparent;
  }

  .year-slider input::-webkit-slider-thumb {
    width: 14px;
    height: 14px;
    appearance: none;
    border: 2px solid #fff;
    border-radius: 50%;
    background: #fff;
    cursor: pointer;
    pointer-events: auto;
  }

  .year-slider input::-moz-range-thumb {
    width: 10px;
    height: 10px;
    border: 2px solid #fff;
    border-radius: 50%;
    background: #fff;
    cursor: pointer;
    pointer-events: auto;
  }

  .year-slider input:focus-visible {
    outline: none;
  }

  .year-slider input:focus-visible::-webkit-slider-thumb {
    outline: 2px solid #c6f36b;
    outline-offset: 3px;
  }

  .year-slider input:focus-visible::-moz-range-thumb {
    outline: 2px solid #c6f36b;
    outline-offset: 3px;
  }

  .year-slider-labels {
    display: flex;
    justify-content: space-between;
    color: #bcbcbc;
    font-size: 10px;
  }
`;

export const CatalogResults = styled.section`
  min-width: 0;

  .results-heading {
    display: flex;
    align-items: end;
    justify-content: space-between;
    gap: 16px;
    margin: 0 0 18px;
  }

  .results-heading .eyebrow {
    margin: 0 0 5px;
    color: #c6f36b;
    font-size: 10px;
    font-weight: 800;
    letter-spacing: .12em;
    text-transform: uppercase;
  }

  .results-heading h2 {
    margin: 0;
    font-size: clamp(20px, 3vw, 25px);
    font-weight: 800;
    letter-spacing: -.035em;
  }

  .result-count {
    flex: 0 0 auto;
    margin: 0;
    padding: 8px 12px;
    border: 1px solid #34382f;
    border-radius: 999px;
    color: #bdbdbd;
    font-size: 11px;
  }

  .result-count strong {
    margin-right: 4px;
    color: #c6f36b;
    font-size: 13px;
  }

  .catalog-disclaimer {
    margin: 22px 0 0;
    color: #999;
    font-size: 11px;
    line-height: 1.65;
  }

  @media (max-width: 480px) {
    .results-heading { align-items: start; }
    .result-count { padding: 7px 9px; font-size: 10px; }
  }
`;

export const CatalogVehicleGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;

  @media (min-width: 560px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: 1180px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

export const CatalogVehicleCard = styled.article`
  min-width: 0;
  overflow: hidden;
  border: 1px solid #30342b;
  border-radius: 10px;
  background: #191b16;
  box-shadow: 0 12px 32px rgba(0, 0, 0, .16);
  transition: transform .2s ease, border-color .2s ease, box-shadow .2s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: rgba(198, 243, 107, .55);
    box-shadow: 0 20px 42px rgba(0, 0, 0, .28);
  }

  .vehicle-image {
    position: relative;
    overflow: hidden;
    aspect-ratio: 16 / 10;
    background: #22251e;
  }

  .vehicle-image::after {
    position: absolute;
    inset: 45% 0 0;
    background: linear-gradient(transparent, rgba(17, 18, 15, .58));
    content: "";
    pointer-events: none;
  }

  .vehicle-image img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    transition: transform .35s ease;
  }

  &:hover .vehicle-image img {
    transform: scale(1.04);
  }

  .demo-badge,
  .year-badge {
    position: absolute;
    z-index: 1;
    top: 12px;
    display: inline-flex;
    align-items: center;
    min-height: 27px;
    padding: 0 10px;
    border: 1px solid rgba(255, 255, 255, .18);
    border-radius: 999px;
    background: rgba(17, 18, 15, .78);
    color: #fff;
    font-size: 9px;
    font-weight: 700;
    backdrop-filter: blur(8px);
  }

  .demo-badge { left: 12px; }
  .year-badge {
    right: 12px;
    border-color: rgba(198, 243, 107, .45);
    color: #c6f36b;
  }

  .details {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-height: 285px;
    padding: 18px;
  }

  .eyebrow {
    margin: 0 0 5px;
    color: #c6f36b;
    font-size: 10px;
    font-weight: 800;
    letter-spacing: .08em;
    text-transform: uppercase;
  }

  h2 {
    margin: 0;
    font-size: 23px;
    font-weight: 800;
    letter-spacing: -.025em;
  }

  .version {
    margin: 4px 0 0;
    color: #bdbdbd;
    font-size: 12px;
  }

  .specs {
    display: flex;
    flex-wrap: wrap;
    gap: 7px;
    margin-top: 15px;
  }

  .specs span {
    padding: 7px 9px;
    border: 1px solid #35392f;
    border-radius: 5px;
    background: #141610;
    color: #d3d7cc;
    font-size: 10px;
  }

  .price {
    margin: 18px 0 16px;
    color: #fff;
    font-size: 21px;
    font-weight: 800;
  }

  .price small {
    display: block;
    margin-bottom: 4px;
    color: #a8aca0;
    font-size: 10px;
    font-weight: 500;
  }

  .vehicle-cta {
    width: 100%;
    min-height: 43px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin-top: auto;
    padding: 0 12px;
    border-radius: 6px;
    background: #c6f36b;
    color: #11120f;
    font-size: 11px;
    font-weight: 800;
    text-align: center;
  }

  .vehicle-cta:hover { background: #b2df5d; }

  .vehicle-cta:focus-visible {
    outline-color: #c6f36b;
    outline-offset: 3px;
  }
`;

export const CatalogEmptyState = styled.div`
  padding: 36px 20px;
  border: 1px dashed #42483a;
  border-radius: 10px;
  background: #191b16;
  text-align: center;

  h2 { margin: 0; font-size: 20px; }
  p { margin: 9px 0 17px; color: #bdbdbd; font-size: 13px; line-height: 1.6; }

  button {
    min-height: 42px;
    padding: 0 15px;
    border: 0;
    border-radius: 4px;
    background: #c6f36b;
    color: #11120f;
    cursor: pointer;
    font-size: 12px;
    font-weight: 800;
  }
`;

export const FipePageMain = styled.main`
  min-height: 100vh;
  padding: 18px 0 64px;
  background: #11120f;
  color: #fff;

  .fipe-header {
    width: min(100% - 32px, 976px);
    margin: 0 auto;
  }

  h1 {
    margin: 0 0 14px;
    font-size: clamp(24px, 4vw, 30px);
    font-weight: 900;
    line-height: 1.15;
    text-align: center;
  }

  .fipe-disclaimer {
    width: min(100% - 32px, 976px);
    margin: 18px auto 0;
    color: #aaa;
    font-size: 11px;
    text-align: center;
  }

  @media (min-width: 701px) {
    padding-top: 72px;
  }
`;

export const FipeTabs = styled.nav`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 10px;
  margin-bottom: 15px;

  button {
    min-width: 0;
    min-height: 42px;
    padding: 0 8px;
    border: 2px solid #fff;
    border-radius: 6px;
    background: #fff;
    color: #11120f;
    cursor: pointer;
    font-size: 12px;
    font-weight: 900;
    text-transform: uppercase;
    transition: background-color .18s ease, color .18s ease;
  }

  button.active,
  button:hover {
    background: #c6f36b;
    border-color: #c6f36b;
    color: #11120f;
  }

  button:focus-visible { outline: 3px solid #c6f36b; outline-offset: 3px; }

  @media (min-width: 701px) {
    gap: 16px;
    button { min-height: 43px; }
  }
`;

export const FipeSearch = styled.div`
  min-height: 40px;
  display: flex;
  align-items: stretch;
  overflow: hidden;
  border-radius: 6px;
  background: #fff;
  color: #111;

  span {
    width: 40px;
    min-height: 40px;
    display: grid;
    place-items: center;
    flex: 0 0 auto;
    border-radius: 5px;
    background: #11120f;
    color: #fff;
  }

  input {
    width: 100%;
    min-width: 0;
    padding: 0 10px;
    border: 0;
    outline: none;
    background: transparent;
    color: #171717;
    font-size: 12px;
    font-weight: 800;
  }

  input::placeholder { color: #777; opacity: 1; }
  &:focus-within { outline: 2px solid #c6f36b; outline-offset: 2px; }
`;

export const FipeCategories = styled.div`
  width: min(100% - 32px, 976px);
  margin: 26px auto 0;
`;

export const FipeBrandSection = styled.section`
  scroll-margin-top: 90px;
  margin-top: 25px;

  h2 {
    margin: 0 0 14px;
    font-size: 13px;
    font-weight: 900;
    text-align: center;
    text-transform: uppercase;
  }

  .brand-row {
    display: grid;
    grid-template-columns: minmax(0, 656px) 150px;
    align-items: center;
    justify-content: center;
    gap: 16px;
  }

  .other-brands {
    min-height: 46px;
    padding: 0 10px;
    border: 2px solid #fff;
    border-radius: 5px;
    background: transparent;
    color: #fff;
    cursor: pointer;
    font-size: 11px;
    font-weight: 900;
    text-transform: uppercase;
  }

  .other-brands:hover { background: #fff; color: #11120f; }
  .other-brands:focus-visible { outline: 3px solid #c6f36b; outline-offset: 3px; }

  @media (max-width: 620px) {
    margin-top: 30px;
    h2 { margin-bottom: 10px; }
    .brand-row { grid-template-columns: minmax(0, 1fr); gap: 12px; }
    .other-brands { width: 100%; min-height: 42px; }
  }
`;

export const FipeBrandGrid = styled.div`
  width: min(656px, 100%);
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-items: stretch;
  gap: 8px 10px;

  button {
    width: 64px;
    flex: 0 0 64px;
    min-height: 48px;
    display: grid;
    place-items: center;
    padding: 4px;
    border: 0;
    background: transparent;
    color: #fff;
    cursor: pointer;
    font-size: clamp(10px, 1.2vw, 14px);
    font-weight: 900;
    text-align: center;
    overflow-wrap: anywhere;
    transition: color .18s ease, transform .18s ease;
  }

  .brand-icon {
    display: block;
    width: min(44px, 100%);
    height: 36px;
    fill: currentColor;
  }

  button:hover {
    color: #c6f36b;
    transform: translateY(-2px);
  }

  button:focus-visible { outline: 2px solid #c6f36b; outline-offset: 1px; }
  .empty-brands { grid-column: 1 / -1; margin: 0; color: #aaa; font-size: 13px; }

  @media (min-width: 621px) {
    button { min-height: 52px; font-size: 13px; }
    .brand-icon { width: min(52px, 100%); height: 42px; }
  }

  @media (max-width: 620px) {
    width: 100%;
    justify-content: center;
    button { width: 56px; flex-basis: 56px; }
  }

  @media (max-width: 380px) {
    button { width: 48px; flex-basis: 48px; }
  }
`;

export const UtilitiesPageMain = styled.main`
  min-height: 75vh;
  padding: 18px 0 64px;
  background: #f5f5f5;
  color: #111;

  .utilities-intro {
    padding: 0 16px 38px;
    text-align: center;
  }

  h1 {
    margin: 0;
    font-size: clamp(24px, 4vw, 34px);
    font-weight: 900;
    line-height: 1.15;
    text-transform: uppercase;
  }

  .utilities-intro p {
    max-width: 700px;
    margin: 18px auto 0;
    color: #777;
    font-size: 15px;
    line-height: 1.65;
  }

  .empty-state {
    margin: 0;
    padding: 24px 18px;
    color: #626262;
    font-size: 14px;
    text-align: center;
  }

  .disclaimer {
    margin: 16px 0 0;
    padding: 0 12px;
    color: #777;
    font-size: 12px;
    line-height: 1.6;
  }

  @media (min-width: 701px) {
    padding-top: 72px;
    .utilities-intro { padding-bottom: 40px; }
  }
`;

export const UtilitiesSearch = styled.div`
  width: min(100%, 330px);
  min-height: 38px;
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 30px auto 0;
  padding: 0 12px;
  border: 1px solid #888;
  border-radius: 7px;
  background: #fff;
  color: #111;

  input {
    width: 100%;
    min-width: 0;
    min-height: 36px;
    padding: 0;
    border: 0;
    outline: none;
    background: transparent;
    color: #111;
    font-size: 11px;
  }

  input::placeholder { color: #777; opacity: 1; }
  svg { flex: 0 0 auto; }
`;

export const UtilitiesAccordion = styled.section`
  width: min(100% - 32px, 1188px);
  margin: 0 auto;

  details { background: #fff; }
  summary {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    min-height: 62px;
    padding: 0 20px;
    cursor: pointer;
    list-style: none;
  }
  summary::-webkit-details-marker { display: none; }
  summary:focus-visible { outline: 3px solid #c6f36b; outline-offset: -3px; }
  .chevron {
    width: 9px;
    height: 9px;
    flex: 0 0 auto;
    border-top: 2px solid currentColor;
    border-left: 2px solid currentColor;
    transform: translateY(2px) rotate(45deg);
    transition: transform .18s ease;
  }
  details:not([open]) > summary .chevron { transform: translateY(-2px) rotate(225deg); }

  > .category {
    overflow: hidden;
    border: 1px solid #222;
    border-radius: 6px;
  }
  > .category > summary {
    border-bottom: 1px solid #333;
    font-size: 16px;
    font-weight: 600;
  }
  > .category:not([open]) > summary { border-bottom: 0; }

  .brands {
    display: grid;
    gap: 9px;
    padding: 0 19px 19px;
  }
  .brand {
    overflow: hidden;
    border: 1px solid #e1e1e1;
    border-radius: 7px;
  }
  .brand > summary {
    min-height: 61px;
    padding: 0 19px;
    font-size: 15px;
    font-weight: 600;
  }
  .models {
    display: grid;
    gap: 7px;
    padding: 0 12px 12px;
  }
  .model {
    overflow: hidden;
    border: 1px solid #e5e5e5;
    border-radius: 5px;
    background: #fafafa;
  }
  .model > summary {
    min-height: 48px;
    padding: 0 14px;
    font-size: 13px;
    font-weight: 600;
  }
  .model ul {
    display: grid;
    gap: 0;
    margin: 0;
    padding: 0 14px 8px;
    list-style: none;
  }
  .model li {
    display: flex;
    justify-content: space-between;
    gap: 12px;
    padding: 10px 0;
    border-top: 1px solid #e8e8e8;
    color: #555;
    font-size: 12px;
  }
  .disclaimer { text-align: center; }

  @media (max-width: 600px) {
    width: min(100% - 24px, 1188px);
    .brands { padding: 0 10px 10px; }
    > .category > summary { min-height: 56px; padding: 0 15px; }
    .brand > summary { min-height: 54px; padding: 0 14px; }
  }

  @media (prefers-reduced-motion: reduce) {
    .chevron { transition: none; }
  }
`;
