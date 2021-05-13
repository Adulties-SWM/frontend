import { MedInfoModal } from "./components/MedInfoModal";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import { Sidebar } from "./components/Sidebar";
import Layout, { Content } from "antd/lib/layout/layout";
import Sider from "antd/lib/layout/Sider";

function App() {
  return (
    <div>
      <Layout>
        <Sider style={{ background: "#ffffff" }} width={400}>
          <Sidebar />
        </Sider>
        <Content>content map</Content>
      </Layout>

      {/* <MedInfoModal modalProps={{ visible: false }} /> */}
    </div>
  );
}

export default App;
