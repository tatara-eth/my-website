import "./App.scss";
import InfoCard from "./components/InfoCard";
import groups from "./models/groups";
import poaps from "./models/poaps";
import pok from "./models/pok";

function App() {
    const walletAddress = process.env.REACT_APP_WALLET_ADDRESS;
    const socialLinks = {
        twitter: "https://twitter.com/iamtatara",
        github: "https://github.com/tatara-eth",
        etherScanVerify: "https://etherscan.io/verifySig/3846",
        snapshot: `https://snapshot.org/#/profile/${walletAddress}`,
        opensea: "https://opensea.io/iamtatara"
    };

  return (
      <div className="App">
          <div className="nav-bar-left">
              <div className="profile-photo">
                  <a href={socialLinks.opensea}
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                      <img
                      src="https://metadata.ens.domains/mainnet/0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85/0x6f9c62312579a649606742064ef452c436eef315b7d1f2b07a72b19325b2d1dc/image"
                      alt="tatara.eth"
                  />
                  </a>
              </div>
              <nav className="social-links">
                  <ul>
                      <li><a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer">Twitter</a></li>
                      <li><a href={socialLinks.github} target="_blank" rel="noopener noreferrer">Github</a></li>
                      <li><a href={socialLinks.etherScanVerify} target="_blank" rel="noopener noreferrer">Etherscan Verify</a></li>
                      <li><a href={socialLinks.snapshot} target="_blank" rel="noopener noreferrer">Snapshot</a></li>
                  </ul>
              </nav>
          </div>
          <div className="main-content">
              <div className="about-section">
                  <h1>Hello, I'm <span className="brand-color">tatara.eth</span>!</h1>
                  <p>
                      I’m currently a web2 software engineer
                      diving head-first into the web3 space.
                  </p>
                  <p>
                      I spend most of my time
                      participating in DAOs and developing smart contracts.
                  </p>
                  <p>
                      I have a strong conviction that everybody will be using web3 in
                      the future and I want to collaborate with others
                      to accelerate this future!
                  </p>
                  <p>
                      If you’re interested in building in this space,
                      let’s connect! Send me a follow request and
                      DM on <a className="brand-color" href={socialLinks.twitter} rel="noopener noreferrer" target="_blank">Twitter</a>.
                  </p>
              </div>
              <InfoCard Title="Find me participating in" Activity={groups}/>
              <InfoCard Title="POAPs" Activity={poaps}/>
              <InfoCard Title="Proof of knowledge" Activity={pok}/>
          </div>
      </div>
  );
}

export default App;
