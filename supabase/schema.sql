-- Chart-Sensei Database Schema
-- Run this in Supabase SQL Editor after creating a new project

-- Profiles (extends auth.users)
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  email TEXT,
  is_pro BOOLEAN DEFAULT FALSE,
  stripe_customer_id TEXT,
  stripe_subscription_id TEXT,
  analyses_today INTEGER DEFAULT 0,
  analyses_reset_date DATE DEFAULT CURRENT_DATE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Auto-create profile on signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email)
  VALUES (NEW.id, NEW.email);
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE OR REPLACE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Analyses (chart analysis history)
CREATE TABLE IF NOT EXISTS public.analyses (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  analysis JSONB NOT NULL,
  image_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Journal entries
CREATE TABLE IF NOT EXISTS public.journal_entries (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  date DATE NOT NULL,
  pair TEXT NOT NULL,
  direction TEXT CHECK (direction IN ('long', 'short')) NOT NULL,
  strategy TEXT,
  entry_price TEXT,
  stop_loss TEXT,
  take_profit TEXT,
  result TEXT CHECK (result IN ('win', 'loss', 'open', '')),
  pnl TEXT,
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Quiz results
CREATE TABLE IF NOT EXISTS public.quiz_results (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  score INTEGER NOT NULL,
  total INTEGER NOT NULL,
  percentage INTEGER NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Strategy progress
CREATE TABLE IF NOT EXISTS public.strategy_progress (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  strategy_id INTEGER NOT NULL,
  completed BOOLEAN DEFAULT FALSE,
  completed_at TIMESTAMPTZ,
  UNIQUE(user_id, strategy_id)
);

-- RLS Policies
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.analyses ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.journal_entries ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.quiz_results ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.strategy_progress ENABLE ROW LEVEL SECURITY;

-- Users can only read/update their own profile
CREATE POLICY "Users can view own profile" ON public.profiles FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Users can update own profile" ON public.profiles FOR UPDATE USING (auth.uid() = id);

-- Users can CRUD their own analyses
CREATE POLICY "Users can view own analyses" ON public.analyses FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own analyses" ON public.analyses FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Users can CRUD their own journal entries
CREATE POLICY "Users can view own journal" ON public.journal_entries FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own journal" ON public.journal_entries FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own journal" ON public.journal_entries FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can delete own journal" ON public.journal_entries FOR DELETE USING (auth.uid() = user_id);

-- Quiz results
CREATE POLICY "Users can view own quiz results" ON public.quiz_results FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own quiz results" ON public.quiz_results FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Strategy progress
CREATE POLICY "Users can view own progress" ON public.strategy_progress FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own progress" ON public.strategy_progress FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own progress" ON public.strategy_progress FOR UPDATE USING (auth.uid() = user_id);

-- Indexes
CREATE INDEX IF NOT EXISTS idx_analyses_user_id ON public.analyses(user_id);
CREATE INDEX IF NOT EXISTS idx_analyses_created_at ON public.analyses(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_journal_user_id ON public.journal_entries(user_id);
CREATE INDEX IF NOT EXISTS idx_journal_date ON public.journal_entries(date DESC);
