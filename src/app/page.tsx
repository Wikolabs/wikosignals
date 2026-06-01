"use client";
import { useState } from "react";

const P = {
  name: "WikoSignals",
  waPhone: "261386626100",
  palette: {
    mode: "dark" as "dark" | "light",
    bg: "#06121F",
    bg2: "#0A1B2D",
    surface: "rgba(255,255,255,0.045)",
    border: "rgba(255,255,255,0.10)",
    txt1: "#E0F0FF",
    txt2: "#8FA3BD",
    txt3: "#4F6580",
    accent: "#22D3EE",
    accentSoft: "rgba(34,211,238,0.12)",
    accentBorder: "rgba(34,211,238,0.30)",
    accentGlow: "rgba(34,211,238,0.18)",
    navBg: "rgba(6,18,31,0.82)",
  },
  content: {
    fr: {
      langLabel: "FR",
      tagLabel: "Hub signaux multi-sources · 4 modules · 100+ connecteurs",
      taglines: ["Tous les signaux.", "Synthetises.", "Avant qu'ils n'explosent."],
      taglineAccentIdx: 1,
      desc: "WikoSignals agrege la voix de vos clients (NPS, reviews, support), la voix du marche (social, news), la voix interne (docs, RAG) et la voix des prospects (CRM) en un brief Slack quotidien.",
      navLinks: [
        { label: "Modules", href: "#features" },
        { label: "Comment ca marche", href: "#process" },
        { label: "Pourquoi maintenant", href: "#why" },
        { label: "Contact", href: "#cta" },
      ],
      metrics: [
        { value: "4", label: "modules" },
        { value: "100+", label: "connecteurs" },
        { value: "24/7", label: "agregation" },
        { value: "1 page", label: "resume executif" },
      ],
      features: [
        { icon: "💬", title: "Voix des clients", desc: "NPS + reviews app stores + support tickets + interviews. Friction points priorises, recommandations actionables." },
        { icon: "📡", title: "Voix du marche", desc: "Streaming X + Google Reviews + Trustpilot + news sectorielles. Alertes emerging issues avant qu'ils ne deviennent crise." },
        { icon: "📚", title: "Voix interne", desc: "RAG sur Notion + Confluence + Drive + Slack + SharePoint. Search semantique cross-source avec citations sourcees." },
      ],
      steps: [
        { num: "01", title: "Connectez vos sources", desc: "Typeform, Trustpilot, Google Reviews, Notion, Drive, HubSpot, X, Zendesk — 100+ connecteurs via n8n. 30 min de setup." },
        { num: "02", title: "L'IA agrege et synthetise", desc: "Embeddings + LLM raisonnement + clustering thematique. On distingue le signal du bruit, on prioritise par impact." },
        { num: "03", title: "Brief quotidien dans Slack", desc: "Une page executive chaque matin a 8h : voix client + marche + interne + prospects. Pas de dashboard a ouvrir." },
      ],
      persuasion: {
        sectionTag: "Pourquoi maintenant",
        title: "Vous lisez 12% des feedbacks de vos clients. Pour le reste, vous priez.",
        paragraphs: [
          { type: "pathos", text: "Mardi 14h. Reunion comite produit. Le CPO sort la roadmap Q2. Le CMO objecte que les utilisateurs ne demandent pas ca, mais autre chose. Le CTO doute parce que dans les tickets Zendesk il a vu trois fois le mot 'lent'. Personne ne sait qui a raison. Vous avez 1247 reviews app store, 340 NPS verbatims, 890 tickets support, 1800 messages dans le Slack #feedback et 200 mentions Twitter du mois dernier. Personne ne les a lus en totalite. Vous decidez sur des anecdotes. Vous priez pour avoir raison." },
          { type: "logos", text: "Forrester estime que 78% des decisions produit B2B se prennent sur moins de 15% des feedbacks disponibles. McKinsey a mesure que les entreprises avec un dispositif d'agregation multi-source des signaux clients ont une vitesse de delivery 2.6x superieure et un Net Revenue Retention 18 points plus haut. Le probleme n'est pas le manque de donnees — c'est l'impossibilite humaine de tout lire et synthetiser. Une equipe de 5 personnes plein temps n'y arriverait pas." },
          { type: "ethos", text: "Wikolabs construit des agents IA en production depuis 2023 pour des scale-ups B2B, family offices et fintechs reglementees. Nous avons brule nos doigts sur les memes problemes que vous : pipelines qui hallucinent, briefs ignores, dashboards desertes. WikoSignals est ce que nous avons construit pour nos propres clients exigeants avant de le proposer au marche." },
          { type: "solution", text: "Concretement : vous designez vos sources prioritaires en 30 minutes (Typeform, Trustpilot, Zendesk, Notion, X — 100+ connecteurs via n8n), notre IA ingere en continu, embeddings clusterisent thematiquement, LLM raisonne sur l'impact business, et chaque matin a 8h votre Slack contient une page executive : top 3 frictions clients, top 3 emerging issues marche, top 3 reponses internes pertinentes, top 3 prospects a contacter. Pas de dashboard. Pas de PDF. Pas de meeting. Vous arrivez avec une vue 360 et vous decidez avec confiance." },
        ],
      },
      ctaTitle: "Tous les signaux qui comptent. Synthetises. Dans votre Slack demain matin.",
      ctaDesc: "Configuration en 30 minutes. 4 modules au choix. Aucune carte bancaire.",
      ctaPrimary: "Reserver un appel",
      ctaWhatsApp: "WhatsApp",
      ctaDemo: "Demander une demo",
      ctaSoonBadge: "Bientot",
      footerTagline: "Hub multi-source de signaux pour B2B SaaS",
    },
    en: {
      langLabel: "EN",
      tagLabel: "Multi-source signal hub · 4 modules · 100+ connectors",
      taglines: ["All the signals.", "Synthesized.", "Before they blow up."],
      taglineAccentIdx: 1,
      desc: "WikoSignals aggregates voice of customer (NPS, reviews, support), voice of market (social, news), voice of company (docs, RAG), and voice of prospects (CRM) into one daily Slack brief.",
      navLinks: [
        { label: "Modules", href: "#features" },
        { label: "How it works", href: "#process" },
        { label: "Why now", href: "#why" },
        { label: "Contact", href: "#cta" },
      ],
      metrics: [
        { value: "4", label: "modules" },
        { value: "100+", label: "connectors" },
        { value: "24/7", label: "aggregation" },
        { value: "1 page", label: "exec summary" },
      ],
      features: [
        { icon: "💬", title: "Voice of customer", desc: "NPS + app store reviews + support tickets + interviews. Prioritized friction points + actionable recommendations." },
        { icon: "📡", title: "Voice of market", desc: "Streaming X + Google Reviews + Trustpilot + sector news. Emerging-issue alerts before they become a crisis." },
        { icon: "📚", title: "Voice of company", desc: "RAG over Notion + Confluence + Drive + Slack + SharePoint. Cross-source semantic search with sourced citations." },
      ],
      steps: [
        { num: "01", title: "Connect your sources", desc: "Typeform, Trustpilot, Google Reviews, Notion, Drive, HubSpot, X, Zendesk — 100+ connectors via n8n. 30-min setup." },
        { num: "02", title: "AI aggregates and synthesizes", desc: "Embeddings + LLM reasoning + thematic clustering. We separate signal from noise, prioritize by business impact." },
        { num: "03", title: "Daily Slack brief at 8am", desc: "One executive page every morning: voice of customer + market + company + prospects. No dashboard to open." },
      ],
      persuasion: {
        sectionTag: "Why now",
        title: "You read 12% of your customer feedback. For the rest, you pray.",
        paragraphs: [
          { type: "pathos", text: "Tuesday 2pm. Product committee meeting. The CPO pulls out the Q2 roadmap. The CMO objects that users aren't asking for that, they're asking for something else. The CTO doubts because in Zendesk tickets he saw the word 'slow' three times. Nobody knows who's right. You have 1247 app store reviews, 340 NPS verbatims, 890 support tickets, 1800 messages in #feedback Slack, and 200 Twitter mentions in the last month. Nobody has read them all. You decide on anecdotes. You pray you're right." },
          { type: "logos", text: "Forrester estimates 78% of B2B product decisions are made on less than 15% of available feedback. McKinsey measured that companies with multi-source customer-signal aggregation ship 2.6x faster and have Net Revenue Retention 18 points higher. The problem isn't lack of data — it's the human impossibility of reading and synthesizing it all. A 5-person team full-time couldn't do it." },
          { type: "ethos", text: "Wikolabs has been building production AI agents since 2023 for B2B scale-ups, family offices and regulated fintechs. We burned our fingers on the same problems you face: hallucinating pipelines, ignored briefs, abandoned dashboards. WikoSignals is what we built for our own demanding customers before bringing it to market." },
          { type: "solution", text: "Concretely: you define your priority sources in 30 minutes (Typeform, Trustpilot, Zendesk, Notion, X — 100+ connectors via n8n), our AI ingests continuously, embeddings cluster thematically, LLM reasons on business impact, and every morning at 8am your Slack contains one executive page: top 3 customer frictions, top 3 emerging market issues, top 3 relevant internal answers, top 3 prospects to contact. No dashboard. No PDF. No meeting. You walk in with a 360° view and decide with confidence." },
        ],
      },
      ctaTitle: "Every signal that matters. Synthesized. In your Slack tomorrow morning.",
      ctaDesc: "30-min setup. 4 modules to pick. No credit card.",
      ctaPrimary: "Book a call",
      ctaWhatsApp: "WhatsApp",
      ctaDemo: "Request a demo",
      ctaSoonBadge: "Soon",
      footerTagline: "Multi-source signal hub for B2B SaaS",
    },
  },
};

