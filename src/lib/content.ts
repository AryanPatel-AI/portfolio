import manifest from "../../content/approved-portfolio-content.json" with { type: "json" };
import { getSupabaseServerClient } from "./supabase/server.ts";

export interface ProjectItem {
  id: string;
  name: string;
  title: string;
  category: string;
  status: string;
  deployedUrl: string | null;
  huggingFaceUrl?: string | null;
  githubUrl: string;
  stack: string[];
  summary: string;
  displayBadge: string;
  featuredOrder?: number;
  featuredOnHome?: boolean;
}

export interface LinkedInHighlight {
  id: string;
  title: string;
  category: string;
  date: string;
  url: string;
  summary: string;
  tags: string[];
}

export interface PhotoItem {
  src: string;
  title: string;
  location: string;
  category: string;
}

export interface GamingHighlight {
  title: string;
  category: string;
  desc: string;
  tag: string;
}

/**
 * Returns all active portfolio projects from Supabase or the approved manifest.
 */
export async function getPortfolioProjects(): Promise<ProjectItem[]> {
  const supabase = getSupabaseServerClient();

  if (supabase) {
    try {
      const { data, error } = await supabase
        .from("projects")
        .select("*")
        .order("featured_order", { ascending: true });

      if (!error && data && data.length > 0) {
        return data.map((row) => ({
          id: row.slug || row.id,
          name: row.slug || row.title,
          title: row.title,
          category: row.category,
          status: row.status,
          deployedUrl: row.deployed_url,
          huggingFaceUrl: row.hugging_face_url,
          githubUrl: row.github_url,
          stack: row.stack || [],
          summary: row.summary,
          displayBadge: row.display_badge || row.status,
          featuredOrder: row.featured_order,
          featuredOnHome: row.is_featured,
        }));
      }
    } catch (e) {
      console.warn("[Content Provider] Supabase read failed, falling back to manifest:", e);
    }
  }

  // Fallback to approved manifest
  const featured = manifest.featuredProjects as ProjectItem[];
  const secondary = manifest.secondaryProjects.map((p, idx) => ({
    ...p,
    deployedUrl: p.deployedUrl || null,
    displayBadge: p.status,
    featuredOrder: 10 + idx,
    featuredOnHome: false,
  })) as ProjectItem[];

  return [...featured, ...secondary];
}

/**
 * Returns approved LinkedIn social highlight cards.
 */
export async function getLinkedInHighlights(): Promise<LinkedInHighlight[]> {
  const supabase = getSupabaseServerClient();

  if (supabase) {
    try {
      const { data, error } = await supabase
        .from("linkedin_highlights")
        .select("*")
        .eq("is_published", true)
        .order("created_at", { ascending: false });

      if (!error && data && data.length > 0) {
        return data.map((row) => ({
          id: row.post_id || row.id,
          title: row.title,
          category: row.category,
          date: row.date,
          url: row.url,
          summary: row.summary,
          tags: row.tags || [],
        }));
      }
    } catch (e) {
      console.warn("[Content Provider] Supabase read failed, falling back to manifest:", e);
    }
  }

  return manifest.linkedInSocialHighlights as LinkedInHighlight[];
}

/**
 * Returns single combined chronological photography stream.
 */
export async function getPhotographyStream(): Promise<PhotoItem[]> {
  const supabase = getSupabaseServerClient();

  if (supabase) {
    try {
      const { data, error } = await supabase
        .from("photos")
        .select("*")
        .eq("is_published", true)
        .order("display_order", { ascending: true });

      if (!error && data && data.length > 0) {
        return data.map((row) => ({
          src: row.image_url,
          title: row.title,
          location: row.location,
          category: row.category,
        }));
      }
    } catch (e) {
      console.warn("[Content Provider] Supabase read failed, falling back to manifest:", e);
    }
  }

  return manifest.photographyLayout.featuredItems as PhotoItem[];
}

/**
 * Returns gaming & esports highlights.
 */
export async function getGamingHighlights(): Promise<GamingHighlight[]> {
  return manifest.gamingHighlights as GamingHighlight[];
}
