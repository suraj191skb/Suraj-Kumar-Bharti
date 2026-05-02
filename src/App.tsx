import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Briefcase, 
  GraduationCap, 
  Award, 
  Mail, 
  Phone, 
  Linkedin, 
  Download, 
  ExternalLink, 
  ChevronRight, 
  Menu, 
  X, 
  Moon, 
  Sun,
  Laptop,
  Users,
  Megaphone,
  CheckCircle2,
  TrendingUp,
  Globe
} from 'lucide-react';

// --- Components ---

const Navbar = ({ theme, toggleTheme }: { theme: string; toggleTheme: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="text-2xl font-display font-bold tracking-tight">
          SKB<span className="text-accent">.</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {links.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium hover:text-accent transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full glass hover:bg-white/10 transition-colors"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a 
            href="#contact" 
            className="px-5 py-2 bg-accent text-brand-900 rounded-full text-sm font-bold hover:brightness-110 transition-all transform hover:-translate-y-0.5 shadow-lg shadow-accent/20"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center space-x-4">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full glass"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {links.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contact" 
                onClick={() => setIsOpen(false)}
                className="w-full py-3 bg-accent text-brand-900 rounded-xl text-center font-bold"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const SectionHeading = ({ label, title }: { label: string; title: string }) => (
  <div className="mb-12">
    <motion.span 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      className="text-xs font-bold tracking-[0.3em] uppercase text-accent mb-3 block"
    >
      {label}
    </motion.span>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="text-3xl md:text-4xl font-display font-bold"
    >
      {title}
    </motion.h2>
    <div className="h-1 w-20 bg-accent mt-4"></div>
  </div>
);

// --- Main Page ---

export default function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  const stats = [
    { label: 'Clients Onboarded', value: '9+', icon: Users },
    { label: 'Certifications', value: '6+', icon: Award },
    { label: 'B.Com CGPA', value: '7.36', icon: GraduationCap },
    { label: 'MBA Batch', value: '2026', icon: Briefcase },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden selection:bg-accent selection:text-brand-900">
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* Hero */}
      <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
        <div className="container mx-auto flex flex-col items-center text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 glass rounded-full mb-6 mx-auto">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              <span className="text-xs font-bold tracking-widest uppercase">Open to Opportunities</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-display font-bold leading-tight mb-4">
              Suraj Kumar <br />
              <span className="text-accent underline decoration-accent/30 underline-offset-8">Bharti</span>
            </h1>
            <p className="text-xl md:text-3xl text-slate-400 font-light mb-10 mx-auto">
              MBA student at <span className="text-white font-medium">BHU</span> with a <span className="text-accent underline decoration-accent/30 underline-offset-4">Specialization in Foreign Trade</span>.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="#experience" className="px-10 py-5 bg-accent text-brand-900 rounded-full font-bold shadow-xl shadow-accent/20 hover:scale-105 transition-transform flex items-center gap-2">
                View Portfolio <ChevronRight size={18} />
              </a>
              <a href="#contact" className="px-10 py-5 glass rounded-full font-bold hover:bg-white/10 transition-all border border-white/20">
                Contact Me
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bg Glows */}
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-accent/10 blur-[120px] rounded-full -z-10"></div>
        <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-gold/10 blur-[120px] rounded-full -z-10"></div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 border-y border-white/5 bg-brand-800/30">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-center md:text-left flex items-center md:flex-row flex-col gap-4"
            >
              <div className="p-3 bg-white/5 rounded-2xl text-accent border border-white/10">
                <stat.icon size={24} />
              </div>
              <div>
                <p className="text-3xl font-display font-bold leading-tight">{stat.value}</p>
                <p className="text-xs uppercase tracking-widest text-slate-500 font-medium">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <SectionHeading label="About Me" title="Marketing Student with a Vision" />
              <div className="grid md:grid-cols-5 gap-12 items-start">
                <div className="md:col-span-3">
                  <p className="text-xl text-slate-400 leading-relaxed mb-6">
                    I am a detail-oriented <strong className="text-white">MBA candidate specializing in Foreign Trade</strong> at Banaras Hindu University, one of India's most prestigious institutions. My academic journey is a blend of international trade theory and practical marketing acumen.
                  </p>
                  <p className="text-xl text-slate-400 leading-relaxed mb-8">
                    I'm currently building <strong className="text-white">SajalOnline</strong>, a digital marketing agency focusing on SEO, SEM, and branding. My goal is to bridge the gap between global market trends and local business execution.
                  </p>
                </div>
                
                <div className="md:col-span-2 grid grid-cols-1 gap-4">
                  {[
                    'Analytical Thinking',
                    'Client Negotiation',
                    'Project Management',
                    'Digital Strategy',
                    'Bilingual (English/Hindi)',
                    'Adaptability'
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3 p-4 glass rounded-[20px]">
                      <CheckCircle2 size={18} className="text-accent" />
                      <span className="font-medium text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Career Objective Card moved below the about split */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-16 glass p-8 md:p-12 rounded-[40px] relative overflow-hidden"
          >
            <div className="relative z-10">
              <h3 className="text-2xl font-display font-medium text-accent mb-6 flex items-center gap-3">
                <Award /> Career Objective
              </h3>
              <p className="text-slate-300 leading-loose italic text-xl md:text-2xl max-w-4xl">
                "To contribute to international business operations and marketing strategy by leveraging data-driven insights. I aspire to help brands navigate global marketplace complexities while driving measurable growth through innovation."
              </p>
              <div className="mt-10 pt-10 border-t border-white/10 flex flex-wrap gap-3">
                {['Business Development', 'Export Management', 'Digital Marketing', 'Global Sales', 'Consumer Research'].map(tag => (
                  <span key={tag} className="px-5 py-2 glass text-xs font-bold uppercase tracking-widest text-accent/80 rounded-full border border-accent/10">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            {/* Background pattern */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[80px] -mr-32 -mt-32"></div>
          </motion.div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-20 px-6 bg-brand-800/50">
        <div className="container mx-auto">
          <SectionHeading label="Capabilities" title="Skills & Competencies" />
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Group 1 */}
            <div className="glass p-8 rounded-[24px]">
              <div className="mb-6 flex justify-between items-center">
                <Laptop className="text-accent" />
                <span className="text-[10px] font-bold uppercase tracking-widest opacity-50">Tools & Tech</span>
              </div>
              <h3 className="text-xl font-bold mb-6">Marketing & Software</h3>
              <div className="space-y-6">
                {[
                  { name: 'AI in Marketing', pct: 85 },
                  { name: 'Advanced Excel', pct: 80 },
                  { name: 'GA4 / SEO Tools', pct: 78 },
                  { name: 'ZOHO CRM', pct: 75 },
                ].map(skill => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-accent font-bold">{skill.pct}%</span>
                    </div>
                    <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.pct}%` }}
                        transition={{ duration: 1 }}
                        className="h-full bg-accent"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Group 2 */}
            <div className="glass p-8 rounded-[24px]">
              <div className="mb-6 flex justify-between items-center">
                <Megaphone className="text-accent" />
                <span className="text-[10px] font-bold uppercase tracking-widest opacity-50">Strategy</span>
              </div>
              <h3 className="text-xl font-bold mb-6">Digital Expertise</h3>
              <div className="flex flex-wrap gap-2">
                {['Meta Ads', 'Content Strategy', 'Email Marketing', 'Copywriting', 'Competitor Analysis', 'Brand Identity', 'Product Positioning'].map(tag => (
                  <span key={tag} className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm hover:border-accent/30 hover:bg-accent/5 transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-8 p-4 bg-accent/5 border border-accent/20 rounded-2xl flex items-start gap-3">
                <Award size={20} className="text-accent shrink-0" />
                <p className="text-xs text-slate-400">Awarded for the best digital marketing research project in Q1 2025 batch.</p>
              </div>
            </div>

            {/* Group 3 */}
            <div className="glass p-8 rounded-[24px]">
              <div className="mb-6 flex justify-between items-center">
                <Users className="text-accent" />
                <span className="text-[10px] font-bold uppercase tracking-widest opacity-50">Interpersonal</span>
              </div>
              <h3 className="text-xl font-bold mb-6">Core Strengths</h3>
              <div className="space-y-4">
                {[
                  'Strategic Communication',
                  'Negotiation & Sales',
                  'Export Documentation',
                  'SCM Knowledge',
                  'Customer Relations',
                ].map(item => (
                  <div key={item} className="flex items-center gap-3 glass p-3 rounded-xl">
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <SectionHeading label="Work History" title="Professional Experience" />

          <div className="space-y-12 relative before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-white/10 ml-4 pl-12">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <div className="absolute -left-[64px] top-4 w-4 h-4 rounded-full border-4 border-brand-900 bg-accent ring-8 ring-accent/10"></div>
              <p className="text-accent text-xs font-bold uppercase tracking-widest mb-2">July 2025 — August 2025</p>
              <h3 className="text-2xl font-display font-bold">Sales & Marketing Intern</h3>
              <p className="text-slate-400 mb-6">Rudra Shares & Stock Brokers Ltd. — Varanasi</p>
              
              <ul className="space-y-4 text-slate-300">
                <li className="flex gap-4">
                  <div className="mt-1.5 shrink-0"><CheckCircle2 size={16} className="text-accent" /></div>
                  <p>Onboarded <strong className="text-white">9 new clients</strong> in 2 months through proactive outreach and market relationship building.</p>
                </li>
                <li className="flex gap-4">
                  <div className="mt-1.5 shrink-0"><CheckCircle2 size={16} className="text-accent" /></div>
                  <p>Analysed market trends and collaborated with research teams to align product offerings with client goals.</p>
                </li>
                <li className="flex gap-4">
                  <div className="mt-1.5 shrink-0"><CheckCircle2 size={16} className="text-accent" /></div>
                  <p>Designed and delivered high-impact pitch decks for potential high-value investors.</p>
                </li>
              </ul>

              <div className="mt-8 glass p-6 rounded-2xl flex items-center justify-between border-l-4 border-l-gold">
                <div>
                  <p className="text-gold font-bold mb-1">Key Performance</p>
                  <p className="text-sm">Achieved 120% of acquisition targets.</p>
                </div>
                <Users size={32} className="opacity-20 translate-x-4" />
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <div className="absolute -left-[64px] top-4 w-4 h-4 rounded-full border-4 border-brand-900 bg-white/20"></div>
              <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-2">2024 — Present</p>
              <h3 className="text-2xl font-display font-bold">Founder & Strategist</h3>
              <p className="text-slate-400 mb-6">SajalOnline — Digital Agency</p>
              <p className="text-slate-400 leading-relaxed">
                Managing a specialized digital presence agency providing SEO, SEM, and brand consultancy for local businesses. Leading strategy, client acquisition, and operational management.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Education & Certs - Grid */}
      <section className="py-20 px-6 bg-white/[0.02]">
        <div className="container mx-auto grid lg:grid-cols-2 gap-16">
          {/* Education */}
          <div id="education">
            <SectionHeading label="Learning" title="Education" />
            <div className="space-y-6">
              {[
                { school: 'Banaras Hindu University', degree: 'MBA (Foreign Trade)', year: '2026', current: true },
                { school: 'Banaras Hindu University', degree: 'B.Com (Honours)', year: '2024', grade: '7.36 CGPA' },
                { school: 'JNV Siddharthnagar', degree: '12th Class (Commerce)', year: '2020', grade: '72.20%' },
              ].map(edu => (
                <div key={edu.school + edu.degree} className="glass p-6 rounded-2xl hover:border-accent/30 transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-lg">{edu.degree}</h4>
                    {edu.current && <span className="bg-accent/10 text-accent text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">In Progress</span>}
                  </div>
                  <p className="text-slate-400 text-sm mb-4">{edu.school}</p>
                  <div className="flex justify-between items-center text-xs font-bold uppercase tracking-widest text-slate-500">
                    <span>{edu.year}</span>
                    <span className="text-accent">{edu.grade}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div id="certifications">
            <SectionHeading label="Badges" title="Certifications" />
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { name: 'Digital Marketing', org: 'SIDH', date: '2026 (Expected)' },
                { name: 'Supply Chain Management', org: 'SIDH', date: '2025' },
                { name: 'GST Workshop', org: 'ICAI', date: '2022' },
                { name: 'Project Management', org: 'ZOHO', date: '2025' },
                { name: 'Yoga Certificate', org: 'BHU', date: '2024' },
                { name: 'Export Import Management', org: 'Learnvern', date: '2026' },
              ].map(cert => (
                <div key={cert.name} className="glass p-5 rounded-2xl flex items-center gap-4">
                  <div className="p-2 bg-accent/10 rounded-lg text-accent">
                    <Award size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold leading-tight mb-1">{cert.name}</h4>
                    <p className="text-[10px] text-slate-500 uppercase tracking-widest">{cert.org}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-6 relative overflow-hidden">
        <div className="container mx-auto max-w-5xl">
          <SectionHeading label="Let's Talk" title="Get in Touch" />
          
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <p className="text-xl text-slate-400 font-light mb-12">
                Whether you're looking for a fresh perspective, a project collaborator, or a dedicated team member — let's have a conversation.
              </p>
              
              <div className="space-y-8">
                {[
                  { icon: Mail, label: 'Email', value: 'suraj191skb@gmail.com', href: 'mailto:suraj191skb@gmail.com' },
                  { icon: Phone, label: 'Call', value: '+91 63874 45404', href: 'tel:+916387445404' },
                  { icon: Linkedin, label: 'LinkedIn', value: 'suraj191', href: 'https://linkedin.com/in/suraj191' },
                ].map(item => (
                  <a 
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-6 group"
                  >
                    <div className="p-4 glass rounded-2xl text-accent group-hover:bg-accent group-hover:text-brand-900 transition-all">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold mb-1">{item.label}</p>
                      <p className="text-lg font-bold group-hover:text-accent transition-colors">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <form className="glass p-8 md:p-10 rounded-[32px] space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest opacity-50 ml-1">Name</label>
                  <input type="text" placeholder="Rahul" className="w-full glass p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest opacity-50 ml-1">Email</label>
                  <input type="email" placeholder="rahul@example.com" className="w-full glass p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent transition-all" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest opacity-50 ml-1">Message</label>
                <textarea rows={4} placeholder="Let's build something..." className="w-full glass p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent transition-all resize-none" />
              </div>
              <button className="w-full py-5 bg-accent text-brand-900 rounded-2xl font-bold uppercase tracking-[0.2em] shadow-xl shadow-accent/20 hover:scale-[1.02] active:scale-[0.98] transition-all">
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Floating circles decoration */}
        <div className="absolute top-1/2 -right-40 w-80 h-80 bg-accent/5 blur-[100px] rounded-full -z-10 animate-pulse"></div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 bg-brand-800">
        <div className="container mx-auto px-6 text-center">
          <div className="text-3xl font-display font-bold mb-10">
            SKB<span className="text-accent">.</span>
          </div>
          
          <div className="flex justify-center gap-6 mb-12">
            {[Linkedin, Mail, Download, Globe].map((Icon, i) => (
              <a key={i} href="#" className="p-3 glass rounded-xl hover:text-accent transition-all">
                <Icon size={20} />
              </a>
            ))}
          </div>
          
          <p className="text-slate-500 text-sm font-medium">
            © 2025 Suraj Kumar Bharti. Developed for global impact.
          </p>
        </div>
      </footer>
    </div>
  );
}
