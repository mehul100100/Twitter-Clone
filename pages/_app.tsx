import Layout from "@/components/Layout";
import "@/styles/globals.css";
import Head from "next/head";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import { SessionProvider } from "next-auth/react";
import LoginModal from "@/components/modals/LoginModal";
import RegisterModal from "@/components/modals/RegisterModal";
import EditModal from "@/components/modals/EditModal";


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <Head>
      <title>Twitter Clone</title>
      <meta name="description" content="Twitter Clone using latest technologies" />
      <link rel="icon" href="/images/favicon.ico" sizes="any" />
    </Head>
    <SessionProvider session={pageProps.session}>
      
      <Toaster />
      <EditModal />
      <RegisterModal />
      <LoginModal />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
    </>
  );
}
