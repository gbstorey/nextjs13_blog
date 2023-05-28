import Posts from "@/app/components/Posts";

export default function Home() {
  return (
    <main className={"px-6 mx-auto"}>
      <p className={"mt-12 mb-12 text-3xl text-center dark:text-white"}>
        Hello and Welcome &#128075; &nbsp;
        <span className={"whitespace-nowrap"}>
          I&apos;m<span className={"font-bold"}> Garrett!</span>
        </span>
      </p>
        <Posts />
    </main>
  )
}

// https://www.youtube.com/watch?v=puIQhnjOfbc&ab_channel=DaveGray