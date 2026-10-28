-- ==============================================================================
-- Portfolio PostgreSQL Schema for Supabase (Aryan Patel Portfolio Platform)
-- ==============================================================================

-- 1. Projects Table
CREATE TABLE IF NOT EXISTS public.projects (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    slug TEXT UNIQUE NOT NULL,
    title TEXT NOT NULL,
    category TEXT NOT NULL,
    status TEXT NOT NULL DEFAULT 'Active',
    deployed_url TEXT,
    hugging_face_url TEXT,
    github_url TEXT NOT NULL,
    stack TEXT[] NOT NULL DEFAULT '{}',
    summary TEXT NOT NULL,
    display_badge TEXT DEFAULT 'Active',
    featured_order INT DEFAULT 99,
    is_featured BOOLEAN DEFAULT false,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Photography Stream Table
CREATE TABLE IF NOT EXISTS public.photos (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    location TEXT NOT NULL,
    category TEXT NOT NULL,
    image_url TEXT NOT NULL,
    aspect_ratio TEXT DEFAULT '16/9',
    display_order INT DEFAULT 99,
    is_published BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. LinkedIn Highlights & Social Proof Table
CREATE TABLE IF NOT EXISTS public.linkedin_highlights (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    post_id TEXT UNIQUE NOT NULL,
    title TEXT NOT NULL,
    category TEXT NOT NULL,
    date TEXT NOT NULL,
    url TEXT NOT NULL,
    summary TEXT NOT NULL,
    tags TEXT[] DEFAULT '{}',
    is_published BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. Gaming & Esports Highlights Table
CREATE TABLE IF NOT EXISTS public.gaming_highlights (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    category TEXT NOT NULL,
    tag TEXT NOT NULL,
    description TEXT NOT NULL,
    link_url TEXT,
    display_order INT DEFAULT 99,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. Contact Inquiries & Direct Messages Table
CREATE TABLE IF NOT EXISTS public.contact_messages (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    subject TEXT NOT NULL,
    message TEXT NOT NULL,
    ip_hash TEXT,
    delivery_status TEXT DEFAULT 'pending',
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ==============================================================================
-- Indexes for High-Speed Read Performance
-- ==============================================================================
CREATE INDEX IF NOT EXISTS idx_projects_slug ON public.projects(slug);
CREATE INDEX IF NOT EXISTS idx_projects_featured ON public.projects(is_featured, featured_order);
CREATE INDEX IF NOT EXISTS idx_photos_display ON public.photos(is_published, display_order);
CREATE INDEX IF NOT EXISTS idx_contact_created ON public.contact_messages(created_at DESC);

-- ==============================================================================
-- Row Level Security (RLS) Policies
-- ==============================================================================
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.photos ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.linkedin_highlights ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.gaming_highlights ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

-- Public Read Policies (Allow anyone to view published projects, photos, and highlights)
CREATE POLICY "Allow public read access on projects" 
    ON public.projects FOR SELECT USING (true);

CREATE POLICY "Allow public read access on photos" 
    ON public.photos FOR SELECT USING (is_published = true);

CREATE POLICY "Allow public read access on linkedin highlights" 
    ON public.linkedin_highlights FOR SELECT USING (is_published = true);

CREATE POLICY "Allow public read access on gaming highlights" 
    ON public.gaming_highlights FOR SELECT USING (true);

-- Contact Message Insert Policy (Allow anyone to submit an inquiry through API)
CREATE POLICY "Allow public insertion on contact messages" 
    ON public.contact_messages FOR INSERT WITH CHECK (true);

-- Admin & Service Role Policies (Restricted to authenticated administrators or service_role)
CREATE POLICY "Allow full access to service_role on projects" 
    ON public.projects FOR ALL TO service_role USING (true);

CREATE POLICY "Allow full access to service_role on photos" 
    ON public.photos FOR ALL TO service_role USING (true);

CREATE POLICY "Allow full access to service_role on linkedin_highlights" 
    ON public.linkedin_highlights FOR ALL TO service_role USING (true);

CREATE POLICY "Allow full access to service_role on gaming_highlights" 
    ON public.gaming_highlights FOR ALL TO service_role USING (true);

CREATE POLICY "Allow full access to service_role on contact_messages" 
    ON public.contact_messages FOR ALL TO service_role USING (true);
