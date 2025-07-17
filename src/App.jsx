import PageLayout from "./PageLayout/PageLayout"
import { Analytics } from "@vercel/analytics/next"
//Main App Instance
const App = ({ children }) => {
  return (
    <>
      <PageLayout children={children} />
      <Analytics/>

    </>
  )
}

export default App;
