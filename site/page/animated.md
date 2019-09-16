---
layout: layout
title: Animated
permalink: /animated/
---

# {{page.title}}

<style>
    svg {
        color: #00B6FF;
        fill: #FFD500;
        animation: 5s infinite day;
        animation-direction: alternate-reverse;
    }
    @keyframes day {
        100% {
            color: blue;
            fill: pink;
        }
    }
</style>


<svg viewbox="0 0 100 100">
    <use xlink:href="/svg/sprite.svg#three-colors"></use>
</svg>