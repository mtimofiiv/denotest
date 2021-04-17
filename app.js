import { serve } from 'https://deno.land/std@0.93.0/http/server.ts'

const s = serve({ port: 1234 })

for await (const req of s) {
  const headers = new Headers({ 'Content-Type': 'application/json' })

  req.respond({
    headers,
    body: JSON.stringify({ poop: true })
  })
}
