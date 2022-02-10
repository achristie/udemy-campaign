import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x67135822c1F9f9E76C39e90879398B314c1Fcc4C"
);

export default instance;
