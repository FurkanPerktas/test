import {
  Button,
  Pagination,
} from "@mantine/core";
import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import AppShellComp from "../components/AppShell/AppShellComp";
import Paginations from "../components/AppShell/Pagination";
import {
  ButtonDefault,
  ButtonFilled,
} from "../components/Globals/Button";
import {
  GridCD,
  GridCS,
  GridRD,
  GridRS,
} from "../components/Globals/Grid";
import {
  H1N,
  H1S,
  H2N,
  H2S,
  H3N,
  H4N,
} from "../components/Globals/H";
import {
  P,
  P0,
  PB,
  PL,
  PM,
} from "../components/Globals/P";
import {
  S,
  SR,
  SS,
} from "../components/Globals/Span";

const Home: NextPage = () => {
  return (
    <div className="m-2 flex flex-col space-y-8">
      <Head>
        <title>
          My Library with Mantine and
          TailwindCSS
        </title>
        <meta
          name="description"
          content="Mantine Test Components"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>
      {/* <AppShellComp /> */}
      <Paginations />
      <div className="flex flex-row space-x-8">
        <H1N text="MY HEADINGS:" />
        <H1N text="H1N" />
        <H1S text="H1S" />
        <H2N text="H2N" />
        <H2S text="H2S" />
        <H3N text="H3N" />
        <H4N text="H4N" />
      </div>
      <div className="flex flex-row space-x-8">
        <P text="Normal Text" />
        <P text="P" />
        <PL text="PL" />
        <PM text="PM" />
        <PB text="PB" />
        <P0 text="P0" />
      </div>
      <div className="flex flex-row space-x-8 items-center">
        <P text="Spans" />
        <SR />
        <SS />
        <S />
      </div>
      <div className="flex flex-row space-x-8">
        <ButtonDefault text="ButtonDefault" />
        <ButtonFilled text="ButtonFilled" />
        <Button children="button" />
      </div>
      {/* <div className="space-y2">
        <GridCS />
        <GridCD />
        <GridRS />
        <GridRD />
      </div> */}
    </div>
  );
};

export default Home;
