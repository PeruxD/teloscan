<script setup lang="ts">
defineProps<{
    loading: boolean;
}>();
</script>

<template>
<div
    :class="{
        'c-latest-data-row': true,
        'c-latest-data-row--loading': loading
    }"
>
    <div class="c-latest-data-row__column-one">
        <div v-if="loading" class="c-latest-data-row__skeleton">
            <q-skeleton type="rect" size="48px" />
        </div>
        <div v-else class="c-latest-data-row__icon-container">
            <slot name="column-one">
            </slot>
        </div>
    </div>
    <div class="c-latest-data-row__column-two">
        <div v-if="loading" class="c-latest-data-row__skeleton">
            <q-skeleton type="rect" height="22px" class="q-mb-xs" />
            <q-skeleton type="rect" height="22px" />
        </div>
        <slot v-else name="column-two">
        </slot>
    </div>
    <div class="c-latest-data-row__column-three">
        <div v-if="loading" class="c-latest-data-row__skeleton">
            <q-skeleton type="rect" height="22px" class="q-mb-xs" />
            <q-skeleton type="rect" height="22px" />
        </div>
        <slot v-else name="column-three">
        </slot>
    </div>
    <div class="c-latest-data-row__column-four">
        <div v-if="loading" class="c-latest-data-row__skeleton">
            <q-skeleton type="rect" height="22px" class="q-mb-xs" />
            <q-skeleton type="rect" height="22px" />
        </div>
        <slot v-else name="column-four">
        </slot>
    </div>
</div>

</template>

<style lang="scss">
.c-latest-data-row {
    $this: &;

    border-bottom: 1px solid var(--border-color);
    display: flex;
    flex-direction: column;
    gap: 2px;
    padding: 12px 0;

    @media screen and (min-width: $latest-data-breakpoint) {
        gap: 12px;
    }

    @media screen and (min-width: $latest-data-breakpoint) {
        flex-direction: row;
        align-items: center;
    }

    &--loading {
        #{$this}__column-one {
            display: none;

            @media screen and (min-width: $latest-data-breakpoint) {
                display: block;
            }
        }
    }

    &:first-of-type {
        padding-top: 0;
    }

    &:last-of-type {
        border-bottom: none;
    }

    &__icon-container {
        display: none;
        justify-content: center;
        align-items: center;
        height: 48px;
        width: 48px;
        background-color: $grey-3;
        border-radius: 12px;

        body.body--dark & {
            background-color: $grey-9;
        }

        @media screen and (min-width: $latest-data-breakpoint) {
            display: flex;
        }
    }

    &__skeleton {
        width: 100%;
    }

    &__column-two {
        @media screen and (min-width: $latest-data-breakpoint) {
            width: 38%;
        }
    }

    &__column-three {
        @media screen and (min-width: $latest-data-breakpoint) {
            width: 38%;
            flex-grow: 1;
        }
    }

    &__column-four {
        @media screen and (min-width: $latest-data-breakpoint) {
            width: 20%;
            display: flex;
            justify-content: flex-end;
            align-items: center;
        }
    }
}
</style>
