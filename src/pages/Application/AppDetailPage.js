import React, { useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'


const AppDetailPage = (props) => {

  const [htmlFileString, setHtmlFileString] = useState();

  async function fetchHtmlApp1() {
    setHtmlFileString(await (await fetch(`${window.location.origin}/details/MapsAPI.html`)).text());
  }
  async function fetchHtmlApp2() {
    setHtmlFileString(await (await fetch(`${window.location.origin}/details/VietbandoDesktop.html`)).text());
  }
  async function fetchHtmlApp3() {
    setHtmlFileString(await (await fetch(`${window.location.origin}/details/VDMS.html`)).text());
  }
  async function fetchHtmlApp4() {
    setHtmlFileString(await (await fetch(`${window.location.origin}/details/TrackingApplication.html`)).text());
  }
  async function fetchHtmlApp5() {
    setHtmlFileString(await (await fetch(`${window.location.origin}/details/TrackingWebServices.html`)).text());
  }
  async function fetchHtmlApp6() {
    setHtmlFileString(await (await fetch(`${window.location.origin}/details/DataCollector.html`)).text());
  }
  async function fetchHtmlApp7() {
    setHtmlFileString(await (await fetch(`${window.location.origin}/details/SearchEngineServer.html`)).text());
  }
  async function fetchHtmlApp8() {
    setHtmlFileString(await (await fetch(`${window.location.origin}/details/VietbandoBI.html`)).text());
  }
  async function fetchHtmlApp9() {
    setHtmlFileString(await (await fetch(`${window.location.origin}/details/VietbandoETL.html`)).text());
  }
  async function fetchHtmlApp10() {
    setHtmlFileString(await (await fetch(`${window.location.origin}/details/VietbandoWorkflowServer.html`)).text());
  }
  async function fetchHtmlApp11() {
    setHtmlFileString(await (await fetch(`${window.location.origin}/details/VbdT4chMOB.html`)).text());
  }
  async function fetchHtmlApp12() {
    setHtmlFileString(await (await fetch(`${window.location.origin}/details/DataWarehouse.html`)).text());
  }
  async function fetchHtmlApp13() {
    setHtmlFileString(await (await fetch(`${window.location.origin}/details/VietbandoIOTHub.html`)).text());
  }
  async function fetchHtmlApp14() {
    setHtmlFileString(await (await fetch(`${window.location.origin}/details/VietbandoIOTHubLite.html`)).text());
  }
  async function fetchHtmlApp15() {
    setHtmlFileString(await (await fetch(`${window.location.origin}/details/VideoManagementSystem.html`)).text());
  }
  async function fetchHtmlApp16() {
    setHtmlFileString(await (await fetch(`${window.location.origin}/details/VideoRecognition.html`)).text());
  }
  async function fetchHtmlApp17() {
    setHtmlFileString(await (await fetch(`${window.location.origin}/details/GISServer.html`)).text());
  }
  async function fetchHtmlApp18() {
    setHtmlFileString(await (await fetch(`${window.location.origin}/details/T4CH.html`)).text());
  }
  async function fetchHtmlApp19() {
    setHtmlFileString(await (await fetch(`${window.location.origin}/details/VietbandoLPR.html`)).text());
  }
  async function fetchHtmlApp20() {
    setHtmlFileString(await (await fetch(`${window.location.origin}/details/VBDLIS.html`)).text());
  }
  async function fetchHtmlApp21() {
    setHtmlFileString(await (await fetch(`${window.location.origin}/details/Kiemsoatdulieu.html`)).text());
  }
  async function fetchHtmlApp22() {
    setHtmlFileString(await (await fetch(`${window.location.origin}/details/InMEMORYDB.html`)).text());
  }
  async function fetchHtmlApp23() {
    setHtmlFileString(await (await fetch(`${window.location.origin}/details/VDFS.html`)).text());
  }
  

  useEffect(() => {
    switch (window.location?.pathname) {
      case '/operating-app/app1':
        fetchHtmlApp1();
        break;
      case '/operating-app/app2':
        fetchHtmlApp2();
        break;
      case '/operating-app/app3':
        fetchHtmlApp3();
        break;
      case '/operating-app/app4':
        fetchHtmlApp4();
        break;
      case '/operating-app/app5':
        fetchHtmlApp5();
        break;
      case '/operating-app/app6':
        fetchHtmlApp6();
        break;
      case '/operating-app/core3':
        fetchHtmlApp7();
        break;
      case '/operating-app/app8':
        fetchHtmlApp8();
        break;
      case '/operating-app/app9':
        fetchHtmlApp9();
        break;
      case '/operating-app/core2':
        fetchHtmlApp10();
        break;
      case '/operating-app/app11':
        fetchHtmlApp11();
        break;
      case '/operating-app/app12':
        fetchHtmlApp12();
        break;
      case '/operating-app/app13':
        fetchHtmlApp13();
        break;
      case '/operating-app/app14':
        fetchHtmlApp14();
        break;
      case '/operating-app/app15':
        fetchHtmlApp15();
        break;
      case '/operating-app/app16':
        fetchHtmlApp16();
        break;
      case '/operating-app/core1':
        fetchHtmlApp17();
        break;
      case '/operating-app/app18':
        fetchHtmlApp18();
        break;
      case '/operating-app/app19':
        fetchHtmlApp19();
        break;
      case '/operating-app/app20':
        fetchHtmlApp20();
        break;
      case '/operating-app/app21':
        fetchHtmlApp21();
        break;
      case '/operating-app/software1':
        fetchHtmlApp22();
        break;
      case '/operating-app/software2':
        fetchHtmlApp23();
        break;  
      default:
          break;
    }
  }, [window.location?.pathname]);

  const DetailPage = (props) => {
      return <div className=''>{props.children}</div>;
  };

  const PageList = () => {
    return(
      <DetailPage>
          <div dangerouslySetInnerHTML={{ __html: htmlFileString }}></div>
      </DetailPage>
    )
  }

  return (
    <Routes>
      <Route path=":menuId/*" element={<PageList />} />
    </Routes>
  )
}
export default AppDetailPage;