<template>
    <div class="work-wrapper">
        <h1>Battle of BC 6</h1>
        <h2>March 2024</h2>
        <p>My role: Creation of livestream graphic sources from preexisting concepts. Connected those graphics to
            respond to inputs from a dashboard, which was created by another team.</p>
        <p>I was rehired by Level 1 to work on Battle of BC 6 broadcast graphics.</p>
        <p>Similar to last year's event, I was tasked to do the graphics integration for a major esports
            live
            stream. What this consists of is the creation of web pages that are overlayed on top of the live
            stream. Using typescript for logic and scss for styling, I created detailed and animated web
            pages
            that match the specs provided by the design team.</p>
        <p>This project helped me personally grow by using web components to reuse logic. We used Lit to
            create
            these web components, which is like a lightweight version of vue or react. I'm using this
            project as
            a
            stepping stone to get better at these more popular, but more complex, frameworks!</p>
        <p>
            <a class="video-wrapper" href="https://youtu.be/4BZhv8zgIoU?si=P4o4_8apAHRpV0__">
                <PlayCircle />
                Video
            </a>
        </p>
    </div>
</template>

<script setup lang="ts">
import { PlayCircle } from 'lucide-vue-next';
import Image from '../../Image.vue';
</script>