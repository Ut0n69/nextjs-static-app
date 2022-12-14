import Head from 'next/head';
import { Box } from '@chakra-ui/react';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="assets/favicon.ico" />
      </Head>

      <main>
        <Box fontSize="4xl">Hi</Box>
        <img src="assets/vercel.svg" alt="logo" />
      </main>
    </div>
  );
}
