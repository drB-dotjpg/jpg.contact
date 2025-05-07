<template>
    <div class="work-wrapper">
        <h1>LAN Championship Showndown</h1>
        <h2>September 2024 - April 2025</h2>
        <p>My role: Stream Integration and Design. Creation of majority of livestream assets and software.</p>
        <p>LCS was an ambitious concept to invite the winners of 8 different Splatoon LANS around the US. With such a special event, there was a need to do a special stream. The livestream was split up into 5 different streams. Four of the streams ran a traditional Splatoon stream with casters and matches. The main stream ran a unique red-zone style quad stream that would let viewers keep track of all the matches. This was a challenge as the graphics software needed to support 5 streams and we needed a way to get 4 of the game feeds over to the main stream. Watch my technical deep dive to learn more on what tools and technologies I used to created the stream.</p>
        <p>
            <a class="video-wrapper" href="https://www.youtube.com/watch?v=jYTXYCDJYnI&t=2s">
                <PlayCircle />
                Technical Deep Dive
            </a>
        </p>
        <p>
            <a class="video-wrapper" href="https://youtube.com/playlist?list=PLLF4dGgLE8oQw8Yu8U2cOCMNEVQeqaFRq&si=uwbpVOZn5x03w8Jh">
                <ListVideo />
                VOD Playlist
            </a>
        </p>
        <div class="media">
            <Image src="/img/lcsad.webp" alt="Ad for LCS reading 'Eight LANs, Eight Champions, One Showdown.'" />
            <Image src="/img/lcsmulti.webp" alt="LCS stream showing a picture in picture view with 3 different games happening at once." />
            <Image src="/img/lcsmap.webp" alt="LCS stream showing a graphic that has a map with markers on each LAN's city." />
            <Image src="/img/lcsstages.webp" alt="LCS stream showing a graphic that shows which stages are going to appear in the match." />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ListVideo, PlayCircle } from 'lucide-vue-next';
import Image from '../../Image.vue';
</script>