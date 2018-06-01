Vue.component('cool-query', {
    template: '<div :style="\'width: 100%; height: 100%; overflow-x: hidden; overflow-y: scroll\'">\
    <el-row v-for="field in fields" :key="field.key">\
        <template v-if="field.type.toLowerCase()===\'radio\'">\
            <div :class="\'el-input\' + (size?\' el-input--\'+size:\'\') + \' el-input-group el-input-group--prepend\'">\
                <div class="el-input-group__prepend">{{field.label}}</div>\
                <el-radio-group class="el-input__inner" :size="size" v-model="innerValues[field.key]">\
                    <div v-for="option in field.options" :key="option.key">\
                        <el-radio :label="option.label">{{option.text}}</el-radio>\
                    </div>\
                </el-radio-group>\
            </div>\
        </template>\
        <template v-else-if="field.type.toLowerCase()===\'radiobutton\'">\
            <div :class="\'el-input\' + (size?\' el-input--\'+size:\'\') + \' el-input-group el-input-group--prepend\'">\
                <div class="el-input-group__prepend">{{field.label}}</div>\
                <el-radio-group class="el-input__inner" style="padding:0; display:flex;" :size="size" v-model="innerValues[field.key]">\
                    <template v-for="option in field.options">\
                        <el-radio-button :label="option.label" :key="option.key">{{option.text}}</el-radio-button>\
                    </template>\
                </el-radio-group>\
            </div>\
        </template>\
        <template v-else-if="field.type.toLowerCase()===\'checkbox\'">\
            <div :class="\'el-input\' + (size?\' el-input--\'+size:\'\') + \' el-input-group el-input-group--prepend\'">\
                <div class="el-input-group__prepend">{{field.label}}</div>\
                <div class="el-input__inner">\
                    <el-checkbox-group v-model="innerValues[field.key]">\
                        <div v-for="option in field.options" :key="option.key">\
                            <el-checkbox :label="option.label">{{option.text}}</el-checkbox>\
                        </div>\
                    </el-checkbox-group>\
                </div>\
            </div>\
        </template>\
        <template v-else-if="field.type.toLowerCase()===\'input\'">\
            <el-input :size="size" v-model="innerValues[field.key]" :placeholder="field.placeholder" clearable>\
                <template slot="prepend">{{field.label}}</template>\
            </el-input>\
        </template>\
        <template v-else-if="field.type.toLowerCase()===\'inputnumber\'">\
            <div :class="\'el-input\' + (size?\' el-input--\'+size:\'\') + \' el-input-group el-input-group--prepend\'">\
                <div class="el-input-group__prepend">{{field.label}}</div>\
                <el-input-number style="width:100%" :size="size" v-model="innerValues[field.key]" :step="field.step">\
                </el-input-number>\
            </div>\
        </template>\
        <template v-else-if="field.type.toLowerCase()===\'select\'">\
            <div :class="\'el-input\' + (size?\' el-input--\'+size:\'\') + \' el-input-group el-input-group--prepend\'">\
                <div class="el-input-group__prepend">{{field.label}}</div>\
                <el-select :size="size" v-model="innerValues[field.key]" clearable :multiple="field.multiple">\
                    <el-option v-for="option in field.options" :key="option.key" :label="option.label" :value="option.value"></el-option>\
                </el-select>\
            </div>\
        </template>\
        <template v-else-if="field.type.toLowerCase()===\'cascader\'">\
            <div :class="\'el-input\' + (size?\' el-input--\'+size:\'\') + \' el-input-group el-input-group--prepend\'">\
                <div class="el-input-group__prepend">{{field.label}}</div>\
                <el-cascader :size="size" :options="field.options" v-model="innerValues[field.key]" :show-all-levels="field.showAllLevels" :filterable="field.filterable" :placeholder="field.placeholder" :change-on-select="field.changeOnSelect"></el-cascader>\
            </div>\
        </template>\
        <template v-else-if="field.type.toLowerCase()===\'switch\'">\
            <div :class="\'el-input\' + (size?\' el-input--\'+size:\'\') + \' el-input-group el-input-group--prepend\'">\
                <div class="el-input-group__prepend">{{field.label}}</div>\
                <div class="el-input__inner">\
                    <el-switch v-model="innerValues[field.key]" :active-text="field.activeText" :inactive-text="field.inactiveText"></el-switch>\
                </div>\
            </div>\
        </template>\
        <template v-else-if="field.type.toLowerCase()===\'slider\'">\
            <div :class="\'el-input\' + (size?\' el-input--\'+size:\'\') + \' el-input-group el-input-group--prepend\'">\
                <div class="el-input-group__prepend">{{field.label}}</div>\
                <div class="el-input__inner">\
                    <span style="display: inline-block;">{{field.min}}</span>\
                    <span style="display: inline-block; width:100%; margin-left: -2em; margin-right: -2em">\
                        <el-slider v-model="innerValues[field.key]" :range="field.range" :min="field.min" :max="field.max">\
                        </el-slider>\
                    </span>\
                    <span style="display: inline-block">{{field.max}}</span>\
                </div>\
            </div>\
        </template>\
        <template v-else-if="field.type.toLowerCase()===\'datepicker\'">\
            <div :class="\'el-input\' + (size?\' el-input--\'+size:\'\') + \' el-input-group el-input-group--prepend\'">\
                <div class="el-input-group__prepend">{{field.label}}</div>\
                <el-date-picker style="width:100%; display:flex;" v-model="innerValues[field.key]" :size="size" :type="field.daterange?\'daterange\':undefined" :format="field.format" range-separator="至" :value-format="field.valueFormat" start-placeholder="开始日期" end-placeholder="结束日期" unlink-panels></el-date-picker>\
            </div>\
        </template>\
        <template v-else>Invalid field type</template>\
    </el-row>\
</div>',
    props: {
        size: { type: String, default: 'mini' },
        fields: {
            type: Array, default: function () {
                var fields = [
                    {
                        label: '单选框', type: 'rAdIO', key: 'key1', default: 3, options: [
                            { label: 1, text: '111111' },
                            { label: 2, text: '222222' },
                            { label: 3, text: '333333' },
                        ]
                    },
                    {
                        label: '单选钮', type: 'rAdIObUttOn', key: 'key1-2', default: 3, options: [
                            { label: 1, text: '111111' },
                            { label: 2, text: '222222' },
                            { label: 3, text: '333333' },
                        ]
                    },
                    {
                        label: '复选框', type: 'chEckbOx', key: 'key2', default: [2, 3], options: [
                            { label: 1, text: '111111' },
                            { label: 2, text: '222222' },
                            { label: 3, text: '333333' },
                        ]
                    },
                    {
                        label: '输入框', type: 'inpUt', key: 'key3', default: '', placeholder: '请输入内容',
                    },
                    {
                        label: '数字框', type: 'inpUtnUmbEr', key: 'key4', default: 3, step: 0.2,
                    },
                    {
                        label: '下拉框', type: 'sElEct', key: 'key5', default: undefined, placeholder: '请选择', options: [
                            { value: 1, label: '111111' },
                            { value: 2, label: '222222' },
                            { value: 3, label: '333333' },
                        ]
                    },
                    {
                        label: '多选拉', type: 'sElEct', key: 'key6', default: undefined, placeholder: '请选择', multiple: true, options: [
                            { value: 1, label: '111111' },
                            { value: 2, label: '222222' },
                            { value: 3, label: '333333' },
                            { value: 4, label: '444444' },
                            { value: 5, label: '555555' },
                            { value: 6, label: '666666' },
                            { value: 7, label: '777777' },
                            { value: 8, label: '888888' },
                        ]
                    },
                    { label: '级联拉', type: 'cAscAdEr', key: 'key7', default: undefined, placeholder: window.treeData ? '可搜索' : '请引入数据', showAllLevels: undefined, filterable: true, changeOnSelect: true, options: window.treeData ? treeData : [], },
                    { label: '有限制', type: 'cAscAdEr', key: 'key8', default: ['zujian', 'data', 'tag'], placeholder: '请选择', showAllLevels: false, options: window.treeData ? treeData : [], },
                    { label: '开　关', type: 'swITcH', key: 'key9', default: true, inactiveText: '不饿', activeText: '饿', },
                    { label: '滑　块', type: 'slIdEr', key: 'key10', default: 3, min: -10, max: 10, },
                    { label: '范　围', type: 'slIdEr', key: 'key11', default: [-3, 3], min: -10, max: 10, range: true, },
                    { label: '日　期', type: 'dAtEpIckEr', key: 'key12', default: '2046-01-02', format: 'yyyy年M月d日', valueFormat: 'yyyy-MM-dd', },
                    { label: '范　围', type: 'dAtEpIckEr', key: 'key13', daterange: true, default: undefined, format: 'yy-M-d', valueFormat: 'yyyy-MM-dd', },
                ]
                this.$emit('update:fields', fields)
                return fields
            }
        },
        values: {
            type: Object, default: function () {
                var values = {}
                this.fields.forEach(function (field) { values[field.key] = field.default })
                return values
            }
        }
    },
    data: function () {
        var innerValues = {}
        this.fields.forEach(function (field) { innerValues[field.key] = field.default })
        return { innerValues: innerValues }
    },
    watch: {
        innerValues: {
            handler: function (oldValue, newValue) {
                this.$emit('update:values', newValue)
            },
            deep: true,
            immediate: true,
        }
    }
})