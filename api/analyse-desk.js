import Anthropic from '@anthropic-ai/sdk'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { image } = req.body
  if (!image) {
    return res.status(400).json({ error: 'No image provided' })
  }

  const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

  try {
    const message = await client.messages.create({
      model: 'claude-sonnet-4-6',
      max_tokens: 500,
      system: `You are a physiotherapist analysing a desk setup photo for a desk worker.
Analyse the image and provide 3-5 specific, actionable observations about the ergonomic setup.
Focus on: screen height relative to eye level, monitor distance, chair height and lumbar support,
keyboard and mouse position, laptop vs external monitor setup, and posture indicators.
Format your response as a JSON array of observations, each with:
- status: 'good' or 'attention'
- observation: what you can see (one sentence)
- recommendation: what to change or maintain (one sentence)
- product: relevant product name if applicable (or null)
Return only the JSON array, no other text.`,
      messages: [
        {
          role: 'user',
          content: [
            {
              type: 'image',
              source: {
                type: 'base64',
                media_type: 'image/jpeg',
                data: image,
              },
            },
            { type: 'text', text: 'Please analyse this desk setup.' },
          ],
        },
      ],
    })

    const text = message.content[0].text
    const parsed = JSON.parse(text)
    res.status(200).json(parsed)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Analysis failed' })
  }
}
