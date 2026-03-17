---
permalink: /
title: ""
author_profile: true
excerpt: "Huaili Zeng is a Ph.D. candidate at Michigan State University studying human-centered sensing, user authentication, and privacy-aware systems."
redirect_from: 
  - /about/
  - /about.html
---

<section class="home-hero">
  <p class="home-hero__eyebrow">Huaili Zeng</p>
  <h1 class="home-hero__title">Toward privacy protection in user-centered daily life.</h1>
  <p class="home-hero__lead">
    I am a Ph.D. candidate in Computer Science and Engineering at Michigan State University, advised by
    <a href="https://cse.msu.edu/~litianx2/">Prof. Tianxing Li</a>.
    My work brings together HCI, signal processing, embedded systems, and data-driven modeling to design practical systems that support everyday use while protecting users and their privacy.
  </p>
  <div class="home-hero__actions">
    <a class="btn btn--large" href="../files/Resume.pdf">Download Resume</a>
    <a class="btn btn--inverse btn--large" href="/publications/">View Publications</a>
    <a class="btn btn--inverse btn--large" href="mailto:zenghuai@msu.edu">Contact Me</a>
  </div>
</section>

<section class="home-section">
  <h2>What I work on</h2>
  <div class="home-pillars">
    <div class="home-card">
      <h3>HCI and Everyday Use</h3>
      <p>I study interactive and user-centered scenarios where sensing systems need to work naturally in daily life.</p>
    </div>
    <div class="home-card">
      <h3>Privacy and Device Protection</h3>
      <p>I study ways to protect user privacy by improving device protection while keeping everyday interactions natural and usable.</p>
    </div>
    <div class="home-card">
      <h3>Sensing and Modeling</h3>
      <p>I work across sensing, modeling, and evaluation to develop systems that are reliable, practical, and grounded in real use.</p>
    </div>
  </div>
</section>

<section class="home-section">
  <h2>Highlights</h2>
  <div class="home-highlights">
    <div class="home-highlight">
      <strong>Active publication record</strong>
      <p>Publications in venues including IMWUT, SenSys, MobiCom, and OECC across sensing, interactive systems, and computing research.</p>
    </div>
    <div class="home-highlight">
      <strong>Applied evaluation experience</strong>
      <p>Experience designing studies and evaluating user-centered systems across varied real-world conditions.</p>
    </div>
    <div class="home-highlight">
      <strong>Broad technical foundation</strong>
      <p>Background in signal processing, model design, prototyping, evaluation workflows, and reproducible experimentation.</p>
    </div>
    <div class="home-highlight">
      <strong>Cross-disciplinary training</strong>
      <p>Dual training in ECE and CSE, with experience moving between hardware-level constraints and software-level system design.</p>
    </div>
  </div>
</section>

<section class="home-section">
  <h2>Selected publications</h2>
  <div class="home-publications">
    {% for post in site.publications reversed %}
      {% unless post.featured %}
        {% continue %}
      {% endunless %}
      <article class="home-publication">
        <p class="home-publication__meta">{{ post.venue }}, {{ post.date | date: "%Y" }}</p>
        <h3><a href="{{ base_path }}{{ post.url }}">{{ post.title }}</a></h3>
        <p>{{ post.excerpt }}</p>
      </article>
    {% endfor %}
  </div>
  <p class="home-section__footer"><a href="/publications/">See the full publication list</a></p>
</section>

<section class="home-section">
  <h2>Background</h2>
  <p>
    Before Michigan State, I earned an M.Sc. in Electrical and Computer Engineering from the National University of Singapore and a B.E. with distinction from the University of Electronic Science and Technology of China.
    Across these roles, I have built expertise in signal processing, model development, circuit analysis, and system implementation using Python, MATLAB, and C/C++.
  </p>
  <p>
    I am interested in opportunities related to HCI, user-centered sensing, authentication, privacy, and wearable computing.
  </p>
</section>
