import { surpriseMePrompts } from '../constants'

export function getRandomPrompt(prompt) {
  // math random returns a value from 0 to 1 eg 0.5
  // we then multiply by length of the surpriseMePrompt array (50)
  // 0.5 * 50 = 25
  // then we return randomPrompt which is 25 index of the surpriseMePrompt array ==> surpriseMePrompt[25]
  const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length)
  const randomPrompt = surpriseMePrompts[randomIndex]

  if (randomPrompt === prompt) return getRandomPrompt(prompt)

  return randomPrompt
}
