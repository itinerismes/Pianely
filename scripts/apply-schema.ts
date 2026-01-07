import { createClient } from '@supabase/supabase-js'
import * as fs from 'fs'
import * as path from 'path'

const supabaseUrl = 'https://lyaybmlzjxgdzzaaxfcc.supabase.co'
const supabaseServiceKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx5YXlibWx6anhnZHp6YWF4ZmNjIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2Nzc5MjIwNywiZXhwIjoyMDgzMzY4MjA3fQ.ebvftkQnAcbB6Xw9NJLqukg4W5GxB29yCL7q7hEHY9o'

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
