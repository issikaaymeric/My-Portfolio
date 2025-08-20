import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, FileText, ExternalLink, TerminalSquare, Brain, LineChart, Cpu, Calendar, Send, Link as LinkIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

// ---- CONFIG: Edit these to personalize ---- //
const config = {
  name: "Aymeric Issika",
  headline: "AI • Machine Learning • Deep Learning",
  subheadline:
    "Computer Science student building intelligent systems and exploring the intersection of technology, entrepreneurship, and finance.",
  location: "Côte d’Ivoire",
  email: "issikathereal@gmail.com",
  social: {
    github: "https://github.com/issikaaymeric",
    linkedin: "https://www.linkedin.com/in/",
    x: "https://x.com/issikaaymeric",
  },
  resumeUrl: "/resume/Aymeric_Issika_Resume.pdf", // replace with your hosted PDF path
  avatarUrl:
    "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=512&auto=format&fit=crop",
  // Projects: add/update items here
  projects: [
    {
      title: "Neural Image Classifier",
      description:
        "CNN-based pipeline (TensorFlow/Keras) achieving strong performance on multi-class medical images with Grad-CAM explainability.",
      tech: ["Python", "TensorFlow", "Keras", "NumPy", "OpenCV"],
      links: {
        github: "https://github.com/issikaaymeric",
        demo: "#",
      },
      thumbnail:
        "https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "LSTM Stock Prediction",
      description:
        "Sequence model on historical OHLCV data with feature engineering, walk-forward validation, and backtesting hooks.",
      tech: ["Python", "PyTorch", "Pandas", "Matplotlib"],
      links: {
        github: "https://github.com/issikaaymeric",
        demo: "#",
      },
      thumbnail:
        "https://images.unsplash.com/photo-1526378722484-bd91ca387e72?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "MLOps FastAPI Service",
      description:
        "Containerized inference API with FastAPI + Docker, CI/CD on GitHub Actions, and Prometheus metrics.",
      tech: ["FastAPI", "Docker", "GitHub Actions", "Prometheus"],
      links: {
        github: "https://github.com/issikaaymeric",
        demo: "#",
      },
      thumbnail:
        "https://images.unsplash.com/photo-1552728089-57bdde30beb3?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Vision Transformers (ViT)",
      description:
        "Experiment suite comparing ResNet vs ViT on small datasets with training logs and reproducible seeds.",
      tech: ["PyTorch", "Weights & Biases", "scikit-learn"],
      links: {
        github: "https://github.com/issikaaymeric",
        demo: "#",
      },
      thumbnail:
        "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop",
    },
  ],
  skills: {
    technical: [
      { name: "Python", level: 90 },
      { name: "Machine Learning", level: 85 },
      { name: "Deep Learning", level: 80 },
      { name: "PyTorch", level: 78 },
      { name: "TensorFlow", level: 75 },
      { name: "SQL", level: 70 },
      { name: "FastAPI", level: 72 },
      { name: "Docker", level: 70 },
      { name: "Git/GitHub", level: 85 },
    ],
    soft: [
      { name: "Problem Solving", level: 90 },
      { name: "Collaboration", level: 85 },
      { name: "Communication", level: 80 },
      { name: "Analytical Thinking", level: 88 },
      { name: "Initiative", level: 84 },
    ],
  },
};
// ---- END CONFIG ---- //

const Section = ({ id, title, subtitle, children }) => (
  <section id={id} className="py-20 scroll-mt-24">
    <div className="max-w-6xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-10"
      >
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="text-muted-foreground mt-2 max-w-2xl">{subtitle}</p>
        )}
      </motion.div>
      {children}
    </div>
  </section>
);

const Pill = ({ children }) => (
  <span className="inline-flex items-center rounded-full border px-3 py-1 text-xs md:text-sm">
    {children}
  </span>
);

const ProgressBar = ({ value }) => (
  <div className="w-full h-2 rounded-full bg-muted overflow-hidden">
    <div
      className="h-full bg-primary"
      style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
    />
  </div>
);

