export interface GoogleAnalyticsEvent {
  event_category: string;
  event_label: string;
}

export type GoogleAnalytics = (
  command: string,
  action: string,
  params: GoogleAnalyticsEvent,
) => void;
