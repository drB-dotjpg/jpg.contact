<template>
    <div class="work-wrapper">
        <h1>Battle of BC 7</h1>
        <h2>March 2025</h2>
        <p>My role: Creation of livestream graphic sources from preexisting concepts. Connected those graphics to
            respond to inputs from a dashboard in which I also maintained. Create working graphics for LED panels on
            stage.</p>
        <p>Battle of BC 7 was a very similar production to 5 and 6 in terms of the stream's design, aside from a couple
            small changes. The main
            differences were the introduction of a rewritten dashboard software; done by me.
            I had to rework a lot in the codebase to get things working on the new dashboard, but it was well worth it,
            the new dashboard is easier to use and easier to maintain.</p>
        <p>One significant part of this project were the LED panels that appeared on the stage. These were also powered
            by the graphics server and controlled by the dashboard. This was the first time me and most of the team
            have work with LED panels, so that was a fun thing to work on.</p>
        <p>
            <a class="video-wrapper" href="https://youtu.be/Za8Y8uqFh5Q?si=aayaiczzPRArlHRT">
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