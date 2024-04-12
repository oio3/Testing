import * as React from "react";

import Grid from "@mui/material/Unstable_Grid2";
import { Divider } from "@mui/material";
import Stack from "@mui/material/Stack";

import Preyer from "./components/Preyer";

export default function MainContent() {
  return (
    <>
      <Grid container space={3}>
        <Grid xs={6} >
          <div>
            <h2 className="title">
              <span>ابريل</span> 1/2/2024
              <span>
                {"  |  "}
                <span>5:14 ص</span>
              </span>
            </h2>
            <h1>كربلاء المقدسة</h1>
          </div>
        </Grid>
        <Grid xs={6}>
          <div>
            <h2 className="title">متبقي حتى صلاة العصر </h2>
            <h1>10:10:00</h1>
          </div>
        </Grid>
      </Grid>

      <Divider style={{ borderColor: "White", opacity: "0.1" }} />

      <Stack
        direction={{ sm: "column", md: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
      >
        <Preyer />
      </Stack>
    </>
  );
}