export default function Page() {
  const [lang, setLang] = useState<"fr" | "en">("fr");
  const t = P.content[lang];
  const pal = P.palette;
  const isDark = pal.mode === "dark";
  const cardOverlayHover = isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.04)";

  const waLink = `https://wa.me/${P.waPhone}?text=${encodeURIComponent(
    lang === "fr"
      ? `Bonjour, je souhaite discuter de ${P.name} avec Wikolabs.`
      : `Hello, I'd like to discuss ${P.name} with Wikolabs.`
  )}`;

  return (
    <div style={{ minHeight: "100vh", background: pal.bg, color: pal.txt1 }}>
      <div className="wk-bg-fx" aria-hidden="true" style={{
        background: `
          radial-gradient(ellipse 60% 40% at 20% 30%, ${pal.accentSoft}, transparent 60%),
          radial-gradient(ellipse 50% 50% at 80% 70%, ${pal.accentGlow}, transparent 65%),
          radial-gradient(ellipse 40% 30% at 50% 95%, ${pal.accentSoft}, transparent 60%)
        `,
      }} />
      <style>{`
        *, *::before, *::after { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { -webkit-font-smoothing: antialiased; overflow-x: hidden; }
        @keyframes wkBgShift { 0% { transform: translate3d(0,0,0) rotate(0deg); } 50% { transform: translate3d(-2%, 1.5%, 0) rotate(180deg); } 100% { transform: translate3d(0,0,0) rotate(360deg); } }
        .wk-bg-fx { position: fixed; inset: -10%; pointer-events: none; z-index: 0; opacity: .55; will-change: transform; animation: wkBgShift 38s linear infinite; }
        @keyframes fadeUp { from { opacity:0; transform:translateY(24px); } to { opacity:1; transform:translateY(0); } }
        @keyframes pulseDot { 0%,100%{ opacity:1; transform:scale(1); } 50%{ opacity:.4; transform:scale(1.6); } }
        .wk-card { transition: background .3s, border-color .3s, transform .35s cubic-bezier(.34,1.2,.64,1); }
        .wk-card:hover { background: ${cardOverlayHover} !important; border-color: ${pal.accentBorder} !important; transform: translateY(-6px); }
        .wk-btn { transition: opacity .2s, transform .2s, box-shadow .2s; }
        .wk-btn:hover { opacity:.92; transform:translateY(-2px); box-shadow:0 12px 32px ${pal.accentGlow}; }
        .wk-btn-wa { transition: opacity .2s, transform .2s; }
        .wk-btn-wa:hover { opacity:.92; transform:translateY(-2px); }
        .wk-btn-demo { opacity:.78; transition: opacity .2s, transform .2s, background .2s; }
        .wk-btn-demo:hover { opacity:1; transform:translateY(-2px); background:${pal.accentSoft}!important; }
        .wk-nav-link { color:${pal.txt2}; text-decoration:none; font-size:14px; font-weight:500; transition:color .2s; }
        .wk-nav-link:hover { color:${pal.txt1}; }
        .wk-lang { display:inline-flex; border:1px solid ${pal.border}; border-radius:100px; padding:2px; background:${pal.surface}; }
        .wk-lang button { background:transparent; border:none; padding:4px 12px; font-size:11px; font-weight:700; letter-spacing:.5px; cursor:pointer; border-radius:100px; color:${pal.txt2}; transition: background .2s, color .2s; font-family:inherit; }
        .wk-lang button.active { background:${pal.accent}; color:${isDark ? "#04080F" : "#FFFFFF"}; }
        @media(max-width:768px){
          .wk-hide-sm{ display:none!important; }
          .wk-hero-title{ font-size:2.4rem!important; }
          .wk-section{ padding-left:20px!important; padding-right:20px!important; }
          .wk-cards-grid{ grid-template-columns: 1fr !important; max-width:380px; margin-left:auto; margin-right:auto; }
          .wk-metrics-row{ justify-content:center; }
          .wk-cta-row{ flex-direction:column; align-items:stretch; max-width:340px; margin-left:auto; margin-right:auto; }
          .wk-cta-row > *{ width:100%; justify-content:center; }
          .wk-persuasion{ padding:60px 20px!important; }
          .wk-foot{ flex-direction:column; gap:12px; text-align:center; }
        }
      `}</style>

      <nav className="wk-section" style={{ position:"sticky", top:0, zIndex:100, background:pal.navBg, backdropFilter:"blur(20px)", borderBottom:`1px solid ${pal.border}`, padding:"0 40px", height:64, display:"flex", alignItems:"center", justifyContent:"space-between" }}>
        <span style={{ fontSize:18, fontWeight:800, letterSpacing:"-0.5px", color:pal.txt1 }}>
          {P.name}<span style={{ color:pal.accent }}>.</span>
        </span>
        <div style={{ display:"flex", gap:24, alignItems:"center" }}>
          <div className="wk-hide-sm" style={{ display:"flex", gap:22 }}>
            {t.navLinks.map(l => <a key={l.label} href={l.href} className="wk-nav-link">{l.label}</a>)}
          </div>
          <div className="wk-lang" role="group" aria-label="language">
            <button type="button" className={lang==="fr"?"active":""} onClick={()=>setLang("fr")}>FR</button>
            <button type="button" className={lang==="en"?"active":""} onClick={()=>setLang("en")}>EN</button>
          </div>
          <button data-cal-link="wikolabs-team/30min" data-cal-namespace="wk30min" data-cal-config='{"layout":"month_view"}' className="wk-btn"
            style={{ background:pal.accent, color:isDark?"#04080F":"#FFFFFF", border:"none", borderRadius:8, padding:"9px 18px", fontWeight:700, fontSize:13.5, cursor:"pointer", fontFamily:"inherit" }}>
            {t.ctaPrimary} →
          </button>
        </div>
      </nav>

      <section className="wk-section" style={{ padding:"100px 40px 80px", maxWidth:1040, margin:"0 auto", textAlign:"center", position:"relative" }}>
        <div style={{ position:"absolute", top:-60, left:"50%", transform:"translateX(-50%)", width:720, height:600, background:`radial-gradient(ellipse at 50% 30%, ${pal.accentGlow} 0%, transparent 60%)`, pointerEvents:"none" }} />
        <div style={{ display:"inline-flex", alignItems:"center", gap:8, marginBottom:24, background:pal.accentSoft, border:`1px solid ${pal.accentBorder}`, borderRadius:100, padding:"6px 18px", animation:"fadeUp .5s ease both" }}>
          <span style={{ width:7, height:7, borderRadius:"50%", background:pal.accent, display:"inline-block", animation:"pulseDot 2s ease-in-out infinite" }} />
          <span style={{ color:pal.accent, fontSize:11.5, fontWeight:700, letterSpacing:"2px", textTransform:"uppercase" }}>{t.tagLabel}</span>
        </div>
        <h1 className="wk-hero-title" style={{ fontSize:"clamp(2.6rem,6vw,5rem)", fontWeight:700, lineHeight:1.08, letterSpacing:"-0.03em", marginBottom:28, fontFamily:"'Instrument Serif',Georgia,serif", animation:"fadeUp .5s .08s ease both" }}>
          {t.taglines.map((line, i) => (
            <span key={i} style={{ display:"block", color:i===t.taglineAccentIdx?pal.accent:pal.txt1, fontStyle:i===t.taglineAccentIdx?"italic":"normal" }}>{line}</span>
          ))}
        </h1>
        <p style={{ fontSize:"1.1rem", color:pal.txt2, lineHeight:1.72, maxWidth:600, margin:"0 auto 44px", animation:"fadeUp .5s .16s ease both" }}>{t.desc}</p>
        <div className="wk-metrics-row" style={{ display:"flex", flexWrap:"wrap", justifyContent:"center", gap:14, marginBottom:44, animation:"fadeUp .5s .24s ease both" }}>
          {t.metrics.map(m => (
            <div key={m.label} style={{ background:pal.surface, border:`1px solid ${pal.border}`, borderRadius:18, padding:"14px 22px", textAlign:"center", minWidth:118 }}>
              <div style={{ fontSize:"1.7rem", fontWeight:800, color:pal.txt1, letterSpacing:"-1.5px", lineHeight:1 }}>{m.value}</div>
              <div style={{ fontSize:"0.62rem", color:pal.txt3, textTransform:"uppercase", letterSpacing:"1.5px", marginTop:5 }}>{m.label}</div>
            </div>
          ))}
        </div>
        <CtaRow t={t} pal={pal} isDark={isDark} waLink={waLink} />
      </section>

      <section id="features" className="wk-section" style={{ padding:"80px 40px", maxWidth:1100, margin:"0 auto" }}>
        <SectionHead pal={pal} tag={lang==="fr"?"4 Modules":"4 Modules"} title={lang==="fr"?"Tous les signaux <em>en un hub</em>":"Every signal <em>in one hub</em>"} />
        <div className="wk-cards-grid" style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(300px,1fr))", gap:20 }}>
          {t.features.map((f, i) => (
            <div key={f.title} className="wk-card" style={{ background:pal.surface, border:`1px solid ${pal.border}`, borderRadius:20, padding:"28px 28px 26px", position:"relative", overflow:"hidden" }}>
              <div style={{ position:"absolute", top:0, left:0, right:0, height:2, background:`linear-gradient(90deg,transparent,${pal.accent},transparent)`, opacity:.55 }} />
              <div style={{ fontSize:"2rem", marginBottom:16 }}>{f.icon}</div>
              <h3 style={{ fontSize:"1.05rem", fontWeight:700, color:pal.txt1, marginBottom:10 }}>{f.title}</h3>
              <p style={{ fontSize:"0.88rem", color:pal.txt2, lineHeight:1.7, margin:0 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="process" className="wk-section" style={{ padding:"80px 40px", background:pal.bg2 }}>
        <div style={{ maxWidth:860, margin:"0 auto" }}>
          <SectionHead pal={pal} tag={lang==="fr"?"Comment ca marche":"How it works"} title={lang==="fr"?"En place en <em>30 minutes</em>":"Live in <em>30 minutes</em>"} />
          <div style={{ display:"flex", flexDirection:"column", gap:14 }}>
            {t.steps.map((s) => (
              <div key={s.num} style={{ display:"flex", alignItems:"flex-start", gap:22, background:pal.surface, border:`1px solid ${pal.border}`, borderRadius:18, padding:"22px 26px" }}>
                <div style={{ flexShrink:0, width:46, height:46, background:pal.accentSoft, border:`1px solid ${pal.accentBorder}`, borderRadius:14, display:"flex", alignItems:"center", justifyContent:"center", color:pal.accent, fontWeight:800, fontSize:15 }}>
                  {s.num}
                </div>
                <div>
                  <h3 style={{ fontSize:"1rem", fontWeight:700, color:pal.txt1, marginBottom:6, lineHeight:1.3 }}>{s.title}</h3>
                  <p style={{ fontSize:"0.87rem", color:pal.txt2, lineHeight:1.7, margin:0 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="why" className="wk-persuasion wk-section" style={{ padding:"100px 40px", maxWidth:860, margin:"0 auto" }}>
        <SectionHead pal={pal} tag={t.persuasion.sectionTag} title={t.persuasion.title} />
        <div style={{ display:"flex", flexDirection:"column", gap:22 }}>
          {t.persuasion.paragraphs.map((p, i) => {
            const labelMap: Record<string, { fr: string; en: string }> = {
              pathos:   { fr: "L'enjeu humain",  en: "What's at stake" },
              logos:    { fr: "Les faits",       en: "The facts" },
              ethos:    { fr: "Notre legitimite", en: "Our credibility" },
              solution: { fr: "Notre reponse",   en: "Our answer" },
            };
            const label = labelMap[p.type]?.[lang] ?? "";
            return (
              <div key={i} style={{ borderLeft:`2px solid ${pal.accentBorder}`, paddingLeft:22 }}>
                <div style={{ fontSize:"0.62rem", fontWeight:700, letterSpacing:"2.5px", textTransform:"uppercase", color:pal.accent, marginBottom:10 }}>{label}</div>
                <p style={{ fontSize:"1.02rem", color:pal.txt2, lineHeight:1.85, margin:0 }}>{p.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section id="cta" className="wk-section" style={{ padding:"0 40px 100px", maxWidth:860, margin:"0 auto" }}>
        <div style={{ background:pal.surface, border:`1px solid ${pal.accentBorder}`, borderRadius:24, padding:"64px 48px", textAlign:"center", backgroundImage:`radial-gradient(ellipse at 50% 0%, ${pal.accentSoft} 0%, transparent 65%)` }}>
          <p style={{ fontSize:"0.68rem", color:pal.accent, letterSpacing:"3px", textTransform:"uppercase", fontWeight:700, marginBottom:16 }}>{lang==="fr"?"Demarrer":"Get started"}</p>
          <h2 style={{ fontSize:"clamp(1.8rem,3.5vw,2.8rem)", fontWeight:700, color:pal.txt1, marginBottom:14, letterSpacing:"-0.02em", fontFamily:"'Instrument Serif',Georgia,serif" }}>{t.ctaTitle}</h2>
          <p style={{ color:pal.txt2, fontSize:"1rem", marginBottom:36, lineHeight:1.7, maxWidth:540, margin:"0 auto 36px" }}>{t.ctaDesc}</p>
          <CtaRow t={t} pal={pal} isDark={isDark} waLink={waLink} />
        </div>
      </section>

      <footer className="wk-section" style={{ borderTop:`1px solid ${pal.border}`, padding:"32px 40px" }}>
        <div className="wk-foot" style={{ maxWidth:1200, margin:"0 auto", display:"flex", flexWrap:"wrap", justifyContent:"space-between", alignItems:"center", gap:16 }}>
          <div>
            <span style={{ fontWeight:800, fontSize:16, color:pal.txt1 }}>{P.name}</span><span style={{ color:pal.accent }}>.</span>
            <span style={{ display:"block", fontSize:12, color:pal.txt3, marginTop:3 }}>{t.footerTagline}</span>
          </div>
          <p style={{ fontSize:13, color:pal.txt3, margin:0 }}>© 2026 {P.name} — {lang==="fr"?"Un produit":"A product by"} <a href="https://wikolabs.com" style={{ color:pal.txt2, textDecoration:"none" }}>Wikolabs</a></p>
          <div style={{ display:"flex", flexWrap:"wrap", gap:16, fontSize:13, alignItems:"center" }}>
            <a href="mailto:team@wikolabs.com" style={{ color:pal.txt3, textDecoration:"none" }}>team@wikolabs.com</a>
            <span style={{ color:pal.txt3 }}>·</span>
            <button data-cal-link="wikolabs-team/30min" data-cal-namespace="wk30min" data-cal-config='{"layout":"month_view"}' style={{ background:"none", border:"none", color:pal.txt3, fontSize:13, cursor:"pointer", fontFamily:"inherit", padding:0 }}>{t.ctaPrimary}</button>
          </div>
        </div>
      </footer>
    </div>
  );
}

function SectionHead({ pal, tag, title }: { pal: typeof P.palette; tag: string; title: string }) {
  return (
    <div style={{ textAlign:"center", marginBottom:52 }}>
      <p style={{ fontSize:"0.68rem", color:pal.accent, letterSpacing:"3px", textTransform:"uppercase", fontWeight:700, marginBottom:14 }}>{tag}</p>
      <h2
        style={{ fontSize:"clamp(1.8rem,3.5vw,2.8rem)", fontWeight:700, color:pal.txt1, letterSpacing:"-0.02em", fontFamily:"'Instrument Serif',Georgia,serif", lineHeight:1.15, margin:0 }}
        dangerouslySetInnerHTML={{ __html: title.replace(/<em>/g, `<em style="font-style:italic;color:${pal.accent}">`) }}
      />
    </div>
  );
}

function CtaRow({ t, pal, isDark, waLink }: { t: typeof P.content.fr; pal: typeof P.palette; isDark: boolean; waLink: string }) {
  return (
    <div className="wk-cta-row" style={{ display:"flex", flexWrap:"wrap", gap:12, justifyContent:"center", animation:"fadeUp .5s .32s ease both" }}>
      <button data-cal-link="wikolabs-team/30min" data-cal-namespace="wk30min" data-cal-config='{"layout":"month_view"}' className="wk-btn"
        style={{ background:pal.accent, color:isDark?"#04080F":"#FFFFFF", border:"none", borderRadius:10, padding:"14px 28px", fontWeight:700, fontSize:15, cursor:"pointer", display:"inline-flex", alignItems:"center", gap:8, fontFamily:"inherit" }}>
        📅 {t.ctaPrimary}
      </button>
      <a href={waLink} target="_blank" rel="noopener noreferrer" className="wk-btn-wa"
        style={{ background:"#25d366", color:"#FFFFFF", borderRadius:10, padding:"14px 28px", fontWeight:700, fontSize:15, textDecoration:"none", display:"inline-flex", alignItems:"center", gap:8 }}>
        💬 {t.ctaWhatsApp}
      </a>
      <a href="/demo" className="wk-btn-demo"
        style={{ background:"transparent", color:pal.txt2, border:`1px solid ${pal.border}`, borderRadius:10, padding:"14px 28px", fontWeight:700, fontSize:15, textDecoration:"none", display:"inline-flex", alignItems:"center", gap:10, fontFamily:"inherit", position:"relative" }}>
        ✨ {t.ctaDemo}
      </a>
    </div>
  );
}
