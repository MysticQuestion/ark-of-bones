import { CalendarDays, MapPin } from 'lucide-react';

export default function EventCard({ event }) {
  return (
    <article className="event-card">
      <div className="event-card-date">
        <span>{event.month}</span>
        <strong>{event.day}</strong>
      </div>
      <div className="event-card-body">
        <p className="eyebrow">{event.brand} · {event.type}</p>
        <h3>{event.title}</h3>
        <p><CalendarDays aria-hidden="true" />{event.dateLabel} · {event.timeLabel}</p>
        <p><MapPin aria-hidden="true" />{event.venue}, {event.city}</p>
      </div>
      {event.href ? <a className="button button--outline" href={event.href}>Event information</a> : null}
    </article>
  );
}
