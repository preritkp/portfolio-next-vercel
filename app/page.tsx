import Chat from '../components/chat';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="relative h-48 w-48">
        <Image
          src="/toji2.jpg"
          alt="Toji"
          width={1000}
          height={100}
          className="rounded-full hidden md:block"
        />
      </div>
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <h1 className="text-4xl font-bold">Hi I'm Prerit, what would you like to know about me ?</h1>
      </div>
      <Chat />
    </main>
  );
}
