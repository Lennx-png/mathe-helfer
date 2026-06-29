-- In Supabase: SQL Editor -> New Query -> Dieses Skript ausführen
-- Danach in Render: SUPABASE_URL und SUPABASE_KEY als Env-Vars setzen

CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  username TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS user_progress (
  id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  data_key TEXT NOT NULL,
  data_value TEXT NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, data_key)
);

CREATE INDEX IF NOT EXISTS idx_user_progress_user_id ON user_progress(user_id);
