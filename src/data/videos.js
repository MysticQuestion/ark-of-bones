import { CONTACT } from '../config/contact';
import { SUBSIDIARY_BRANDS } from '../config/brand';

export const liveBroadcast = null;

const youtubeVideo = (id, title, description, category, format = 'Video') => ({
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
});

export const founderVideo = {
  ...youtubeVideo(
    'VoNPo9Gc2Gg',
    'What is Ark of Bones',
    'Owner Tony Covington introduces the idea, purpose, and entertainment vision behind Ark of Bones.',
    'Interviews / Culture',
  ),
  uploadDate: '2025-04-16',
};

export const featuredVideo = youtubeVideo(
  'DeYb0llvnCM',
  'Ark of Bones',
  'A concise introduction to the Ark of Bones world from the official channel.',
  'Ark of Bones',
  'Short',
);

export const videos = [
  youtubeVideo(
    'kQsr5BW7f-g',
    'How AOB Tables Work',
    'A short look at how the Ark of Bones table experience brings the game into view.',
    'Ark of Bones',
    'Short',
  ),
  youtubeVideo(
    'zRyoGY4903A',
    'AOB Intro',
    'An official short-form introduction to Ark of Bones.',
    'Ark of Bones',
    'Short',
  ),
  youtubeVideo(
    'RoP0lSIjX2c',
    'AOB Intro 2',
    'A second official introduction to the Ark of Bones experience.',
    'Ark of Bones',
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
