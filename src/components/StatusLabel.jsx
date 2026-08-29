const publicStates = new Map([
  ['live', 'Live'],
  ['pilot', 'Pilot'],
  ['in development', 'In Development'],
  ['research', 'Research'],
  ['archived', 'Archived'],
  ['verified', 'Verified'],
  ['pending', 'Pending'],
]);

export default function StatusLabel({ state, as: Element = 'span' }) {
  const normalized = String(state).trim().toLowerCase();
  const label = publicStates.get(normalized);

  if (!label) return null;

  return <Element className={`status-label status-label--${normalized.replaceAll(' ', '-')}`}>{label}</Element>;
}
