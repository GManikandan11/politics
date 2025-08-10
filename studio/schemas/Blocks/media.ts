// ./schemas/blocks/media.ts
import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'media',
  title: 'Image or Video',
  type: 'object',
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'video',
      title: 'Video (mp4 / webm)',
      type: 'file',
      options: {accept: 'video/mp4,video/webm'},
    }),
  ],
  preview: {
    select: {
      imageUrl: 'image.asset.url',
      videoName: 'video.asset.originalFilename',
    },
    prepare({ imageUrl, videoName }) {
      return {
        title: imageUrl ? 'Image' : 'Video',
        subtitle: imageUrl ? '' : videoName ?? '',
        // ✅  string for image, emoji placeholder for video
        media: imageUrl || '🎬',
      }
    },
  },
})
