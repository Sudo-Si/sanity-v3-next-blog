'use client'

import {definePreview} from 'next-sanity/preview'
import {projectId, dataset} from './sanity.client'

//  Helper Function to make sure you are logged in 
function onPublicAccessOnly() {
    throw new Error(`Unable to load preview as you're not logged in`)
  }
//   if id or data set is not there throw message 
  if (!projectId || !dataset) {
    throw new Error(
        `Missing projectID or dataset. Check your sanity.json or env`
    )
  }
//   hook  that allows queries to sanity
  export const usePreview = definePreview({

    projectId, 
    dataset,
    onPublicAccessOnly,
  })