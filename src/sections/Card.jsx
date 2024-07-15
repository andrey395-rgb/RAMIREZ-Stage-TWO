import React, { useEffect } from "react";
import styles from "../sections/card.module.css";
import { useState } from "react";
import ProjectCard from "../common/ProjectCard.jsx";

function Card() {
  return (
    <section id="Card" className={styles.container}>
      <div className={styles.cardscontainer}>
        <ProjectCard
          idlabel={"#1"}
          src={"https://reqres.in/img/faces/1-image.jpg"}
          link={"https://mail.google.com/"}
          alt={"Bluth"}
          alt2={"George"}
          p={"george.bluth@reqres.in"}
        />
      </div>
      <div className={styles.cardscontainer}>
        <ProjectCard
          idlabel={"#2"}
          src={"https://reqres.in/img/faces/2-image.jpg"}
          link={"https://mail.google.com/"}
          alt={"Weaver"}
          alt2={"Janet"}
          p={"janet.weaver@reqres.in"}
        />
      </div>
      <div className={styles.cardscontainer}>
        <ProjectCard
          idlabel={"#3"}
          src={"https://reqres.in/img/faces/3-image.jpg"}
          link={"https://mail.google.com/"}
          alt={"Wong"}
          alt2={"Emma"}
          p={"emma.wong@reqres.in"}
        />
      </div>
      <div className={styles.cardscontainer}>
        <ProjectCard
          idlabel={"#4"}
          src={"https://reqres.in/img/faces/4-image.jpg"}
          link={"https://mail.google.com/"}
          alt={"Holt"}
          alt2={"Eve"}
          p={"eve.holt@reqres.in"}
        />
      </div>
      <div className={styles.cardscontainer}>
        <ProjectCard
          idlabel={"#5"}
          src={"https://reqres.in/img/faces/5-image.jpg"}
          link={"https://mail.google.com/"}
          alt={"Morris"}
          alt2={"Charles"}
          p={"charles.morris@reqres.in"}
        />
      </div>
      <div className={styles.cardscontainer}>
        <ProjectCard
          idlabel={"#6"}
          src={"https://reqres.in/img/faces/6-image.jpg"}
          link={"https://mail.google.com/"}
          alt={"Ramos"}
          alt2={"Tracey"}
          p={"tracey.ramos@reqres.in"}
        />
      </div>
    </section>
  );
}

export default Card;
