'use client'

import { CheckCircle2, Circle, CheckCircle, MapPin } from 'lucide-react'

const weekData = [
  { day: 'Lun', type: 'Découverte', status: 'pending' },
  { day: 'Mar', type: 'Technique', status: 'pending' },
  { day: 'Mer', type: 'Morceau', status: 'pending' },
  { day: 'Jeu', type: 'Découverte', status: 'pending' },
  { day: 'Ven', type: 'Technique', status: 'pending' },
  { day: 'Sam', type: 'Morceau', status: 'pending' },
  { day: 'Dim', type: 'Révision', status: 'pending' },
]

export function GuideWidget() {
  return (
    <div className="card h-full w-full overflow-hidden p-6 hover:shadow-lg transition-all duration-200">
      <div className="flex items-center gap-3 mb-6">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center"
          style={{
            background: 'linear-gradient(135deg, var(--accent-info) 0%, var(--accent-info-hover) 100%)',
            boxShadow: '0 4px 12px rgba(59, 130, 246, 0.2)'
          }}
        >
          <MapPin className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-base font-semibold tracking-tight" style={{ color: 'var(--text-primary)' }}>
            Guide de progression
          </h2>
          <p className="text-xs" style={{ color: 'var(--text-tertiary)' }}>
            7 jours pour démarrer
          </p>
        </div>
      </div>

      <div className="space-y-2">
        {weekData.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between gap-3"
          >
            <div className="flex items-center gap-3 flex-1">
              {/* Checkbox */}
              {item.status === 'completed' ? (
                <CheckCircle2 className="w-5 h-5 flex-shrink-0" style={{ color: 'var(--accent-success)' }} />
              ) : (
                <Circle className="w-5 h-5 flex-shrink-0" style={{ color: 'var(--border-medium)' }} />
              )}

              {/* Day */}
              <span className="text-xs font-medium w-8 flex-shrink-0" style={{ color: 'var(--text-tertiary)' }}>
                {item.day}
              </span>

              {/* Bar and type */}
              <div
                className={`flex-1 h-10 rounded-lg flex items-center px-3 transition-all duration-200 ${
                  item.status === 'completed' ? '' :
                  item.status === 'in_progress' ? 'border-l-4' : ''
                }`}
                style={
                  item.status === 'completed'
                    ? {
                        background: 'var(--accent-success-bg)',
                        border: '1px solid var(--accent-success)',
                      }
                    : item.status === 'in_progress'
                    ? {
                        background: 'var(--accent-info-bg)',
                        borderLeft: '4px solid var(--accent-info)',
                        border: '1px solid var(--border-light)',
                      }
                    : {
                        background: 'var(--hover-bg)',
                        border: '1px solid var(--border-light)',
                      }
                }
              >
                <span className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
                  {item.type}
                </span>
              </div>
            </div>

            {/* Action button */}
            {item.status === 'in_progress' && (
              <button
                className="px-4 py-2 text-xs font-semibold rounded-lg transition-all duration-200 hover:scale-105 active:scale-95"
                style={{
                  background: 'linear-gradient(135deg, var(--accent-info) 0%, var(--accent-info-hover) 100%)',
                  color: 'white',
                  boxShadow: '0 2px 8px rgba(59, 130, 246, 0.2)'
                }}
              >
                Continuer
              </button>
            )}
            {item.status === 'pending' && (
              <button
                className="px-4 py-2 text-xs font-semibold rounded-lg transition-all duration-200 hover:scale-105 active:scale-95"
                style={{
                  background: 'var(--card-bg)',
                  color: 'var(--accent-success)',
                  border: '1px solid var(--accent-success)',
                }}
              >
                Démarrer
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
