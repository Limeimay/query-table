Vue.component('cool-query', {
    template: '<div><el-row :gutter="10" type="flex" align="middle" style="margin-bottom:10px">\
        <el-col :span="6">日期</el-col >\
        <el-col :span="8" style="text-align:center"><p>之间</p></el-col >\
        <el-col :span="10" style="overflow:hidden">\
            <el-date-picker v-model="dateStart" type="date" placeholder="选择日期" @change="updateCondition" size="small" ></el-date-picker><br>\
            <el-date-picker v-model="dateEnd" type="date" placeholder="选择日期"  @change="updateCondition"></el-date-picker>\
        </el-col ></el-row>\
    <el-row v-for="data in datas" :gutter="10" style="margin-bottom:10px">\
    <el-col :span="6">{{data.name}}</el-col >\
    <el-col :span="8">\
        <el-select v-model="data.mode" placeholder="请选择" @change="updateCondition">\
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">\
            </el-option>\
        </el-select>\
    </el-col >\
    <el-col :span="10">\
        <el-input v-model="data.value[0]" @change="updateCondition" ></el-input>\
    </el-col >\
</el-row>\
<el-row :gutter="10" type="flex" align="middle">\
    <el-col :span="6">有效</el-col >\
    <el-col :span="8">\
        <el-select v-model="value" placeholder="请选择" @change="updateCondition">\
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option>\
        </el-select>\
    </el-col >\
    <el-col :span="10" >\
        <el-checkbox v-model="checked" @change="updateCondition"></el-checkbox>\
    </el-col >\
    </el-row></div>',
    data: function () {
        return {
            dateStart: '',
            dateEnd: '',
            value: '不参与',
            condition: [],
            checked: false,
            datas: [
                { name: '单号', mode: '不等于', value: [''], dataType: "string", fieldName: "FormNo", tableName: "[Hdr]", tableRelationMode: "AND" },
                { name: '应付', mode: '不等于', value: [''], dataType: "string", fieldName: "APay", tableName: "[Hdr]", tableRelationMode: "AND" },
                { name: '制单员', mode: '不等于', value: [''], dataType: "string", fieldName: "Lister", tableName: "[Hdr]", tableRelationMode: "AND" },
                { name: '采购员', mode: '不等于', value: [''], dataType: "string", fieldName: "Buyer", tableName: "[Hdr]", tableRelationMode: "AND" },
                { name: '合同号', mode: '不等于', value: [''], dataType: "string", fieldName: "ContractNo", tableName: "[Hdr]", tableRelationMode: "AND" },
                { name: '描述', mode: '不等于', value: [''], dataType: "string", fieldName: "Description", tableName: "[Dtl]", tableRelationMode: "AND" },
                { name: '产品编码', mode: '不等于', value: [''], dataType: "decimal", fieldName: "Code", tableName: "[Dtl]", tableRelationMode: "AND" },
                { name: '单价', mode: '大于', value: ['0.00'], dataType: "decimal", fieldName: "Price", tableName: "[Dtl]", tableRelationMode: "AND" },
                { name: '数量', mode: '不等于', value: ['0.00'], dataType: "decimal", fieldName: "Qty", tableName: "[Dtl]", tableRelationMode: "AND" },
                { name: '剩余', mode: '大于', value: ['0.00'], dataType: "decimal", fieldName: "Leave", tableName: "[Dtl]", tableRelationMode: "AND" }
            ],
            options: [{ value: '不等于', label: '不参与' }, { value: '等于', label: '等于' }],
        }
    },
    methods: {
        updateCondition: function () {
            this.condition = []
            var _this = this
            var _datas = this.datas;
            for (var i = 0; i < _datas.length; i++) {
                if (_datas[i]['mode'] != '不等于') {
                    _datas[i].value[0] = _datas[i].value[0].trim()
                    _this.condition.push(_datas[i])
                }
            }
            _this.condition.push({ mode: '之间', value: [this.dateStart, this.dateEnd], dataType: "date", fieldName: "BillDateTime", tableName: "[Hdr]", tableRelationMode: "AND" });
            if (_this.value == '等于') {
                _this.condition.push({ mode: '等于', value: [_this.checked], dataType: "boolean", fieldName: "Active", tableName: "[Dtl]", tableRelationMode: "AND" })
            }
            this.$emit('changecondition', _this.condition)
        },
    },
    created: function () {
        var _this = this
        var _datas = this.datas;
        for (var i = 0; i < _datas.length; i++) {
            if (_datas[i]['mode'] != '不等于') {
                _datas[i].value[0] = _datas[i].value[0].trim()
                _this.condition.push(_datas[i])
            }
        }
        _this.condition.push({ mode: '之间', value: [this.dateStart, this.dateEnd], dataType: "date", fieldName: "BillDateTime", tableName: "[Hdr]", tableRelationMode: "AND" });
        if (_this.value == 'true') {
            _this.condition.push({ mode: '等于', value: [_this.checked], dataType: "boolean", fieldName: "Active", tableName: "[Dtl]", tableRelationMode: "AND" })
        }
        this.$emit('changecondition', _this.condition)
    },



})