import { createClient } from '@supabase/supabase-js'
import { readFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('❌ Missing Supabase credentials in .env.local')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
})

async function applyMigration() {
  try {
    console.log('📖 Reading migration file...')
    const migrationPath = join(__dirname, '..', 'supabase', 'migrations', '003_pieces_system.sql')
    const sql = readFileSync(migrationPath, 'utf8')

    console.log('🚀 Applying migration...')

    // Split SQL into individual statements (simple split by semicolon)
    const statements = sql
      .split(';')
      .map(s => s.trim())
      .filter(s => s.length > 0 && !s.startsWith('--'))

    for (const statement of statements) {
      console.log(`   Executing: ${statement.substring(0, 50)}...`)
      const { error } = await supabase.rpc('exec_sql', { sql_query: statement + ';' })

      if (error) {
        // If RPC doesn't work, we'll need to use the REST API differently
        console.log('⚠️  RPC method not available, migration needs to be applied manually')
        console.log('📋 Please copy the migration SQL and run it in Supabase Dashboard:')
        console.log('   1. Go to https://supabase.com/dashboard/project/lyaybmlzjxgdzzaaxfcc/sql/new')
        console.log('   2. Copy the contents of: supabase/migrations/003_pieces_system.sql')
        console.log('   3. Paste and run the SQL')
        process.exit(1)
      }
    }

    console.log('✅ Migration applied successfully!')

  } catch (error) {
    console.error('❌ Error applying migration:', error.message)
    console.log('\n📋 Manual migration required:')
    console.log('   1. Go to https://supabase.com/dashboard/project/lyaybmlzjxgdzzaaxfcc/sql/new')
    console.log('   2. Copy the contents of: supabase/migrations/003_pieces_system.sql')
    console.log('   3. Paste and run the SQL')
    process.exit(1)
  }
}

applyMigration()
