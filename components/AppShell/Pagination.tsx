import {
  MantineProvider,
  Pagination,
} from "@mantine/core";
import React, { useState } from "react";

export default function Paginations() {
  const [activePage, setPage] =
    useState(1);
  return (
    <Pagination
      page={activePage}
      onChange={setPage}
      total={10}
    ></Pagination>
  );
}
