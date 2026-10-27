// Replace media files in public/media without editing components.
// To use a video in About, change type to 'video' and src to your .mp4 file.
export const media = {
  hero: { type: 'image', src: '/media/images/hero-horizontal.jpg', alt: 'Paulina — personal brand portrait' },
  about: { type: 'image', src: '/media/images/about.jpg', alt: 'Paulina — about portrait', autoplay: false },
  services: [
    { type: 'image', src: '/media/images/real-estate.png', alt: 'Real estate interiors' },
    { type: 'image', src: '/media/images/notary.png', alt: 'Notary documents' },
    { type: 'image', src: '/media/images/lifestyle.png', alt: 'Alpha Key' }
  ],
  life: [
    { type: 'image', src: '/media/images/life-01.png', alt: 'Places and moments' },
    { type: 'image', src: '/media/images/life-02.png', alt: 'Projects and ideas' },
    { type: 'image', src: '/media/images/life-03.jpg', alt: 'Everyday style' }
  ]
} as const;
