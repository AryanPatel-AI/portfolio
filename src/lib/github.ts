export interface ProjectMetric {
  name: string;
  description: string;
  stars: number;
  forks: number;
  primaryLanguage: string;
  repoUrl: string;
}

export interface GitHubPortfolioStats {
  username: string;
  totalRepos: number;
  featuredProjectsCount: number;
  topProjects: ProjectMetric[];
  updatedAt: string;
  isFallback: boolean;
}

const FEATURED_REPOS = [
  {
    name: "TradeSphere",
    desc: "Production Indian stock market terminal & derivatives platform",
    stars: 12,
    forks: 4,
    lang: "TypeScript",
  },
  {
    name: "ai-event-organiser",
    desc: "Modern event coordination platform built with Next.js, Convex & Clerk",
    stars: 8,
    forks: 2,
    lang: "TypeScript",
  },
  {
    name: "VYRO",
    desc: "AI-powered social and brand management ecosystem",
    stars: 6,
    forks: 1,
    lang: "TypeScript",
  },
  {
    name: "FaceRecognition",
    desc: "Neural biometric vision & spatial facial embedding extraction",
    stars: 5,
    forks: 3,
    lang: "Python",
  },
  {
    name: "aitranslator-webapp",
    desc: "Continuous Speech-to-Text & neural translation PWA",
    stars: 4,
    forks: 1,
    lang: "Python",
  },
];

export function getFallbackGitHubStats(): GitHubPortfolioStats {
  return {
    username: "AryanPatel-AI",
    totalRepos: 18,
    featuredProjectsCount: FEATURED_REPOS.length,
    topProjects: FEATURED_REPOS.map((r) => ({
      name: r.name,
      description: r.desc,
      stars: r.stars,
      forks: r.forks,
      primaryLanguage: r.lang,
      repoUrl: `https://github.com/AryanPatel-AI/${r.name}`,
    })),
    updatedAt: new Date().toISOString(),
    isFallback: true,
  };
}

export async function fetchGitHubPortfolioStats(): Promise<GitHubPortfolioStats> {
  const fallback = getFallbackGitHubStats();

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 2500);

    const userRes = await fetch("https://api.github.com/users/AryanPatel-AI", {
      signal: controller.signal,
      headers: {
        Accept: "application/vnd.github.v3+json",
        "User-Agent": "AryanPatel-Portfolio-Backend",
      },
      next: { revalidate: 3600 },
    });

    clearTimeout(timeout);

    if (!userRes.ok) {
      return fallback;
    }

    const userData = await userRes.json();

    return {
      username: "AryanPatel-AI",
      totalRepos: userData.public_repos || fallback.totalRepos,
      featuredProjectsCount: fallback.topProjects.length,
      topProjects: fallback.topProjects,
      updatedAt: new Date().toISOString(),
      isFallback: false,
    };
  } catch {
    return fallback;
  }
}
