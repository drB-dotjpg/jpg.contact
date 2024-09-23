<template>
    <div class="work-wrapper">
        <h1>GE Open 2024</h1>
        <h2>Started work January 2024 - Streamed in April 2024</h2>
        <p>My role: Design branding and all livesteam assets. Sort out hardware needed. Run the
            livestream.</p>
        <p>GE Open 2024 is an open online esports tournament hosted by the Gaming and Esports Club at Iowa
            State. The event features Valorant, Rainbow 6 Siege, and Overwatch 2 brackets.</p>
        <p>My role with this project was everything regarding the design, stream overlays, and the broadcast itself. The
            stream took place on April 20 - 21 with a total stream time of about 23.5 hours. Just like all my previous
            streaming projects, all the overlays are created by making a web page that is layered over the stream. This
            web page serves as the graphics and features responsive animations. The webpage connects to a dashboard
            software that hosts a webserver in order to control the data and values shown on the stream.</p>
        <p>
            <a class="video-wrapper" href="https://youtu.be/l3Z1rG7-ArQ?si=CyuMI7V1NYc5owCG">
                <PlayCircle />
                Video
            </a>
        </p>
        <div class="media">
            <Image src="/img/geopen-break.png" alt="GE Open Break Scene"></Image>
            <Image src="/img/geopen-casters.png" alt="GE Open Casters Scene"></Image>
            <Image src="/img/geopen-dual.png" alt="GE Open Casters/Gameplay"></Image>
        </div>
    </div>
</template>

<script setup lang="ts">
import { PlayCircle } from 'lucide-vue-next';
import Image from '../../Image.vue';
</script>