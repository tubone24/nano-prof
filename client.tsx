import 'https://deno.land/x/nano_jsx@v0.0.16/types.ts'
import { h, hydrate } from 'https://deno.land/x/nano_jsx@v0.0.16/core.ts'

import Comments from './components/Comments.tsx'

const comments = ['tubone24',]

const start = () => {
  hydrate(<Comments comments={comments} />, document.getElementById('comments'))
}

window.addEventListener('load', event => {
  start()
})
