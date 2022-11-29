<template>
    <div
        v-if="pagination.last_page > 1"
        class="a-pagination"
    >
        <ul class="a-pagination__list">
            <li
                class="a-pagination__item"
                v-for="link in pagination.links"
                :key="link.label"
            >
                <a
                    :href="pagination.prev_page_url"
                    class="a-pagination__link"
                    v-if="link.label.includes('prev') && link.url"
                    @click.prevent="goToPage(pagination.prev_page_url)"
                >
                    Prev
                </a>
                
                <a
                    :href="pagination.next_page_url"
                    class="a-pagination__link"
                    v-else-if="link.label.includes('next') && link.url"
                    @click.prevent="goToPage(pagination.next_page_url)"
                >
                    Next
                </a>

                <a
                    :href="link.url"
                    class="a-pagination__link"
                    :class="{ 'active': link.active }"
                    v-else-if="!link.label.includes('prev') && !link.label.includes('next')"
                    @click.prevent="goToPage(link.url)"
                >
                    {{ link.label }}
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'APagination',

    props: {
        pagination: {
            type: Object,
        }
    },

    emits: ['goToPage'],

    methods: {
        goToPage(url) {
            this.$emit('goToPage', url);
        }
    },
}
</script>
