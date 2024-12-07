<template>
    <div class="about">
        <div class="header">
            <div class="name-photo">
                <Image class="photo" src="/img/photoOf.jpg" alt="Photo of .jpg"/>
                <div>.jpg</div>
            </div>
            <div class="blurb">Creating productions through code and design.</div>
        </div>

        <h1>About Me</h1>
        <p>My name is .jpg, and I create esport designs and productions for numerous organizations. I’ve been working in esports as a hobby for more than five years. I’ve organized major tournaments in the past, but nowadays I focus most of my time on creating awesome looking productions through design and code. I also create tools to help streamline processes in an esports production. I mainly reside in the competitive Splatoon and Smash scene, but I have experience producing for other games such as Valorant, Overwatch, and Rainbow Six Siege.</p>

        <h2>About this site</h2>
        <p>You can find all my past works on this site, which mimics a Windows-style desktop. I wrote it from scratch using Vue. Have fun playing around with it!</p>
        <p></p>

        <h2>Contact</h2>
        <p>Feel free to reach out if you’re interested in working with me, or if you just want some production questions answered!</p>
        <p>Email at derek@level1.tv</p>
        <p>I'm on Discord as <b>.jpg.jpg</b></p>
        <p><a href="https://bsky.app/profile/jpg-is.online">Follow me on Bluesky (most active here!)</a></p>
        <p><a href="https://twitter.com/PlayLowInk">Follow me on Twitter</a></p>
        <p><a href="https://github.com/drB-dotjpg">See my work on GitHub</a></p>

    </div>
</template>

<script setup lang="ts">
import Image from '../Image.vue';
</script>

<style lang="scss" scoped>
@import "../style/variables.scss";

.about {
    padding: 1rem;
    color: $dark;

    .header {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        font-size: 7rem;
        font-weight: 700;
        padding: 2rem;
        background-color: $dark;
        color: $light;
        width: fit-content;
        border-radius: 5px;

        .name-photo {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            column-gap: 1rem;

            .photo {
                width: 150px;
                height: 150px;
            }
        }

        .blurb {
            font-size: 1.5rem;
            font-weight: 600;
            background-color: $light;
            color: $dark;
            padding: .5rem;
            max-width: 25rem;
            border-radius: 5px;
        }
    }
}
</style>