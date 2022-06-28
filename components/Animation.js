import { scaleCorrectors } from "framer-motion/types/projection/styles/scale-correction"
import { Children } from "react/cjs/react.production.min"

// Animation for player loading one by one.
--stagger-delay:100ms
@keyframes cardEntrance{
    from{
        opacity:0;
        transform:scale(0.3)
        filter:hue-rotate(180deg)
    }
    to{
        opacity:1;
        transform:scale(1)
        filter:hue-rotate(0deg)
    }
}

// Apply animation to all the elements to be animated e.g cards
.card{
    background-color:rgb(36,243,147)
    animation:cardEntrance 700ms ease-out     this should be the animation name, i.e the name set for keyframes
    animation-fill-mode:backwards
}

stagger by setting animation delay on each element

// first card
.card:nth-child(1){
    animation:calc(1*var(--staggered-delay))
}

// second card
.card:nth-child(2){
    animation:calc(2*var(--staggered-delay))
}

sass can be used instead of this to run a programatic for loop