
<template id="VueFormBuilder">
    <div class="panel">
        <form>
            {{ model }}
            <fieldset>
                <div class="form-group" v-for="(field, k) in native_schema" v-if="field.visible(model)">
                    <template v-if="field.type == 'input'">
                        <template v-if="field.inputType != 'checkbox' && field.inputType != 'radio'">
                            <label>{{ field.label }}</label>
                            <input :type="field.inputType" v-model="model[field.model]" class="form-control"
                                   maxlength="field.maxlength"
                                   placeholder="field.placeholder"
                                   @click="field.click"
                                   @dblclick="field.dblclick"
                                   @change="field.change"
                            >
                        </template>
                        <template v-else>
                            <label>{{ field.label }}</label>
                            <template v-for="(opt_label, opt_value) in field.options">
                                <label>
                                    <input :type="field.inputType" v-model="model[field.model]" :value="opt_value"
                                           maxlength="field.maxlength"
                                           placeholder="field.placeholder"
                                           @click="field.click"
                                           @dblclick="field.dblclick"
                                           @change="field.change"
                                    > {{ opt_label }}
                                </label>
                            </template>
                        </template>
                    </template>
                    <template v-if="field.type == 'textarea'">
                        <label>{{ field.label }}</label>
                        <textarea class="form-control" rows="10" v-model="model[field.model]"
                                  maxlength="field.maxlength"
                                  placeholder="field.placeholder"
                                  @click="field.click"
                                  @dblclick="field.dblclick"
                                  @change="field.change"
                        ></textarea>
                    </template>
                    <template v-if="field.type == 'select'">
                        <select v-model="model[field.model]" :multiple="field.multiple" class="form-control"
                                maxlength="field.maxlength"
                                placeholder="field.placeholder"
                                @click="field.click"
                                @dblclick="field.dblclick"
                                @change="field.change"
                        >
                            <option v-for="(opt_label, opt_value) in field.options" :value="opt_value">
                                {{ opt_label }}
                            </option>
                        </select>
                    </template>
                    <template v-if="field.type == 'repeatable'">
                        <template v-for="(group, k) in model[field.model]">
                            <div class="card mb-3">
                                <div class="card-header">
                                    {{ field.label }}
                                    <a @click="removeItem(model[field.model],k)" href="javascript:" class="btn btn-danger float-right">Remove</a>
                                </div>
                                <div class="card-body">
                                    <vue_form_builder :model="group" :schema="field.group"></vue_form_builder>
                                </div>
                            </div>
                        </template>
                        <a @click="addItem(model[field.model],field.group)" href="javascript:" class="btn btn-success">Add</a>
                    </template>
                </div>
            </fieldset>
        </form>
    </div>
</template>
<script>
    Vue.component('vue_form_builder', {
        template: '#VueFormBuilder',
        props: {
            model: {
                type: Object
            },
            schema: {
                type: Array
            }
        },
        data() {
            return {
                items : {},
                default_field : {
                    model: '',
                    type: 'input',
                    inputType: 'text',
                    label : 'Label',
                    maxlength: 500,
                    placeholder: "Placeholder",
                    class: 'name_field',
                    id: 'name_id',
                    multiple: false,
                    click: function () {

                    },
                    dblclick: function () {

                    },
                    change: function () {

                    },
                    'visible' : function (model) {
                        return true;
                    }
                }
            }
        },
        methods: {
            removeItem: function (model,k) {
                model.splice(k,1);
            },
            addItem: function (model,schema) {
                var template  = {};
                for( var k in schema ) {
                    template[schema[k].model] = '';
                }
                model.push(template);
            }
        },
        computed: {
            native_schema : function () {
                for( var k in this.schema ) {
                    this.items[k] = Object.assign({},this.default_field,this.schema[k]);

                }
                return this.items;
            }

        },
        created: function () {
        }
    })
</script>