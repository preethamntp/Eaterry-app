import {
  makeStyles
} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "grid",
    height: "100vh",
    gridTemplateRows: "50px 1fr 50px",
    gridTemplateColumns: "repeat(12,1fr)",
    columnGap: "12px",
    alignItems: "center",
    margin: "0 20px",
    ['@media (min-width:1080px)']: {
      gridTemplateRows: "50px 1fr 50px",
      height: "100vh",
    },
    backgroundImage: `url(${'/foodPanda.jpeg'})`
  },
  logo: {
    display: "none",
  },
  widget: {
    gridColumn: "1 / span 12",
    ['@media (min-width:1080px)']: {
      gridColumn: "8 / span 5"
    }
  },
  header: {
    gridColumn: "2 / span 10",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    ['@media (min-width:1080px)']: {
      gridColumn: "1 / span 12"
    }
  },
  footer: {
    gridColumn: "1 / span 12",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    ['@media (min-width:1080px)']: {
      gridColumn: "8 / span 5"
    }
  },
  links: {
    textDecoration: "none",
    paddingLeft: 0,
    margin: 0
  },
  link: {
    display: "inline-block",
    textDecoration: "none",
    color: "black",
    padding: "0 10px"
  },
  right: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  brand: {
    height: "25px"
  },
  wallpaper: {
    maxHeight: "500px",
    width: "100%"
  },
  auth_content: {
    padding: "30 px 40 px",
    border: "1 px solid# bebebe",
    borderRadius: "5 px",
    color:"white"
  },
  borderAround: {
     border: '2px solid black',
     borderRadius: "5px"
  },
  error:{
    color:"red",
    fontSize: "smaller"
  }
}));

export default useStyles;