const Nav = () => {
  const items = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Resume", href: "#resume" },
    { label: "Connect", href: "#connect" },
    { label: "Contact", href: "#contact" },
  ];
  return (
    <div className="sticky top-0 z-40 border-b backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <nav className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <a href="#home" className="font-semibold">
          {config.name}
        </a>
        <div className="hidden md:flex gap-6 text-sm">
          {items.map((it) => (
            <a key={it.href} href={it.href} className="hover:text-primary">
              {it.label}
            </a>
          ))}
        </div>
        <div className="flex md:hidden gap-3">
          <a href={config.social.github} aria-label="GitHub" target="_blank" rel="noreferrer">
            <Github className="h-5 w-5" />
          </a>
          <a href={config.social.x} aria-label="X" target="_blank" rel="noreferrer">
            <ExternalLink className="h-5 w-5" />
          </a>
          <a href={`mailto:${config.email}`} aria-label="Email">
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </nav>
    </div>
  );
};

const Hero = () => (
  <section id="home" className="pt-20 md:pt-28 pb-12">
    <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs md:text-sm mb-4">
          <TerminalSquare className="h-4 w-4" />
          <span>CS Student · {config.location}</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          {config.headline}
        </h1>
        <p className="text-muted-foreground mt-4 md:text-lg max-w-xl">
          {config.subheadline}
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button asChild>
            <a href="#projects">Explore My Work</a>
          </Button>
          <Button asChild variant="outline">
            <a href="#connect">Let’s Connect</a>
          </Button>
        </div>
        <div className="mt-6 flex gap-3 text-sm">
          <Pill className="">AI</Pill>
          <Pill>ML</Pill>
          <Pill>Deep Learning</Pill>
          <Pill>Fintech</Pill>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="order-first md:order-last"
      >
        <div className="relative">
          <img
            src={config.avatarUrl}
            alt={`${config.name} avatar`}
            className="rounded-2xl w-full aspect-square object-cover shadow-xl"
            loading="lazy"
          />
          <div className="absolute -bottom-4 -left-4 bg-background border rounded-2xl p-3 shadow-md flex items-center gap-2">
            <Brain className="h-5 w-5" /> <span className="text-sm">Research-focused</span>
          </div>
          <div className="absolute -top-4 -right-4 bg-background border rounded-2xl p-3 shadow-md flex items-center gap-2">
            <LineChart className="h-5 w-5" /> <span className="text-sm">AI × Finance</span>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

const About = () => (
  <Section
    id="about"
    title="About Me"
    subtitle="I love building data-driven products and collaborating with founders and finance professionals."
  >
    <div className="grid md:grid-cols-3 gap-6 items-start">
      <Card className="md:col-span-2">
        <CardContent className="p-6">
          <p className="leading-relaxed text-sm md:text-base">
            Hi, I’m <span className="font-medium">{config.name}</span>. I specialize in
            <span className="font-medium"> AI, Machine Learning, and Deep Learning</span> with a
            Computer Science foundation. I enjoy experimenting with neural networks, turning
            research papers into code, and exploring how these tools create value in
            <span className="font-medium"> fintech and entrepreneurship</span>.
          </p>
          <p className="mt-4 leading-relaxed text-sm md:text-base">
            I’m actively seeking internships, research collaborations, and startup projects where I can
            contribute to model development, MLOps, and product experimentation.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild>
              <a href="#connect">Collaborate with me</a>
            </Button>
            <Button asChild variant="outline">
              <a href={config.social.github} target="_blank" rel="noreferrer">
                <Github className="h-4 w-4 mr-2" /> GitHub
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-6 space-y-3 text-sm">
          <div className="flex items-center gap-2"><Cpu className="h-4 w-4" /><span>Focus: AI/ML/DL</span></div>
          <div className="flex items-center gap-2"><LineChart className="h-4 w-4" /><span>Interest: Fintech</span></div>
          <div className="flex items-center gap-2"><Calendar className="h-4 w-4" /><span>Open for: Internships</span></div>
          <div className="flex items-center gap-2"><LinkIcon className="h-4 w-4" /><a className="underline" href={config.social.x} target="_blank" rel="noreferrer">@issikaaymeric</a></div>
        </CardContent>
      </Card>
    </div>
  </Section>
);

const ProjectCard = ({ p }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="group"
  >
    <Card className="overflow-hidden h-full">
      <CardContent className="p-0">
        <div className="relative">
          <img
            src={p.thumbnail}
            alt={`${p.title} thumbnail`}
            className="aspect-video w-full object-cover group-hover:scale-[1.02] transition-transform"
            loading="lazy"
          />
        </div>
        <div className="p-5 space-y-3">
          <h3 className="text-lg font-semibold">{p.title}</h3>
          <p className="text-sm text-muted-foreground">{p.description}</p>
          <div className="flex flex-wrap gap-2">
            {p.tech.map((t) => (
              <Pill key={t}>{t}</Pill>
            ))}
          </div>
          <div className="flex gap-3 pt-2">
            {p.links.github && (
              <Button asChild variant="outline" size="sm">
                <a href={p.links.github} target="_blank" rel="noreferrer">
                  <Github className="h-4 w-4 mr-2" /> Code
                </a>
              </Button>
            )}
            {p.links.demo && p.links.demo !== "#" && (
              <Button asChild size="sm">
                <a href={p.links.demo} target="_blank" rel="noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" /> Demo
                </a>
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  </motion.div>
);

const Projects = () => (
  <Section
    id="projects"
    title="Projects"
    subtitle="Selected work in AI/ML/DL with links to code and demos."
  >
    <div className="grid md:grid-cols-2 gap-6">
      {config.projects.map((p) => (
        <ProjectCard key={p.title} p={p} />
      ))}
    </div>
  </Section>
);

const Skills = () => (
  <Section id="skills" title="Skills" subtitle="A quick snapshot of my technical and soft skills.">
    <div className="grid md:grid-cols-2 gap-8">
      <Card>
        <CardContent className="p-6 space-y-4">
          <h3 className="font-semibold">Technical</h3>
          <div className="space-y-4">
            {config.skills.technical.map((s) => (
              <div key={s.name} className="grid grid-cols-4 items-center gap-3">
                <div className="col-span-1 text-sm">{s.name}</div>
                <div className="col-span-3">
                  <ProgressBar value={s.level} />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-6 space-y-4">
          <h3 className="font-semibold">Soft Skills</h3>
          <div className="space-y-4">
            {config.skills.soft.map((s) => (
              <div key={s.name} className="grid grid-cols-4 items-center gap-3">
                <div className="col-span-1 text-sm">{s.name}</div>
                <div className="col-span-3">
                  <ProgressBar value={s.level} />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  </Section>
);

const Resume = () => (
  <Section id="resume" title="Resume" subtitle="Download my resume or view it in your browser.">
    <Card>
      <CardContent className="p-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <p className="text-sm text-muted-foreground">
            Here’s a concise overview of my education, projects, and experience. I’m open to roles in AI/ML/DL, data, and MLOps.
          </p>
        </div>
        <div className="flex gap-3">
          <Button asChild>
            <a href={config.resumeUrl} target="_blank" rel="noreferrer">
              <FileText className="h-4 w-4 mr-2" /> View
            </a>
          </Button>
          <Button asChild variant="outline">
            <a href={config.resumeUrl} download>
              <FileText className="h-4 w-4 mr-2" /> Download
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  </Section>
);

const Connect = () => (
  <Section
    id="connect"
    title="Let’s Build Something"
    subtitle="I love chatting with founders, investors, and engineers about AI and fintech."
  >
    <Card>
      <CardContent className="p-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-xl font-semibold">Open to collaborations & internships</h3>
          <p className="text-sm text-muted-foreground mt-1">
            Whether it’s an MVP, research project, or data challenge—let’s explore it together.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button asChild>
            <a href={`mailto:${config.email}`}>Email Me</a>
          </Button>
          <Button asChild variant="outline">
            <a href={config.social.github} target="_blank" rel="noreferrer">
              <Github className="h-4 w-4 mr-2" /> GitHub
            </a>
          </Button>
          <Button asChild variant="outline">
            <a href={config.social.x} target="_blank" rel="noreferrer">
              <ExternalLink className="h-4 w-4 mr-2" /> X (Twitter)
            </a>
          </Button>
          <Button asChild variant="outline">
            <a href={config.social.linkedin} target="_blank" rel="noreferrer">
              <Linkedin className="h-4 w-4 mr-2" /> LinkedIn
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  </Section>
);

const Blog = () => {
  const posts = [
    {
      title: "3 ways AI is reshaping fintech risk models",
      date: "2025-07-12",
      excerpt:
        "From alternative data to model monitoring—quick notes on what I’m learning and building.",
      url: "#",
    },
    {
      title: "Reproducibility tips for deep learning experiments",
      date: "2025-06-01",
      excerpt: "Seeds, configs, and logging that save you days.",
      url: "#",
    },
  ];
  return (
    <Section id="blog" title="Thoughts & Insights" subtitle="Occasional notes on AI, ML, and fintech.">
      <div className="grid md:grid-cols-2 gap-6">
        {posts.map((p) => (
          <Card key={p.title}>
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg">{p.title}</h3>
              <p className="text-xs text-muted-foreground mt-1">{new Date(p.date).toDateString()}</p>
              <p className="text-sm mt-3 text-muted-foreground">{p.excerpt}</p>
              <div className="mt-4">
                <Button asChild size="sm" variant="outline">
                  <a href={p.url}>
                    Read more <ExternalLink className="h-4 w-4 ml-2" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
};

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const canSend = useMemo(() => form.name && form.email && form.message, [form]);

  return (
    <Section id="contact" title="Contact" subtitle="Drop a message and I’ll get back to you.">
      <Card>
        <CardContent className="p-6">
          {!sent ? (
            <form
              className="grid md:grid-cols-2 gap-4"
              onSubmit={(e) => {
                e.preventDefault();
                // NOTE: Plug into Formspree, EmailJS, or your backend.
                // For now we just simulate a send.
                setTimeout(() => setSent(true), 500);
              }}
            >
              <div className="space-y-2">
                <label className="text-sm" htmlFor="name">Name</label>
                <Input
                  id="name"
                  placeholder="Your name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm" htmlFor="email">Email</label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-sm" htmlFor="message">Message</label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your idea or role…"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  required
                  rows={6}
                />
              </div>
              <div className="md:col-span-2">
                <Button type="submit" disabled={!canSend}>
                  <Send className="h-4 w-4 mr-2" /> Send Message
                </Button>
              </div>
            </form>
          ) : (
            <div className="py-10 text-center">
              <p className="text-sm">Thanks! Your message has been queued. You can also reach me directly at {" "}
                <a className="underline" href={`mailto:${config.email}`}>{config.email}</a>.
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </Section>
  );
};

const Footer = () => (
  <footer className="border-t py-10 mt-10">
    <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
      <p>
        © {new Date().getFullYear()} {config.name}. Built with React, Tailwind, and shadcn/ui.
      </p>
      <div className="flex items-center gap-4">
        <a href={config.social.github} target="_blank" rel="noreferrer" className="hover:text-primary">
          <Github className="h-4 w-4" />
        </a>
        <a href={config.social.linkedin} target="_blank" rel="noreferrer" className="hover:text-primary">
          <Linkedin className="h-4 w-4" />
        </a>
        <a href={config.social.x} target="_blank" rel="noreferrer" className="hover:text-primary">
          <ExternalLink className="h-4 w-4" />
        </a>
        <a href={`mailto:${config.email}`} className="hover:text-primary">
          <Mail className="h-4 w-4" />
        </a>
      </div>
    </div>
  </footer>
);

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Resume />
      <Connect />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}
