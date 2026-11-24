import { useEffect, useRef, useState } from 'react';
import { EMAIL, LANGUAGES, PRODUCTS, SOCIAL, SPOTIFY, STORE_LABEL, type LangCode, type Product, type StoreId } from './content';
import { COPY, RTL } from './i18n';
import './site.css';

type Theme = 'dark' | 'light';

const read = (k: string) => { try { return localStorage.getItem(k); } catch { return null; } };
const write = (k: string, v: string) => { try { localStorage.setItem(k, v); } catch { /* storage blocked */ } };
const isLang = (v: string | null): v is LangCode => !!v && LANGUAGES.some((l) => l.code === v);

function startLang(): LangCode {
  const url = new URLSearchParams(location.search).get('lang');
  if (isLang(url)) return url;
  const saved = read('ps.lang');
  if (isLang(saved)) return saved;
  const guess = (navigator.language || 'en').slice(0, 2);
  return isLang(guess) ? guess : 'en';
}
function startTheme(): Theme {
  const saved = read('ps.theme');
  if (saved === 'dark' || saved === 'light') return saved;
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
}

// small line icons (no icon library, no emoji)
const Arrow = () => (<svg className="arrow" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>);
const Chevron = () => (<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9l6 6 6-6" /></svg>);
const Sun = () => (<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></svg>);
const Moon = () => (<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z" /></svg>);

function LanguageMenu({ value, onChange, label }: { value: LangCode; onChange: (l: LangCode) => void; label: string }) {
  const [open, setOpen] = useState(false);
  const box = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!open) return;
    const close = (e: MouseEvent) => { if (box.current && !box.current.contains(e.target as Node)) setOpen(false); };
    const esc = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('mousedown', close);
    document.addEventListener('keydown', esc);
    return () => { document.removeEventListener('mousedown', close); document.removeEventListener('keydown', esc); };
  }, [open]);
  return (
    <div className="lang" ref={box}>
      <button type="button" className="pill" aria-label={label} aria-haspopup="listbox" aria-expanded={open} onClick={() => setOpen(!open)}>
        {value.toUpperCase()}<Chevron />
      </button>
      {open && (
        <ul className="lang-list glass" role="listbox" aria-label={label}>
          {LANGUAGES.map((l) => (
            <li key={l.code}>
              <button type="button" role="option" aria-selected={l.code === value} className={l.code === value ? 'on' : ''}
                onClick={() => { onChange(l.code); setOpen(false); }}>
                <span>{l.name}</span><span className="code">{l.code.toUpperCase()}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function ProductRow({ p, tagline, soon }: { p: Product; tagline: string; soon: string }) {
  const stores = Object.keys(p.links) as StoreId[];
  return (
    <article className="glass product" id={p.id}>
      <img className="app-icon" src={p.icon} alt="" width="64" height="64" loading="lazy" />
      <div className="product-text">
        <h3>{p.name}</h3>
        <p className="tagline">{tagline}</p>
      </div>
      <div className="stores">
        {stores.map((s, i) => {
          const href = p.links[s];
          if (!href || href === 'soon') {
            return <span key={s} className="btn btn-soon" aria-disabled="true">{STORE_LABEL[s]}<small>{soon}</small></span>;
          }
          return (
            <a key={s} className={i === 0 ? 'btn btn-primary' : 'btn btn-glass'} href={href} target="_blank" rel="noopener noreferrer">
              {STORE_LABEL[s]}
            </a>
          );
        })}
      </div>
    </article>
  );
}

export default function App() {
  const [code, setCode] = useState<LangCode>(startLang);
  const [theme, setTheme] = useState<Theme>(startTheme);
  const c = COPY[code];

  useEffect(() => {
    const root = document.documentElement;
    root.lang = code;
    root.dir = RTL.includes(code) ? 'rtl' : 'ltr';
    write('ps.lang', code);
  }, [code]);
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    write('ps.theme', theme);
    const m = document.querySelector('meta[name="theme-color"]');
    if (m) m.setAttribute('content', theme === 'dark' ? '#000000' : '#f5f5f7');
  }, [theme]);

  const extensions = PRODUCTS.filter((p) => p.kind === 'extension');
  const apps = PRODUCTS.filter((p) => p.kind === 'app');
  const mobile = PRODUCTS.filter((p) => p.kind === 'mobile');

  return (
    <div className="page">
      <header className="nav">
        <div className="nav-inner">
          <a className="logo" href={SPOTIFY} target="_blank" rel="noopener noreferrer">PetrovskiStudio</a>
          <div className="nav-tools">
            <a className="nav-link" href="#privacy">{c.nav.privacy}</a>
            <LanguageMenu value={code} onChange={setCode} label={c.nav.language} />
            <button type="button" className="icon-btn" title={c.nav.theme} aria-label={c.nav.theme} onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
              {theme === 'dark' ? <Sun /> : <Moon />}
            </button>
          </div>
        </div>
      </header>

      <main>
        <section className="hero">
          <span className="badge">{c.hero.badge}</span>
          <h1>{c.hero.title}<span className="gold">{c.hero.highlight}</span>{c.hero.subtitle}</h1>
          <p className="lead">{c.hero.text}</p>
          <figure className="quote">
            <blockquote>{c.about.quote}</blockquote>
            <figcaption>— {c.about.author}</figcaption>
          </figure>
          <a className="btn btn-gold btn-lg" href={`mailto:${EMAIL}`}>{c.hero.start}<Arrow /></a>
          <a className="more" href="#products">{c.hero.more}<Chevron /></a>
        </section>

        <section className="section" id="products">
          <div className="section-head">
            <h2>{c.products.title}</h2>
            <p>{c.products.text}</p>
          </div>

          <h3 className="group-title">{c.products.apps}</h3>
          <div className="list">{apps.map((p) => <ProductRow key={p.id} p={p} tagline={c.taglines[p.id] ?? ''} soon={c.products.soon} />)}</div>

          <h3 className="group-title">{c.products.mobile}</h3>
          <div className="list">{mobile.map((p) => <ProductRow key={p.id} p={p} tagline={c.taglines[p.id] ?? ''} soon={c.products.soon} />)}</div>

          <h3 className="group-title">{c.products.extensions}</h3>
          <div className="list">{extensions.map((p) => <ProductRow key={p.id} p={p} tagline={c.taglines[p.id] ?? ''} soon={c.products.soon} />)}</div>
        </section>

        <section className="section" id="privacy">
          <div className="section-head">
            <h2>{c.privacy.title}</h2>
          </div>
          <div className="glass policy">
            {c.privacy.sections.map((s) => (
              <div className="policy-item" key={s.title}>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>{c.footer.rights}</span>
        <nav className="social" aria-label="Yuri Petrovski">
          {SOCIAL.map((l) => <a key={l.name} href={l.url} target="_blank" rel="noopener noreferrer">{l.name}</a>)}
        </nav>
      </footer>
    </div>
  );
}
