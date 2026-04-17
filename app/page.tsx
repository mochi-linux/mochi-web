import Nav from "./components/Nav";
import Footer from "./components/Footer";

const whyItems = [
  {
    title: "Structured Filesystem",
    desc: "Clean separation between system, applications, and user data.",
  },
  {
    title: "Application Bundles",
    desc: "Self-contained .app directories reduce dependency conflicts.",
  },
  {
    title: "Custom Toolchain",
    desc: "Built entirely from source for full control.",
  },
  {
    title: "Rolling Release",
    desc: "Continuously updated system without fixed versions.",
  },
  {
    title: "Custom Init System",
    desc: "Lightweight and optimized for MochiLinux.",
  },
];

const philosophyItems = [
  { word: "Smooth", desc: "clean and responsive", color: "var(--mochi-green)", bg: "var(--mochi-green-soft)" },
  { word: "Small", desc: "minimal and efficient", color: "var(--mochi-purple)", bg: "var(--mochi-purple-soft)" },
  { word: "Sweet", desc: "simple, elegant, and enjoyable", color: "var(--mochi-pink)", bg: "var(--mochi-pink-soft)" },
];

const teamMembers = [
  {
    name: "Ariz Kamizuki",
    role: "Owner , Core Developer",
    desc: "Architecting the filesystem and init system.",
  },
  {
    name: "Yuuma Hanazawa",
    role: "Website Developer",
    desc: "Building the website and documentation.",
  },
  {
    name: "Luna Hoshigure",
    role: "Tester , Developer",
    desc: "Testing and developing new features.",
  },
];

