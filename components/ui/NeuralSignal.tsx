export function NeuralSignal() {
  return (
    <svg
      viewBox="0 0 480 480"
      className="h-full w-full"
      role="img"
      aria-label="Abstract illustration of connected nodes representing a neural network"
    >
      <defs>
        <linearGradient id="signalStroke" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#22D3EE" />
          <stop offset="100%" stopColor="#8B5CF6" />
        </linearGradient>
        <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#22D3EE" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#22D3EE" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* connective lines */}
      <g stroke="url(#signalStroke)" strokeOpacity="0.35" strokeWidth="1">
        <line x1="90" y1="120" x2="230" y2="90" />
        <line x1="230" y1="90" x2="360" y2="150" />
        <line x1="90" y1="120" x2="150" y2="250" />
        <line x1="230" y1="90" x2="220" y2="230" />
        <line x1="360" y1="150" x2="330" y2="280" />
        <line x1="150" y1="250" x2="220" y2="230" />
        <line x1="220" y1="230" x2="330" y2="280" />
        <line x1="150" y1="250" x2="180" y2="370" />
        <line x1="220" y1="230" x2="270" y2="380" />
        <line x1="330" y1="280" x2="270" y2="380" />
        <line x1="180" y1="370" x2="270" y2="380" />
      </g>

      {/* one signal pulse traveling the primary path */}
      <path
        id="pulsePath"
        d="M90 120 L230 90 L360 150 L330 280 L270 380"
        fill="none"
        stroke="url(#signalStroke)"
        strokeWidth="2"
        strokeDasharray="240"
        className="animate-pulse-line"
      />

      {/* nodes */}
      {[
        { cx: 90, cy: 120, r: 6, drift: "animate-drift-1" },
        { cx: 230, cy: 90, r: 8, drift: "animate-drift-2" },
        { cx: 360, cy: 150, r: 5, drift: "animate-drift-1" },
        { cx: 150, cy: 250, r: 5, drift: "animate-drift-2" },
        { cx: 220, cy: 230, r: 9, drift: "animate-drift-1" },
        { cx: 330, cy: 280, r: 6, drift: "animate-drift-2" },
        { cx: 180, cy: 370, r: 5, drift: "animate-drift-1" },
        { cx: 270, cy: 380, r: 7, drift: "animate-drift-2" },
      ].map((node, i) => (
        <g key={i} className={node.drift}>
          <circle cx={node.cx} cy={node.cy} r={node.r * 3.2} fill="url(#nodeGlow)" />
          <circle
            cx={node.cx}
            cy={node.cy}
            r={node.r}
            fill="none"
            stroke="url(#signalStroke)"
            strokeWidth="1.5"
          />
          <circle cx={node.cx} cy={node.cy} r={node.r - 3 > 0 ? node.r - 3 : 1.5} fill="#22D3EE" fillOpacity="0.85" />
        </g>
      ))}
    </svg>
  );
}
