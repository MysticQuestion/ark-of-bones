import { useEffect, useState } from 'react';
const END = Date.parse('2026-11-21T21:00:00-08:00');
const START = Date.parse('2026-11-21T15:00:00-08:00');
const TICKETS = 'https://buytickets.at/omegamunuchapter/2490424';
export default function GameNightRibbon() {
  const [now, setNow] = useState(() => Date.now());
  const [dismissed, setDismissed] = useState(() => { try { return sessionStorage.getItem('aob-omega-dismissed') === '1'; } catch { return false; } });
  useEffect(() => { const id = setInterval(() => setNow(Date.now()), 1000); return () => clearInterval(id); }, []);
  if (now >= END || dismissed) return null;
  const remaining = Math.max(0, START - now);
  const days = Math.floor(remaining / 86400000);
  const hours = Math.floor((remaining % 86400000) / 3600000);
  const mins = Math.floor((remaining % 3600000) / 60000);
  const dismiss = () => { setDismissed(true); try { sessionStorage.setItem('aob-omega-dismissed', '1'); } catch {} };
  return <aside className="aob-event-ribbon" aria-label="Sneakers and Jersey Game Night event promotion">
    <style>{`
      .aob-event-ribbon{position:fixed;z-index:10000;left:0;right:0;top:0;isolation:isolate;display:flex;align-items:center;justify-content:center;gap:clamp(9px,2vw,28px);padding:11px 44px 11px 18px;color:#fff;background:linear-gradient(105deg,#100819 0%,#321044 42%,#12081c 100%);border-bottom:1px solid #e4b95d;box-shadow:0 8px 28px #0009;font-family:inherit;overflow:hidden;animation:aobSlideIn .65s cubic-bezier(.2,.8,.2,1) both}
      .aob-event-ribbon:before{content:"";position:absolute;z-index:-1;inset:-80% -25%;background:linear-gradient(105deg,transparent 42%,#e5c16b18 49%,#e5c16b38 50%,transparent 58%);animation:aobLightSweep 7s linear infinite;pointer-events:none}
      .aob-event-ribbon .aob-brand{color:#eac777;letter-spacing:.14em;font-size:10px;font-weight:800;white-space:nowrap}
      .aob-event-ribbon .aob-event-copy{display:flex;align-items:center;flex-wrap:wrap;justify-content:center;gap:6px 12px;font-size:clamp(11px,1.2vw,14px);line-height:1.3}
      .aob-event-ribbon .aob-event-copy strong{color:#fff;font-weight:850;letter-spacing:.035em;text-transform:uppercase}
      .aob-event-ribbon .aob-event-meta{color:#dec6e7}
      .aob-event-ribbon .aob-event-timer{font-size:11px;color:#f5d58c;font-variant-numeric:tabular-nums;white-space:nowrap}
      .aob-event-ribbon .aob-event-cta{display:inline-flex;align-items:center;justify-content:center;white-space:nowrap;padding:9px 16px;background:linear-gradient(135deg,#f9dc93,#c79643);color:#1b0c20;border-radius:5px;font-size:11px;font-weight:900;text-decoration:none;letter-spacing:.04em;transition:transform .2s,filter .2s}
      .aob-event-ribbon .aob-event-cta:hover{transform:translateY(-2px);filter:brightness(1.1)}
      .aob-event-ribbon .aob-event-close{position:absolute;right:8px;top:50%;transform:translateY(-50%);width:32px;height:32px;display:grid;place-items:center;border:0;background:transparent;color:#fff;font-size:23px;cursor:pointer}
      @keyframes aobSlideIn{from{opacity:0;transform:translateY(-100%)}to{opacity:1;transform:translateY(0)}}
      @keyframes aobLightSweep{from{transform:translateX(-45%)}to{transform:translateX(45%)}}
      @media(max-width:680px){.aob-event-ribbon{gap:8px;padding:10px 38px 10px 10px;flex-wrap:wrap}.aob-event-ribbon .aob-brand{font-size:9px}.aob-event-ribbon .aob-event-copy{font-size:11px}.aob-event-ribbon .aob-event-meta{display:none}.aob-event-ribbon .aob-event-timer{font-size:10px}.aob-event-ribbon .aob-event-cta{padding:8px 12px}}
      @media(prefers-reduced-motion:reduce){.aob-event-ribbon,.aob-event-ribbon:before{animation:none!important}.aob-event-ribbon .aob-event-cta{transition:none}}
    `}</style>
    <span className="aob-brand">ARK OF BONES · SUPPORTING</span>
    <div className="aob-event-copy"><strong>Sneakers &amp; Jersey Game Night</strong><span className="aob-event-meta">Omega Mu Nu Chapter · Nov 21 · Temecula</span></div>
    <span className="aob-event-timer" aria-label="Time until event">{remaining ? `${days}d ${hours}h ${mins}m` : 'TODAY · 3–9 PM'}</span>
    <a className="aob-event-cta" href={TICKETS} target="_blank" rel="noopener noreferrer">GET TICKETS ↗</a>
    <button className="aob-event-close" aria-label="Dismiss event promotion" onClick={dismiss}>×</button>
  </aside>;
}
