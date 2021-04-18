import "./App.css";
import { motion } from "framer-motion";
import SkillsList from './components/SkillsList';

let frontendSkills = ["Html", "Css", "Javascript", "Vue", "React"];
let mobileSkills = ["Flutter"];
let backendSkills = ["Nodejs", "Django"]

function App() {
  return (
    <div className="App">
      <div style={{ display: "flex", paddingTop: "5%" }}>
        <motion.div animate={{ x: "100%"}} transition={{ duration: 1}}>
            <div className='heading'>Hey, I'm Amaechi Precious </div>
            <div className='heading'>and I'm a software developer</div>
        </motion.div>
      </div>
      <div>
        I make cross-platform mobile apps and web applications[backend and frontend]
      </div>

      <div>
        Skills
      </div>
      <SkillsList title="Mobile Development" skillsList={mobileSkills}/>
      <SkillsList title="Frontend Development" skillsList={frontendSkills}/>
      <SkillsList title="Backend Development" skillsList={backendSkills}/>
      {/* <div>
        Frontend
        <ul>
          {frontendSkills.map(skills => <li>{skills}</li>)}
        </ul>
      </div> */}
    </div>
  );
}

export default App;
