import React from "react";
import Typography from "@mui/material/Typography";
import { AppBar, IconButton, Menu, Toolbar } from "@mui/material";
import GetAppIcon from "@material-ui/icons/GetApp";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { Link } from "react-router-dom";

export default function Home() {
  const styleObj= { backgroundColor: "DodgerBlue", display:'flex', flexWrap:'wrap' , }
  return (
    <div>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h4">AreaCalculator</Typography>
          <IconButton aria-label="app" color="">
            <GetAppIcon style={{ marginLeft: "350px", color: "white" }} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <br></br>


      <div className="cards" style={styleObj}>

      <Card sx={{ maxWidth: 245 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="150"
            image="https://qph.cf2.quoracdn.net/main-qimg-f1c9b1baad8390adfadeed2f02cc3d05-lq"
            alt="circle-pic"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Circle
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Calculate area of Circle
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Link to="/circle">
            <Button size="small" color="primary">
              Calculate
            </Button>
          </Link>
        </CardActions>
      </Card>

      <Card sx={{ maxWidth: 245 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="150"
            image="https://www.shutterstock.com/image-photo/green-grass-natural-texture-background-260nw-1341602177.jpg"
            alt="Rectangle-pic"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Rectangle
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Calculate area of Rectangle
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Link to='/rectangle'>
            <Button size="small" color="primary">
              Calculate
            </Button>
          </Link>
        </CardActions>
      </Card>

      <Card sx={{ maxWidth: 245 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="150"
            image="https://images.unsplash.com/photo-1597589827317-4c6d6e0a90bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
            alt="Triangle-pic"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Triangle
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Calculate area of Triangle
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Link to="/triangle">
            <Button size="small" color="primary">
              Calculate
            </Button>
          </Link>
        </CardActions>
      </Card>

      <Card sx={{ maxWidth: 245 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="150"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREKS6Y60Nt9Vgy8L9PAzm_FMj7bva4PC0SgA&usqp=CAU"
            alt="Square-pic"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Square
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Calculate area of Square
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Link to='/polygonal' >
            <Button size="small" color="primary">
              Calculate
            </Button>
          </Link>
        </CardActions>
      </Card>

      </div>

      


    </div>
  );
}
