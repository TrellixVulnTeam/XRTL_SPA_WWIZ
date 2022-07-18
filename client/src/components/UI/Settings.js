import Slider from "./SliderCtrl";
import Switch from "./Switch"
import Select from "./Select";
import UpDownCtrl from "./UpDownCtrl"
import LeftRightCtrl from "./LeftRightCtrl";
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import styles from "./Settings.module.css"

import { useSocketContext } from "../../services/SocketContext";
import {useState} from "react";

const Settings = (props) => {
    const [footer, setFooter] = useState(props.footer);
    const socketCtx = useSocketContext();
    
    const [mouted, setMounted] = useState(true);
    const theme = createTheme({
        palette: {
            mode: 'dark',
            primary: {
                light: '#01bd7d',
                main: '#01bd7d',
                dark: '#01bd7d',
                contrastText: '#01bd7d',
            },
        }
    })
   
    const handleChangeFooter = (newFooter) => {
        setFooter(newFooter);
      };



    return (
        <ThemeProvider theme={theme}>
            <div className={styles.UpDown}>
                <UpDownCtrl component={props.component} footer={props.footer} />
            </div>
            <div className={styles.LeftRight}>
                <LeftRightCtrl component={props.component} footer={props.footer} />
            </div>
            <Box sx={{ m: 2, width: 250 }} > <h1>Settings</h1> </Box>
            <Select title="Resolution" component={props.component} footer={props.footer}  newStatus={handleChangeFooter} command="frame size" />
            <Switch component={props.component} footer={props.footer} command="gray" start='Color' end='Grey' />
            <Slider title="Contrast" component={props.component} footer={props.footer} command="contrast" min='-2' max='2' />
            <Slider title="Brightness" component={props.component} footer={props.footer} command="brightness" min='-2' max='2' />
        </ThemeProvider>

    )
}
export default Settings
