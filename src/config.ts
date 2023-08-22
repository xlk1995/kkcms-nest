// export default () => {
//   return {
//     name: 'kkone',
//   }
// }

import { registerAs } from '@nestjs/config'

export default registerAs('app', () => {
  return {
    name: 'kk',
    city: 'sz',
  }
})
