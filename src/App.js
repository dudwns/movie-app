import{
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail"

function App() {
 return (
  <Router>     {/*라우터를 렌더링  */}
    <Routes>   {/*라우트를 찾음 */}
      <Route path={process.env.PUBLIC_URL +"/hello"} element={<h1>Hello</h1>}/>
      <Route path={process.env.PUBLIC_URL +"/movie/:id"} element={<Detail/>}/> {/* url이 /movie면 Detail 라우트를 렌더링 */}
      <Route path={process.env.PUBLIC_URL +"/"} element={<Home/>}/>         {/* url이 아무것도 없으면 Home 라우트를 렌더링 */}
    </Routes>
  </Router>
 )
}

export default App;
