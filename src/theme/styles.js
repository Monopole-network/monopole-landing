import { mode } from "@chakra-ui/theme-tools";

export const globalStyles = {
  colors: {
    gray: {
      700: "#1f2733",
    },
    royal: "#000126",
  },
  styles: {
    global: (props) => ({
      body: {
        bg: mode("gray.50", "royal")(props),
        fontFamily: "DM Sans, sans-serif",
      },
      "body::-webkit-scrollbar": {
        width: "18px",
        "border-radius": "25px",
      },
      "body::-webkit-scrollbar-track": {
        "box-shadow": "inset 0 0 15px 15px transparent",
        border: "solid 4px transparent",
        "border-radius": "25px",
      },
      "body::-webkit-scrollbar-thumb": {
        /*"background-image":
          'url("https://monopole.network/static/media/centralDot.1c0aa3edd22f5abaf66a.png"), linear-gradient(100deg, transparent, transparent)',
        "background-position": "center bottom, center -40px",
        "background-repeat": "no-repeat, no-repeat",
        "background-size": "contain, contain",*/
        "box-shadow": "inset 0 0 15px 15px #03CB88",
        border: "solid 6px transparent",
        "border-radius": "25px",
      },
      "body::-webkit-scrollbar-button": {
        display: "none",
      },
      html: {
        fontFamily: "DM Sans, sans-serif",
        "scroll-behavior": "smooth",
        "scrollbar-width": "thin",
        "scrollbar-color": "#5651B7",
      },
    }),
  },
};
