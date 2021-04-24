import router from "@/router";
export default function () {
    return [
        {
            title: "封面",
            key: "images",
            align: "center",
            // render: (h, { row }) => {
            //     return h('img',{
            //         attrs:{
            //             src: row.images, style: 'width: 100px;border-radius: 2px;'
            //         },
            //     })
            // },
            render: (h, { row }) => {
                return h('Poptip', {
                  props: {
                    placement: 'right',
                    trigger: 'hover',
                  },
   
                }, [
                  h('img', {
                    props: {},
                    style: {
                      width: '32px',
                      height: '42px',
                      cursor: 'pointer'
                    },
                    attrs: {
                      src: row.images,
                    },
                  }),
                  h('div', {
                    slot: 'content',
                    style: {
                      textAlign: 'center'
                    },
                  }, [
                    h('img', {
                      attrs: {
                        src: row.images,
                      },
                      style: {
                        width: '100px'
                      },
                    })
                  ])
                ])
              }
        },
        // {
        //     type: "selection",
        //     width: 60,
        //     align: "center"
        // },
        {
            title: "书名",
            key: "title",
            align: "center",
        },
        {
            title: "作者",
            key: "author",
            align: "center",
        },
        // {
        //     title: "借阅状态",
        //     key: "borrowStatus",
        //     align: "center",
        //     width:140,
        //     render: (h, { row }) => {

        //         return row.borrowStatus ?
        //             <Tag type="dot" color="red">已借出</Tag>
        //             : <Tag type="dot" color="green">未借出</Tag>
        //     }
        // },
        // {
        //     title: "类别",
        //     key: "category",
        //     align: "center",
        //     render: (h, { row }) => {
        //         return row.category && row.category.name || ""
        //     }
        // },
        {
            title: "出版社",
            key: "publisher",
            align: "center"
        },
        {
            title: "出版时间",
            key: "pubdate",
            align: "center"
        },
        // {
        //     title: "简介",
        //     key: "summary",
        //     align: "center"
        // },
        // {
        //     title: "借阅次数",
        //     key: "borrowTotal",
        //     align: "center",
        //     render: (h, { row }) => {
        //         return row.borrowTotal || 0;
        //     }
        // },
        // {
        //     title: "上架时间",
        //     key: "createdAt",
        //     align: "center",
        //     render: (h, { row }) => {
        //         return new Date(row.createdAt).Format('yyyy-MM-dd')
        //     }
        // },
        {
            title: "操作",
            align: "center",
            width: 150,
            render: (h, { row }) => {
                const editClick = () => {
                    this.modal.show = true;
                    this.modal.row = row;
                }
                return (
                    <div>
                        <Button class="link" type="text" size="small" onClick={editClick}>编辑</Button>
                        <Button class="link" type="text" size="small" onClick={() => this.deletes([row._id])}>删除</Button>
                    </div>
                )
            }
        }
    ]
}