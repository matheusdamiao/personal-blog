import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemas/schema.ts'

export default defineConfig({
  name: 'personal-blog-studio',
  title: 'Personal Blog Studio',
  projectId: '344tus4l',
  dataset: 'production',
  plugins: [deskTool()],
  schema: {
    types: schemaTypes,
  },
})
