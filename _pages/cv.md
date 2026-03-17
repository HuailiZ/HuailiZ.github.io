---
layout: archive
title: "Curriculum Vitae"
permalink: /cv/
author_profile: true
excerpt: "Quick overview of Huaili Zeng's education, research strengths, selected publications, and academic service."
redirect_from:
  - /resume
---

{% include base_path %}

<section class="archive-hero">
  <p class="archive-hero__eyebrow">Overview</p>
  <h2 class="archive-hero__title">A quick view of my education, research strengths, and academic work.</h2>
  <p class="archive-hero__lead">
    This page highlights the core parts of my CV. You can also download the full PDF for a more detailed version.
  </p>
  <div class="archive-hero__actions">
    <a class="btn" href="../files/Resume.pdf">Download Resume</a>
    <a class="btn btn--inverse" href="{{ base_path }}/publications/">View Publications</a>
  </div>
</section>

<section class="archive-summary-grid">
  <div class="archive-summary-card">
    <strong>Research focus</strong>
    <p>Human-centered sensing, privacy-aware systems, user authentication, and wearable computing.</p>
  </div>
  <div class="archive-summary-card">
    <strong>Technical strengths</strong>
    <p>Signal processing, model development, prototyping, evaluation, and practical system implementation.</p>
  </div>
</section>

<section class="cv-section-card">
  <h2>Education</h2>
  <ul class="cv-simple-list">
    <li>Ph.D. in Computer Science and Engineering, Michigan State University</li>
    <li>M.Sc. in Electrical and Computer Engineering, National University of Singapore, 2022</li>
    <li>B.E. in Electronics and Information Engineering, University of Electronic Science and Technology of China, 2021</li>
  </ul>
</section>

<section class="cv-section-card">
  <h2>Research and Technical Strengths</h2>
  <ul class="cv-simple-list">
    <li>Human-centered sensing, user authentication, privacy-aware systems, and wearable computing</li>
    <li>Signal processing, model development, system prototyping, and user-focused evaluation</li>
    <li>Python, MATLAB, C/C++, embedded development, circuit analysis, and reproducible experimentation</li>
  </ul>
</section>

<section class="cv-section-card">
  <h2>Selected Publications</h2>
  <ul>
  {% for post in site.publications reversed %}
    {% unless post.featured %}
      {% continue %}
    {% endunless %}
    {% include archive-single-cv.html %}
  {% endfor %}
  </ul>
  <p class="archive-page-note">For the full list, visit the <a href="{{ base_path }}/publications/">publications page</a>.</p>
</section>

<section class="cv-section-card">
  <h2>Academic Service</h2>
  <ul class="cv-simple-list">
    <li>Program Committee: ACM SenSys Artifact Evaluation 2024</li>
    <li>Program Committee: IEEE ICPADS 2024-2025</li>
    <li>Journal Reviewer: IEEE Transactions on Mobile Computing, 2025</li>
  </ul>
</section>

<section class="cv-section-card">
  <h2>Teaching</h2>
  <ul>
  {% for post in site.teaching reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}
  </ul>
</section>
