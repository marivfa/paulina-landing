// Replace media files in public/media without editing components.
// To use a video in About, change type to 'video' and src to your .mp4 file.
export const media = {
  hero: { type: 'image', src: '/media/images/hero-horizontal.jpg', alt: 'Paulina — personal brand portrait' },
  about: { type: 'image', src: '/media/images/about.jpg', alt: 'Paulina — about portrait', autoplay: false },
  services: [
    { type: 'image', src: '/media/images/real-estate.jpg', alt: 'Real estate interiors' },
    { type: 'image', src: '/media/images/notary.png', alt: 'Notary documents' },
    { type: 'image', src: '/media/images/lifestyle.jpg', alt: 'Alpha Key' }
  ],
  life: [
    { type: 'image', src: '/media/images/life-01.jpg', alt: 'Places and moments' },
    { type: 'image', src: '/media/images/life-02.jpg', alt: 'Projects and ideas' },
    { type: 'image', src: '/media/images/life-03.jpg', alt: 'Everyday style' }
  ]
} as const;


/*
Config about me 
----- Solo foto ---
about: {
  type: 'image',
  src: '/media/images/about.jpg',
  alt: 'Paulina — about portrait'
}

--- Video local --- 
about: {
  type: 'video',
  src: '/media/videos/paulina-intro.mp4',
  poster: '/media/images/about.jpg',
  alt: 'Paulina — introduction video',
  autoplay: false
}

--- Video Youtube ---
about: {
  type: 'youtube',
  src: 'https://www.youtube.com/watch?v=XXXXXXXXXXX',
  poster: '/media/images/about.jpg',
  alt: 'Paulina — introduction video'
}
*/