# canihazusername

Username generator. Fully typed, simple and customizable.

The lists are taken from [this repo](https://github.com/imsky/wordlists) and automatically converted into json by `./generate/wordlist.js`

Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>

## 🕹 [Interactive Demo](https://cupcakearmy.github.io/canihazusername/)

## 🏗 Install

```bash
yarn add canihazusername
```

## 🚀 Quickstart

```typescript
import { generate } from 'canihazusername'

const username = generate()
```

## 🎛 Customize

You can of course customize the generated username. The default format string is `{character}_{english}`.

```typescript
import { generate } from 'canihazusername'

const username = generate('something-{character}_bot')
```

Basically you can use any string you want and everything between `{somelist}` will be replaced from a random word from the list called `somelist`.

There is a [list of available words](#-lists) that you can use.

### ⛓ Combine multiple lists

You can also combine multiple (as many as you wish) lists into the same braket with the `|` charcter.
This will build a combined list and choose at random between all those words.

```typescript
import { generate } from 'canihazusername'

const username = generate('{age|cats|...}')
```

## 🗂 Lists

- age
- algorithms
- appearance
- character
- colors
- complexity
- construction
- corporate_prefixes
- emotions
- geometry
- linguistics
- materials
- music_theory
- physics
- quantity
- shape
- size
- sound
- speed
- taste
- temperature
- weather
- blockchain
- corporate
- hipster
- lorem
- reddit
- alpha
- canada
- city_states
- france
- netherlands
- switzerland
- united_states
- apple
- intel
- microsoft
- unicorns
- founders
- usa
- chicago
- newyork
- basque
- english
- french
- german
- irish
- italian
- scottish
- 3d_graphics
- 3d_printing
- accounting
- apex_predators
- architecture
- astronomy
- automobiles
- birds
- buildings
- car_parts
- cats
- cheese
- chemistry
- coding
- condiments
- containers
- corporate_job
- cotton
- data_structures
- design
- dogs
- driving
- fast_food
- filmmaking
- fish
- food
- fortifications
- fruit
- furniture
- gaming
- geography
- ghosts
- history
- houses
- infrastructure
- insurance
- linear_algebra
- machine_learning
- meat
- metals
- military_airforce
- military_army
- military_navy
- minerals
- music_instruments
- music_production
- phones
- physics_optics
- physics_units
- physics_waves
- plants
- radio
- real_estate
- screenwriting
- seasonings
- set_theory
- shopping
- spirits
- sports
- startups
- storage
- travel
- typography
- vcs
- water
- web_development
- wine
- wood
- writing
- art
- collection
- communication
- cooking
- creation
- destruction
- fire
- graphics
- look
- manipulation
- movement
- music
- programming
- thought
- web
