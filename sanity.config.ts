import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import { myTheme } from './theme';
import StudioNavbar from './components/StudioNavbar';
import Logo from './components/Logo';
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;
export default defineConfig({
  basePath:"/studio", //where it renders
  name: 'TheYarn_Content_Studio',
  title: 'theYarn 2.0 Content Studio ',
  projectId,
  dataset,
  plugins: [deskTool(), visionTool()], //default version and desk tabs
  schema: {
    types: schemaTypes,
  },
  studio:{
    components:{
      logo: Logo, 
      navbar:StudioNavbar,
      // navbar: StudioNavbar
    }
  },
  theme: myTheme
})
