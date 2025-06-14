import Image from "next/image";
import ThemeToggle from "@/components/theme-toggle";
// import TypingTest from "@/components/typing-test";
import { TypingGame } from "@/components/typing";
import TimeOfDay from "@/components/time-of-day";
import { quotes } from "@/utils/quotes";

export default function GamePage() {
  return (
    <>
      <nav className="bg-background text-foreground fixed top-0 z-20 flex w-full flex-row items-center justify-between border-b p-4 shadow-lg">
        <div className="flex flex-row items-center gap-1.5 sm:gap-3">
          <Image src="/face-icon.png" alt="face-icon" height={45} width={45} />
          <div className="text-foreground">
            <p className="flex flex-col pb-0.5 text-start sm:hidden">
              <span className="text-base tracking-tighter">Gavin&apos;s Typing Game:</span>
              <span className="text-xs tracking-tighter"> Thus Spoke Rohan Kishibe Edition</span>
            </p>
            <p className="hidden text-base tracking-tighter sm:flex md:text-lg lg:text-2xl">
              Gavin&apos;s Typing Game: Thus Spoke Rohan Kishibe Edition
            </p>
          </div>
        </div>
        <ThemeToggle />
      </nav>

      <header className="bg-foreground text-background fixed top-20 z-10 flex w-full flex-row items-center justify-center px-4 py-2 text-center text-xs font-medium md:hidden">
        This game only works on dekstop,
        <br />
        for reasons I think you should understand.
      </header>

      <main className="grid min-h-screen place-items-center px-4 pt-32 pb-24 md:px-8 md:pt-16 lg:px-24">
        <div className="mx-auto flex w-full max-w-6xl">
          <TypingGame quotes={quotes} />
          {/* <TypingTest quotes={quotes} /> */}
        </div>
      </main>

      <footer className="fixed right-4 bottom-2 z-20">
        <TimeOfDay />
      </footer>
    </>
  );
}
