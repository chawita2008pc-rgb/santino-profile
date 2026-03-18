import React from 'react';
import { motion } from 'motion/react';
import { GlowingEffect } from '@/components/ui/glowing-effect';
import {
  TrendingUp, Globe, Star, Quote, DollarSign,
  Eye, Megaphone, Users, Award, ArrowRight, Sparkles
} from 'lucide-react';

// ─── Nike Swoosh Image ─────────────────────────────────────────────────────────
const NikeSwoosh = ({ className = "", style = {} }: { className?: string; style?: React.CSSProperties }) => {
  let filterStyle: React.CSSProperties = {};
  if (className.includes('text-white')) {
    filterStyle = { filter: 'brightness(0) invert(1)' };
  } else if (className.includes('text-[#EA553B]') && className.includes('/30')) {
    filterStyle = { filter: 'brightness(0) saturate(100%) invert(43%) sepia(60%) saturate(500%) hue-rotate(330deg)', opacity: 0.3 };
  } else if (className.includes('text-[#EA553B]')) {
    filterStyle = { filter: 'brightness(0) saturate(100%) invert(43%) sepia(60%) saturate(500%) hue-rotate(330deg)' };
  } else if (className.includes('text-neutral-700')) {
    filterStyle = { filter: 'brightness(0) invert(25%)' };
  }
  const imgClass = className.replace(/text-\S+/g, '').trim();
  return <img src="/nike-swoosh.png" alt="Nike Swoosh" className={imgClass} style={{ ...filterStyle, ...style }} />;
};

// ─── Section wrapper ───────────────────────────────────────────────────────────
const Section = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <section className={`max-w-7xl mx-auto px-6 py-20 ${className}`}>{children}</section>
);

// ─── Section label ─────────────────────────────────────────────────────────────
const Label = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-block text-xs font-bold tracking-[0.3em] uppercase text-[#EA553B] mb-4">
    {children}
  </span>
);

