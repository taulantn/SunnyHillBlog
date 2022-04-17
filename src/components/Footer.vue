<template>
  <footer>
        <div class="container">
            <div class="left">
                <div class="col-1">
                    <router-link class="header" :to="{ name: 'Home' }">Sunny Hill</router-link>
                <ul>
                    <li>
                        <a href="https://www.youtube.com/channel/UCCcXmevFk89YhD8pElp2cDA"><youTube class="svg-icon"/></a>
                    </li>
                    <li>
                        <a href="https://twitter.com/festivalsunny?lang=en"><twitter class="svg-icon"/></a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/sunnyhillfestival/?hl=en"><instagram class="svg-icon"/></a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/taulant-nevzadi-03652a229/"><linkedin class="svg-icon"/></a>
                    </li>
                </ul>
                </div>
                <div class="col-2">
                    <ul>
                        <router-link class="link" :to="{ name: 'Home' }">Home</router-link>
                        <router-link class="link" :to="{ name: 'Blogs' }">Blogs</router-link>
                        <router-link v-if="admin" class="link" to="#">Create Post</router-link>
                        <router-link v-if="!user" class="link" :to="{ name: 'Login' }"
                            >Login In / Register</router-link>
                    </ul>
                </div>
                <div class="col-3">
                    <h3>About Sunny Hill Festival</h3>
                    <p>Sunny hill festival is the biggest festival organized in kosovo and based on the headliners probably the best festival in the region.

International music festival of the highest standards, one that puts prishtina – kosovo on the festival map as a not-to-be-missed cultural place, in a country that loves music and knows how to have fun.

We want to invite music lovers from around the world to come and experience the festival with the best lineup in southeast europe with some of the best-known performers of our modern time and enjoy the unique hospitality of our country.
</p>
                </div>
            </div>
            <div class="right">
                <p>Copyright 2022 All Rights Reserved</p>
            </div>
        </div>    
  </footer>

</template>

<script>
import youTube from "../assets/Icons/youtube-brands.svg";
import twitter from "../assets/Icons/twitter-brands.svg";
import instagram from "../assets/Icons/instagram-brands.svg";
import linkedin from "../assets/Icons/linkedin-brands.svg";
export default {
    name: "footer-vue",
        components: {
            youTube,
            twitter,
            instagram,
            linkedin,
        },  
        computed: {
        user() {    
            return this.$store.state.user;
        },
        admin() {    
            return this.$store.state.profileAdmin;
        },
    },      
};
</script>

<style lang="scss" scoped>

    footer {
        margin-top: auto;
        padding: 70px 25px;
        background: linear-gradient(to left, #b50632, #401047);
            .container {
            display: flex;
            flex-direction: column;
            gap: 32px;
            @media (min-width: 800px) {
                flex-direction: row;
                gap: Opx;
            }  

            > div {
                display: flex;
                flex: 1;
            }

            .left {
            gap: 32px;
            color: #fff;
            display: flex;
            flex-direction: column;
            align-items: center;
            @media (min-width: 800px) {
                flex-direction: row;
                align-items: initial;
                gap: 0;
            }

            .header {
                font-size: 24px;
                color: #fff;
                text-decoration: none;
                font-weight: 600;
                text-align: center;
                @media (min-width: 800px) {
                    text-align: initial;
                }
            }
            ul {
                gap: 16px;
                list-style: none;
                display: flex;
            }

            .col-1,
            .col-2 {
                max-width: 20%;
                gap: 32px;
                display: flex;
                flex: 1;
                @media (min-width: 880px) {
                    gap: 0;
                }
            }
            .col-1{
                max-height: 70px;
            }
        
            .col-3 {
                gap: 32px;
                display: flex;
                flex: 1;
                flex-direction: column;
                max-width: 70%;
                width: auto;
                @media (min-width: 880px) {
                    text-align: center;
                    gap: 0;
                }
            }
            
            .col-1 {
                flex-direction: column;

                h2 {
                    text-align: center;
                    @media (min-width: 800px) {
                        text-align: initial;
                    }
                }    
                ul{
                    margin-top: auto;

                    li {
                        display: flex;
                        align-items: center;
                        .svg-icon {
                            width: 24px;
                            height: auto;
                            color: #fff;
                        }
                    }
                }
            }
            
            .col-2 {
                ul {
                    height: 100%;
                    flex-direction: row;
                    flex-wrap: wrap;
                    @media (min-width: 800px) {
                        flex-direction: column;
                    }
                    .link {
                    font-size: 16px;
                    font-weight: 500;
                    color: #fff;
                    text-decoration: none;
                    }
                }
            }
            .col-3 {
                h3 {margin-bottom: 20px;}
                
            }
        }

        .right {
            gap: 32px;
            color: #fff;
            max-width: 30%;
            align-items: flex-start;
            flex-direction: row;
            @media (min-width: 880px) {
                align-items: flex-start;
                gap: 0;
            }

            p{
            margin-top: auto;
            height: 244px;
            margin-left: 100px;
        }
        }

        
    }
}

</style>