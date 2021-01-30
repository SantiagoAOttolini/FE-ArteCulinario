import React, { useState, useRef } from "react";
import {
  Container,
  Card,
  CardContent,
  makeStyles,
  Grid,
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@material-ui/core";
import QRCode from "qrcode";
import * as Yup from "yup";
import QrReader from "react-qr-reader";

function App() {
  const [text, setText] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [scanResultFile, setScanResultFile] = useState("");
  const [scanResultWebCam, setScanResultWebCam] = useState("");
  const classes = useStyles();
  const qrRef = useRef(null);
  const generateQrCode = async () => {
    /* textValidation=["Combo uno","Combo dos", "Combo tres", "Combo cuatro", "Combo cinco"] */
    try {
      const response = await QRCode.toDataURL(text);
      setImageUrl(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleErrorFile = (error) => {
    console.log(error);
  };
  const handleScanFile = (result) => {
    if (result) {
      setScanResultFile(result);
    }
  };
  const onScanFile = () => {
    qrRef.current.openImageDialog();
  };
  const handleErrorWebCam = (error) => {
    console.log(error);
  };
  const handleScanWebCam = (result) => {
    if (result) {
      setScanResultWebCam(result);
    }
  };
  return (
    <div className="mt-5">
      <Container className={classes.conatiner}>
        <Card>
          <h2 className={classes.title}>
            Genera tu codigo QR para obtener tu beneficio
          </h2>
          <CardContent>
            <Grid>
              <div className="d-flex justify-content-center">
                <Grid>
                  <FormControl className={classes.formControl}>
                    <InputLabel>Elige tu combo</InputLabel>
                    <Select onChange={(e) => setText(e.target.value)}>
                      <MenuItem value={"Combo uno"}>Combo uno</MenuItem>
                      <MenuItem value={"Combo dos"}>Combo dos</MenuItem>
                      <MenuItem value={"Combo tres"}>Combo tres</MenuItem>
                      <MenuItem value={"Combo cuatro"}>Combo cuatro</MenuItem>
                      <MenuItem value={"Combo cinco"}>Combo cinco</MenuItem>
                    </Select>
                  </FormControl>

                  {/*  <TextField
                  label="Escribe el texto aqui"
                  onChange={(e) => setText(e.target.value)}
                /> */}
                  <div className="d-flex justify-content-center">
                    <Button
                      className={classes.btn}
                      variant="contained"
                      color="primary"
                      onClick={() => generateQrCode()}
                    >
                      Generar
                    </Button>
                  </div>

                  <div className="d-flex justify-content-center">
                    {imageUrl ? (
                      <a href={imageUrl} download>
                        <img src={imageUrl} alt="img" />
                      </a>
                    ) : null}
                  </div>
                </Grid>
              </div>
              {/*  <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
                        <Button className={classes.btn} variant="contained" color="secondary" onClick={onScanFile}>Escanear codigo QR</Button>
                        <QrReader
                          ref={qrRef}
                          delay={300}
                          style={{width: '100%'}}
                          onError={handleErrorFile}
                          onScan={handleScanFile}
                          legacyMode
                        />
                        <h4>Codigo escaneado: {scanResultFile}</h4>
                      </Grid> */}
              {/*  <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
                         <h4>Escanear codigo a travez de la Web Cam</h4>
                         <QrReader
                         delay={300}
                         style={{width: '100%'}}
                         onError={handleErrorWebCam}
                         onScan={handleScanWebCam}
                         />
                         <h4>Codigo escaneado: {scanResultWebCam}</h4>
                      </Grid> */}
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  conatiner: {
    marginTop: 10,
  },
  formControl: {
    minWidth: 200,
  },
  title: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "rgb(89, 165, 200)",
    color: "#fff",
    padding: 20,
  },
  btn: {
    marginTop: 10,
    marginBottom: 20,
  },
}));
export default App;