<template>
    <FyLayout bgColor="#fff">
        <!-- user-->
        <SearchBox @search="search()" @reset="reset" :params="params">
            <template slot="body" slot-scope="props">
                <Col :lg="6" :sm="8" :xs="24">
                    <FormItem label="书籍名称" prop="name">
                        <Input v-model="params.name" placeholder="搜索书籍"></Input>
                    </FormItem>
                </Col>
                <!-- <Col :lg="6" :sm="8" :xs="24">
                    <FormItem label="书籍作者" prop="author">
                        <Input v-model="params.author" placeholder="搜索作者"></Input>
                    </FormItem>
                </Col>
                <Col :lg="6" :sm="8" :xs="24">
                    <FormItem label="入馆日期" prop="createdAt">
                        <DatePicker v-model="params.createdAt" type="date" placeholder="搜索日期"></DatePicker>
                    </FormItem>
                </Col>
                <Col :lg="6" :sm="8" :xs="24">
                    <FormItem label="书籍类别" prop="category">
                        <Select clearable v-model="params.category" filterable>
                            <Option v-for="item in categoryList" :value="item._id" :key="item._id">{{ item.name }}</Option>
                        </Select>
                    </FormItem>
                </Col>
                <Col :lg="6" :sm="8" :xs="24">
                    <FormItem label="出版社" prop="press">
                        <Select clearable v-model="params.press" filterable>
                            <Option v-for="item in pressList" :value="item._id" :key="item._id">{{ item.name }}</Option>
                        </Select>
                    </FormItem>
                </Col>
                <Col :lg="6" :sm="8" :xs="24">
                    <FormItem label="借阅状态" prop="borrowStatus">
                        <Select clearable v-model="params.borrowStatus" filterable>
                            <Option value="0" key="0">未借出</Option>
                            <Option value="1" key="1">已借出</Option>
                        </Select>
                    </FormItem>
                </Col> -->
            </template>
            <template slot="action">
                <Button @click="addrow()" type="primary" icon="plus-round">新增</Button>
                <Button v-show="rows.length" @click="deletes()" type="ghost">批量删除</Button>
            </template>
        </SearchBox>
        <Table border @on-selection-change="selectChange" :columns="columns" :data="data">
        </Table>
        <!--分页-->
        <Block align="right">
            <Page :total="total" :page-size="params.pageSize" show-elevator :current.sync="params.pageNo" show-total @on-change="pageChange">
            </Page>
        </Block>
        <!--  -->
        <NewRow :modal="modal" @ok="showList()" />
    </FyLayout>
</template>

<script src="./main.js">
</script>

