import React from "react";
import {
  Grid,
  Typography,
  makeStyles,
  Grow,
  Zoom,
  Fade,
  Slide,
  duration,
} from "@material-ui/core";
import VS from "../../Assets/DesktopEnv.svg";
import multi from "../../Assets/DeepingMulti.svg";
import Final from "../../Assets/DeepinV2.svg";
import { motion } from "framer-motion";

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
        <Zoom
          in={true}
          style={{
            transformOrigin: "-100,0,0",
            transitionDelay: "500ms",
            transition: "ease-in",
          }}>
          <Typography variant="h1" className={classes.heading}>
            DeepinPro
          </Typography>
        </Zoom>
      </Grid>

      <Grid
        container
        spacing={2}
        style={{ flexGrow: 1, marginBottom: "1rem", marginTop: "2rem" }}>
        <Grid item xs={12} sm={4}>
          <Zoom
            in={true}
            style={{
              transformOrigin: "-100,0,0",
              transitionDelay: "1000ms",
              transition: "ease-in",
            }}>
            <Typography className={classes.subHeading}>
              High Performance
            </Typography>
          </Zoom>
        </Grid>
        <Grid item align="center" xs={12} md={4}>
          <Zoom
            in={true}
            style={{
              transformOrigin: "-100,0,0",
              transitionDelay: "1500ms",
              transition: "ease-in",
            }}>
            <Typography className={classes.subHeading}>More Power</Typography>
          </Zoom>
        </Grid>
        <Grid item align="center" xs={12} md={4}>
          <Zoom
            in={true}
            style={{
              transformOrigin: "-100,0,0",
              transitionDelay: "2000ms",
              transition: "ease-in",
            }}>
            <Typography className={classes.subHeading}>More Pro</Typography>
          </Zoom>
        </Grid>

        <Grid item sm={12} xs={12}>
          <Slide
            in={true}
            direction={"left"}
            style={{
              transitionDelay: "2500ms",
              transition: "ease-in-out",
            }}>
            <Fade
              direction={"right"}
              in={true}
              style={{
                transitionDelay: "2500ms",
                transition: "ease-in",
              }}>
              <img src={VS} alt="Main Page" />
            </Fade>
          </Slide>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item>
          <Fade
            in={true}
            style={{
              transitionOrigin: "-100,0,0",
              transitionDelay: "2700ms",
              transition: "ease-in-out",
            }}>
            <Typography variant="h4">
              New 10th Generation Intel Processors up to{" "}
              <strong>14 Cores </strong>
              processing power sustains higher performance for longer period of
              time. So whether your layering dozens of tracks and effects,
              rendering 3D models, or compiling and testing code, you'll be
              doing it in no time flat
            </Typography>
          </Fade>
        </Grid>
        <br />
        <Grid item>
          <Fade
            in={true}
            style={{
              transitionOrigin: "-100,0,0",
              transitionDelay: "3000ms",
              transition: "ease-in-out",
            }}>
            <Typography variant="h4">
              The new DeepinPro features a stunning new display. Liquid crystal
              display in a Deepin notebook. It produces{" "}
              <strong>500 nits </strong>
              of brightness for a spectacular highlights and bright whites,
              while delivering deep blacks thanks to the prcesie photo alignment
              of liquid crystal moleculres. The <strong>P3</strong> wide color
              gamut enables brilliant, true-to-life images and video. So no
              matter where you are, you'll see your work in the best possible
              light
            </Typography>
          </Fade>
        </Grid>
      </Grid>
      <br />
      <br />
      <Grid item lg={12} xs={12}>
        <Fade
          in={true}
          style={{
            transitionOrigin: "-100,0,0",
            transitionDelay: "3000ms",
            transition: "ease-in-out",
          }}>
          <Typography variant="h2" className={classes.heading}>
            "Touch screen that works beautiful with the OS"
          </Typography>
        </Fade>
      </Grid>
      <br />
      <Grid item lg={12} xs={12}>
        <Fade
          in={true}
          style={{
            transitionOrigin: "-100,0,0",
            transitionDelay: "3000ms",
            transition: "ease-in-out",
          }}
          mountOnEnter>
          <Typography variant="h3" className={classes.heading}>
            Graphical Performance
          </Typography>
        </Fade>
      </Grid>
      <br />
      <Grid container spacing={3}>
        <Grid item>
          <Fade
            in={true}
            style={{
              transitionOrigin: "-100,0,0",
              transitionDelay: "3000ms",
              transition: "ease-in-out",
            }}
            mountOnEnter>
            <Typography variant="h4">
              DeepinPor and <strong>Nvidia</strong> provide you one of the best
              graphical performance ever. Its base model provides up to 2 times
              faster than last generation for seemless playback and faster
              rendering
            </Typography>
          </Fade>
        </Grid>
        <br />
        <Grid item>
          <Fade
            in={true}
            style={{
              transitionOrigin: "-100,0,0",
              transitionDelay: "4000ms",
              transition: "ease-in-out",
            }}
            mountOnEnter>
            <Typography variant="h4">
              For working on graphics-intensive projects like 3D rending or
              high-end gaminng development, you can supercharge your DeepinPro
              with the optional Nvidia 3080. With its 10GB of{" "}
              <strong>High Bandwidth </strong>
              Memory, this powerhouse GPU brings a new level of desktop-class
              graphics power to DeepinPro{" "}
            </Typography>
          </Fade>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item lg={12} xs={12}>
          <Fade
            in={true}
            style={{
              transitionOrigin: "-100,0,0",
              transitionDelay: "4500ms",
              transition: "ease-in-out",
              enter: duration.enteringScreen,
            }}
            mountOnEnter>
            <Typography variant="h3" className={classes.heading}>
              Performance
            </Typography>
          </Fade>
        </Grid>
        <Grid item lg={12} xs={12}>
          <Slide
            in={true}
            direction={"left"}
            style={{
              transitionDelay: "5000ms",
              transition: "ease-in-out",
              enter: duration.enteringScreen,
              exit: duration.leaveScreen,
            }}>
            <Fade
              direction={"right"}
              in={true}
              style={{
                transitionDelay: "5000ms",
                transition: "ease-in",
                enter: duration.enteringScreen,
                exit: duration.leaveScreen,
              }}>
              <img src={multi} alt="" />
            </Fade>
          </Slide>
        </Grid>
        <Grid item>
          <Fade
            in={true}
            style={{
              transitionOrigin: "-100,0,0",
              transitionDelay: "5000ms",
              transition: "ease-in-out",
              enter: duration.enteringScreen,
            }}
            mountOnEnter
            unmountOnExit>
            <Typography variant="h4">
              The Deepin Pro elevates the notebook to a whole new level of
              performance and portability. Where your ideas take you, you'll
              acheive it with performance that won't compromise thanks to its
              powerful Processor, fast-storage and more
            </Typography>
          </Fade>
        </Grid>
        <br />
        <Grid item>
          <Fade
            in={true}
            style={{
              transitionOrigin: "-100,0,0",
              transitionDelay: "5000ms",
              transition: "ease-in-out",
              enter: duration.enteringScreen,
            }}
            mountOnEnter
            unmountOnExit>
            <Typography variant="h4">
              Code, Play, Design and more. Whereever your ideas take you, Deepin
              Pro will help you
            </Typography>
          </Fade>
        </Grid>
        <Grid item>
          <Typography variant="h4">
            The Deepin Pro elevates the notebook to a whole new level of
            performance and portability. Where your ideas take you, you'll
            acheive it with performance that won't compromise thanks to its
            powerful Processor, fast-storage and more
          </Typography>
        </Grid>
        <Grid item>
          <Fade
            in={true}
            style={{
              transitionDelay: "5000ms",
              transition: "ease-in-out",
              enter: duration.enteringScreen,
            }}
            mountOnEnter
            unmountOnExit>
            <Typography variant="h4">
              Code, Play, Design and more. Whereever your ideas take you, Deepin
              Pro will help you
            </Typography>
          </Fade>
        </Grid>
      </Grid>
      <br />
      <br />
      <Grid
        container
        justify="space-evenly"
        spacing={3}
        style={{ textAlign: "center" }}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h4">Up to</Typography>
          <Typography variant="h1">128Gb</Typography>
          <Typography variant="h4">Memory</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h4">Up to</Typography>
          <Typography variant="h1">14</Typography>
          <Typography variant="h4">Core</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h4">Up to</Typography>
          <Typography variant="h1">2.286Gb/s</Typography>
          <Typography variant="h4">SSD read speed</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h4">Up to</Typography>
          <Typography variant="h1">10hrs</Typography>
          <Typography variant="h4">Battery Life</Typography>
        </Grid>
      </Grid>
      <Grid item lg={12} xs={12}>
        <img src={Final} alt="" />
      </Grid>
    </div>
  );
}
