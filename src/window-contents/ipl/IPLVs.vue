<template>
    <div class="work-wrapper">
        <h1>IPL VS</h1>
        <h2>Started development in November 2022 - Ended Streaming October 2023</h2>
        <p>My role: Production Lead</p>
        <p>IPL VS was a Splatoon exhibition match production. Two teams are invited to battle live on our Twitch in a
            best of 9 with counterpicks set. Featuring quality match-ups, the best casters, and a detailed packed
            stream.</p>
        <p>
            <a class="video-wrapper" href="https://youtu.be/rWJAOdxxThI?si=p6huVnxiLUPQNuiw&t=423">
                <PlayCircle />
                Video
            </a>
        </p>
        <div class="media">
            <Image src="/img/iplvs.png" alt="IPL VS Introduction"></Image>
            <Video src="/img/iplvsanimations.mp4" alt="IPL VS animations"></Video>
        </div>
    </div>
</template>

<script setup lang="ts">
import { PlayCircle } from 'lucide-vue-next';
import Image from '../../Image.vue';
import Video from '../../Video.vue';
</script>