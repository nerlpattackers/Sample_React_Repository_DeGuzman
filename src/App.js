import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./components/NavigationBar";
import Banner from "./components/Banner";
import Ainz from "./images/ainz.png";
import Albedo from "./images/albedo.png";
import Demiurge from "./images/demiurge.png";
import Sebastian from "./images/sebastian.png";
import Shalltear from "./images/shalltear.png";
import Griditems from "./components/Griditems";
import Footer from "./components/Footer";

function App(){
  return (
    <>
      <NavigationBar></NavigationBar>
      <Banner></Banner>
      <div className="bg-dark pt-5">
        <div className="container">
          <h1 className="text-warning">Top 5 Overlord Character:</h1>
          <div className="row g-5 justify-content-center">
            <Griditems name="Ainz" imageFile={Ainz} desc="He is the guildmaster of Ainz Ooal Gown, Overlord of the Great Tomb of Nazarick, and the creator of Pandora's Actor. He is regarded as the highest of the Almighty Forty-One Supreme Beings by the NPCs of Nazarick."></Griditems>
            <Griditems name="Albedo" imageFile={Albedo} desc="She is in charge of the general management and supervision of the activities done by the seven Floor Guardians, meaning that she ranks above the other NPCs in Nazarick. She is the middle sister of the older sister Nigredo and younger sister Rubedo. Along with her sisters, she was created by Tabula Smaragdina."></Griditems>
            <Griditems name="Demiurge" imageFile={Demiurge} desc="Demiurge (デミウルゴス) is the Floor Guardian of the 7th Floor of the Great Tomb of Nazarick,the Commander of the NPC defenses and the 2nd in command of the Floor Guardians. He is the creation of Ulbert Alain Odle."></Griditems>
            <Griditems name="Sebastian" imageFile={Sebastian} desc="Sebas Tian (セバス・チャン) is the head butler of the Great Tomb of Nazarick with several manservants and other butlers under his command. He was created by Touch Me. He is also the leader of the Pleiades Six Stars."></Griditems>
            <Griditems name="Shalltear" imageFile={Shalltear} desc="Shalltear Bloodfallen (シャルティア・ブラッドフォールン) is a true vampire and the Floor Guardian of the first to third floors in the Great Tomb of Nazarick. She was created by Peroroncino."></Griditems>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;