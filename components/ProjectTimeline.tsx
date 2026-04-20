"use client";

interface TimelineEvent {
  year: string;
  title: string;
  company?: string;
  description: string;
  category?: "project" | "work";
}

interface ProjectTimelineProps {
  events: TimelineEvent[];
  className?: string;
}

export default function ProjectTimeline({ events, className = "" }: ProjectTimelineProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Timeline line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-accent-secondary to-accent" />

      {events.map((event, index) => (
        <div key={index} className="relative pl-20 pb-12 last:pb-0">
          {/* Timeline dot */}
          <div className="absolute left-6 top-0 w-5 h-5 rounded-full bg-accent border-4 border-bg-card animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }} />

          {/* Content */}
          <div
            className="bg-bg-card border border-border rounded-xl p-6 hover:border-accent/40 transition-all duration-300 animate-fade-in-up"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            {event.category === "work" && (
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <span className="text-accent text-sm font-medium">{event.year}</span>
                <span className="text-text-dim text-sm mt-1 sm:mt-0">{event.company}</span>
              </div>
            )}
            <h3 className="font-semibold text-lg mb-1">{event.title}</h3>
            <p className="text-text-secondary text-sm leading-relaxed">{event.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
