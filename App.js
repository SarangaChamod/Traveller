import Navigation from "./components/Navigation";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Destinations from "./pages/HomePage/HomeFullLists/Destinations";
import Article from "./pages/HomePage/HomeFullLists/Article";

const Stack = createNativeStackNavigator();

function App() {
  // return <Navigation />
  return <Article/>;
}
export default App;
