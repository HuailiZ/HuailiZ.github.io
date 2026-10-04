---
layout: archive
title: "Curriculum Vitae"
permalink: /cv/
author_profile: true
excerpt: "Quick overview of Huaili Zeng's education, research strengths, selected publications, and academic service."
redirect_from:
  - /resume
  - /resume-json
---

{% include base_path %}

<section class="archive-hero">
  <p class="archive-hero__eyebrow">Overview</p>
  <h2 class="archive-hero__title">Machine learning, sensor signal processing, and real-world sensing systems.</h2>
  <p class="archive-hero__lead">
    This page highlights the core parts of my CV. You can also download the full PDF for a more detailed version.
  </p>
  <div class="archive-hero__actions">
    <a class="btn" href="{{ base_path }}/files/Resume.pdf">Download Resume</a>
    <a class="btn btn--inverse" href="{{ base_path }}/publications/">View Publications</a>
  </div>
</section>

<section class="archive-summary-grid">
  <div class="archive-summary-card">
    <strong>Research focus</strong>
    <p>Multimodal perception, physiological sensing, wearable authentication, and efficient on-device systems.</p>
  </div>
  <div class="archive-summary-card">
    <strong>Technical strengths</strong>
    <p>End-to-end pipelines from raw sensor data to signal enhancement, modeling, inference, and experimental validation.</p>
  </div>
</section>

<section class="cv-section-card">
  <h2>Education</h2>
  <ul class="cv-simple-list">
    <li>Ph.D. candidate in Computer Science and Engineering, Michigan State University, 2022–present (expected 2027)</li>
    <li>M.Sc. in Electrical and Computer Engineering, National University of Singapore, 2022</li>
    <li>B.E. in Electronics and Information Engineering, University of Electronic Science and Technology of China, 2021</li>
  </ul>
</section>

<section class="cv-section-card">
  <h2>Research and Technical Strengths</h2>
  <ul class="cv-simple-list">
    <li>Acoustic, infrared, physiological, and piezoelectric sensing; multimodal modeling and secure wearable interaction</li>
    <li>Filtering, denoising, time-series analysis, feature extraction, CNN/LSTM models, generative modeling, and system evaluation</li>
    <li>Python, MATLAB, C/C++, PyTorch, OpenCV, Linux, Git, and mobile/wearable hardware-software prototyping</li>
  </ul>
</section>

<section class="cv-section-card">
  <h2>Selected Research Projects</h2>
  <ul class="cv-simple-list">
    <li><strong>Commercial-earphone perception:</strong> adaptive signal processing and lightweight CNNs for facial expressions, gestures, and silent speech, with an always-on mobile inference pipeline. Ongoing research.</li>
    <li><strong>PiezoBud:</strong> multimodal sensing and generative modeling for speaker authentication with a piezoelectric hardware-software prototype.</li>
    <li><strong>PyroSense:</strong> CNN-LSTM modeling of sparse PIR signals for 3D human pose reconstruction.</li>
    <li><strong>Optical-fiber physiological sensing:</strong> signal processing, hierarchical clustering, and template matching for non-invasive beat-to-beat heart-rate estimation.</li>
  </ul>
  <p class="archive-page-note"><a href="{{ base_path }}/#selected-projects">See the project overview</a> and the publications below for further details.</p>
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
