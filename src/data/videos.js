import { CONTACT } from '../config/contact';
import { SUBSIDIARY_BRANDS } from '../config/brand';

export const liveBroadcast = null;

const youtubeVideo = (id, title, description, category, format = 'Video', uploadDate) => ({
  id,
  title,
  description,
  category,
  format,
  platform: 'YouTube',
  href: format === 'Short' ? `https://www.youtube.com/shorts/${id}` : `https://www.youtube.com/watch?v=${id}`,
  embedUrl: `https://www.youtube-nocookie.com/embed/${id}`,
  thumbnail: `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
  thumbnailAlt: `${title} video thumbnail from the official Ark of Bones YouTube channel`,
  uploadDate,
});

export const founderVideo = {
  ...youtubeVideo(
    'VoNPo9Gc2Gg',
    'What is Ark of Bones',
    'Owner Tony Covington introduces Ark of Bones.',
    'Interviews / Culture',
    'Video',
    '2025-04-16',
  ),
  hostedUrl: 'https://video.squarespace-cdn.com/content/v1/6734f898cdf3986b5838dda2/a5ec0f7d-45b9-459a-a071-2f562c7d6486/playlist.m3u8',
  poster: 'https://video.squarespace-cdn.com/content/v1/6734f898cdf3986b5838dda2/a5ec0f7d-45b9-459a-a071-2f562c7d6486/thumbnail',
  durationSeconds: 61,
};

export const featuredVideo = youtubeVideo(
  'DeYb0llvnCM',
  'Ark of Bones',
  'Ark of Bones short from the official channel.',
  'Ark of Bones',
  'Short',
  '2025-04-17',
);

export const videos = [
  youtubeVideo(
    'kQsr5BW7f-g',
    'How AOB Tables Work',
    'Ark of Bones table short from the official channel.',
    'Ark of Bones',
    'Short',
    '2025-04-16',
  ),
  youtubeVideo(
    'zRyoGY4903A',
    'AOB Intro',
    'An official short-form introduction to Ark of Bones.',
    'Ark of Bones',
    'Short',
    '2025-04-16',
  ),
  youtubeVideo(
    'RoP0lSIjX2c',
    'AOB Intro 2',
    'A second official Ark of Bones introduction.',
    'Ark of Bones',
    'Video',
    '2025-03-31',
  ),
];

export const allVideos = [founderVideo, featuredVideo, ...videos];

export const videoCategories = [
  'Ark of Bones',
  SUBSIDIARY_BRANDS.bigSixBones.name,
  SUBSIDIARY_BRANDS.dominoMotherFucker.name,
  'Tutorials / Learn',
  'Interviews / Culture',
];

export const mediaChannels = [
  { label: 'YouTube', href: CONTACT.social.youtube },
  { label: 'Instagram', href: CONTACT.social.instagram },
  { label: 'TikTok', href: CONTACT.social.tiktok },
  { label: 'Facebook', href: CONTACT.social.facebook },
];
