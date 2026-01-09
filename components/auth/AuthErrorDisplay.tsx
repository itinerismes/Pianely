interface Props {
  error: string | null
}

export function AuthErrorDisplay({ error }: Props) {
  if (!error) return null

  return (
    <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3">
      <p className="text-sm text-red-400">{error}</p>
    </div>
  )
}
