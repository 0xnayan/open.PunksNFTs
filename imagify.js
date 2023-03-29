const fs = require('fs')
const path = require('path')
const sharp = require('sharp')
const { faker } = require('@faker-js/faker')

const dir = './artworks'
let img_counter = 1
const img_size = { width: 500, height: 500 }
const desired_ext = '.png'
const base_uri = 'https://ipfs.io/ipfs/QmWtH4CKoa4FdTePVtFJtBwjz542CwQgrsTMrGNpF9hKLJ/'
const attributes = {
  Backgrounds: [
    'Charcoal',
    'Coral',
    'Grey',
    'Sky',
    'White',
  ],
  Face: [
    'Body 1',
    'Body 2',
    'Body 3',
    'Body 6',
    'Body 7',
    'Body 8',
  ],
  Hats and Hair: [
    'Bandana',
    'Beanie',
    'Cowboy Hat',
    'Full Grown',
    'Head Band',
    'Helicopter',
    'Messy Hair',
    'Mohawk',
    'No Hair',
    'Pony Tails',
    'Purple Cap',
    'Trimmed',
    'Yellow Beanie',
  ],
  Eyes and Glasses: [
    'Black Eyes',
    'Blue Eyes',
    'Eye Patch',
    'Green Eyes',
    'Pink Eyes',
    'Purple Sunglasses',
    'Thug Glasses',
    'VR Glasses',
    'White 3D Glasses',
  ],
  Nose: [
    'Standard',
  ],
  Mouth: [
    'Cigarette',
    'Frown',
    'Neutral',
    'Pipe',
    'Smile',
  ],
  rarity: Array.from(Array(6).keys()),
}

fs.readdirSync(dir).forEach((file) => {
  const original_ext = path.extname(file)
  const original_file_name = path.basename(file).split('.')[0]

  if (['.jpg', '.jpeg', '.png', '.gif', '.webp'].includes(original_ext)) {
    const id = img_counter

    const metadata = {
      id,
      name: `#${id} A.I Arts`,
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
      price: 0.000000001,
      image: base_uri + img_counter + desired_ext,
      demand: faker.random.numeric({min: 10, max: 100}),
      attributes: [
        {
          "trait_type": "Backgrounds",
          "value": attributes.Backgrounds.sort(() => 0.5 - Math.random())[0]
        },
        {
          "trait_type": "Face",
          "value": attributes.Face.sort(() => 0.5 - Math.random())[0]
        },
        {
          "trait_type": "Hats and Hair",
          "value": attributes.Hats and Hair.sort(() => 0.5 - Math.random())[0]
        },
        {
          "trait_type": "Eyes and Glasses",
          "value": attributes.Eyes and Glasses.sort(() => 0.5 - Math.random())[0]
        },
        {
          "trait_type": "Nose",
          "value": attributes.Nose.sort(() => 0.5 - Math.random())[0]
        },
        {
          "trait_type": "Mouth",
          "value": attributes.Mouth.sort(() => 0.5 - Math.random())[0]
        },
        {
          "trait_type": "Rarity",
          "value": attributes.rarity.sort(() => 0.5 - Math.random())[0]
        },
        {
          "display_type": "date", 
          "trait_type": "Created", 
          "value": Date.now()
        },
        {
          "display_type" : "number",
          "trait_type" : "generation",
          "value" : 1
       }
      ],
    }

    if (fs.existsSync(`${dir}/${original_file_name + original_ext}`)) {
      // sharp(`${dir}/${original_file_name + original_ext}`)
      //   .resize(img_size.height, img_size.width)
      //   .toFile(`${dir}/${img_counter + desired_ext}`, (err, info) =>
      //     console.log(err)
      //   )

      fs.writeFileSync(
        `${dir}/${img_counter}.json`,
        JSON.stringify(metadata),
        {
          encoding: 'utf8',
          flag: 'w',
        }
      )
      img_counter += 1
    }
  }
})
console.log('Completed!')
