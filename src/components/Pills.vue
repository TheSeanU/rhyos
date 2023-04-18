<template>
    <div class="profile-pils">
        <template v-for="items in socials" :key="items.name">
            <span class="pils">
                <a :href="items.link" target="_blank">
                    <SvgRenderer :name="items.icon" width="15" :hover="items.color" />
                    {{ items.name }}
                </a>
            </span>
        </template>
    </div>
</template>


<script setup lang="ts">
import SvgRenderer from '../resources/svgRenderer.vue';
import { socials } from '../assets/constants';
</script>


<style scoped lang="scss">
.profile-pils {
    display: flex;
    flex-wrap: wrap;
    align-content: space-between;

    .pils {
        background: var(--pils-back);
        box-shadow: inset 0 0 0 1px var(--border), 0 10px 30px -10px rgba(0, 0, 0, 0.12);
        border-radius: 60px;
        transition: all 0.3s;
        font-size: 13px;
        cursor: pointer;
        margin: 5px;
        color: var(--text-primary);

        a,
        a:visited,
        a:link {
            display: block;
            text-decoration: none;
            color: var(--main-2-fore);
            padding: 5px 10px;

            i {
                padding-right: 2px;
            }
        }

        &:nth-child(1):hover {
            box-shadow: inset 0 0 0 1px #007cf8, 0 10px 35px -10px rgba(20, 122, 255, 0.5);

            i {
                color: #007cf8;
            }
        }

        &:nth-child(2):hover {
            box-shadow: inset 0 0 0 1px #fff, 0 10px 30px -10px rgba(100, 100, 100, 0.6);
        }

        &:nth-child(3):hover {
            box-shadow: inset 0 0 0 1px #f154ff, 0 10px 35px -10px rgba(255, 59, 245, 0.5);

            i {
                color: #f154ff;
            }
        }

        &:nth-child(4):hover {
            box-shadow: inset 0 0 0 1px #163ca3, 0 10px 30px -10px rgba(13, 60, 121, 0.5);

            i {
                color: #163ca3;
            }
        }
    }
}
</style>