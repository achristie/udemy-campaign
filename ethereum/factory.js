import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x5916E4635d406C2d683e14a18222A31091Ed9428"
);

export default instance;
