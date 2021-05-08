import React from "react";
import { Grid, Typography, makeStyles } from "@material-ui/core";
import VS from "../../Assets/DesktopEnv.svg";
import multi from "../../Assets/DeepingMulti.svg";
import Final from "../../Assets/DeepinV2.svg";

const useStyles = makeStyles({
  heading: {
    fontFamily: "Roboto",
    textAlign: "center",
  },
  subHeading: {
    color: "rgb(170, 170, 170)",
    fontSize: "2.5rem",
    fontWeight: "bold",
    fontFamily: "Roboto",
    textAlign: "center",
  },
});

export default function Overview() {
  const classes = useStyles();
  return (
    <div>
      <Grid item lg={12} xs={12}>
        <Typography variant="h1" className={classes.heading} data-aos="fade-up">
          DeepinPro
        </Typography>
      </Grid>

      <Grid
        container
        spacing={2}
        style={{ flexGrow: 1, marginBottom: "1rem", marginTop: "2rem" }}>
        <Grid item xs={12} sm={4}>
          <Typography
            className={classes.subHeading}
            data-aos="fade-up"
            data-aos-delay="300">
            High Performance
          </Typography>
        </Grid>
        <Grid item align="center" xs={12} md={4}>
          <Typography
            className={classes.subHeading}
            data-aos="fade-up"
            data-aos-delay="400">
            More Power
          </Typography>
        </Grid>
        <Grid item align="center" xs={12} md={4}>
          <Typography
            className={classes.subHeading}
            data-aos="fade-up"
            data-aos-delay="500">
            More Pro
          </Typography>
        </Grid>

        <Grid item sm={12} xs={12} data-aos="fade-up" data-aos-delay="1000">
          <img src={VS} alt="Main Page" />
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item>
          <Typography variant="h4" data-aos="fade-up" data-aos-delay="2000">
            New 10th Generation Intel Processors up to{" "}
            <strong>14 Cores </strong>
            processing power sustains higher performance for longer period of
            time. So whether your layering dozens of tracks and effects,
            rendering 3D models, or compiling and testing code, you'll be doing
            it in no time flat
          </Typography>
        </Grid>
        <br />
        <Grid item>
          <Typography variant="h4" data-aos="fade-up" data-aos-delay="2100">
            The new DeepinPro features a stunning new display. Liquid crystal
            display in a Deepin notebook. It produces <strong>500 nits </strong>
            of brightness for a spectacular highlights and bright whites, while
            delivering deep blacks thanks to the prcesie photo alignment of
            liquid crystal moleculres. The <strong>P3</strong> wide color gamut
            enables brilliant, true-to-life images and video. So no matter where
            you are, you'll see your work in the best possible light
          </Typography>
        </Grid>
      </Grid>
      <br />
      <br />
      <Grid item lg={12} xs={12}>
        <Typography
          variant="h2"
          className={classes.heading}
          data-aos="fade-up"
          data-aos-delay="2500">
          "Touch screen that works beautiful with the OS"
        </Typography>
      </Grid>
      <br />
      <Grid item lg={12} xs={12}>
        <Typography
          variant="h3"
          className={classes.heading}
          data-aos="fade-up"
          data-aos-delay="2700">
          Graphical Performance
        </Typography>
      </Grid>
      <br />
      <Grid container spacing={3} data-aos="fade-up">
        <Grid item data-aos="fade-up">
          <Typography variant="h4" data-aos="fade-up">
            DeepinPor and <strong>Nvidia</strong> provide you one of the best
            graphical performance ever. Its base model provides up to 2 times
            faster than last generation for seemless playback and faster
            rendering
          </Typography>
        </Grid>
        <br />
        <Grid item data-aos="fade-up">
          <Typography variant="h4" data-aos="fade-up">
            For working on graphics-intensive projects like 3D rending or
            high-end gaminng development, you can supercharge your DeepinPro
            with the optional Nvidia 3080. With its 10GB of{" "}
            <strong>High Bandwidth </strong>
            Memory, this powerhouse GPU brings a new level of desktop-class
            graphics power to DeepinPro{" "}
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item lg={12} xs={12} data-aos="fade-up">
          <Typography variant="h3" className={classes.heading}>
            Performance
          </Typography>
        </Grid>
        <Grid item lg={12} xs={12}>
          <img src={multi} alt="" data-aos="fade-up" />
        </Grid>
        <Grid item>
          <Typography variant="h4" data-aos="fade-up">
            The Deepin Pro elevates the notebook to a whole new level of
            performance and portability. Where your ideas take you, you'll
            acheive it with performance that won't compromise thanks to its
            powerful Processor, fast-storage and more
          </Typography>
        </Grid>
        <br />
        <Grid item data-aos="fade-up">
          <Typography variant="h4" data-aos="fade-up">
            Code, Play, Design and more. Whereever your ideas take you, Deepin
            Pro will help you
          </Typography>
        </Grid>
        <Grid item data-aos="fade-up">
          <Typography variant="h4" data-aos="fade-up">
            The Deepin Pro elevates the notebook to a whole new level of
            performance and portability. Where your ideas take you, you'll
            acheive it with performance that won't compromise thanks to its
            powerful Processor, fast-storage and more
          </Typography>
        </Grid>
        <Grid item data-aos="fade-up">
          <Typography variant="h4" data-aos="fade-up">
            Code, Play, Design and more. Whereever your ideas take you, Deepin
            Pro will help you
          </Typography>
        </Grid>
      </Grid>
      <br />
      <br />
      <Grid
        container
        justify="space-evenly"
        spacing={3}
        style={{ textAlign: "center" }}>
        <Grid item xs={12} sm={6} data-aos="fade-up">
          <Typography variant="h4" data-aos="fade-up">
            Up to
          </Typography>
          <Typography variant="h1" data-aos="fade-up">
            128Gb
          </Typography>
          <Typography variant="h4" data-aos="fade-up">
            Memory
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} data-aos="fade-up">
          <Typography variant="h4" data-aos="fade-up">
            Up to
          </Typography>
          <Typography variant="h1" data-aos="fade-up">
            14
          </Typography>
          <Typography variant="h4" data-aos="fade-up">
            Core
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h4" data-aos="fade-up">
            Up to
          </Typography>
          <Typography variant="h1" data-aos="fade-up">
            2.286Gb/s
          </Typography>
          <Typography variant="h4" data-aos="fade-up">
            SSD read speed
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h4" data-aos="fade-up">
            Up to
          </Typography>
          <Typography variant="h1" data-aos="fade-up">
            10hrs
          </Typography>
          <Typography variant="h4" data-aos="fade-up">
            Battery Life
          </Typography>
        </Grid>
      </Grid>
      <Grid item lg={12} xs={12} data-aos="fade-up">
        <img src={Final} alt="" data-aos="fade-up" />
      </Grid>
    </div>
  );
}
