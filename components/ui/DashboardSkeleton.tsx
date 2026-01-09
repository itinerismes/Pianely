export function DashboardSkeleton() {
  return (
    <div className="grid grid-cols-12 gap-6">
      {/* Guide progression - 8 cols, 2 rows */}
      <div className="col-span-8 row-span-2 bg-white rounded-3xl animate-pulse" style={{ height: '464px' }} />

      {/* Assistant Pianely - 4 cols, 2 rows */}
      <div className="col-span-4 row-span-2 bg-gradient-to-br from-violet-200 to-purple-200 rounded-3xl animate-pulse" style={{ height: '464px' }} />

      {/* Morceaux en cours - 8 cols, 2 rows */}
      <div className="col-span-8 row-span-2 bg-white rounded-3xl animate-pulse" style={{ height: '464px' }} />

      {/* Objectif quotidien - 4 cols, 1 row */}
      <div className="col-span-4 row-span-1 bg-white rounded-3xl animate-pulse" style={{ height: '220px' }} />

      {/* Badges - 4 cols, 2 rows */}
      <div className="col-span-4 row-span-2 bg-white rounded-3xl animate-pulse" style={{ height: '464px' }} />
    </div>
  )
}
