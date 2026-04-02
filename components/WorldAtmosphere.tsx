/** Ambient orbs, spheres, and wireframe world shapes — behind main UI (pointer-events none). */

export function WorldAtmosphere() {
  return (
    <div className="app-world-atmosphere" aria-hidden>
      {/* Large soft orbs — simulation / world depth */}
      <div className="app-world-sphere app-world-sphere--1" />
      <div className="app-world-sphere app-world-sphere--2" />
      <div className="app-world-sphere app-world-sphere--3" />
      <div className="app-world-sphere app-world-sphere--4" />
      <div className="app-world-sphere app-world-sphere--5" />
      <div className="app-world-sphere app-world-sphere--6" />
      <div className="app-world-sphere app-world-sphere--7" />
      <div className="app-world-sphere app-world-sphere--8" />
      {/* Smaller accent spheres */}
      <div className="app-world-sphere app-world-sphere--9" />
      <div className="app-world-sphere app-world-sphere--10" />
      <div className="app-world-sphere app-world-sphere--11" />
      <div className="app-world-sphere app-world-sphere--12" />
      <div className="app-world-sphere app-world-sphere--13" />
      <div className="app-world-sphere app-world-sphere--14" />
      {/* Wireframe globe — world / simulation */}
      <svg
        className="app-world-globe"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="100"
          cy="100"
          r="78"
          stroke="rgba(59, 108, 255, 0.14)"
          strokeWidth="1.25"
        />
        <ellipse
          cx="100"
          cy="100"
          rx="36"
          ry="78"
          stroke="rgba(59, 108, 255, 0.11)"
          strokeWidth="1"
        />
        <ellipse
          cx="100"
          cy="100"
          rx="78"
          ry="28"
          stroke="rgba(130, 165, 255, 0.1)"
          strokeWidth="1"
        />
        <ellipse
          cx="100"
          cy="100"
          rx="62"
          ry="78"
          stroke="rgba(59, 108, 255, 0.08)"
          strokeWidth="0.75"
          transform="rotate(52 100 100)"
        />
        <ellipse
          cx="100"
          cy="100"
          rx="62"
          ry="78"
          stroke="rgba(167, 139, 250, 0.09)"
          strokeWidth="0.75"
          transform="rotate(-38 100 100)"
        />
        <circle
          cx="100"
          cy="100"
          r="52"
          stroke="rgba(52, 211, 153, 0.07)"
          strokeWidth="0.75"
          strokeDasharray="4 6"
        />
      </svg>
      {/* Torus / ring hint */}
      <div className="app-world-ring app-world-ring--a" />
      <div className="app-world-ring app-world-ring--b" />
    </div>
  );
}
