import React, { useState } from "react";

const POSTS = [
  {
    id: 1,
    title: "Designing Calm Interfaces",
    date: "2025-12-11",
    tag: "Design",
    readingTime: "6 min read",
    excerpt:
      "Use whitespace, hierarchy and subtle motion to create a quiet, premium experience inspired by Apple.",
    content: [
      "Apple-style UI 看起來很簡單，但每一個元素都有明確的角色。先決定畫面上『最重要的一件事』，其他都讓位給它。",
      "保持顏色節制：背景使用單一深色或淺色，搭配一個主色與少量中性色，讓字體與版面成為主角。",
      "加入極輕的陰影、細邊框與柔和的圓角，可以讓整體有硬體般的質感，但不顯得浮誇。"
    ]
  },
  {
    id: 2,
    title: "A Minimal Layout for Tech Blogs",
    date: "2025-11-28",
    tag: "Product",
    readingTime: "4 min read",
    excerpt:
      "Homepage, list view and article view — just enough pages to start a focused tech or design journal.",
    content: [
      "對部落格來說，最重要的是『讀起來舒服』。字的尺寸、行距、每行字數都會影響閱讀體驗。",
      "首頁只做兩件事：清楚告訴訪客這是什麼，以及推薦一篇你希望大家先看的文章。"
    ]
  },
  {
    id: 3,
    title: "Typography that Feels Like Hardware",
    date: "2025-10-05",
    tag: "Typography",
    readingTime: "5 min read",
    excerpt:
      "Let precise typography carry most of the visual weight and keep decoration to a minimum.",
    content: [
      "選用乾淨的無襯線字體，使用粗細、大小與間距來建立層級，而不是靠花俏的字型。",
      "標題可以稍微拉大字距，讓畫面有一種『精密加工』的硬體感。"
    ]
  }
];

function classNames(...c) {
  return c.filter(Boolean).join(" ");
}

