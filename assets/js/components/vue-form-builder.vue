<template>
    <div>
        <form>
            <div class="form-group" v-for="(field, field_name) in schema">
                <template v-if="field.type == 'input'">
                    <input :type="field.inputType" v-model="model[field_name]" class="form-control">
                </template>
            </div>
        </form>
    </div>
</template>
<script>
    export default {
        name: 'VueFormBuilder',
        props: {
            model: {
                type: Object
            },
            schema: {
                type: Object
            }
        },
/*        computed: {
            model () {
                return this.model;
            },
            schema () {
                return this.schema;
            }
        },*/
        data() {
            return {
                test: 'this is test'
            }
        }
    }
</script>
