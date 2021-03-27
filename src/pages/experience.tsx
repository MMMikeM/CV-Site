import Card from "../components/card";

type buttonListTypes = [
  {
    clickFunction: void;
    text: string;
  }
];

const Experience = () => {
  const buttonList: buttonListTypes = [
    {
      clickFunction: console.log("hi"),
      text: "go",
    },
  ];
  return (
    <>
      <h2>Places I've been</h2>
      <Card title="Saicom" buttonList={buttonList}>
        <ul>
          <li>
            <h5>Network & VOIP Support Engineer</h5>
          </li>
          <li>
            <h5>Training Manager</h5>
          </li>
        </ul>
      </Card>
    </>
  );
};

export default Experience;