function Layout({ children, currentPage, onNav }) {
  const navItems = [
    { id: "home", label: "Home" },
    { id: "posts", label: "Articles" },
    { id: "about", label: "About" }
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 flex flex-col">
      {/* Top nav */}
      <header className="sticky top-0 z-20 border-b border-white/5 bg-zinc-950/70 backdrop-blur-xl">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-2xl bg-gradient-to-br from-zinc-50 via-zinc-300 to-zinc-500 shadow-[0_0_30px_rgba(255,255,255,0.3)]" />
            <div className="leading-tight">
              <div className="text-sm font-semibold tracking-tight">
                quiet.blog
              </div>
              <div className="text-[11px] text-zinc-400 tracking-wide">
                Minimal stories · Tech taste
              </div>
            </div>
          </div>

          <nav className="hidden sm:flex items-center gap-6 text-xs font-medium text-zinc-400">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNav(item.id)}
                className={classNames(
                  "relative transition-colors hover:text-zinc-100",
                  currentPage === item.id && "text-zinc-50"
                )}
              >
                {item.label}
                {currentPage === item.id && (
                  <span className="absolute -bottom-1 left-0 right-0 mx-auto h-px w-6 bg-gradient-to-r from-transparent via-zinc-50 to-transparent" />
                )}
              </button>
            ))}
          </nav>

          <button className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] font-medium text-zinc-100 shadow-[0_0_0_1px_rgba(255,255,255,0.06)] hover:bg-white/10">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Subscribe
          </button>
        </div>
      </header>

      {/* Main */}
      <main className="flex-1">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16">
          {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-6 text-[11px] text-zinc-500 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span>© {new Date().getFullYear()} quiet.blog. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <button className="hover:text-zinc-300">RSS</button>
            <button className="hover:text-zinc-300">X</button>
            <button className="hover:text-zinc-300">GitHub</button>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Home({ onOpenPost }) {
  const featured = POSTS[0];
  const others = POSTS.slice(1);

  return (
    <div className="space-y-12">
      {/* Hero */}
      <section className="grid gap-10 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[11px] text-zinc-300">
            <span className="rounded-full bg-zinc-100 px-2 py-0.5 text-[10px] font-semibold text-zinc-900">
              NEW
            </span>
            <span className="uppercase tracking-[0.16em]">
              Apple-inspired blog starter
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
            A calm blog for sharp ideas.
          </h1>
          <p className="max-w-xl text-sm sm:text-base text-zinc-400">
            極簡深色主題、細邊框、柔和陰影，適合寫產品想法、設計心得或技術筆記。
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => onOpenPost(featured)}
              className="inline-flex items-center justify-center rounded-full bg-zinc-50 px-4 py-2 text-[13px] font-medium text-zinc-900 shadow-lg shadow-zinc-900/60 hover:bg-white"
            >
              Read featured article
            </button>
          </div>
        </div>

        {/* Right preview card */}
        <div className="relative">
          <div className="pointer-events-none absolute -inset-10 bg-[radial-gradient(circle_at_top,_rgba(244,244,245,0.18)_0,_transparent_60%)]" />
          <div className="relative rounded-3xl border border-white/10 bg-gradient-to-b from-zinc-900 via-zinc-950 to-black p-5 shadow-[0_40px_120px_rgba(0,0,0,0.9)]">
            <div className="flex items-center justify-between text-[11px] text-zinc-400">
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Live preview
              </span>
              <span className="rounded-full border border-white/10 px-2 py-0.5 text-[10px] text-zinc-300">
                Blog · Minimal
              </span>
            </div>
            <div className="mt-4 rounded-2xl border border-white/10 bg-zinc-900/70 p-4">
              <p className="text-[10px] uppercase tracking-[0.16em] text-zinc-500">
                Featured article
              </p>
              <h2 className="mt-3 text-sm font-medium">{featured.title}</h2>
              <p className="mt-2 text-xs text-zinc-400 line-clamp-3">
                {featured.excerpt}
              </p>
              <div className="mt-4 flex items-center justify-between text-[11px] text-zinc-500">
                <span>{featured.date}</span>
                <span>{featured.readingTime}</span>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3 text-[11px] text-zinc-400">
              <div className="rounded-xl border border-white/10 bg-zinc-900/60 p-3">
                <p className="text-[10px] uppercase tracking-[0.16em] text-zinc-500">
                  Layout
                </p>
                <p className="mt-1 font-medium text-zinc-50">
                  Home · List · Article
                </p>
                <p className="mt-1 text-[11px] text-zinc-400">
                  三頁就能開始寫，之後再擴充。
                </p>
              </div>
              <div className="rounded-xl border border-white/10 bg-zinc-900/40 p-3">
                <p className="text-[10px] uppercase tracking-[0.16em] text-zinc-500">
                  Style
                </p>
                <p className="mt-1 font-medium text-zinc-50">
                  Apple-like minimal
                </p>
                <p className="mt-1 text-[11px] text-zinc-400">
                  深色背景、細邊線、重視字體與版面。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest posts */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-medium text-zinc-200">Latest articles</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {POSTS.map((post) => (
            <button
              key={post.id}
              onClick={() => onOpenPost(post)}
              className="group flex flex-col items-stretch rounded-2xl border border-white/5 bg-white/[0.01] p-4 text-left transition hover:border-white/15 hover:bg-white/[0.03]"
            >
              <div className="flex items-center justify-between text-[11px] text-zinc-500">
                <span>{post.date}</span>
                <span className="rounded-full border border-white/10 px-2 py-0.5 text-[10px] text-zinc-300">
                  {post.tag}
                </span>
              </div>
              <h3 className="mt-3 text-sm font-medium group-hover:text-zinc-50">
                {post.title}
              </h3>
              <p className="mt-2 text-xs text-zinc-400 line-clamp-3">
                {post.excerpt}
              </p>
              <div className="mt-4 flex items-center justify-between text-[11px] text-zinc-500">
                <span>{post.readingTime}</span>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity">
                  Read →
                </span>
              </div>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}

function Posts({ onOpenPost }) {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <p className="text-[11px] uppercase tracking-[0.16em] text-zinc-500">
          Archive
        </p>
        <h1 className="text-2xl font-semibold tracking-tight">All articles</h1>
        <p className="text-sm text-zinc-400 max-w-xl">
          所有文章依時間排序。你可以把這頁當作部落格的主索引頁，再慢慢接上分類、搜尋等功能。
        </p>
      </div>

      <div className="divide-y divide-white/5 rounded-2xl border border-white/5 bg-white/[0.01]">
        {POSTS.map((post) => (
          <button
            key={post.id}
            onClick={() => onOpenPost(post)}
            className="w-full text-left px-4 sm:px-6 py-4 sm:py-5 flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-6 hover:bg-white/[0.03] transition"
          >
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2 text-[11px] text-zinc-500">
                <span>{post.date}</span>
                <span className="h-0.5 w-0.5 rounded-full bg-zinc-600" />
                <span>{post.tag}</span>
              </div>
              <h2 className="mt-1 text-sm font-medium text-zinc-50">
                {post.title}
              </h2>
              <p className="mt-1 text-xs text-zinc-400 line-clamp-2">
                {post.excerpt}
              </p>
            </div>
            <div className="flex flex-col items-end justify-between gap-2 text-[11px] text-zinc-500">
              <span>{post.readingTime}</span>
              <span className="hidden sm:inline">Open →</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

function PostDetail({ post, onBack }) {
  if (!post) return null;

  const related = POSTS.filter((p) => p.id !== post.id).slice(0, 2);

  return (
    <div className="grid gap-10 lg:grid-cols-[minmax(0,2.2fr)_minmax(0,1fr)]">
      <article>
        <button
          onClick={onBack}
          className="text-[11px] text-zinc-400 hover:text-zinc-100 mb-6 inline-flex items-center gap-1"
        >
          <span>←</span>
          <span>Back to articles</span>
        </button>

        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-2 text-[11px] text-zinc-500">
            <span>{post.date}</span>
            <span className="h-0.5 w-0.5 rounded-full bg-zinc-600" />
            <span>{post.tag}</span>
            <span className="h-0.5 w-0.5 rounded-full bg-zinc-600" />
            <span>{post.readingTime}</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">
            {post.title}
          </h1>
        </div>

        <div className="mt-8 space-y-5 text-sm leading-relaxed text-zinc-300">
          {post.content.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </article>

      <aside className="space-y-4 lg:pl-4">
        <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-4">
          <p className="text-[10px] uppercase tracking-[0.16em] text-zinc-500">
            About this blog
          </p>
          <p className="mt-2 text-xs text-zinc-300">
            一個極簡的 Apple 風格部落格範本。你可以把這裡改成作者介紹、電子報訂閱、或是產品連結。
          </p>
        </div>
        <div className="space-y-3">
          <p className="text-[11px] uppercase tracking-[0.16em] text-zinc-500">
            Related
          </p>
          <div className="space-y-3">
            {related.map((r) => (
              <button
                key={r.id}
                onClick={() => onBack(r)}
                className="w-full text-left rounded-xl border border-white/5 bg-white/[0.02] p-3 hover:bg-white/[0.05]"
              >
                <p className="text-[11px] text-zinc-500">{r.tag}</p>
                <p className="mt-1 text-xs font-medium text-zinc-50 line-clamp-2">
                  {r.title}
                </p>
              </button>
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
}

function About() {
  return (
    <div className="max-w-2xl space-y-6">
      <div className="space-y-3">
        <p className="text-[11px] uppercase tracking-[0.16em] text-zinc-500">
          About
        </p>
        <h1 className="text-2xl font-semibold tracking-tight">
          Built for focused writing.
        </h1>
        <p className="text-sm text-zinc-400">
          這是一個小而完整的部落格起手式，包含首頁、文章列表、文章內頁。風格偏 Apple
          官網，重視排版與留白。
        </p>
      </div>
      <div className="space-y-4 text-sm text-zinc-300">
        <p>
          你可以把假資料換成後端 API、Markdown、或 Headless CMS，版型基本上不用大改就能直接上線。
        </p>
        <p>
          接下來要加深色 / 淺色切換、標籤篩選、搜尋列都很容易。這個版本的目標就是讓你今天就能有一個「看起來不錯」的部落格。
        </p>
      </div>
    </div>
  );
}

export default function App() {
  const [page, setPage] = useState("home");
  const [activePost, setActivePost] = useState(null);

  const openPost = (post) => {
    setActivePost(post);
    setPage("post");
  };

  const backToList = (maybePost) => {
    if (maybePost) {
      setActivePost(maybePost);
      setPage("post");
    } else {
      setPage("posts");
    }
  };

  let content = null;
  if (page === "home") content = <Home onOpenPost={openPost} />;
  if (page === "posts") content = <Posts onOpenPost={openPost} />;
  if (page === "post")
    content = <PostDetail post={activePost} onBack={backToList} />;
  if (page === "about") content = <About />;

  return (
    <Layout
      currentPage={page}
      onNav={(id) => {
        if (id !== "post") setActivePost(null);
        setPage(id);
      }}
    >
      {content}
    </Layout>
  );
}