// ─── Glow card wrapper ─────────────────────────────────────────────────────────
const GlowCard = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`relative rounded-2xl border border-neutral-800 p-[3px] ${className}`}>
    <GlowingEffect spread={35} glow={true} disabled={false} proximity={60} inactiveZone={0.01} borderWidth={2} />
    <div className="relative rounded-[14px] bg-neutral-950 h-full">
      {children}
    </div>
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-[#EA553B]/30">

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6">
        {/* Background grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
        {/* Red glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#EA553B]/10 blur-[120px] rounded-full pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative text-center max-w-5xl"
        >
          {/* Swoosh */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
            className="flex justify-center mb-10"
          >
            <NikeSwoosh className="w-64 md:w-96 text-white drop-shadow-[0_0_40px_rgba(234,85,59,0.4)]" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="font-display text-[8rem] md:text-[14rem] leading-none tracking-widest text-white mb-2"
          >
            NIKE
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-3xl md:text-5xl font-black italic text-[#EA553B] mb-10 tracking-tight"
          >
            Just Do It.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            A deep dive into one of the most iconic brand identities in history —
            from a $35 logo to a $26 billion mark.
          </motion.p>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="flex flex-wrap justify-center gap-8 mt-16"
          >
            {[
              { label: "Founded", value: "1964" },
              { label: "Swoosh cost", value: "$35" },
              { label: "Annual Revenue", value: "$46.3B" },
              { label: "Brand Value", value: "$26B" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-display text-4xl md:text-5xl text-white tracking-wider">{s.value}</div>
                <div className="text-neutral-500 text-sm uppercase tracking-widest mt-1">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="absolute bottom-10 flex flex-col items-center gap-2 text-neutral-600"
        >
          <span className="text-xs tracking-widest uppercase">Scroll to explore</span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
            <ArrowRight className="rotate-90 w-4 h-4" />
          </motion.div>
        </motion.div>
      </section>

      {/* ── COLOR PSYCHOLOGY ── */}
      <Section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Label>01 — Color Scheme</Label>
          <h2 className="font-display text-6xl md:text-8xl text-white mb-4 tracking-wider">COLOR</h2>
          <h2 className="font-display text-6xl md:text-8xl text-[#EA553B] mb-16 tracking-wider">PSYCHOLOGY</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              color: "#000000",
              name: "Black",
              role: "Primary",
              bg: "bg-neutral-950",
              border: "border-neutral-800",
              accent: "text-neutral-300",
              why: [
                "Power & authority — dominance in sport",
                "Timeless — never dates, never trends out",
                "Maximum contrast at every scale",
                "Forces focus on the message, not decoration",
              ],
              where: "Logo, typography, core apparel, 'Just Do It' campaigns",
            },
            {
              color: "#FFFFFF",
              name: "White",
              role: "Primary",
              bg: "bg-white",
              border: "border-neutral-300",
              accent: "text-neutral-800",
              why: [
                "Clarity & purity — clean athletic performance",
                "Contrast pair to black — negative space mastery",
                "Communicates premium minimalism",
                "Works on any surface: shoes, kits, packaging",
              ],
              where: "Inverted logos, shoe colorways, website backgrounds",
            },
            {
              color: "#EA553B",
              name: "Nike Red",
              role: "Accent",
              bg: "bg-[#EA553B]",
              border: "border-[#EA553B]",
              accent: "text-white",
              why: [
                "Energy, urgency & passion — action triggers",
                "Appetite for competition and victory",
                "Used in the 1985 'red box' era",
                "Air Jordan sub-brand identity color",
              ],
              where: "Air Jordan, limited campaigns, Nike Air branding",
            },
          ].map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <GlowCard>
                <div className="p-8">
                  {/* Swatch */}
                  <div
                    className={`w-full h-24 rounded-xl mb-6 ${c.bg} border ${c.border} flex items-center justify-center`}
                  >
                    <span className={`font-mono text-sm font-bold ${c.accent}`}>{c.color}</span>
                  </div>
                  <div className="flex items-baseline justify-between mb-1">
                    <h3 className="text-2xl font-black text-white">{c.name}</h3>
                    <span className="text-xs uppercase tracking-widest text-[#EA553B] font-bold">{c.role}</span>
                  </div>
                  <ul className="mt-4 space-y-2">
                    {c.why.map((w) => (
                      <li key={w} className="flex gap-2 text-sm text-neutral-400">
                        <span className="text-[#EA553B] mt-0.5 shrink-0">→</span>
                        {w}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 pt-6 border-t border-neutral-800">
                    <p className="text-xs text-neutral-500 uppercase tracking-wider mb-1">Used in</p>
                    <p className="text-sm text-neutral-300">{c.where}</p>
                  </div>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>

        {/* Why minimal palette */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-10 relative rounded-2xl border border-neutral-800 p-8 md:p-12 overflow-hidden"
        >
          <div className="absolute right-0 top-0 w-64 h-64 bg-[#EA553B]/5 blur-[80px] rounded-full pointer-events-none" />
          <Quote className="w-8 h-8 text-[#EA553B] mb-4" />
          <p className="text-xl md:text-3xl font-bold text-white leading-relaxed max-w-4xl">
            "Black on white is the highest-contrast combination possible. Nike strips away color
            so every viewer's eye goes immediately to the{" "}
            <span className="text-[#EA553B]">message</span> — not the decoration."
          </p>
          <p className="mt-4 text-neutral-500 text-sm">Nike Brand Design Principle</p>
        </motion.div>
      </Section>

      {/* ── ORIGIN STORY ── */}
      <Section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Label>02 — The Backstory</Label>
          <h2 className="font-display text-6xl md:text-8xl text-white mb-4 tracking-wider">ORIGIN</h2>
          <h2 className="font-display text-6xl md:text-8xl text-[#EA553B] mb-16 tracking-wider">STORY</h2>
        </motion.div>

        {/* Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            {
              year: "1964",
              title: "Blue Ribbon Sports",
              desc: "Phil Knight and coach Bill Bowerman co-found Blue Ribbon Sports in Eugene, Oregon. Knight sells Japanese Onitsuka Tiger shoes from the trunk of his car at track meets.",
              icon: <Star className="w-5 h-5" />,
            },
            {
              year: "1971",
              title: "Nike, Inc. is born",
              desc: "Company officially renamed Nike, Inc. on May 30, 1971. The name comes from the Greek goddess of victory — suggested by employee Jeff Johnson, who said it came to him in a dream.",
              icon: <Sparkles className="w-5 h-5" />,
            },
            {
              year: "1980",
              title: "Nike goes public",
              desc: "Nike's IPO launches. The company that started from a car trunk was now a publicly traded corporation. The Swoosh, once dismissed, was now worth millions.",
              icon: <TrendingUp className="w-5 h-5" />,
            },
          ].map((item, i) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <GlowCard>
                <div className="p-8 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#EA553B]/10 flex items-center justify-center text-[#EA553B]">
                      {item.icon}
                    </div>
                    <span className="font-display text-3xl text-[#EA553B] tracking-widest">{item.year}</span>
                  </div>
                  <h3 className="text-xl font-black text-white mb-3">{item.title}</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>

        {/* The goddess */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-[#EA553B]/30 bg-[#EA553B]/5 p-8 md:p-12"
        >
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="shrink-0">
              <NikeSwoosh className="w-32 text-[#EA553B]" />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-black text-white mb-3">Nike — Goddess of Victory</h3>
              <p className="text-neutral-300 leading-relaxed text-lg">
                In Greek mythology, <span className="text-[#EA553B] font-bold">Νίκη (Níkē)</span> was the winged
                goddess of victory, speed, and strength. She was the divine charioteer who drove Zeus's
                thunderbolt in battle. The Swoosh itself was designed to evoke her wings — conveying motion,
                speed, and forward momentum.
              </p>
            </div>
          </div>
        </motion.div>
      </Section>

      {/* ── THE $35 SWOOSH ── */}
      <Section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Label>03 — The Logo</Label>
          <h2 className="font-display text-6xl md:text-8xl text-white mb-4 tracking-wider">THE</h2>
          <h2 className="font-display text-6xl md:text-8xl text-[#EA553B] mb-16 tracking-wider">$35 SWOOSH</h2>
        </motion.div>

        {/* Big price → stock value */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative rounded-2xl border border-neutral-800 p-10 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 to-black" />
            <div className="relative">
              <DollarSign className="w-8 h-8 text-neutral-600 mb-4" />
              <div className="font-display text-[6rem] leading-none text-white mb-2">$35</div>
              <p className="text-neutral-400 text-lg">Original payment to Carolyn Davidson</p>
              <p className="text-neutral-600 text-sm mt-2">At $2/hour — about 17.5 hours of work</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative rounded-2xl border border-[#EA553B]/40 p-10 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#EA553B]/10 to-black" />
            <div className="relative">
              <TrendingUp className="w-8 h-8 text-[#EA553B] mb-4" />
              <div className="font-display text-[6rem] leading-none text-[#EA553B] mb-2">$3M</div>
              <p className="text-neutral-300 text-lg">Value of the stock shares she later received</p>
              <p className="text-neutral-500 text-sm mt-2">500 shares → ~32,000 after splits (2023)</p>
            </div>
          </motion.div>
        </div>

        {/* Story timeline */}
        <div className="space-y-4">
          {[
            {
              year: "1971",
              event: "Carolyn Davidson, a graphic design student at Portland State University, designs the Swoosh. Phil Knight's reaction: \"I don't love it, but maybe it'll grow on me.\"",
              highlight: true,
            },
            {
              year: "1971",
              event: "Final invoice submitted: $35.00 total. The design that would become worth billions is paid for with the equivalent of a dinner bill.",
              highlight: false,
            },
            {
              year: "1974",
              event: "First time the Swoosh appears alone — no wordmark, no text. Steve Prefontaine wears it on a tracksuit at a meet in Tacoma, Washington.",
              highlight: false,
            },
            {
              year: "1983",
              event: "Phil Knight invites Davidson to a company reception and presents her with a diamond & gold Swoosh ring, chocolate Swooshes, and an envelope containing 500 shares of Nike stock.",
              highlight: true,
            },
            {
              year: "1995",
              event: "The wordmark is permanently dropped. The Swoosh alone is enough — Nike joins the rarest tier of brands (Apple, McDonald's) that need no text to be recognized.",
              highlight: false,
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`flex gap-6 p-6 rounded-2xl border ${item.highlight ? 'border-[#EA553B]/40 bg-[#EA553B]/5' : 'border-neutral-800 bg-neutral-950'}`}
            >
              <span className={`font-display text-2xl shrink-0 tracking-widest ${item.highlight ? 'text-[#EA553B]' : 'text-neutral-600'}`}>
                {item.year}
              </span>
              <p className={`text-sm leading-relaxed mt-1 ${item.highlight ? 'text-neutral-200' : 'text-neutral-400'}`}>
                {item.event}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ── LOGO EVOLUTION ── */}
      <Section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Label>04 — Logo Evolution</Label>
          <h2 className="font-display text-6xl md:text-8xl text-white mb-4 tracking-wider">LOGO</h2>
          <h2 className="font-display text-6xl md:text-8xl text-[#EA553B] mb-16 tracking-wider">EVOLUTION</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              year: "1971",
              title: "The Original",
              desc: "Swoosh with lowercase cursive 'nike' script sitting directly on top. Designed in weeks by Carolyn Davidson.",
              change: "Birth of the mark",
              render: (
                <div className="flex flex-col items-center gap-1">
                  <NikeSwoosh className="w-28 text-white" />
                  <span className="text-white text-xs italic font-light tracking-wider" style={{ fontFamily: 'Georgia, serif' }}>nike</span>
                </div>
              ),
            },
            {
              year: "1976",
              title: "Wordmark Moves Up",
              desc: "Lowercase cursive replaced with bold geometric uppercase sans-serif. The wordmark now sits above the Swoosh.",
              change: "More athletic & industrial",
              render: (
                <div className="flex flex-col items-center gap-2">
                  <span className="text-white font-black text-2xl tracking-[0.15em]">NIKE</span>
                  <NikeSwoosh className="w-28 text-white" />
                </div>
              ),
            },
            {
              year: "1978",
              title: "Futura Bold",
              desc: "Swoosh refined to be bolder and thicker. Wordmark adopts a modified Futura Bold typeface — the font that would define Nike for decades.",
              change: "Iconic typeface locked in",
              render: (
                <div className="flex flex-col items-center gap-2">
                  <span className="text-white font-black text-2xl tracking-[0.2em]" style={{ fontWeight: 900 }}>NIKE</span>
                  <NikeSwoosh className="w-32 text-white" />
                </div>
              ),
            },
            {
              year: "1985",
              title: "The Red Box Era",
              desc: "White letters and Swoosh set against a vivid red background box. Nike's most colorful era — red communicates energy, urgency, and sport.",
              change: "Red introduced as accent",
              render: (
                <div className="flex items-center gap-3 bg-[#EA553B] px-5 py-3 rounded-lg">
                  <span className="text-white font-black text-2xl tracking-[0.15em]">NIKE</span>
                  <NikeSwoosh className="w-16 text-white" style={{ mixBlendMode: 'multiply' }} />
                </div>
              ),
            },
            {
              year: "1995",
              title: "Wordmark Dropped",
              desc: "The Swoosh becomes so globally recognized that Nike permanently removes the wordmark. The shape alone is enough.",
              change: "Symbol-only status achieved",
              render: (
                <NikeSwoosh className="w-36 text-white" />
              ),
            },
            {
              year: "Today",
              title: "The Modern Mark",
              desc: "Unchanged since 1995. The Swoosh scales from 5mm shoe embroidery to a 100-foot stadium banner. One of the most recognized symbols on Earth.",
              change: "Timeless & global",
              render: (
                <NikeSwoosh className="w-36 text-white drop-shadow-[0_0_20px_rgba(234,85,59,0.5)]" />
              ),
            },
          ].map((era, i) => (
            <motion.div
              key={era.year}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <GlowCard>
                <div className="p-8 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-display text-3xl text-[#EA553B] tracking-wider">{era.year}</span>
                    <span className="text-xs text-neutral-500 uppercase tracking-widest">{era.change}</span>
                  </div>
                  {/* Logo render */}
                  <div className="flex items-center justify-center h-20 mb-6">
                    {era.render}
                  </div>
                  <h3 className="text-lg font-black text-white mb-2">{era.title}</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed flex-1">{era.desc}</p>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ── CAMPAIGNS & SOCIAL MEDIA ── */}
      <Section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Label>05 — Social Media & Publicity</Label>
          <h2 className="font-display text-6xl md:text-8xl text-white mb-4 tracking-wider">CAMPAIGNS</h2>
          <h2 className="font-display text-6xl md:text-8xl text-[#EA553B] mb-16 tracking-wider">& SOCIAL</h2>
        </motion.div>

        {/* Key campaigns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {[
            {
              year: "1988",
              title: "Just Do It",
              tagline: "\"Just Do It.\"",
              desc: "Coined by Dan Wieden of Wieden+Kennedy. The phrase was darkly inspired by the last words of death row inmate Gary Gilmore: 'Let's do it.' The campaign transformed Nike from a running shoe brand into a global sports lifestyle company.",
              stats: ["Market share: 18% → 43% (10 years)", "Revenue: $877M → $9.2B"],
              color: "border-neutral-700",
            },
            {
              year: "1984",
              title: "Air Jordan",
              tagline: "\"Become Legendary.\"",
              desc: "Michael Jordan's partnership created an entirely separate sub-brand. The iconic black-and-red color scheme of the Air Jordan I was so bold the NBA actually fined Jordan $5,000 per game for violating uniform policies. Nike paid the fines.",
              stats: ["Created a $5B+ sub-brand", "Black & Red palette — power + passion"],
              color: "border-[#EA553B]/40",
            },
            {
              year: "2018",
              title: "Dream Crazy",
              tagline: "\"Believe in something. Even if it means sacrificing everything.\"",
              desc: "Colin Kaepernick's stark black-and-white portrait. No color. Just contrast and conviction. The most culturally disruptive Nike ad in decades proved that stripping color away forces the viewer to focus on the message.",
              stats: ["$43M earned media in 24 hours", "+135% brand mentions"],
              color: "border-neutral-700",
            },
            {
              year: "2020",
              title: "You Can't Stop Us",
              tagline: "\"You can't stop us.\"",
              desc: "Split-screen video pairing athletes in motion side by side — an editing masterpiece. Used a blend of black-and-white footage with selective color, maintaining Nike's visual grammar while adding cinematic depth.",
              stats: ["58M YouTube views", "Cannes Lions Grand Prix winner"],
              color: "border-[#EA553B]/40",
            },
          ].map((c, i) => (
            <motion.div
              key={c.year}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <GlowCard>
                <div className="p-8 h-full flex flex-col">
                  <div className="flex items-baseline gap-3 mb-3">
                    <span className="font-display text-4xl text-[#EA553B] tracking-widest">{c.year}</span>
                    <span className="text-neutral-500 text-sm uppercase tracking-widest">{c.title}</span>
                  </div>
                  <p className="text-xl font-black text-white italic mb-4">{c.tagline}</p>
                  <p className="text-neutral-400 text-sm leading-relaxed flex-1 mb-6">{c.desc}</p>
                  <div className="space-y-2">
                    {c.stats.map((s) => (
                      <div key={s} className="flex items-center gap-2 text-sm">
                        <span className="text-[#EA553B]">→</span>
                        <span className="text-neutral-300">{s}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>

        {/* Social media consistency box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-neutral-800 bg-neutral-950 p-8 md:p-12"
        >
          <div className="flex items-center gap-3 mb-8">
            <Globe className="w-6 h-6 text-[#EA553B]" />
            <h3 className="text-2xl font-black text-white">Social Media Visual Grammar</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Eye className="w-5 h-5" />,
                title: "Palette Consistency",
                desc: "Nike's Instagram is predominantly black, white, and gray. Product color only appears when necessary — never decorative.",
              },
              {
                icon: <Megaphone className="w-5 h-5" />,
                title: "Emotion Over Product",
                desc: "Posts rarely lead with a product shot. They lead with a human story. The Swoosh functions as a trust mark — not the centerpiece.",
              },
              {
                icon: <Users className="w-5 h-5" />,
                title: "Bold Typography",
                desc: "Clean, high-contrast text. Short, punchy copy. The same visual grammar is applied across every platform — TikTok, Instagram, YouTube, OOH.",
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-10 h-10 shrink-0 rounded-xl bg-[#EA553B]/10 flex items-center justify-center text-[#EA553B]">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-neutral-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </Section>

      {/* ── KEY NUMBERS ── */}
      <Section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Label>06 — By The Numbers</Label>
          <h2 className="font-display text-6xl md:text-8xl text-white mb-4 tracking-wider">KEY</h2>
          <h2 className="font-display text-6xl md:text-8xl text-[#EA553B] mb-16 tracking-wider">NUMBERS</h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {[
            { value: "$35", label: "Swoosh original cost" },
            { value: "$26B", label: "Swoosh mark value today" },
            { value: "94%", label: "Brand recognition (EU online)" },
            { value: "#1", label: "Most valuable sportswear brand" },
            { value: "1995", label: "Year text was dropped forever" },
            { value: "43%", label: "U.S. market share after 'Just Do It'" },
            { value: "$46.3B", label: "Annual revenue FY2025" },
            { value: "60+", label: "Years of continuous brand consistency" },
          ].map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl border border-neutral-800 bg-neutral-950 p-6 text-center"
            >
              <div className="font-display text-4xl md:text-5xl text-[#EA553B] tracking-wider mb-2">{s.value}</div>
              <div className="text-neutral-500 text-xs uppercase tracking-wider leading-relaxed">{s.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Final quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-2xl border border-[#EA553B]/30 bg-[#EA553B]/5 p-10 md:p-16 text-center overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(234,85,59,0.08),transparent_70%)]" />
          <NikeSwoosh className="w-24 text-[#EA553B]/30 mx-auto mb-8" />
          <blockquote className="relative text-2xl md:text-4xl font-black text-white italic leading-tight mb-6">
            "I don't love it, but maybe it'll grow on me."
          </blockquote>
          <p className="text-neutral-400">Phil Knight, 1971 — on first seeing the $35 Swoosh</p>
          <p className="text-[#EA553B] mt-3 text-sm font-bold">
            It grew on the entire world.
          </p>
        </motion.div>
      </Section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-neutral-900 py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <NikeSwoosh className="w-16 text-neutral-700" />
          <p className="text-neutral-600 text-sm text-center">
            Brand Analysis Infographic — Color Psychology & Visual Identity Research
          </p>
          <div className="flex items-center gap-2 text-neutral-700">
            <Award className="w-4 h-4" />
            <span className="text-xs uppercase tracking-widest">Startup Studio</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
