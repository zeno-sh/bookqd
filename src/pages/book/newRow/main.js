import { Book, Category, Press } from "@/service";
import dict from '@/mixins/dict'
export default {
    mixins: [dict],
    props: {
        modal: Object
    },
    watch: {
        "modal.show": {
            handler: function () {
                if (this.modal.show && this.modal.row) {
                    this.modal.row.isAdmin = this.modal.row.isAdmin + "";
                    let { category, press } = this.modal.row
                    return (this.params = {
                        ...this.params,
                        ...this.modal.row,
                        category: category ? category._id : '',
                        press: press ? press._id : ''
                    });
                }
                this.modal.row = null;
            },
            immediate: true
        }
    },
    data() {
        return {
            params: this.initData(),
            categoryList: [],
            pressList: [],
            rules: {
                isbn: { type: "string", required: true, message: "必填项" }
                // category: { type: "string", required: true, message: "必填项" },
                // press: { type: "string", required: true, message: "必填项" },
                // author: { type: "string", required: true, message: "必填项" },
                // stock: { type: "number", required: true, message: "必填项" }
            }
        };
    },
    created() {
        this.getCategoryAll();
        this.getPressAll();
    },
    methods: {
        initData() {
            return {
                _id: undefined,
                accountName: "123",
                isbn: ""
                // name: "",
                // category: "",
                // press: "",
                // author: "",
                // stock: "",
                // desc: "",
                // borrowStatus: "0"
            };
        },
        async modalOk() {
            let validate = await this.$refs.form.validate();
            if (!validate) return;
            if (!this.params._id) {
                await this.create();
            } else {
                await this.update();
            }
            this.$Message.success("提交成功！");
            this.initModal("ok");
        },
        async create() {
            let { data } = await Book.create(
                // this.$QS.stringify(this.params)
                this.params
                );
        },
        async update() {
            let { data } = await Book.update(this.$QS.stringify(this.params));
        },

        cancel() {
            this.initModal("cancel");
        },
        initModal(type) {
            this.params = this.initData();
            this.modal.show = false;
            this.$refs.form.resetFields();
            this.$emit(type);
        }
    }
};