const { createClient } = require('@supabase/supabase-js');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '..', '.env') });

const SUPABASE_URL = process.env.SUPABASE_URL;
let SUPABASE_KEY = process.env.SUPABASE_KEY;
if (SUPABASE_KEY && SUPABASE_KEY.includes('eyJ')) {
  SUPABASE_KEY = SUPABASE_KEY.substring(SUPABASE_KEY.indexOf('eyJ'));
}

let supabase;

function getClient() {
  if (!supabase) {
    if (!SUPABASE_URL || !SUPABASE_KEY) {
      throw new Error('SUPABASE_URL und SUPABASE_KEY müssen in .env oder als Umgebungsvariable gesetzt sein');
    }
    supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
  }
  return supabase;
}

async function getUsers() {
  const { data, error } = await getClient().from('users').select('*').order('id');
  if (error) throw error;
  return data || [];
}

async function findUser(username) {
  const { data, error } = await getClient().from('users').select('*').eq('username', username).single();
  if (error && error.code !== 'PGRST116') throw error;
  return data || null;
}

async function addUser(username, passwordHash) {
  const { error } = await getClient().from('users').insert({ username, password_hash: passwordHash });
  if (error) {
    if (error.code === '23505') throw new Error('Benutzer existiert bereits');
    throw error;
  }
}

async function getProgress(userId) {
  const { data, error } = await getClient().from('user_progress').select('data_key, data_value').eq('user_id', userId);
  if (error) throw error;
  const result = {};
  if (data) {
    data.forEach(r => { result[r.data_key] = r.data_value; });
  }
  return result;
}

async function setProgress(userId, dataValue) {
  const client = getClient();
  const { error } = await client.from('user_progress').upsert(
    { user_id: userId, data_key: 'data', data_value: dataValue, updated_at: new Date().toISOString() },
    { onConflict: 'user_id, data_key' }
  );
  if (error) throw error;
}

module.exports = { getUsers, findUser, addUser, getProgress, setProgress };
