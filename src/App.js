
import './App.css';
import {LangProvider} from "./context/langContext";
import { BrowserRouter as Route,  Switch } from "react-router-dom";
import home from "./views/home/home"
import about from "./views/about/about"
import profile from "./views/profile/profile"
import portfolio from "./views/portfolio/portfolio"
import contactInfo from "./views/contactInfo/contactInfo"
import blog from "./views/blog/blog"
import NavBar from './components/navBar';
import Footer from "./components/footer";
import NotFound from "./components/notFound";



function App() {
  
  return (
    <LangProvider>
    <div className="h-screen flex flex-col" >
      <NavBar />
      <div className="flex-1">
        <Switch>
          <Route exact path="/" component={home} />
          <Route exact path="/ivt-portfolio" component={home} />
          <Route exact path="/about" component={about} />
          <Route exact path="/profile" component={profile} />
          <Route exact path="/portfolio" component={portfolio} />
          <Route exact path="/contact-info" component={contactInfo} />
          <Route exact path="/blog" component={blog} />
          <Route       path="*" component={NotFound} />
        </Switch> 
      </div> 
      
      <Footer />
    </div>
    </LangProvider>
  );
}

export default App;
