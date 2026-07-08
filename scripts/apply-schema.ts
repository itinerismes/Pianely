import { createClient } from '@supabase/supabase-js'
import * as fs from 'fs'
import * as path from 'path'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('Missing Supabase credentials: set NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in .env.local')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
})

async function applySchema() {
  console.log('Reading schema file...')
  const schemaPath = path.join(process.cwd(), 'supabase-schema.sql')
  const schema = fs.readFileSync(schemaPath, 'utf-8')

  console.log('Applying schema to Supabase...')

  try {
    // Execute the SQL directly via the Supabase REST API
    const response = await fetch(`${supabaseUrl}/rest/v1/rpc/exec_sql`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': supabaseServiceKey,
        'Authorization': `Bearer ${supabaseServiceKey}`
      },
      body: JSON.stringify({ query: schema })
    })

    if (!response.ok) {
      const error = await response.text()
      throw new Error(`Failed to apply schema: ${error}`)
    }

    console.log('Schema applied successfully!')
  } catch (error) {
    console.error('Error applying schema:', error)
    process.exit(1)
  }
}

applySchema()
