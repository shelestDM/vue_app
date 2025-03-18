export default {
    props: {
        show: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {

        }
    },
    methods: {
        onCloseModal() {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            this.$emit('update:show', false)
        },
    },
    mounted() {

    },
}