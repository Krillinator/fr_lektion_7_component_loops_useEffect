import { useEffect, useState } from "react"
import { CustomCard } from "~/components/CustomCard"
import type { BlogCard } from "~/types/BlogCard"

export function Welcome() {
  // UseEffect - Hook (lifecycle function)
  // Every Hook always contain the term 'use'
  useEffect(() => {
    console.log("Hello world!")
  }, []) // run ONCE and only ONCE

  const [count, setCount] = useState<number>(0)

  /* Prerequisits for Loops in .tsx
   *   #1 - Array List
   *   #2 - Map through list (within .tsx)
   * */
  const [highscoreList, setHighscoreList] = useState<number[]>([
    150, 250, 500, 1000,
  ])

  const [blogCardList, setBlogCardList] = useState<BlogCard[]>([
    {
      title: "Flowers",
      content: "Beautiful flowers in a scenery",
      tags: "#Flowers",
    },
    {
      title: "Singular Flower",
      content: "The beauty of nature is truly astounding",
      tags: "#Nature",
    },
  ])

  function test() {
    ;() => {} // 0 parametrar / void
    ;() => ({}) // 0 parametrar / object
    // () => (2) // 0 parametrar / number (implicitly)
  }

  // For loops, can be called OUTSIDE of return (.tsx logic) due to braces {}
  // index = position of element in array
  // element = value of index
  const testNumberList: number[] = [500, 1000, 5000]
  for (let i = 0; i < testNumberList.length; i++) {
    console.log(i)
  }

  // .tsx syntax, may not return 'void'
  // callbackfn (callback function) - We can pass arrow functions!
  // () => {} Param => Scope / return
  // value & index, where do they come from in .map()?
  // TODO - förbipassera element om endast index är krav
  return (
    <div>
      {/* Easy HighscoreList Example:
        {highscoreList.map((element: number, index: number) => (
          <p>
            Index: {index} Element: {element}
          </p>
        ))}
      */}

      {/* Generate Components */}
      {blogCardList.map(({ title, content, tags }) => (
        <CustomCard title={title} content={content} tags={tags} />
      ))}

      <button
        onClick={() => {
          console.log("click")
          setCount(count + 1)
        }}
      >
        Count + 1
      </button>
    </div>
  )
}
