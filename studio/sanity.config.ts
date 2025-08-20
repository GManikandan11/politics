import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import localeString from './schemas/localeString'
import localeText from './schemas/localeText'
import localeBlockContent from './schemas/localeBlockContent'

export default defineConfig({
  name: 'default',
  title: 'politics-studio',
  projectId: 'ffyemvvw',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: [
      ...schemaTypes, // Your existing schema types
      // localeString,
      localeText,
      localeBlockContent
    ],
  },
})