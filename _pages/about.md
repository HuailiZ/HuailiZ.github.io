---
permalink: /
title: ""
author_profile: true
excerpt: "Huaili Zeng is a Ph.D. candidate at Michigan State University working on machine learning, sensor signal processing, and real-world perception systems."
redirect_from: 
  - /about/
  - /about.html
---

{% include base_path %}

<section class="home-hero">
  <p class="home-hero__eyebrow">Huaili Zeng</p>
  <h1 class="home-hero__title">From sensor signals to real-world perception.</h1>
  <p class="home-hero__lead">
    I am a Ph.D. candidate in Computer Science and Engineering at Michigan State University, advised by
    <a href="https://cse.msu.edu/~litianx2/">Prof. Tianxing Li</a>.
    I develop signal-processing and machine-learning methods for noisy, real-world sensor data, spanning acoustic, infrared, physiological, and piezoelectric sensing. My work connects raw signal acquisition and multimodal modeling with efficient inference on mobile and wearable devices, with applications in human perception, health monitoring, and secure interaction.
  </p>
  <div class="home-hero__actions">
    <a class="btn btn--large" href="{{ base_path }}/files/Resume.pdf">Download Resume</a>
    <a class="btn btn--inverse btn--large" href="/publications/">View Publications</a>
    <a class="btn btn--inverse btn--large" href="mailto:zenghuai@msu.edu">Contact Me</a>
  </div>
</section>

<section class="home-section">
  <h2 id="selected-projects">Selected projects</h2>
  <div class="home-highlights">
    <article class="home-card">
      <p class="home-publication__meta">Commercial earphones · Ongoing research</p>
      <h3>Real-world human perception</h3>
      <p>Software-only sensing with unmodified commercial earphones for facial expressions, hand gestures, and silent speech. I combine adaptive gain control and lightweight CNNs in an always-on mobile sensing and inference pipeline.</p>
    </article>
    <article class="home-card">
      <p class="home-publication__meta">PiezoBud · ACM SenSys 2024</p>
      <h3>Multimodal speaker authentication</h3>
      <p>A hardware-software prototype combining piezoelectric sensing and acoustic signals with flow-based generative modeling for speaker authentication and spoofing resilience on resource-constrained mobile hardware.</p>
      <a href="{{ base_path }}/publication/2024-11-14-piezobud">Paper and project details</a>
    </article>
    <article class="home-card">
      <p class="home-publication__meta">PyroSense · ACM IMWUT 2024</p>
      <h3>3D pose from infrared signals</h3>
      <p>CNN-LSTM modeling of sparse temporal signals from commodity PIR sensors to reconstruct human joint coordinates. The published system reports over 99% activity classification accuracy and mean joint error below 16 cm.</p>
      <a href="{{ base_path }}/publication/2024-01-12-pyrosense">Paper and project details</a>
    </article>
    <article class="home-card">
      <p class="home-publication__meta">Optical-fiber sensing · OECC 2021</p>
      <h3>Non-invasive physiological sensing</h3>
      <p>Signal processing for weak ballistocardiography and respiration signals from optical-fiber sensors. Hierarchical clustering and template matching support beat-to-beat heart-rate estimation without wearable electrodes.</p>
      <a href="{{ base_path }}/publication/2021-07-03-mzi">Paper and project details</a>
    </article>
  </div>
</section>

<section class="home-section">
  <h2>How I build sensing systems</h2>
  <p>I work across signal acquisition, preprocessing and enhancement, feature extraction, model development, and experimental validation. My tools include Python, MATLAB, C/C++, and PyTorch, alongside hands-on mobile and wearable prototyping.</p>
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
    I am interested in research and engineering opportunities in machine learning, perception, sensor signal processing, and efficient on-device systems, including applications in embodied AI.
  </p>
</section>
