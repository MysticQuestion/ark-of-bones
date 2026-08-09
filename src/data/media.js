const driveThumbnail = (id, size = 'w1800') =>
  `https://drive.google.com/thumbnail?id=${id}&sz=${size}`;

const driveView = (id) => `https://drive.google.com/file/d/${id}/view`;

export const eventPhotos = [
  {
    id: 'aob-event-01',
    driveId: '1572SbfaOL6JIdURixI65pz6QbeOvu4mz',
    src: driveThumbnail('1572SbfaOL6JIdURixI65pz6QbeOvu4mz', 'w2200'),
    href: driveView('1572SbfaOL6JIdURixI65pz6QbeOvu4mz'),
    alt: 'Players gathered around an Ark of Bones domino table during live play',
    caption: 'Live table play',
    orientation: 'landscape',
    featured: true,
  },
  {
    id: 'aob-event-02',
    driveId: '1udfz4oHvRiMeNTihAzLfHUEG2ZyPjJvC',
    src: driveThumbnail('1udfz4oHvRiMeNTihAzLfHUEG2ZyPjJvC'),
    href: driveView('1udfz4oHvRiMeNTihAzLfHUEG2ZyPjJvC'),
    alt: 'Ark of Bones player seated at a domino table in branded headwear',
    caption: 'Player portrait',
    orientation: 'portrait',
  },
  {
    id: 'aob-event-03',
    driveId: '1ieSqVjXcbY-bO5FfKpUXV9T6FULi4lrZ',
    src: driveThumbnail('1ieSqVjXcbY-bO5FfKpUXV9T6FULi4lrZ'),
    href: driveView('1ieSqVjXcbY-bO5FfKpUXV9T6FULi4lrZ'),
    alt: 'Multiple players in active domino play around an Ark of Bones table',
    caption: 'Around the table',
    orientation: 'portrait',
  },
  {
    id: 'aob-event-04',
    driveId: '1BaRFlVH68xL6Xba7O_NmoCM88QjSzEpO',
    src: driveThumbnail('1BaRFlVH68xL6Xba7O_NmoCM88QjSzEpO'),
    href: driveView('1BaRFlVH68xL6Xba7O_NmoCM88QjSzEpO'),
    alt: 'Players gathered closely around a branded domino table',
    caption: 'Game-night energy',
    orientation: 'portrait',
  },
  {
    id: 'aob-event-05',
    driveId: '1N0jgSFaultQi6JNw4-2yDr0fKqkBnT1D',
    src: driveThumbnail('1N0jgSFaultQi6JNw4-2yDr0fKqkBnT1D'),
    href: driveView('1N0jgSFaultQi6JNw4-2yDr0fKqkBnT1D'),
    alt: 'Group of players reacting during a domino game at an Ark of Bones table',
    caption: 'Competition and conversation',
    orientation: 'portrait',
  },
  {
    id: 'aob-event-06',
    driveId: '1ltRbAKbbfHwKu0xJsMREDTRyioCTbi4_',
    src: driveThumbnail('1ltRbAKbbfHwKu0xJsMREDTRyioCTbi4_'),
    href: driveView('1ltRbAKbbfHwKu0xJsMREDTRyioCTbi4_'),
    alt: 'Players sharing a domino game around a green Ark of Bones table',
    caption: 'Shared table culture',
    orientation: 'portrait',
  },
  {
    id: 'aob-event-07',
    driveId: '1X48APY0t6pAlAvaTDT4WPNv4Q71mogGb',
    src: driveThumbnail('1X48APY0t6pAlAvaTDT4WPNv4Q71mogGb', 'w2000'),
    href: driveView('1X48APY0t6pAlAvaTDT4WPNv4Q71mogGb'),
    alt: 'Players seated around an Ark of Bones domino table during a social game',
    caption: 'Community play',
    orientation: 'landscape',
  },
  {
    id: 'aob-event-08',
    driveId: '1jQEZYgLb2sWNjoz-KzahOn5klgCpkfu0',
    src: driveThumbnail('1jQEZYgLb2sWNjoz-KzahOn5klgCpkfu0', 'w1800'),
    href: driveView('1jQEZYgLb2sWNjoz-KzahOn5klgCpkfu0'),
    alt: 'Ark of Bones branded portrait with a domino session continuing in the background',
    caption: 'From inside the room',
    orientation: 'landscape',
  },
  {
    id: 'aob-event-09',
    driveId: '19KwmnZFKO5LtkGt20WIwXffyWnXDpdBg',
    src: driveThumbnail('19KwmnZFKO5LtkGt20WIwXffyWnXDpdBg', 'w1800'),
    href: driveView('19KwmnZFKO5LtkGt20WIwXffyWnXDpdBg'),
    alt: 'Ark of Bones player seated at a branded domino table',
    caption: 'At the table',
    orientation: 'portrait',
  },
];

export const featuredEventPhoto = eventPhotos.find((photo) => photo.featured) || eventPhotos[0];

// Approved wallpaper files are added here after they are placed in a public,
// durable asset location. Keeping this empty prevents broken download links from shipping.
export const wallpapers = [];
