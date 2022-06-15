import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PageScrollTop from "./components/pageToTop/PageScrollTop";

// Pages import Here

import HomeScreen from "./screens/HomeScreen";

// Import Css Here
import "./assets/scss/style.scss";
import LoginScreen from "./screens/LoginScreen";
import Admin from "./Admin";
import AdminBanner from "../src/Admin/Banner/Banners";
import InBanner from "./Admin/Banner/inBanner.js/InBanner";
import AddBanner from "./Admin/Banner/AddBanner/AddBanner";
import AdminWork from "../src/Admin/Works/Works";
import inWorks from "./Admin/Works/inWork/InWorks";
import AddWork from "./Admin/Works/AddWorks/AddWorks";
// aa
import AdminWebWork from "../src/Admin/WebWorks.js/WebWorks";
import inWebWorks from "./Admin/WebWorks.js/inWebWork/InWorks";
import AddWebWork from "./Admin/WebWorks.js/AddWebWorks/AddWorks";
// aa
import AdminAhighlights from "../src/Admin/AnotherHighlight/Ahighlight";
import InAhighlight from "./Admin/AnotherHighlight/inAhighlight/inAhighlight";
import AddAhighlight from "./Admin/AnotherHighlight/AddAhighlight/AddAhighlights";
////aaa
import AdminSpecials from "./Admin/Special/Special";
import inSpecials from "./Admin/Special/inSpecial/inSpecial";
import AddSpecial from "./Admin/Special/AddSpecial/AddSpecial";
//Notification
import AdminNotifications from "./Admin/Notification/Notification";
import inNotifications from "./Admin/Notification/inNotification/inNotification";
import AddNotification from "./Admin/Notification/AddNotification/AddNotification";
///aaaaaa
import Highlights from "./Admin/Highlights/Highlights";
import InHighlight from "./Admin/Highlights/inHighlights/InHighlights";
import AddHighlight from "./Admin/Highlights/AddHighlights/AddHighlights";
import Magazines from "./Admin/Magazine/Magazines";
import InMagazine from "./Admin/Magazine/inMagazine/InMagazine";
import AddMagazine from "./Admin/Magazine/AddMagazine/AddMagazine";
import IhelpHr from "./screens/Services/HR/IhelpHr";
import HomeMagazine from "./screens/Services/Magazine/HomeMagazine";
import ihelpDeal from "./screens/Services/Deal/ihelpDeal";
import IhelpPlus from "./screens/Services/Plus/iHelpPlus";
import IhelpChamp from "./screens/Services/Champ/IhelpChamp";
import HomeWork from "./screens/Works/HomeWork";
import WorkItemDetail from "./screens/Works/WorkItemDetail";
import IhelpContact from "./screens/Contact/Index";
import MagazineSubs from "./Admin/Subscription/MagazineSubs";
import MarketingSubs from "./Admin/Subscription/MarketingSubs";
import PlusSubs from "./Admin/Subscription/PlusSubs";
import HighlightCats from "./Admin/Highlights/highcat/HighlightCats";
import HighDetail from "./Admin/Highlights/highcat/HighDetail";
import PrivacyAndPolicy from "./screens/PrivacyAndPolicy/PrivacyAndPolicy";

const App = () => {
  return (
    <Router>
      <PageScrollTop>
        <Switch>
          <Route
            path={`${process.env.PUBLIC_URL + "/"}`}
            exact
            component={HomeScreen}
          />

          <Route
            path={`${process.env.PUBLIC_URL + "/work-detail/:id"}`}
            exact
            component={WorkItemDetail}
          />
          <Route path={`/login`} exact component={LoginScreen} />
          <Route path={`/admin`} exact component={Admin} />
          <Route path={`/adminBanners`} exact component={AdminBanner} />
          <Route path={`/headerBanner/:id`} exact component={InBanner} />
          <Route path={`/addBanner`} exact component={AddBanner} />
          <Route path={`/adminWorks`} exact component={AdminWork} />
          <Route path={`/works/:id`} exact component={inWorks} />
          <Route path={`/addWorks`} exact component={AddWork} />
          {/* webWork */}
          <Route path={`/adminWebWorks`} exact component={AdminWebWork} />
          <Route path={`/webworks/:id`} exact component={inWebWorks} />
          <Route path={`/addWebWorks`} exact component={AddWebWork} />
          {/* webworks end */}
          <Route path={`/Privacy-policy`} exact component={PrivacyAndPolicy} />
          {/* Another highlight */}
          <Route
            path={`/adminAhighlights`}
            exact
            component={AdminAhighlights}
          />
          <Route path={`/addAhighlights`} exact component={AddAhighlight} />
          <Route path={`/ahighlights/:id`} exact component={InAhighlight} />
          {/* specuak */}
          <Route path={`/adminSpecials`} exact component={AdminSpecials} />
          <Route path={`/specials/:id`} exact component={inSpecials} />
          <Route path={`/addSpecials`} exact component={AddSpecial} />
          {/* notification */}
          <Route
            path={`/adminNotifications`}
            exact
            component={AdminNotifications}
          />
          <Route
            path={`/notifications/:id`}
            exact
            component={inNotifications}
          />
          <Route path={`/addNotifications`} exact component={AddNotification} />
          {/* aaaaaaaaaaaa */}
          <Route path={`/adminHighlights`} exact component={Highlights} />
          <Route path={`/adminHighlightCats`} exact component={HighlightCats} />
          <Route path={`/highDetail/:id`} exact component={HighDetail} />
          <Route path={`/highlights/:id`} exact component={InHighlight} />
          <Route path={`/addHighlight`} exact component={AddHighlight} />
          <Route path={`/magazines/:id`} exact component={InMagazine} />
          <Route path={`/hr`} exact component={IhelpHr} />
          <Route path={`/adminMagazines`} exact component={Magazines} />
          <Route path={`/addMagazine`} exact component={AddMagazine} />
          <Route path={`/magazine`} exact component={HomeMagazine} />
          <Route path={`/deal`} exact component={ihelpDeal} />
          <Route path={`/plus`} exact component={IhelpPlus} />
          <Route path={`/champ`} exact component={IhelpChamp} />
          <Route path={`/work`} exact component={HomeWork} />
          <Route path={`/contact`} exact component={IhelpContact} />
          <Route path={`/magazineSubs`} exact component={MagazineSubs} />
          <Route path={`/marketingSubs`} exact component={MarketingSubs} />
          <Route path={`/plusSubs`} exact component={PlusSubs} />
        </Switch>
      </PageScrollTop>
    </Router>
  );
};

export default App;
