import styles from '../styles/linkPage.module.css';
import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TestimonialCard from "../Components/testimonialsCard";

export default function Testimonial(props) {

  const [data, setData] = useState([{ name: "", testimonial: "" }]);

  useEffect(() => {
    //fetch testimonial data here
    setData([
      {
        name: "Bob",
        testimonial: "Great experience with this company",
      },
      {
        name: "Todd",
        testimonial: " simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, ",
      },
      {
        name: "Jim",
        testimonial: "but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.y",
      },
      {
        name: "Johnny",
        testimonial: "I love it here!!",
      },
    ]);
  }, ['stop']);


  return (
    <>
      <h1>TESTIMONIALS</h1>
      <Container className={styles.container}>
        <Row className={styles.row} >
          {data.map((experience, ind) => {
            if (ind < 2) {
              return (
                <Col key={experience.name}>
                  <TestimonialCard
                    testimonials={experience.testimonial}
                    name={experience.name}
                  />
                </Col>
              )
            };
          })}
        </Row>
      </Container>
      <Container className={styles.container}>
        <Row className={styles.row}>
          {data.map((experience, ind) => {
            if (ind >= 2) {
              return (
                <Col key={experience.name}>
                  <TestimonialCard
                    testimonials={experience.testimonial}
                    name={experience.name}
                  />
                </Col>
              )
            };
          })}
        </Row>
      </Container>
    </>
  )
}
