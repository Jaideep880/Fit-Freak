import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";
import Footer from "./components/footer";
import Header from "./components/Header";
import CartScreen from "./screens/CartScreen";
import HomeScreen from "./screens/HomeScreen";
import ProductDetails from "./screens/ProductDetails";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
import PlanScreen from "./screens/PlanScreen";
import SinglePlan from "./components/SinglePlan"
import CalculateScreen from "./screens/CalculateScreen";
import MCalculator from "./components/MCalculator";
import BMICalculator from "./components/BMICalculator";
import Workout from "./components/Workout";
import Diet from "./components/Diet";
import Supplements from "./components/Supplements";

 
function App() {
  return (
    <Router>
      <Header />
      
      
      <main className="my-3">
        <Container>
        
          <Route path="/order/:id" component={OrderScreen} />
          <Route path="/login" component={LoginScreen} />
          <Route path="/payment" component={PaymentScreen} />
          <Route path="/placeorder" component={PlaceOrderScreen} />
          <Route path="/shipping" component={ShippingScreen} />
          <Route path="/profile" component={ProfileScreen} />
          <Route path="/plans" component={PlanScreen}/>
          <Route path="/plan" component={SinglePlan}/>
          <Route path="/workout" component={Workout}/>
          <Route path="/diet" component={Diet}/>
          <Route path="/supplements" component={Supplements}/>
          <Route path="/calculate" component={CalculateScreen}/>
          <Route path="/MCalculator" component={MCalculator}/>
          <Route path="/BMICalculator" component={BMICalculator}/>
          <Route path="/register" component={RegisterScreen} />
          <Route path="/cart/:id?" component={CartScreen} />
          <Route path="/product/:id" component={ProductDetails} />
          <Route path="/" component={HomeScreen} exact />
        </Container>
      </main>

      <Footer />
    </Router>
  );
}

export default App;
