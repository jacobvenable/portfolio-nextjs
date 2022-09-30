import styles from "./TimeLine.module.scss";
import Typography from "components/Typography";

interface Item {
  date: string;
  title: string;
  company: string;
  bullets: string[];
}

const items: Item[] = [
  {
    date: "July 2021 - present",
    title: "Senior Software Engineer",
    company: "Nutrien Ag Solutions",
    bullets: [
      "Est sunt consectetur ad quis sit.",
      "Mollit ullamco sunt mollit esse adipisicing ad amet amet velit ex et adipisicing.",
      "Deserunt elit adipisicing reprehenderit sunt enim aute consequat velit proident magna mollit nisi culpa eu.",
    ],
  },
  {
    date: "March 2019 - July 2021",
    title: "Software Engineer",
    company: "Nutrien Ag Solutions",
    bullets: [
      "Est sunt consectetur ad quis sit.",
      "Mollit ullamco sunt mollit esse adipisicing ad amet amet velit ex et adipisicing.",
      "Deserunt elit adipisicing reprehenderit sunt enim aute consequat velit proident magna mollit nisi culpa eu.",
    ],
  },
  {
    date: "July 2016 - March 2019",
    title: "Senior Front-End Web Developer",
    company: "Purdue University",
    bullets: [
      "Est sunt consectetur ad quis sit.",
      "Mollit ullamco sunt mollit esse adipisicing ad amet amet velit ex et adipisicing.",
      "Deserunt elit adipisicing reprehenderit sunt enim aute consequat velit proident magna mollit nisi culpa eu.",
    ],
  },
  {
    date: "June 2014 - July 2016",
    title: "Web Developer",
    company: "Purdue University",
    bullets: [
      "Est sunt consectetur ad quis sit.",
      "Mollit ullamco sunt mollit esse adipisicing ad amet amet velit ex et adipisicing.",
      "Deserunt elit adipisicing reprehenderit sunt enim aute consequat velit proident magna mollit nisi culpa eu.",
    ],
  },
  {
    date: "May 2012 - May 2014",
    title: "Assistant Web Designer",
    company: "Purdue University",
    bullets: [
      "Est sunt consectetur ad quis sit.",
      "Mollit ullamco sunt mollit esse adipisicing ad amet amet velit ex et adipisicing.",
      "Deserunt elit adipisicing reprehenderit sunt enim aute consequat velit proident magna mollit nisi culpa eu.",
    ],
  },
  {
    date: "Jan 2013 - Nov 2013",
    title: "Web Developer/Designer",
    company: "Freelance",
    bullets: [
      "Est sunt consectetur ad quis sit.",
      "Mollit ullamco sunt mollit esse adipisicing ad amet amet velit ex et adipisicing.",
      "Deserunt elit adipisicing reprehenderit sunt enim aute consequat velit proident magna mollit nisi culpa eu.",
    ],
  },
];

const TimeLine: React.FC = () => {
  return (
    <>
      {items.map((item) => (
        <div className={styles.item} key={`${item.title} ${item.company}`}>
          <h3 className={styles.title}>{item.title}</h3>
          <Typography className={styles.date} variant="h4">
            {item.date}
          </Typography>
          <div className={styles.description}>
            <p>{item.company}</p>
            <ul>
              {item.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default TimeLine;
