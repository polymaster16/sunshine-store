<template> <main>
<div class="img1">
<p class="mainText">
    Welcome ! 
</p>

</div>
</main>


</template>

<style >
.mainText{
    
    @apply text-yellow-50  text-9xl font-extrabold text-center
    
}

.img1{
    width: auto;
    height: 50rem;
    background-image: url('https://img.freepik.com/free-photo/black-woman-trendy-grey-leather-jacket-posing-beige-background-studio-winter-autumn-fashion-look_273443-141.jpg?w=2000');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}

@media only screen and (max-width: 600px) {
.mainText{
    margin-left: 1rem !important;
        @apply text-yellow-50  text-7xl font-extrabold text-center
        pt-9

}

}

</style>