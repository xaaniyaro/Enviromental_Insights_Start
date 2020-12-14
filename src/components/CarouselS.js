import React from 'react';
import Carousel from "react-material-ui-carousel"
import autoBind from "auto-bind"
import Popover from '@material-ui/core/Popover';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import './Carousel.scss';

import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Grid,
    Link
} from '@material-ui/core';

function createData(title, name) {
    return { title, name };
}

const panelData = [
    createData('Marca', 'Sunpower'),
    createData('Modelo', 'MAX3-370'),
    createData('Potencia', '370 W'),
    createData('Voc', '74.7 V'),
    createData('Isc', '6.52 A'),
    createData('Vmpp', '61.8 V'),
    createData('Impp', '5.99 A')
]

const termicData = [
    createData('Marca', 'Modulo Solar'),
    createData('Modelo', 'Maxol 2.5'),
    createData('Potencia térmica', '1.8kW'),
    createData('0a', 0.775),
    createData('a1a', 3.1),
    createData('a2a', 0.01),
    createData('Flow rate', 0.02),
    createData('Area', 2.326)
]

const pvtData = [
    createData('Marca', 'DualSun'),
    createData('Modelo', 'Spring'),
    createData('Potencia eléctrica', '280W'),
    createData('Potencia térmica', '570W/m²'),
    createData('Voc', '38.88 V'),
    createData('Isc', '9.30 A'),
    createData('Vmpp', '31.95 V'),
    createData('Impp', '8.77 A'),
    createData('Area', '1.66m²')
]

const lcpvtData = [
    createData('Marca', 'Tec de Monterrey'),
    createData('Modelo', 'PVT-110'),
    createData('Potencia eléctrica', '1500 W'),
    createData('Potencia térmica', '250 W')
]

function Banner(props) {
    if (props.newProp) console.log(props.newProp)
    const contentPosition = props.contentPosition ? props.contentPosition : "left"
    const totalItems = props.length ? props.length : 3;
    const mediaLength = totalItems - 1;

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [openedPopoverId, setOpenedPopoverId] = React.useState(null);


    const handleClick = (event, popoverId) => {
        setOpenedPopoverId(popoverId);
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setOpenedPopoverId(null);
        setAnchorEl(null);
    };

    let items = [];
    const content = (
        <Grid item xs={12 / totalItems} key="content">
            <CardContent className="Content">
                <Typography className="Title">
                    {props.item.Name}
                </Typography>
            </CardContent>
        </Grid>
    )


    for (let i = 0; i < mediaLength; i++) {
        const item = props.item.Items[i];

        const media = (
            <Grid item xs={12 / totalItems} key={item.Name}>
                <CardMedia
                    className="Media"
                    image={item.Image}
                    title={item.Name}
                >
                    <Button aria-describedby={item.Id} onClick={(e) => handleClick(e, item.Id)}  className="MediaTitle">
                        {item.Name}
                    </Button>
                    
                    <Popover
                        id={item.Id}
                        open={openedPopoverId === item.Id}
                        anchorEl={anchorEl}
                        onClose={handleClose}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                        }}
                        >
                        <TableContainer>
                        <Table>
                        {item.Info.map((row) => (
                            <TableRow>
                            <TableCell variant="head">{row.title}</TableCell>
                            <TableCell>{row.name}</TableCell>
                        </TableRow>
                            ))}
                        </Table>
                        </TableContainer>
                    </Popover>
                    
                    <Typography className="MediaCaption">
                    <Link href={item.Source} target="_blank" rel="noopener noreferrer" color="inherit">
                        {'Fuente'}
                    </Link>
                    </Typography>
                </CardMedia>

            </Grid>
        )

        items.push(media);
    }

    if (contentPosition === "left") {
        items.unshift(content);
    } else if (contentPosition === "right") {
        items.push(content);
    } else if (contentPosition === "middle") {
        items.splice(items.length / 2, 0, content);
    }

    return (
        <Card raised className="Banner">
            <Grid container spacing={0} className="BannerGrid">
                {items}
            </Grid>
        </Card>
    )
}

const items = [
    {
        Name: "Tecnologías usadas",
        Caption: "Electrify your friends!",
        contentPosition: "left",
        Items: [
            {
                Id: 1,
                Name: "Paneles solares",
                Image: "https://images.unsplash.com/photo-1584276433295-4b49a252e5ee?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1942&q=80",
                Source: "https://unsplash.com/s/photos/solar-panel",
                Info: panelData
            },
            {
                Id: 2,
                Name: "Colectores térmicos",
                Image: "https://4.bp.blogspot.com/-Mqjst3xTtZk/WUmdHvJLTeI/AAAAAAAABi0/zNRNjeUkYrkV3qbAQhDIEaqAEkKTCrhdQCLcBGAs/s1600/reggie-bush.jpg",
                Source: "https://edyeazul.blogspot.com/p/solar-thermal-system_31.html",
                Info: termicData
            }
        ]
    },
    {
        Name: "Colectores híbridos",
        Caption: "Say no to manual home labour!",
        contentPosition: "left",
        Items: [
            {
                Id: 3,
                Name: "PV/T",
                Image: "http://www.yougen.co.uk/i/uploads/gallery/240%20module.jpeg",
                Source: "http://www.yougen.co.uk/blog-entry/2833/Solar+PV-T+systems+-+what+are+the+pros+and+cons%273F/",
                Info: pvtData
            },
            {
                Id: 4,
                Name: "LCPV/T",
                Image: "lc.png",
                Source: "https://tec.mx/es",
                Info: lcpvtData
            }
        ]
    }
]

class BannerExample extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            autoPlay: false,
            timer: 500,
            animation: "fade",
            indicators: true,
            timeout: 500,
            navButtonsAlwaysVisible: false,
            navButtonsAlwaysInvisible: false
        }

        autoBind(this);
    }

    render() {
        return (
            <div style={{ marginTop: "30px", color: "#494949" }}>

                <Carousel
                    className="Example"
                    autoPlay={this.state.autoPlay}
                    timer={this.state.timer}
                    animation={this.state.animation}
                    indicators={this.state.indicators}
                    timeout={this.state.timeout}
                    navButtonsAlwaysVisible={this.state.navButtonsAlwaysVisible}
                    navButtonsAlwaysInvisible={this.state.navButtonsAlwaysInvisible}
                    next={(now, previous) => console.log(`Next User Callback: Now displaying child${now}. Previously displayed child${previous}`)}
                    prev={(now, previous) => console.log(`Prev User Callback: Now displaying child${now}. Previously displayed child${previous}`)}
                    onChange={(now, previous) => console.log(`OnChange User Callback: Now displaying child${now}. Previously displayed child${previous}`)}
                >
                    {
                        items.map((item, index) => {
                            return <Banner item={item} key={index} contentPosition={item.contentPosition} />
                        })
                    }
                </Carousel>

            </div>

        )
    }
}

export default BannerExample;