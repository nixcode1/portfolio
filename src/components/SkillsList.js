import { Card, Typography } from "@material-ui/core";
import "../App.css";


function SkillList({ title, skillsList }) {
  return (
    <Card className="stack" elevation='5'>
      <Typography variant="h5">{title}</Typography>
      <ul>
        {skillsList.map((skills) => (
          <li>{skills}</li>
        ))}
      </ul>
    </Card>
  );
}

export default SkillList;