export default function Home() {
  return (
    <>
      <Nav />

      <main className="pt-14">
        {/* Hero */}
        <section className="max-w-5xl mx-auto px-6 py-24 md:py-36" data-aos="fade-down">
          <span className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest px-2.5 py-1 rounded-full mb-4"
            style={{ background: "var(--mochi-pink-soft)", color: "var(--mochi-pink)" }}>
            Rolling Linux Distribution
          </span>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 leading-tight mb-6">
            MochiLinux
          </h1>
          <p className="text-lg md:text-xl text-zinc-500 dark:text-zinc-400 max-w-2xl leading-relaxed">
            Smooth, Small and Sweet — a modern Linux distribution built from
            scratch with a custom filesystem hierarchy.
          </p>
        </section>

        <div className="border-t border-zinc-200 dark:border-zinc-800" />

        {/* What is MochiLinux */}
        <section id="what-is-mochilinux" className="max-w-5xl mx-auto px-6 py-20" data-aos="fade-down">
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
            What is MochiLinux?
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-2xl mb-6">
            MochiLinux redefines how applications and system files are
            organized. Instead of spreading files across directories like{" "}
            <code className="text-sm font-mono px-1.5 py-0.5 rounded" style={{ background: "var(--mochi-purple-soft)", color: "var(--mochi-purple)" }}>/usr</code>,{" "}
            <code className="text-sm font-mono px-1.5 py-0.5 rounded" style={{ background: "var(--mochi-purple-soft)", color: "var(--mochi-purple)" }}>/opt</code>, and{" "}
            <code className="text-sm font-mono px-1.5 py-0.5 rounded" style={{ background: "var(--mochi-purple-soft)", color: "var(--mochi-purple)" }}>/usr/share</code>,
            MochiLinux centralizes applications into a single location —
            creating a more predictable and user-friendly system.
          </p>
          <pre className="bg-zinc-100 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 text-sm font-mono rounded-lg px-5 py-4 w-fit">
            /Applications
          </pre>
        </section>

        <div className="border-t border-zinc-200 dark:border-zinc-800" />

        {/* Application Model */}
        <section id="application-model" className="max-w-5xl mx-auto px-6 py-20" data-aos="fade-down">
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
            Application Model
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-2xl mb-6">
            Applications are distributed as{" "}
            <code className="text-sm font-mono px-1.5 py-0.5 rounded" style={{ background: "var(--mochi-green-soft)", color: "var(--mochi-green)" }}>.pkg</code>{" "}
            packages and installed as self-contained bundles under{" "}
            <code className="text-sm font-mono px-1.5 py-0.5 rounded" style={{ background: "var(--mochi-green-soft)", color: "var(--mochi-green)" }}>/Applications/&lt;AppName&gt;.app/</code>.
            This design allows applications to be portable, isolated, and easy
            to manage.
          </p>
          <pre className="bg-zinc-100 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 text-sm font-mono rounded-lg px-5 py-4 overflow-x-auto">{`<AppName>.app/
├── exec/
│   └── <arch>/
│       └── <app-binary>
├── library/        # Runtime shared libraries (LD_LIBRARY_PATH)
├── resources/      # Optional assets (icons, UI, data)
└── manifest.json   # Application metadata`}</pre>
        </section>

        <div className="border-t border-zinc-200 dark:border-zinc-800" />

        {/* CLI Applications */}
        <section id="cli-applications" className="max-w-5xl mx-auto px-6 py-20" data-aos="fade-down">
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
            CLI Applications
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-2xl mb-6">
            Command-line tools follow a traditional UNIX layout for
            compatibility, ensuring that standard CLI workflows remain
            unchanged.
          </p>
          <pre className="bg-zinc-100 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 text-sm font-mono rounded-lg px-5 py-4 w-fit">
            /System/bin   (symlinked to /bin)
          </pre>
        </section>

        <div className="border-t border-zinc-200 dark:border-zinc-800" />

        {/* Custom Init System */}
        <section id="custom-init-system" className="max-w-5xl mx-auto px-6 py-20" data-aos="fade-down">
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
            Custom Init System
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-2xl mb-6">
            MochiLinux does not use{" "}
            <code className="text-sm font-mono px-1.5 py-0.5 rounded" style={{ background: "var(--mochi-pink-soft)", color: "var(--mochi-pink)" }}>systemd</code>{" "}
            or{" "}
            <code className="text-sm font-mono px-1.5 py-0.5 rounded" style={{ background: "var(--mochi-pink-soft)", color: "var(--mochi-pink)" }}>OpenRC</code>.
            Instead, it includes a custom-built init and service management
            system designed specifically for performance and simplicity.
          </p>
          <pre className="bg-zinc-100 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 text-sm font-mono rounded-lg px-5 py-4 overflow-x-auto">{`/System/Library/CoreService/SystemDaemon/
├── sysboot    # Boot initialization
├── sysctl     # System control services
└── sysmod     # Module/service management

/System/init  → symlink to sysboot`}</pre>
        </section>

        <div className="border-t border-zinc-200 dark:border-zinc-800" />

        {/* Why MochiLinux */}
        <section id="why-mochilinux" className="max-w-5xl mx-auto px-6 py-20" data-aos="fade-down">
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-10">
            Why MochiLinux?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {whyItems.map((item) => (
              <div
                key={item.title}
                className="border border-zinc-200 dark:border-zinc-800 rounded-xl p-6 hover:border-[var(--mochi-purple)] transition-colors"
              >
                <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        <div className="border-t border-zinc-200 dark:border-zinc-800" />

        {/* Philosophy */}
        <section id="philosophy" className="max-w-5xl mx-auto px-6 py-20" data-aos="fade-down">
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-10">
            Philosophy
          </h2>
          <div className="flex flex-col sm:flex-row gap-4">
            {philosophyItems.map((item) => (
              <div key={item.word} className="flex-1 rounded-xl p-6"
                style={{ background: item.bg }}>
                <p className="text-lg font-semibold mb-1" style={{ color: item.color }}>
                  {item.word}
                </p>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        <div className="border-t border-zinc-200 dark:border-zinc-800" />

        {/* Team */}
        <section id="team" className="max-w-5xl mx-auto px-6 py-20" data-aos="fade-down">
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-10">
            Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="border border-zinc-200 dark:border-zinc-800 rounded-xl p-6 hover:border-[var(--mochi-pink)] transition-colors"
              >
                <div className="w-16 h-16 rounded-full bg-zinc-200 dark:bg-zinc-800 mb-4 flex items-center justify-center">
                  <span className="text-xl font-semibold text-zinc-600 dark:text-zinc-300">
                    {member.name.charAt(0)}
                  </span>
                </div>
                <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 mb-1">
                  {member.name}
                </h3>
                <p className="text-xs text-[var(--mochi-purple)] mb-2">
                  {member.role}
                </p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  {member.desc}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
